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
  Camera,
  Play
} from "lucide-react";

export default function DeepfakeDetectionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("banking");
  
  // Interactive Biometric Session states
  const [injectionActive, setInjectionActive] = useState<boolean>(true);
  const [swapArtifacts, setSwapArtifacts] = useState<boolean>(true);
  const [livenessCheckFailed, setLivenessCheckFailed] = useState<boolean>(true);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic biometric trust score based on inputs
  const calculateBiometricIntegrity = () => {
    let score = 99; // start with perfect score
    
    if (injectionActive) score -= 35;
    if (swapArtifacts) score -= 30;
    if (livenessCheckFailed) score -= 31;
    
    score = Math.max(score, 3);
    
    let decision = "RELEASE ONBOARDING FLOW";
    let color = "text-emerald-500";
    if (score < 30) {
      decision = "BLOCK BIOMETRICS & LOCK SESSION";
      color = "text-red-500";
    } else if (score < 60) {
      decision = "REQUIRE ESCALATED MANUAL LIVE CALL";
      color = "text-amber-500";
    } else if (score < 85) {
      decision = "TRIGGER ACTIVE MOTION LIVENESS CHALLENGE";
      color = "text-orange-400";
    }
    
    return { score, decision, color };
  };

  const { score, decision, color } = calculateBiometricIntegrity();

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
                <Camera className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                AI-POWERED DEEPFAKE & BIOMETRIC FRAUD DETECTION
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Deepfake Attacks <br />
                <span className="text-zinc-400">Before They Compromise Trust</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps banks, fintechs, telecom platforms, marketplaces, and digital identity providers identify AI-generated faces, manipulated liveness sessions, synthetic biometric attacks, and identity spoofing attempts using advanced fraud intelligence and real-time risk analysis.
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
                  Built for enterprise onboarding, authentication security, KYC operations, digital banking, and high-risk identity verification environments.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Advanced Biometric Fraud Intelligence Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Biometric Session Diagnostics</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">LIVENESS DEPLOYMENT STATUS: ACTIVE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Session Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Stream Injection Detected</span>
                        <input 
                          type="checkbox" 
                          checked={injectionActive} 
                          onChange={(e) => setInjectionActive(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">FaceSwap Rendering Artifacts</span>
                        <input 
                          type="checkbox" 
                          checked={swapArtifacts} 
                          onChange={(e) => setSwapArtifacts(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Liveness Movement Failed</span>
                        <input 
                          type="checkbox" 
                          checked={livenessCheckFailed} 
                          onChange={(e) => setLivenessCheckFailed(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE BIOMETRIC INTEGRITY SYSTEM</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Biometric Integrity Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {swapArtifacts ? "GAN artifacts flagged" : "Structural check clean"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Liveness Confidence Level</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {livenessCheckFailed ? "Confidence Low" : "Liveness Confirmed"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">BIOMETRIC INTEGRITY SCORE</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Biometric Frauds</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              AI-Generated Identity Fraud Is Escalating Rapidly
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Generative AI has dramatically lowered the barrier for creating synthetic faces, manipulated videos, voice clones, face swaps, fake identity sessions, and biometric spoofing attacks. Fraudsters increasingly use deepfakes to bypass onboarding checks, impersonate legitimate customers, evade liveness detection, compromise account recovery, conduct mule onboarding, and execute account takeover attacks. Traditional identity verification systems often cannot reliably detect AI-generated media, replay attacks, injected video streams, synthetic liveness sessions, manipulated biometric flows, and coordinated identity spoofing campaigns. Without deepfake intelligence, organizations face onboarding fraud, regulatory exposure, identity theft, financial losses, reputational damage, and compromised trust frameworks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "AI-Generated Faces", desc: "Fraudsters generate synthetic identities using hyper-realistic AI-generated faces.", icon: <Users /> },
                { title: "Replay Attacks", desc: "Attackers replay pre-recorded biometric sessions to bypass verification controls.", icon: <Play /> },
                { title: "Face Swap Fraud", desc: "Manipulated facial overlays are used to impersonate legitimate individuals.", icon: <Camera /> },
                { title: "Video Injection Attacks", desc: "Malicious actors inject synthetic video streams into onboarding workflows.", icon: <Server /> },
                { title: "Voice Cloning", desc: "AI-generated voice impersonation is increasingly used for authentication abuse.", icon: <Cpu /> },
                { title: "Synthetic Onboarding Campaigns", desc: "Fraud rings automate biometric fraud at scale using AI-generated assets.", icon: <Network /> }
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

            {/* Replay Attack Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">REPLAY ATTACK PREVENTION TIMELINE</span>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center font-manrope">
                {[
                  { title: "1. Capture Session", desc: "Client attempts liveness session verification on standard web camera." },
                  { title: "2. Replay Verification", desc: "DeepSense parses micro-reflections and static image boundaries." },
                  { title: "3. Injection Check", desc: "Evaluates stream parameters to detect virtual camera manipulation." },
                  { title: "4. Liveness Check", desc: "Demands dynamic active liveness movement tasks to ensure user is live." },
                  { title: "5. Risk Enforcement", desc: "High-risk sessions blocked instantly, logging device telemetry." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">AI Security</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Real-Time Deepfake & Biometric Integrity Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines biometric analysis, liveness intelligence, behavioral telemetry, graph analysis, device intelligence, and synthetic media detection into a unified deepfake detection platform. The platform continuously evaluates facial authenticity, liveness integrity, biometric consistency, session trust, injection indicators, replay anomalies, behavioral authenticity, onboarding relationships, and fraud infrastructure exposure. DeepSense enables organizations to strengthen identity trust, stop AI-generated onboarding fraud, reduce impersonation risk, improve authentication security, protect account recovery workflows, strengthen KYC controls, and accelerate fraud investigations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Strengthen identity trust", desc: "Verify organic live human profiles with high-accuracy GAN filters." },
                { title: "Stop AI onboarding", desc: "Block synthetic facial images during KYC checks." },
                { title: "Reduce impersonation risk", desc: "Prevent attackers using stolen videos to compromise profiles." },
                { title: "Improve authentication security", desc: "Implement passive biometric checks during high-value payouts." },
                { title: "Protect account recovery", desc: "Verify identity during critical password reset scenarios." },
                { title: "Strengthen KYC controls", desc: "Equip legacy KYC software with deep liveness checks." }
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
              Enterprise Deepfake Detection Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "AI-Generated Face Detection", desc: "Detect synthetic facial artifacts, GAN-generated imagery, manipulated face structures, identity fabrication, and facial rendering inconsistencies." },
                { title: "Liveness Integrity Analysis", desc: "Analyze passive liveness, active liveness, motion consistency, interaction authenticity, and biometric session integrity." },
                { title: "Replay Attack Detection", desc: "Identify replayed onboarding sessions, recorded biometric streams, screen injection attempts, session duplication, and synthetic playback anomalies." },
                { title: "Face Swap Detection", desc: "Detect manipulated overlays, facial inconsistencies, morphing indicators, identity replacement artifacts, and biometric mismatch behavior." },
                { title: "Video Injection Analysis", desc: "Monitor camera stream manipulation, virtual camera abuse, injected media streams, synthetic capture environments, and session tampering indicators." },
                { title: "Voice Deepfake Detection", desc: "Analyze synthetic voice patterns, cloned speech anomalies, authentication inconsistencies, and AI-generated audio manipulation." },
                { title: "Behavioral Biometric Correlation", desc: "Correlate interaction behavior, navigation patterns, session authenticity, device trust, and biometric behavior consistency." },
                { title: "Device & Environment Intelligence", desc: "Evaluate emulator environments, rooted devices, spoofed cameras, synthetic onboarding infrastructure, and automation indicators." },
                { title: "Graph Intelligence", desc: "Visualize linked identities, repeated biometric reuse, coordinated fraud infrastructure, synthetic onboarding clusters, and mule identity ecosystems." },
                { title: "Real-Time Risk Decisioning", desc: "Decision outcomes include approve, require enhanced liveness, escalate verification, block onboarding, trigger investigation, and require manual review." }
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
              How DeepSense Detects Deepfake Attacks
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests facial verification sessions, video streams, liveness telemetry, voice authentication events, device intelligence, and onboarding interactions." },
                { title: "Step 2 — Analysis", desc: "The platform evaluates facial authenticity, motion consistency, biometric integrity, replay indicators, synthetic generation artifacts, and injection anomalies." },
                { title: "Step 3 — Correlation", desc: "DeepSense correlates device trust, behavioral patterns, onboarding relationships, graph intelligence, infrastructure exposure, and historical fraud signals." },
                { title: "Step 4 — Scoring", desc: "The system generates deepfake risk scores, biometric integrity ratings, liveness confidence scores, and onboarding trust decisions." },
                { title: "Step 5 — Enforcement", desc: "High-risk sessions trigger manual review, enhanced verification, account restrictions, fraud investigations, and identity escalation workflows." }
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
              Built for High-Trust Identity Ecosystems
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
                { id: "marketplaces", label: "Marketplaces & Gig Platforms" },
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
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect remote onboarding, account recovery, and biometric logins.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure digital branch onboarding. Block synthetic injection setups attempting to activate mobile bank accounts using stolen faces.
                  </p>
                </div>
              )}
              {activeTab === "fintech" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect synthetic onboarding, identity impersonation, and ATO attempts.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Identify users attempting password recovery via hijacked virtual camera interfaces running face morph overlays.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent SIM-linked impersonation, mobile wallet abuse, and synthetic onboarding.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Telecom and carrier wallets face massive velocity and SIM swap account takeovers. DeepSense evaluates phone carrier records and high-frequency transfers in real time.
                  </p>
                </div>
              )}
              {activeTab === "marketplaces" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Reduce fake seller onboarding, contractor impersonation, and account sharing.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure e-commerce supplier verification. Prevent fake merchant profiles from listing counterfeit goods on global marketplaces.
                  </p>
                </div>
              )}
              {activeTab === "crypto" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor wallet-linked onboarding fraud, synthetic KYC abuse, and coordinated identity farming.</h4>
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
              Connected Across the DeepSense Risk Platform
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense unifies biometric analysis with document fraud, KYC verification, and linked-graph infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Document Fraud Detection", desc: "Correlate biometric anomalies with manipulated identity documents." },
                { title: "KYC Verification", desc: "Strengthen onboarding trust and identity assurance workflows." },
                { title: "Device Fingerprinting", desc: "Detect spoofed environments and high-risk onboarding infrastructure." },
                { title: "Behavioral Biometrics", desc: "Analyze behavioral authenticity during biometric verification." },
                { title: "Synthetic Identity Detection", desc: "Correlate deepfake sessions with fabricated identity ecosystems." },
                { title: "Graph Intelligence", desc: "Visualize coordinated biometric fraud networks." },
                { title: "Case Management", desc: "Escalate suspicious biometric events into investigation workflows." }
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
              Real-Time Biometric Fraud Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Biometric Fraud Operations Dashboard", desc: "Live verification monitoring, deepfake alerts, liveness analytics, and onboarding integrity metrics." },
                { title: "Deepfake Intelligence Analytics", desc: "Synthetic media trends, biometric fraud heatmaps, replay attack monitoring, and face swap analytics." },
                { title: "Device & Session Trust Monitoring", desc: "Spoofed environment tracking, virtual camera detection, emulator monitoring, and onboarding session analysis." },
                { title: "Identity Graph Intelligence", desc: "Linked biometric identities, repeated face reuse, onboarding fraud clusters, and mule network relationships." },
                { title: "Investigation Workspace", desc: "Biometric timelines, session playback review, graph evidence, and onboarding investigation flows." }
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
              Designed for Enterprise Identity Security
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy secure identity verification protocols across global onboarding workflows.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Banking", "Fintech", "Telecom Wallets", "Digital Lending", "Marketplaces", "Gig Platforms",
                "Crypto Platforms", "Insurance", "Ecommerce", "Digital Government", "Healthcare Identity Platforms", "Consumer Applications"
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
                Secure, Explainable, and Audit-Ready Identity Intelligence
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed around secure biometric processing, controlled access, and minimal retention principles.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Biometric Decisions", desc: "Every identity decision includes biometric confidence, liveness indicators, and replay evidence." },
                { title: "Audit Logging", desc: "Track verification sessions, analyst reviews, and identity escalations." },
                { title: "Multi-Tenant Isolation", desc: "Secure operational isolation across organizations and biometric telemetry." },
                { title: "Privacy-Conscious Biometric Handling", desc: "Minimize exposure through secure tokenization and controlled retention." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Biometrics FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What types of deepfake attacks can DeepSense detect?", 
                  a: "DeepSense detects AI-generated faces, replay attacks, face swaps, injected video streams, synthetic liveness sessions, and voice cloning anomalies." 
                },
                { 
                  q: "Does DeepSense support liveness detection?", 
                  a: "Yes. The platform supports passive and active liveness intelligence workflows with real-time integrity analysis." 
                },
                { 
                  q: "Can DeepSense detect replay attacks?", 
                  a: "Yes. The platform analyzes biometric session integrity, motion consistency, and playback indicators to detect replay fraud." 
                },
                { 
                  q: "Does DeepSense support voice deepfake detection?", 
                  a: "Yes. DeepSense supports synthetic voice analysis and authentication anomaly detection." 
                },
                { 
                  q: "Can DeepSense integrate with existing KYC providers?", 
                  a: "Yes. The platform is provider-agnostic and supports APIs, orchestration workflows, and webhook-based integrations." 
                },
                { 
                  q: "Is biometric data handled securely?", 
                  a: "Yes. DeepSense is designed around privacy-conscious biometric processing and enterprise-grade security controls." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Protect Identity Workflows From AI-Generated Fraud</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Detect deepfake attacks and strengthen biometric <br />
                <span className="text-white/40 font-bold">trust across digital identity ecosystems globally.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Detect deepfake attacks, strengthen biometric trust, secure onboarding workflows, and protect digital identity ecosystems using enterprise-grade AI fraud intelligence.
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
