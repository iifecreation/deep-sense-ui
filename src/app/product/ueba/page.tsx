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
  ClipboardCheck
} from "lucide-react";

export default function UEBAPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("soc");
  
  // Interactive UEBA parameters
  const [baselineState, setBaselineState] = useState<string>("drift");
  const [highOutlier, setHighOutlier] = useState<boolean>(false);
  const [privilegedBypass, setPrivilegedBypass] = useState<boolean>(true);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic UEBA risk factors based on states
  const calculateUEBARisk = () => {
    let score = 12; // base risk score
    
    if (baselineState === "drift") score += 25;
    if (baselineState === "anomaly") score += 45;
    if (highOutlier) score += 20;
    if (privilegedBypass) score += 22;
    
    score = Math.min(score, 99);
    
    let status = "STABLE USER PROFILE";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "SUSPICIOUS WORKFLOW DETECTED";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "PRIVILEGED ESCALATION ATTACK";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "BEHAVIORAL DRIFT INDICATION";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateUEBARisk();

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
                <Activity className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                USER & ENTITY BEHAVIOR ANALYTICS
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Insider Threats and <br />
                <span className="text-zinc-400">Behavioral Anomalies in Real Time</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense continuously analyzes user, account, device, and operational behavior to detect insider threats, compromised identities, privilege misuse, suspicious activity, and abnormal workflows using AI-driven behavioral intelligence and real-time risk analytics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/aml-monitoring" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Enterprise Risk Platform
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for enterprise security teams, fraud operations, regulated institutions, SOC environments, compliance programs, and operational governance teams.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise UEBA Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">UEBA Intelligence Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">BEHAVIOR SHIELD ACTIVE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Baseline Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Baseline Modeling</span>
                        <select 
                          value={baselineState} 
                          onChange={(e) => setBaselineState(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="stable">Stable Profiles</option>
                          <option value="drift">Subtle Drift observed</option>
                          <option value="anomaly">Anomalous Actions detected</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Peer Outlier Indicator</span>
                        <input 
                          type="checkbox" 
                          checked={highOutlier} 
                          onChange={(e) => setHighOutlier(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Privilege Action bypass</span>
                        <input 
                          type="checkbox" 
                          checked={privilegedBypass} 
                          onChange={(e) => setPrivilegedBypass(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE BEHAVIOR GRAPH MATRIX</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Peer deviation check</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {highOutlier ? "High Outlier alert" : "Baseline matching"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Privileged Elevation</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {privilegedBypass ? "Unauthorized Grantees" : "Standard approvals"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">BEHAVIORAL RISK SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">THREAT RESOLUTION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: Graph relationship active</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Security Pitfalls</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Traditional Security Tools Miss Behavioral Risk
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern enterprise threats increasingly involve compromised accounts, insider abuse, privilege misuse, anomalous user behavior, credential theft, operational manipulation, service account abuse, and data exfiltration. Traditional security systems rely heavily on static rules, signature detection, isolated alerts, and perimeter-focused monitoring. These approaches often fail to detect subtle behavioral drift, abnormal workflow patterns, insider misuse, compromised internal identities, unusual data access, and suspicious operational activity. Without behavioral intelligence, organizations face delayed threat detection, insider-risk exposure, operational compromise, fraud escalation, governance failures, data leakage, and increased response times.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Insider Threats", desc: "Employees and contractors may misuse access privileges or operational workflows.", icon: <Shield /> },
                { title: "Compromised Accounts", desc: "Attackers increasingly operate through legitimate but compromised identities.", icon: <Users /> },
                { title: "Privilege Escalation", desc: "Abnormal permission changes and administrative activity often go undetected.", icon: <Sliders /> },
                { title: "Behavioral Drift", desc: "Subtle changes in user behavior may indicate fraud or account compromise.", icon: <Clock /> },
                { title: "Service Account Abuse", desc: "Non-human accounts are increasingly exploited for persistence and lateral movement.", icon: <Building /> },
                { title: "Operational Anomalies", desc: "Unusual workflows and access patterns create hidden enterprise risk.", icon: <Sliders /> }
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

            {/* Behavioral Anomaly Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">BEHAVIORAL ANOMALY DETECTION LIFECYCLE</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. User Activity", desc: "Analyst signs in off-hours to adjust ledger values." },
                  { title: "2. Baseline checks", desc: "DeepSense compares event to past work profiles." },
                  { title: "3. Deviation", desc: "Telemetry flags outlier values relative to division benchmarks." },
                  { title: "4. Risk Scoring", desc: "System generates risk scores, indexing elevation alerts." },
                  { title: "5. Investigation", desc: "Active tracers mapped automatically to security teams." },
                  { title: "6. Remediation", desc: "Role parameters locked until double-approval check clears." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected Security</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              AI-Driven Behavioral Risk Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines behavioral analytics, fraud intelligence, identity telemetry, graph analysis, operational monitoring, and governance intelligence into a unified UEBA platform. The platform continuously evaluates user behavior, entity relationships, login activity, access patterns, operational workflows, privilege changes, session anomalies, peer-group deviations, and behavioral trust indicators. DeepSense enables organizations to detect insider threats faster, identify compromised identities, reduce alert fatigue, strengthen governance visibility, improve operational security, accelerate investigations, and support continuous monitoring.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Detect insider threats faster", desc: "Spot privilege misuse and subtle behavioral drift in real time." },
                { title: "Identify compromised identities", desc: "Block impossible travel and credentials hijacking." },
                { title: "Reduce alert fatigue", desc: "Substitute rules with dynamic statistical indicators to drop false alerts." },
                { title: "Strengthen governance visibility", desc: "Gain complete transparency over non-human machine account pathways." },
                { title: "Improve operational security", desc: "Trace active session anomalies automatically on connected dashboards." },
                { title: "Accelerate investigations", desc: "Deliver structured activity timelines to security analysts instantly." }
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
              Enterprise UEBA Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Behavioral Anomaly Detection", desc: "Detect abnormal workflows, unusual login patterns, suspicious operational activity, behavioral drift, anomalous transactions, and unexpected access behavior." },
                { title: "Insider Threat Monitoring", desc: "Identify privilege misuse, risky user behavior, unauthorized access, policy violations, abnormal exports, and operational abuse." },
                { title: "Peer Group Analytics", desc: "Analyze behavioral baselines, role-based comparisons, department activity patterns, operational deviations, and entity trust consistency." },
                { title: "Account Compromise Detection", desc: "Monitor impossible travel, suspicious login activity, abnormal session behavior, access anomalies, and credential misuse indicators." },
                { title: "Privilege Escalation Intelligence", desc: "Track role changes, elevated permissions, administrative anomalies, unusual access grants, and unauthorized privilege activity." },
                { title: "Service Account Monitoring", desc: "Detect interactive service account usage, unusual automation activity, credential abuse, abnormal execution patterns, and risky machine identity behavior." },
                { title: "Behavioral Risk Scoring", desc: "Generate user risk scores, entity trust indicators, operational risk ratings, and compromise likelihood scores." },
                { title: "Graph Intelligence", desc: "Visualize connected users, shared devices, operational relationships, linked identities, workflow dependencies, and suspicious behavioral clusters." },
                { title: "Real-Time Alerting & Investigations", desc: "Automatically generate behavioral alerts, escalate investigations, attach activity evidence, route incidents, and track remediation." },
                { title: "Continuous Monitoring & Governance", desc: "Continuously validate access governance, workflow integrity, behavioral trust, operational compliance, and insider-risk indicators." }
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
              How DeepSense Detects Behavioral Risk
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests login events, access logs, workflow telemetry, transaction activity, device signals, operational events, and identity telemetry." },
                { title: "Step 2 — Baseline", desc: "The platform builds user behavior profiles, peer-group baselines, entity trust models, and operational activity norms." },
                { title: "Step 3 — Correlation", desc: "DeepSense evaluates anomalous behavior, privilege escalation, workflow anomalies, suspicious activity patterns, and insider-risk indicators." },
                { title: "Step 4 — Scoring", desc: "The system generates behavioral risk scores, compromise indicators, operational anomaly ratings, and insider-risk classifications." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers alerts, investigations, governance escalation, remediation workflows, and operational reviews." }
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
              Built for Enterprise Security & Operational Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "soc", label: "Security Operations Centers" },
                { id: "banking", label: "Financial Institutions" },
                { id: "compliance", label: "Compliance & Governance" },
                { id: "it", label: "Enterprise IT Teams" },
                { id: "fraud", label: "Fraud & Risk Teams" }
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
              {activeTab === "soc" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect compromised accounts, insider threats, suspicious operational activity, and lateral movement indicators.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Protect Accounts Payable databases. Match active logins to previous locations dynamically to avoid hijacked accounts.
                  </p>
                </div>
              )}
              {activeTab === "banking" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor fraud-linked behavior, privileged access misuse, operational anomalies, and insider fraud indicators.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Spot fraudulent transaction chains. Flag abnormal approval modifications before files are committed to servers.
                  </p>
                </div>
              )}
              {activeTab === "compliance" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Validate policy adherence, access governance, workflow compliance, and operational integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Map user session indicators dynamically to enforce structural separation standards automatically.
                  </p>
                </div>
              )}
              {activeTab === "it" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Identify service account abuse, anomalous admin activity, operational drift, and risky system access.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Monitor machine integrations. Automatically flag service account executions that don't match stable code patterns.
                  </p>
                </div>
              )}
              {activeTab === "fraud" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Correlate behavioral anomalies, transaction fraud, account takeover, and operational abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Supply risk managers with granular session profiles. Connect credential logs and transaction telemetry on unified tracking tabs.
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
              DeepSense links UEBA risk engines with active AML workflows, GRC dashboards, SIEM telemetry pipelines, and automated incident case logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Device Fingerprinting", desc: "Correlate user behavior with device trust and session intelligence." },
                { title: "Account Takeover Prevention", desc: "Detect compromised identities and suspicious login activity." },
                { title: "DLP Monitoring", desc: "Correlate abnormal access and export behavior with insider-risk indicators." },
                { title: "Continuous Controls Monitoring", desc: "Validate governance and operational integrity continuously." },
                { title: "Graph Intelligence", desc: "Visualize connected behavioral relationships and operational ecosystems." },
                { title: "SIEM Integrations", desc: "Stream behavioral intelligence into enterprise SOC workflows." },
                { title: "Case Management", desc: "Escalate behavioral anomalies into investigation and remediation workflows." }
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
              Real-Time Behavioral Intelligence Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "UEBA Operations Dashboard", desc: "Behavioral risk trends, insider threat monitoring, anomaly visibility, and operational risk indicators." },
                { title: "User Risk Analytics", desc: "High-risk users, behavioral drift analysis, peer-group deviations, and trust score trends." },
                { title: "Access & Session Monitoring", desc: "Login anomalies, privilege escalation tracking, session intelligence, and suspicious workflow visibility." },
                { title: "Operational Intelligence Dashboard", desc: "Service account monitoring, operational anomalies, workflow risk analytics, and governance indicators." },
                { title: "Investigation Workspace", desc: "User timelines, activity evidence, behavioral analytics, graph relationships, and remediation workflows." }
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
              Designed for Enterprise Security & Risk Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous behavioral assessments across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Banking", "Fintech", "Healthcare", "Government", "Telecom", "Enterprise SaaS",
                "Ecommerce", "Insurance", "Payment Processors", "Energy", "Manufacturing", "Global Enterprises"
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
                Explainable Behavioral Intelligence and Enterprise Governance
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and comprehensive logging for every single behavior audit.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Behavioral Decisions", desc: "Every behavioral alert includes anomaly indicators, peer-group deviations, and session evidence." },
                { title: "Audit Logging", desc: "Track analyst investigations, behavioral alerts, remediation workflows, and operational reviews." },
                { title: "Multi-Tenant Security", desc: "Secure operational separation across organizations, operational telemetry, and analyst environments." },
                { title: "Privacy-Conscious Analytics", desc: "DeepSense minimizes exposure to sensitive activity data using governed access and redaction." },
                { title: "Flexible Deployment Models", desc: "Available via SaaS, private cloud, hybrid, or on-premise deployment." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">UEBA FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is UEBA?", 
                  a: "User and Entity Behavior Analytics (UEBA) continuously analyzes user and system behavior to detect anomalies, insider threats, and compromised identities." 
                },
                { 
                  q: "Can DeepSense detect insider threats?", 
                  a: "Yes. DeepSense analyzes behavioral drift, privilege misuse, unusual access patterns, and operational anomalies to identify insider-risk indicators." 
                },
                { 
                  q: "Does DeepSense support peer-group analysis?", 
                  a: "Yes. The platform builds behavioral baselines and compares users against peer groups, departments, and operational norms." 
                },
                { 
                  q: "Can DeepSense detect compromised accounts?", 
                  a: "Yes. The platform identifies impossible travel, suspicious login activity, abnormal session behavior, and compromise indicators." 
                },
                { 
                  q: "Does DeepSense support SIEM integrations?", 
                  a: "Yes. DeepSense integrates with SIEM and SOC environments through APIs, webhooks, telemetry pipelines, and event streaming." 
                },
                { 
                  q: "Is UEBA suitable for fraud and operational monitoring?", 
                  a: "Yes. DeepSense correlates fraud signals, operational telemetry, and behavioral intelligence into unified enterprise risk analytics." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Detect Behavioral Risk Before It Escalates Into Operational Damage</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure internal networks and prevent <br />
                <span className="text-white/40 font-bold">insider threat escalations dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Identify insider threats, detect compromised accounts, strengthen operational governance, and improve enterprise security visibility using AI-driven behavioral intelligence and continuous monitoring.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/aml-monitoring" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Enterprise Risk Platform
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
