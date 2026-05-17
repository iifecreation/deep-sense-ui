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

export default function TelecommunicationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("mobile");
  
  // Interactive Telecom parameters
  const [simTelemetry, setSimTelemetry] = useState<string>("normal");
  const [deviceVerification, setDeviceVerification] = useState<boolean>(true);
  const [roamingSpike, setRoamingSpike] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic telecom risk parameters
  const calculateTelecomRisk = () => {
    let score = 7; // base risk score
    
    if (simTelemetry === "spike") score += 42;
    if (roamingSpike) score += 34;
    if (!deviceVerification) score += 14;
    
    score = Math.min(score, 99);
    
    let status = "SECURE SUBSCRIBER SESSION";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "COORDINATED SIM SWAP TARGET";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "UNTRUSTED EMULATOR ONBOARDING";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "HIGH VALUE ROAMING DRIFT";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateTelecomRisk();

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
                TELECOM FRAUD & NETWORK INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect Telecommunications Ecosystems <br />
                <span className="text-zinc-400">From Fraud and Operational Abuse</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps telecom operators and communications platforms detect fraud, secure subscriber identities, monitor network abuse, prevent SIM swap attacks, and strengthen operational trust using AI-driven analytics and real-time intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/telecommunications#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Telecom Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for telecom operators, mobile carriers, ISPs, MVNOs, communications platforms, and digital connectivity ecosystems.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Telecommunications Fraud Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">SIM Swap Monitor</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">TELECOM CORE NETWORK COMPLIANCE ENGINE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Telecom Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">SIM Swap Telemetry</span>
                        <select 
                          value={simTelemetry} 
                          onChange={(e) => setSimTelemetry(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="normal">Verified device lifecycle</option>
                          <option value="spike">Coordinated swap spike</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Trusted hardware token</span>
                        <input 
                          type="checkbox" 
                          checked={deviceVerification} 
                          onChange={(e) => setDeviceVerification(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">High value roaming usage spike</span>
                        <input 
                          type="checkbox" 
                          checked={roamingSpike} 
                          onChange={(e) => setRoamingSpike(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE NETWORK TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Telecom Fraud Dashboard</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {simTelemetry === "spike" ? "Coordinated Diversion Vector" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Subscriber Trust Score</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {roamingSpike ? "Active Ring Cluster Alert" : "Standard roaming history"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">SUBSCRIBER TRUST SCORE</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Telecom Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Telecom Ecosystems Face Increasing Fraud and Network Abuse Risks
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern telecommunications ecosystems manage subscriber onboarding, mobile identity systems, billing operations, roaming services, digital wallets, telecom APIs, SIM lifecycle management, and network infrastructure. Fraudsters increasingly exploit telecom ecosystems using SIM swap attacks, subscription fraud, fake identities, account takeover, roaming abuse, network exploitation, synthetic identities, insider misuse, and coordinated fraud rings. Traditional telecom systems often struggle with fragmented subscriber intelligence, cross-channel abuse visibility, real-time network monitoring, identity trust scoring, insider-risk monitoring, and operational scalability. Without connected telecom intelligence, organizations face subscriber trust erosion, revenue leakage, account compromise, regulatory exposure, operational disruption, network abuse, and reputational damage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "SIM Swap Fraud", desc: "Fraudsters exploit SIM lifecycle workflows to hijack accounts and identities.", icon: <Shield /> },
                { title: "Subscription Fraud", desc: "Fake onboarding and synthetic identities increase operational and financial risk.", icon: <Users /> },
                { title: "Account Takeover", desc: "Compromised telecom accounts create fraud and customer trust exposure.", icon: <Sliders /> },
                { title: "Network Abuse", desc: "Telecom infrastructure faces abuse from malicious traffic and coordinated attacks.", icon: <Clock /> },
                { title: "Billing & Revenue Leakage", desc: "Fraudulent usage and billing anomalies impact telecom profitability.", icon: <Building /> },
                { title: "Insider Threats", desc: "Privileged operational systems remain vulnerable to internal misuse.", icon: <Sliders /> }
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

            {/* Telecom Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">TELECOM RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Patient onboarding verified dynamically using liveness checks." },
                  { title: "2. SIM verification", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Fraud Scoring", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Billing Monitoring", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Network Investigations", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
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
              Unified Telecom Fraud & Subscriber Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines fraud detection, subscriber identity intelligence, behavioral analytics, network telemetry analysis, graph intelligence, insider-risk monitoring, and governance automation into a unified telecom risk platform. The platform continuously evaluates subscriber behavior, onboarding integrity, SIM lifecycle activity, network telemetry, billing consistency, operational anomalies, insider-risk indicators, graph relationships, and telecom abuse signals. DeepSense enables telecom organizations to: prevent subscriber fraud, secure network operations, reduce revenue leakage, strengthen subscriber trust, improve operational visibility, accelerate investigations, and strengthen telecom resilience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Prevent subscriber fraud", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Secure network operations", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Reduce revenue leakage", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Strengthen subscriber trust", desc: "Equip claims analysts with visual transaction relationship graphs." },
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
              Telecommunications Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "SIM Swap Fraud Detection", desc: "Detect unauthorized SIM changes, suspicious subscriber activity, identity takeover attempts, abnormal authentication behavior, and SIM lifecycle anomalies." },
                { title: "Subscriber Identity Verification", desc: "Verify onboarding legitimacy, government-issued IDs, liveness integrity, synthetic identities, and account trust indicators." },
                { title: "Subscription Fraud Monitoring", desc: "Detect fake registrations, suspicious activations, coordinated onboarding abuse, identity manipulation, and account farming." },
                { title: "Telecom Billing & Revenue Assurance", desc: "Monitor billing anomalies, suspicious usage patterns, roaming abuse, settlement inconsistencies, and operational leakage." },
                { title: "Network Abuse Detection", desc: "Identify suspicious traffic patterns, telecom API abuse, malicious automation, infrastructure anomalies, and coordinated network attacks." },
                { title: "Behavioral Analytics", desc: "Analyze subscriber behavior, authentication workflows, operational consistency, telecom usage patterns, and trust indicators." },
                { title: "Device & Session Intelligence", desc: "Detect spoofed devices, emulator farms, suspicious access environments, shared infrastructure, and abnormal session activity." },
                { title: "Graph Intelligence", desc: "Visualize linked subscribers, coordinated fraud ecosystems, shared devices, abuse networks, and operational relationships." },
                { title: "Case Management & Investigations", desc: "Coordinate fraud investigations, subscriber reviews, network abuse escalations, evidence workflows, and remediation tracking." },
                { title: "Governance & Compliance Monitoring", desc: "Support telecom governance, operational controls, audit readiness, regulatory visibility, and remediation workflows." }
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
              How DeepSense Protects Telecom Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests subscriber onboarding activity, SIM lifecycle events, network telemetry, authentication workflows, billing transactions, roaming activity, and operational signals." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches events using behavioral analytics, graph intelligence, subscriber trust signals, telecom telemetry, abuse indicators, and insider-risk intelligence." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates subscriber legitimacy, SIM integrity, billing exposure, operational anomalies, network abuse indicators, and fraud relationships." },
                { title: "Step 4 — Decisioning", desc: "The system generates fraud scores, onboarding interventions, SIM swap alerts, billing escalations, and operational warnings." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers investigations, subscriber reviews, network escalations, remediation workflows, and governance reporting." }
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
              Built for Modern Telecommunications Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "mobile", label: "Mobile Network Operators" },
                { id: "isps", label: "ISPs & Connectivity" },
                { id: "mvno", label: "MVNO Platforms" },
                { id: "financial", label: "Telecom Financial Services" },
                { id: "enterprise", label: "Enterprise Communications" }
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
              {activeTab === "mobile" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect subscriber onboarding, SIM lifecycle workflows, telecom billing systems, and network integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "isps" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor network abuse, authentication anomalies, subscriber trust, and operational exposure.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "mvno" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure customer onboarding, digital identity workflows, billing integrity, and operational governance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "financial" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect mobile wallet fraud, account takeover, suspicious transactions, and onboarding abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "enterprise" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent API abuse, account compromise, identity fraud, and operational misuse.</h4>
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
              Connected Across the Telecom Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links telecom fraud deciders with active GRC dashboards, GRC evidence matrices, device intelligence engines, and automated incident logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Behavioral Analytics", desc: "Subscriber anomaly detection and trust intelligence." },
                { title: "Identity Intelligence", desc: "Subscriber verification and synthetic identity prevention." },
                { title: "Device Fingerprinting", desc: "Session integrity and suspicious device monitoring." },
                { title: "Payment Fraud Intelligence", desc: "Billing and telecom payment monitoring." },
                { title: "Graph Intelligence", desc: "Connected abuse ecosystems and coordinated fraud visibility." },
                { title: "UEBA & Insider Risk Monitoring", desc: "Behavioral anomaly detection across telecom operations." },
                { title: "GRC & Controls Monitoring", desc: "Telecom governance and audit readiness intelligence." }
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
              Real-Time Telecom Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Telecom Fraud Operations Dashboard", desc: "SIM swap alerts, subscription fraud monitoring, operational abuse visibility, and network risk analytics." },
                { title: "Subscriber Trust Intelligence", desc: "Onboarding analytics, identity trust scoring, account integrity visibility, and behavioral indicators." },
                { title: "Billing & Revenue Assurance Dashboard", desc: "Billing anomalies, roaming abuse visibility, settlement analytics, and financial leakage indicators." },
                { title: "Network Integrity Dashboard", desc: "Suspicious traffic monitoring, API abuse visibility, infrastructure anomaly detection, and telecom telemetry analytics." },
                { title: "Investigation Workspace", desc: "Linked subscribers, activity timelines, graph investigations, evidence management, and operational intelligence." }
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
              Designed for Modern Connectivity Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous telecom models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Mobile Network Operators", "ISPs & Broadband Providers", "MVNO Platforms", "Telecom Billing Providers", "Roaming & Interconnect Platforms", "Communications APIs Platforms",
                "Mobile Wallet Ecosystems", "Satellite Communications Providers", "Enterprise Communications Platforms", "Smart Connectivity Networks", "Digital Identity Platforms", "Telecom Infrastructure Providers"
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
                Enterprise-Grade Security for Telecom Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and compliance-ready sovereign hosting options for every single subscriber event.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Risk Decisions", desc: "Every fraud and operational decision includes reason codes, behavioral evidence, and telecom telemetry." },
                { title: "Audit Logging", desc: "Track fraud investigations, subscriber escalations, network abuse reviews, and governance actions." },
                { title: "Multi-Tenant Telecom Security", desc: "Secure operational separation across telecom environments, subscriber ecosystems, and operational teams." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with telecom governance, operational resilience, and data privacy obligations." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">TELECOM FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect SIM swap fraud in real time?", 
                  a: "Yes. DeepSense continuously evaluates SIM lifecycle events, subscriber behavior, authentication patterns, and operational anomalies in real time." 
                },
                { 
                  q: "Does DeepSense support subscriber identity verification?", 
                  a: "Yes. The platform supports onboarding verification, liveness checks, document validation, and synthetic identity prevention." 
                },
                { 
                  q: "Can DeepSense detect telecom billing and roaming fraud?", 
                  a: "Yes. DeepSense monitors billing anomalies, roaming abuse, suspicious settlements, and revenue leakage indicators." 
                },
                { 
                  q: "Does DeepSense support network abuse monitoring?", 
                  a: "Yes. The platform identifies suspicious traffic patterns, telecom API abuse, malicious automation, and infrastructure anomalies." 
                },
                { 
                  q: "Can DeepSense monitor insider threats in telecom environments?", 
                  a: "Yes. DeepSense detects privilege misuse, suspicious operational activity, and governance violations across telecom operations." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise telecom ecosystems?", 
                  a: "Yes. DeepSense is designed for carrier-grade telecommunications operations, digital connectivity ecosystems, and enterprise governance environments." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Strengthen Subscriber Trust With Real-Time Telecom Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure subscriber profiles and prevent <br />
                <span className="text-white/40 font-bold">SIM swap anomalies dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect telecom operations, prevent subscriber fraud, secure network ecosystems, and reduce operational abuse using enterprise-grade telecom fraud intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/telecommunications#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Telecom Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
