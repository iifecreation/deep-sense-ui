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
  FileSpreadsheet
} from "lucide-react";

export default function RulesEnginePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Rule builder mockup states
  const [velocityVal, setVelocityVal] = useState<number>(5);
  const [amountVal, setAmountVal] = useState<number>(1000);
  const [deviceVal, setDeviceVal] = useState<number>(50);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Hero headers */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-lime-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <Shield className="w-3.5 h-3.5 text-lime-400" />
                Enterprise Fraud & Risk Rules Engine
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Build, Test, Govern, and Deploy <br />
                <span className="text-zinc-400">Risk Rules in Real Time.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense gives fraud, AML, compliance, and risk teams the ability to create sophisticated decision policies without sacrificing explainability, governance, or operational control.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/risk-scoring" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Risk Engine
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Designed for institutions that require low-latency decisioning with enterprise-grade governance and auditability.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive No-Code Rule Builder Dashboard Mockup */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">VISUAL POLICY CREATOR & RULE BUILDER</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">Status: Draft (Pending approval)</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Visual Builder Blocks */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Drag-and-Drop Policy Logic</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      {/* IF statement block */}
                      <div className="p-4 bg-black/40 border border-white/5 rounded-2xl space-y-3">
                        <span className="text-brand-lime font-black uppercase">IF STATEMENT</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white/60">count(transactions) &gt;</span>
                          <input 
                            type="number" 
                            value={velocityVal} 
                            onChange={(e) => setVelocityVal(parseInt(e.target.value) || 0)}
                            className="w-14 bg-white/10 border border-white/10 text-white px-2 py-0.5 rounded focus:outline-none focus:border-brand-lime text-center"
                          />
                          <span className="text-white/60">in 60s</span>
                        </div>
                      </div>

                      {/* AND block */}
                      <div className="p-4 bg-black/40 border border-white/5 rounded-2xl space-y-3">
                        <span className="text-brand-lime font-black uppercase">AND STATEMENT</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white/60">total_amount &gt; $</span>
                          <input 
                            type="number" 
                            value={amountVal} 
                            onChange={(e) => setAmountVal(parseInt(e.target.value) || 0)}
                            className="w-20 bg-white/10 border border-white/10 text-white px-2 py-0.5 rounded focus:outline-none focus:border-brand-lime text-center"
                          />
                        </div>
                      </div>

                      {/* AND block 2 */}
                      <div className="p-4 bg-black/40 border border-white/5 rounded-2xl space-y-3">
                        <span className="text-brand-lime font-black uppercase">AND STATEMENT</span>
                        <div className="flex items-center gap-2">
                          <span className="text-white/60">device_reputation &lt;</span>
                          <input 
                            type="number" 
                            value={deviceVal} 
                            onChange={(e) => setDeviceVal(parseInt(e.target.value) || 0)}
                            className="w-14 bg-white/10 border border-white/10 text-white px-2 py-0.5 rounded focus:outline-none focus:border-brand-lime text-center"
                          />
                        </div>
                      </div>

                      {/* THEN action */}
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-between">
                        <div>
                          <span className="text-red-400 font-black uppercase block">THEN ACTION</span>
                          <span className="text-white/80 font-bold text-[11px]">BLOCK_TRANSACTION</span>
                        </div>
                        <span className="px-2.5 py-1 bg-red-500/20 border border-red-500/40 text-red-400 text-[9px] font-black rounded uppercase tracking-wider">Severity: HIGH</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Live Output & Governance Check */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Deploy & Simulation metrics</span>
                      
                      <div className="p-4 bg-black/40 border border-white/5 rounded-2xl text-xs space-y-2">
                        <div className="flex justify-between">
                          <span className="text-white/60">Estimated Alert Rate</span>
                          <span className="text-brand-lime font-bold">0.42% (Optimal)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">False Positive Ratio</span>
                          <span className="text-brand-lime font-bold">1.2 : 1</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-white/5">
                      <button className="w-full py-3.5 bg-brand-lime text-neutral-900 rounded-2xl font-bold text-xs uppercase tracking-wider hover:bg-brand-lime/95 hover:scale-105 active:scale-95 transition-all text-center">
                        Request Deployment Approval
                      </button>
                      <button className="w-full py-3.5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                        Simulate Against Historical Logs
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">The Rules Issue</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Most Fraud Rules Become Operational Chaos.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              As fraud grows more sophisticated, organizations accumulate hundreds of disconnected rules spread across teams, spreadsheets, and legacy systems. Changes become risky, governance weakens, and false positives increase.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Rule Sprawl", desc: "Organizations struggle to manage overlapping fraud, AML, payment, and identity rules across different systems.", icon: <Layers /> },
                { title: "Unsafe Deployments", desc: "A single bad rule can block legitimate customers, disrupt operations, or create regulatory exposure.", icon: <AlertTriangle /> },
                { title: "Lack of Governance", desc: "Many systems lack approvals, versioning, rollback, and audit controls for policy changes.", icon: <History /> },
                { title: "Limited Explainability", desc: "Analysts often cannot explain why a rule triggered or how it impacted a final decision.", icon: <Eye /> },
                { title: "Slow Adaptation", desc: "Fraud teams cannot respond quickly to emerging threats without engineering support.", icon: <Cpu /> },
                { title: "High False Positives", desc: "Static thresholds and disconnected rules create unnecessary reviews and customer friction.", icon: <TrendingDown /> }
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

        {/* ================= SECTION 3: DEEPSENSE RULES ENGINE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Orchestration Center</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              One Centralized Policy Engine for Fraud, AML, Identity, Payments, and Compliance.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense allows organizations to build, manage, simulate, govern, and deploy real-time rules across every risk domain from a single decisioning platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Fraud Detection Rules", desc: "Velocity spikes, impossible travel, risky merchants, transaction anomalies, fraud rings, and account abuse." },
                { title: "AML Rules", desc: "Structuring, rapid movement, suspicious counterparties, sanctions exposure, and mule-account behavior." },
                { title: "Identity Rules", desc: "Document fraud, duplicate identities, biometric mismatch, synthetic identity indicators, and onboarding anomalies." },
                { title: "Payment Rules", desc: "APP scams, CNP fraud, NFC abuse, token replay, wallet risk, chargeback patterns, and merchant risk." },
                { title: "Behavioral Rules", desc: "Typing cadence anomalies, session risk, bot behavior, and abnormal navigation patterns." },
                { title: "Enterprise Risk Rules", desc: "Controls violations, DLP findings, procurement anomalies, UEBA signals, and third-party exposure." }
              ].map((domain, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{domain.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{domain.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: VISUAL RULE BUILDER ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">No-Code Logic Editor</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Build Sophisticated Rules Without Engineering Bottlenecks.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense combines visual workflows with advanced policy logic, allowing risk teams to move quickly while maintaining control.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Drag-and-Drop Logic Blocks", desc: "Create rules visually using IF, AND, OR, NOT, thresholds, conditions, and nested logic." },
                    { title: "Advanced Signal Conditions", desc: "Combine transaction, device, graph, AML, behavioral, document, and payment signals into one decision flow." },
                    { title: "Reusable Policies & Templates", desc: "Create reusable policies, thresholds, conditions, and decision templates across teams." },
                    { title: "Dynamic Logic Actions", desc: "Trigger allow, review, block, step-up authentication, hold payment, revoke session, or create case actions." }
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

              {/* Right Column: Visual Rule Builder Mockup UI */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">IF/AND/OR LOGIC FLOW SCHEMATIC</span>
                  
                  <div className="space-y-4 font-mono text-[11px]">
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                      <span className="text-brand-lime font-bold block">IF: country != historical_country</span>
                      <span className="text-zinc-500 text-[10px]">Flag impossible travel velocity across regions</span>
                    </div>

                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                      <span className="text-brand-lime font-bold block">AND: velocity &gt; threshold</span>
                      <span className="text-zinc-500 text-[10px]">Triggers when event speed spikes beyond custom baseline</span>
                    </div>

                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl">
                      <span className="text-brand-lime font-bold block">AND: device_risk &gt; medium</span>
                      <span className="text-zinc-500 text-[10px]">Evaluate emulators, rooted operating systems, and Tor egress</span>
                    </div>

                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                      <span className="text-red-400 font-black block">THEN ACTION: review + create_case</span>
                      <span className="text-white/60 text-[10px]">Escalate to high-priority alert queues with context attached</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: RULE SIMULATION & TESTING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Historical Validation</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Test Policies Safely Before Deployment.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense allows organizations to replay historical traffic, simulate new thresholds, and evaluate policy impact before affecting live customers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Historical Replay", desc: "Replay historical transactions, onboarding attempts, sessions, or payments against new rules." },
                { title: "False Positive Analysis", desc: "Estimate review volume, false positives, and operational impact before deployment." },
                { title: "Rule Impact Comparison", desc: "Compare old vs new rule performance side-by-side on exact historical intervals." },
                { title: "Shadow Mode", desc: "Run policies silently in production without impacting customer outcomes." },
                { title: "Canary Deployment", desc: "Deploy new policies to limited traffic segments before full rollout." },
                { title: "Performance Metrics", desc: "Measure trigger rates, decision distributions, losses prevented, and customer friction impact." }
              ].map((sim, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{sim.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sim.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: GOVERNANCE & CHANGE MANAGEMENT ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Change Management</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Enterprise Governance for High-Stakes Decisions.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense provides governance controls designed for financial institutions and regulated environments where policy mistakes carry operational and regulatory risk.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Immutable Version Tracking", desc: "Track every policy, threshold, rule, and workflow historically with full rollback capabilities." },
                    { title: "Collaborative Approval Workflows", desc: "Require approvals before deploying high-impact policy changes." },
                    { title: "Safe Rollback Controls", desc: "Instantly revert problematic deployments safely in one click." },
                    { title: "Segregation of Duties", desc: "Separate rule authorship, approval, deployment, and investigation permissions." }
                  ].map((gov, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-12 bg-zinc-100 group-hover:bg-brand-lime transition-all duration-300 rounded-full" />
                      <div>
                        <span className="text-xs font-bold text-neutral-950 font-manrope block">{gov.title}</span>
                        <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{gov.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Approval Pipeline Graphic Mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">POLICY APPROVAL PIPELINE WORKFLOW</span>
                  
                  <div className="grid grid-cols-5 gap-3 font-mono text-[9px] text-center">
                    {[
                      { step: "1. Draft", active: true, color: "border-brand-lime text-brand-lime" },
                      { step: "2. Review", active: true, color: "border-brand-lime text-brand-lime" },
                      { step: "3. Approve", active: true, color: "border-brand-lime text-brand-lime" },
                      { step: "4. Deploy", active: false, color: "border-white/10 text-zinc-500" },
                      { step: "5. Monitor", active: false, color: "border-white/10 text-zinc-500" }
                    ].map((st, i) => (
                      <div key={i} className={`p-2 border rounded-xl flex flex-col justify-center min-h-[60px] ${st.color}`}>
                        <span>{st.step}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[10px] text-zinc-400 font-mono">
                    Policy revisions undergo multi-step verification checks prior to live cluster promotion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: EXPLAINABILITY & TRANSPARENCY ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Explainable Decisions</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Explain Every Decision with Confidence.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense provides clear explanations for every triggered rule, decision action, and policy outcome.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Standardized Reason Codes", desc: "Generate standardized reasons tied to triggered policies such as impossible_travel." },
                    { title: "Rule Match Evidence Logs", desc: "Show exactly which conditions triggered and what evidence supported them." },
                    { title: "Audit-Ready Records", desc: "Maintain transparent records for regulators, auditors, and internal governance teams." }
                  ].map((exp, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-12 bg-zinc-100 group-hover:bg-brand-lime transition-all duration-300 rounded-full" />
                      <div>
                        <span className="text-xs font-bold text-neutral-950 font-manrope block">{exp.title}</span>
                        <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Explanation panel mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <div>
                      <span className="text-white font-bold block text-sm">DECISION REASON CODES & MATCHED RULES</span>
                      <span className="text-[10px] text-zinc-400">Calculated Decision ID: DEC-9801</span>
                    </div>
                    <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-400 text-[8px] font-black rounded uppercase tracking-widest">Review + Step-Up</span>
                  </div>

                  <div className="space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Matched Rule: impossible_travel</span>
                      <span className="text-red-400 font-bold">MATCHED</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Matched Rule: high_velocity</span>
                      <span className="text-red-400 font-bold">MATCHED</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Matched Rule: new_device</span>
                      <span className="text-red-400 font-bold">MATCHED</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Matched Rule: sanctions_match</span>
                      <span className="text-red-400 font-bold">MATCHED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: DECISION ORCHESTRATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Orchestration</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Turn Policies Into Automated Actions.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense converts risk scores and triggered rules into real-time interventions across fraud, AML, onboarding, and payment workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full mb-16">
              {[
                { title: "Allow", desc: "Automatically approve low-risk activity without introducing friction." },
                { title: "Review", desc: "Escalate suspicious events for analyst review and case creation." },
                { title: "Block", desc: "Prevent risky transactions, onboarding attempts, or sessions instantly." },
                { title: "Step-Up Authentication", desc: "Require MFA, liveness, biometrics, or document verification." }
              ].map((act, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{act.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{act.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: ANALYTICS & OPTIMIZATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Performance Metrics</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Continuously Improve Detection Performance.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Trigger Analytics", desc: "Track how often rules fire and how they impact final decisions." },
                { title: "False Positive Monitoring", desc: "Identify noisy or ineffective policies to keep legitimate transactions clean." },
                { title: "Decision Funnel Analysis", desc: "Understand review, block, and allow distributions across segments." },
                { title: "Prevented Loss tracking", desc: "Measure prevented losses, operational triage latency, and general ROI effectiveness." },
                { title: "Rule Drift Identification", desc: "Auto-detect rules that degrade in fidelity as criminal tactics shift over time." },
                { title: "Operations Feedback Loop", desc: "Incorporate investigation feedback back into custom rules and policies." }
              ].map((an, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{an.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{an.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: INTEGRATIONS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Connectivity Hub</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-16">
              Integrate Rules Across Your Existing Stack.
            </h2>

            <div className="flex flex-wrap justify-center gap-4 max-w-[1100px] mx-auto">
              {[
                "Core banking systems", "Payment gateways", "Card processors", "Wallet platforms",
                "KYC providers", "AML providers", "OCR providers", "Biometric providers",
                "SIEM platforms", "Data warehouses", "Kafka / event streams", "Webhook consumers"
              ].map((int, idx) => (
                <div key={idx} className="px-6 py-4 bg-white border border-gray-200/60 rounded-full flex items-center gap-2.5 hover:shadow-lg hover:border-brand-lime/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  <span className="text-xs font-bold tracking-tight text-neutral-900">{int}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Enterprise Architecture</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Built for Regulated and High-Risk Environments.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for organizations that require governance, explainability, operational resilience, and audit readiness.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Role-based access", "Audit logging", "Multi-tenant isolation", "Encryption",
                "Webhook signing", "Approval workflows", "Version history", "Tenant-level isolation"
              ].map((sec, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                  <span className="text-[10px] font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Engine FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can non-engineers create fraud rules?", 
                  a: "Yes. DeepSense includes a visual no-code/low-code policy builder designed for fraud, AML, and risk teams." 
                },
                { 
                  q: "Does DeepSense support real-time rules?", 
                  a: "Yes. Rules can execute inline during transactions, onboarding, login flows, payment events, and investigations." 
                },
                { 
                  q: "Can organizations test rules before deployment?", 
                  a: "Yes. DeepSense supports simulations, historical replay, shadow mode, and canary deployments." 
                },
                { 
                  q: "Are policy changes audited?", 
                  a: "Yes. Every rule edit, approval, deployment, rollback, and override is fully audited." 
                },
                { 
                  q: "Can rules combine AI and deterministic logic?", 
                  a: "Yes. Rules can incorporate ML scores, graph signals, AML findings, behavioral analytics, device risk, and document intelligence." 
                },
                { 
                  q: "Does DeepSense support rollback?", 
                  a: "Yes. Organizations can safely revert policy changes instantly." 
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

        {/* ================= SECTION 13: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-50/50 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest">Ready to modernize fraud decisioning?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Build safer, faster, and more explainable <br />
                <span className="text-white/40">risk policies with DeepSense.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Empower fraud, AML, compliance, and risk teams with real-time rules, AI-assisted decisioning, simulations, governance, and enterprise-grade controls.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/graph-intelligence" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Graph Intelligence
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
