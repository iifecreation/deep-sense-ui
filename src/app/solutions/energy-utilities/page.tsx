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

export default function EnergyUtilitiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("utility");
  
  // Interactive Energy parameters
  const [gridTelemetry, setGridTelemetry] = useState<string>("normal");
  const [contractorVerification, setContractorVerification] = useState<boolean>(true);
  const [invoiceSpike, setInvoiceSpike] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic energy risk parameters
  const calculateEnergyRisk = () => {
    let score = 9; // base risk score
    
    if (gridTelemetry === "spike") score += 42;
    if (invoiceSpike) score += 34;
    if (!contractorVerification) score += 13;
    
    score = Math.min(score, 99);
    
    let status = "SECURE GRID DISTRIBUTION";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "COORDINATED ENERGY THEFT VECTOR";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "UNTRUSTED CONTRACTOR CREDENTIALS";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "HIGH VALUE DISBURSEMENT DRIFT";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateEnergyRisk();

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
                ENERGY & UTILITY FRAUD INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect Energy and Utility Operations <br />
                <span className="text-zinc-400">From Fraud, Abuse, and Operational Risk</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps utility providers, energy operators, and infrastructure organizations detect fraud, secure operational workflows, monitor insider threats, and strengthen governance using AI-driven analytics and real-time intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/energy-utilities#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Energy Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for utility providers, smart-grid ecosystems, energy operators, infrastructure networks, utility billing systems, and critical operational environments.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Critical Infrastructure Intelligence and Governance Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Energy Theft Monitor</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">ENERGY CORE SECURITY COMPLIANCE ENGINE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Grid Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Smart-Grid Telemetry</span>
                        <select 
                          value={gridTelemetry} 
                          onChange={(e) => setGridTelemetry(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="normal">Secure load distribution</option>
                          <option value="spike">Coordinated load spoof spikes</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Contractor eID signature verified</span>
                        <input 
                          type="checkbox" 
                          checked={contractorVerification} 
                          onChange={(e) => setContractorVerification(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">High value aggregate invoice</span>
                        <input 
                          type="checkbox" 
                          checked={invoiceSpike} 
                          onChange={(e) => setInvoiceSpike(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE GRID TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Utility Billing Dashboard</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {gridTelemetry === "spike" ? "Coordinated Diversion Vector" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Infrastructure Risk Score</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {invoiceSpike ? "Active Ring Cluster Alert" : "Standard billing history"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">INFRASTRUCTURE RISK SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">LEGAL RESOLUTION</span>
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

        {/* ================= SECTION 2: PROBLEMS / CHALLENGES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Utility Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Energy and Utility Ecosystems Face Expanding Operational and Fraud Risks
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern energy and utility organizations manage smart-grid infrastructure, billing systems, field operations, contractor ecosystems, OT and IoT telemetry, payment workflows, operational control systems, and customer energy services. Fraudsters and malicious actors increasingly exploit utility ecosystems using energy theft, billing manipulation, meter tampering, procurement abuse, insider misuse, contractor collusion, unauthorized access, operational sabotage, and payment fraud. Traditional utility systems often struggle with fragmented operational visibility, disconnected telemetry systems, delayed anomaly detection, insider-risk monitoring, governance complexity, and infrastructure scalability. Without connected infrastructure intelligence, organizations face revenue leakage, operational disruption, infrastructure abuse, compliance failures, insider threats, procurement exposure, and customer trust erosion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Energy Theft", desc: "Unauthorized consumption and meter manipulation create significant revenue loss.", icon: <Shield /> },
                { title: "Billing & Payment Fraud", desc: "Manipulated billing workflows and payment abuse impact financial integrity.", icon: <Users /> },
                { title: "Insider Threats", desc: "Internal misuse of infrastructure and privileged systems creates operational exposure.", icon: <Sliders /> },
                { title: "Contractor & Vendor Risk", desc: "Third-party operational ecosystems increase governance complexity.", icon: <Clock /> },
                { title: "OT & Infrastructure Integrity", desc: "Critical infrastructure environments require continuous operational trust monitoring.", icon: <Building /> },
                { title: "Smart-Grid Operational Complexity", desc: "Modern utility systems generate high-volume telemetry and operational risk signals.", icon: <Sliders /> }
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

            {/* Energy Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">ENERGY RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Telemetry ingestion", desc: "Patient onboarding verified dynamically using HIPAA-compliant liveness checks." },
                  { title: "2. Billing verification", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Fraud Scoring", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Operational monitoring", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Investigation", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
                  { title: "6. Governance", desc: "Approved payouts executed securely with complete compliance reports." }
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
              Unified Energy Fraud & Infrastructure Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines fraud detection, operational telemetry analytics, insider-risk monitoring, billing intelligence, graph analysis, behavioral analytics, and governance automation into a unified utility risk platform. The platform continuously evaluates energy usage patterns, billing activity, infrastructure telemetry, workforce behavior, contractor activity, payment workflows, operational anomalies, graph relationships, and infrastructure risk indicators. DeepSense enables energy organizations to: reduce energy theft, strengthen infrastructure trust, secure operational workflows, reduce insider risk, improve operational visibility, accelerate investigations, and strengthen infrastructure resilience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce energy theft", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Strengthen infrastructure trust", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Secure operational workflows", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Reduce insider risk", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Improve operational visibility", desc: "Support HIPAA-aligned workflows with active security control overlays." },
                { title: "Accelerate investigations", desc: "Block duplicate medical disbursements before payouts settle." }
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
              Energy & Utility Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Energy Theft Detection", desc: "Detect meter tampering, unauthorized consumption, suspicious usage patterns, operational manipulation, infrastructure abuse, and anomalous energy distribution." },
                { title: "Billing & Payment Fraud Monitoring", desc: "Monitor billing anomalies, duplicate payments, suspicious settlements, invoice manipulation, abnormal customer activity, and financial irregularities." },
                { title: "OT & Infrastructure Monitoring", desc: "Analyze industrial telemetry, infrastructure anomalies, unauthorized operational activity, grid inconsistencies, and suspicious control behavior." },
                { title: "Contractor & Vendor Risk Intelligence", desc: "Detect onboarding anomalies, collusive relationships, suspicious operational activity, procurement abuse, and governance exposure." },
                { title: "Insider Threat Detection", desc: "Identify privilege misuse, unauthorized access, suspicious employee activity, operational sabotage indicators, and governance violations." },
                { title: "Behavioral Analytics", desc: "Analyze operational workflows, workforce behavior, infrastructure interactions, billing consistency, and trust indicators." },
                { title: "Device & IoT Intelligence", desc: "Detect suspicious telemetry devices, spoofed operational signals, unauthorized infrastructure access, IoT anomalies, and infrastructure inconsistencies." },
                { title: "Graph Intelligence", desc: "Visualize linked vendors, connected infrastructure, collusive contractor ecosystems, suspicious payment relationships, and operational networks." },
                { title: "Case Management & Investigations", desc: "Coordinate infrastructure investigations, billing reviews, insider-risk escalations, evidence workflows, and remediation tracking." },
                { title: "Governance & Compliance Monitoring", desc: "Support infrastructure governance, audit readiness, operational controls, utility compliance, and remediation workflows." }
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
              How DeepSense Protects Energy and Utility Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests smart-meter telemetry, billing activity, OT and IoT signals, workforce operations, contractor workflows, payment activity, and infrastructure telemetry." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches events using behavioral analytics, graph intelligence, operational telemetry, fraud indicators, infrastructure trust signals, and insider-risk intelligence." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates infrastructure integrity, billing legitimacy, operational trust, workforce exposure, insider-risk indicators, and fraud relationships." },
                { title: "Step 4 — Decisioning", desc: "The system generates fraud scores, infrastructure alerts, operational escalations, billing interventions, and insider-risk warnings." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers investigations, operational reviews, contractor escalations, remediation workflows, and governance reporting." }
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
              Built for Modern Energy and Infrastructure Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "utility", label: "Utility Providers" },
                { id: "grid", label: "Smart-Grid Operators" },
                { id: "distribution", label: "Distribution Networks" },
                { id: "renewable", label: "Renewable Platforms" },
                { id: "procurement", label: "Energy Procurement" }
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
              {activeTab === "utility" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect billing systems, customer energy services, operational workflows, and infrastructure integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "grid" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor telemetry anomalies, infrastructure manipulation, operational abuse, and suspicious control activity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "distribution" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure operational telemetry, contractor ecosystems, payment integrity, and governance workflows.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "renewable" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect infrastructure abuse, operational inconsistencies, insider-risk indicators, and financial anomalies.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "procurement" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent procurement fraud, invoice manipulation, collusive vendor activity, and payment abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
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
              Connected Across the Energy Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links utility fraud deciders with active GRC dashboards, GRC evidence matrices, device intelligence engines, and automated incident logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Behavioral Analytics", desc: "Operational anomaly detection and workforce intelligence." },
                { title: "OT & IoT Monitoring", desc: "Infrastructure telemetry and operational trust monitoring." },
                { title: "Graph Intelligence", desc: "Connected infrastructure and collusive ecosystem visibility." },
                { title: "Payment Fraud Intelligence", desc: "Billing and procurement payment monitoring." },
                { title: "UEBA & Insider Risk Monitoring", desc: "Behavioral anomaly detection across operational environments." },
                { title: "GRC & Controls Monitoring", desc: "Infrastructure governance and audit readiness intelligence." },
                { title: "Case Management", desc: "Operational investigations and evidence workflow orchestration." }
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
              Real-Time Energy Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Utility Fraud Operations Dashboard", desc: "Billing fraud alerts, energy theft monitoring, operational abuse visibility, and infrastructure analytics." },
                { title: "Infrastructure Integrity Dashboard", desc: "Telemetry anomaly detection, operational risk visibility, grid consistency monitoring, and infrastructure trust indicators." },
                { title: "Contractor & Vendor Analytics", desc: "Vendor risk scoring, onboarding analytics, collusive relationship visibility, and governance indicators." },
                { title: "Billing & Payment Analytics", desc: "Invoice monitoring, payment anomalies, operational exposure visibility, and financial integrity indicators." },
                { title: "Investigation Workspace", desc: "Linked entities, infrastructure timelines, graph investigations, evidence management, and operational intelligence." }
              ].map((mod, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{mod.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: INDUSTRIES / SEGMENTS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Scale Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Designed for Critical Infrastructure Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous utility models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Utility Providers", "Smart-Grid Operators", "Renewable Energy Platforms", "Oil & Gas Operations", "Water Utility Providers", "Power Distribution Networks",
                "Infrastructure Operators", "Energy Procurement Teams", "Industrial Energy Operations", "Critical Infrastructure Environments", "Field Operations Teams", "Utility Billing Platforms"
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
                Enterprise-Grade Security for Energy and Utility Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and HIPAA-compliant sovereign hosting options for every single dispatch.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Risk Decisions", desc: "Every fraud and operational decision includes reason codes, behavioral evidence, and smart-meter telemetry." },
                { title: "Audit Logging", desc: "Track infrastructure investigations, billing reviews, operational escalations, and governance actions." },
                { title: "Multi-Tenant Infrastructure Security", desc: "Secure operational separation across smart-grid environments, contractor ecosystems, and operational teams." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with utility governance, infrastructure controls, and operational resilience." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">ENERGY FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect energy theft in real time?", 
                  a: "Yes. DeepSense continuously evaluates smart-meter telemetry, energy usage patterns, infrastructure signals, and operational anomalies in real time." 
                },
                { 
                  q: "Does DeepSense support OT and infrastructure monitoring?", 
                  a: "Yes. The platform monitors industrial telemetry, infrastructure consistency, operational workflows, and suspicious control activity." 
                },
                { 
                  q: "Can DeepSense detect billing and payment fraud?", 
                  a: "Yes. DeepSense identifies billing anomalies, suspicious settlements, duplicate payments, and procurement abuse." 
                },
                { 
                  q: "Does DeepSense support contractor and vendor risk monitoring?", 
                  a: "Yes. The platform evaluates onboarding integrity, operational trust, collusive relationships, and governance exposure." 
                },
                { 
                  q: "Can DeepSense monitor insider threats in utility environments?", 
                  a: "Yes. DeepSense identifies privilege misuse, operational abuse, suspicious workforce behavior, and governance violations." 
                },
                { 
                  q: "Is DeepSense suitable for critical infrastructure environments?", 
                  a: "Yes. DeepSense is designed for large-scale utility ecosystems, smart-grid operations, and enterprise infrastructure governance." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Strengthen Infrastructure Trust With Real-Time Operational Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure utility smart grids and prevent <br />
                <span className="text-white/40 font-bold">energy theft anomalies dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect utility operations, prevent energy theft, secure infrastructure workflows, and modernize operational investigations using enterprise-grade energy fraud intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/energy-utilities#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Energy Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
