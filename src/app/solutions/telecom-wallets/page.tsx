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

export default function TelecomWalletsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("wallet");
  
  // Interactive Mobile Money parameters
  const [simSwapStatus, setSimSwapStatus] = useState<string>("normal");
  const [deviceTrustStatus, setDeviceTrustStatus] = useState<boolean>(true);
  const [velocityMultiplier, setVelocityMultiplier] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic wallet risk parameters
  const calculateWalletRisk = () => {
    let score = 8; // base risk score
    
    if (simSwapStatus === "swap") score += 43;
    if (velocityMultiplier) score += 35;
    if (!deviceTrustStatus) score += 13;
    
    score = Math.min(score, 99);
    
    let status = "SECURE WALLET TRANSACTION";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "COORDINATED SIM SWAP WALLET TAKEOVER";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "UNTRUSTED EMULATOR CASH-OUT VECTOR";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "HIGH VALUE P2P VELOCITY DRIFT";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateWalletRisk();

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
                MOBILE MONEY & TELECOM WALLET INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Secure Telecom Wallet and <br />
                <span className="text-zinc-400">Mobile Money Ecosystems From Fraud</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps telecom operators and mobile money providers detect fraud, secure wallet ecosystems, prevent transaction abuse, monitor agent risk, and strengthen subscriber trust using AI-driven analytics and real-time intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/telecom-wallets#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Mobile Money Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for telecom wallet providers, mobile money ecosystems, digital payment platforms, agent banking operations, and financial inclusion networks.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Mobile Money Fraud Intelligence Console */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Mobile Money Fraud Intelligence Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">TELECOM WALLET ENGINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live telecom wallet intelligence interface showing real-time wallet transaction scoring, SIM swap correlation monitoring, wallet trust analytics, transaction anomaly detection, agent fraud exposure, mule wallet network intelligence, AML and sanctions indicators, and telecom behavioral risk scoring.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Wallet Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">SIM Swap Status</span>
                        <select 
                          value={simSwapStatus} 
                          onChange={(e) => setSimSwapStatus(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="normal">Verified device lifecycle</option>
                          <option value="swap">Coordinated swap spike</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Trusted hardware token</span>
                        <input 
                          type="checkbox" 
                          checked={deviceTrustStatus} 
                          onChange={(e) => setDeviceTrustStatus(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Suspicious P2P rapid cash-out</span>
                        <input 
                          type="checkbox" 
                          checked={velocityMultiplier} 
                          onChange={(e) => setVelocityMultiplier(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE MOBILE MONEY TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Transaction Risk Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {simSwapStatus === "swap" ? "Coordinated Diversion Vector" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Wallet Trust Scorecard</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {velocityMultiplier ? "Active Velocity Alert" : "Standard transaction history"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">WALLET TRUST SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">LEGAL RESOLUTION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: SIM Swap correlation active</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Financial Crime Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Telecom Wallet Ecosystems Face Increasing Financial Crime Exposure
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern telecom wallet and mobile money ecosystems manage: subscriber onboarding, wallet transactions, P2P transfers, agent banking operations, cash-in/cash-out workflows, cross-border transfers, merchant payments, and digital financial services. Fraudsters increasingly exploit telecom financial ecosystems using SIM swap attacks, wallet takeover, synthetic identities, mule wallet networks, transaction laundering, agent collusion, fake onboarding, social engineering, and coordinated fraud rings. Traditional telecom financial systems often struggle with real-time transaction visibility, wallet trust scoring, subscriber risk intelligence, cross-channel monitoring, operational scalability, and fraud network detection. Without connected mobile money intelligence, organizations face transaction fraud losses, financial crime exposure, AML violations, subscriber trust erosion, operational abuse, agent misconduct, and reputational damage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "SIM Swap Wallet Fraud", desc: "SIM lifecycle abuse enables wallet takeover and unauthorized transactions.", icon: <Shield /> },
                { title: "Mule Wallet Networks", desc: "Fraudsters coordinate large-scale transaction laundering ecosystems.", icon: <Users /> },
                { title: "Agent Fraud", desc: "Agent banking operations create insider and collusion risk.", icon: <Sliders /> },
                { title: "Synthetic Identity Abuse", desc: "Fake onboarding and manipulated identities compromise trust ecosystems.", icon: <Clock /> },
                { title: "Rapid Cash-Out Schemes", desc: "Fraudulent transfers rapidly exit mobile money systems through coordinated wallets.", icon: <Building /> },
                { title: "AML & Sanctions Exposure", desc: "Wallet ecosystems increasingly face financial crime and compliance pressure.", icon: <Sliders /> }
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

            {/* Mobile Money Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">MOBILE MONEY RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Patient onboarding verified dynamically using liveness checks." },
                  { title: "2. SIM verification", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Transaction Scoring", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. AML Monitoring", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Investigations", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
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
              Unified Mobile Money Fraud & Wallet Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines transaction monitoring, behavioral analytics, subscriber intelligence, graph analytics, SIM lifecycle monitoring, AML controls, and governance automation into a unified telecom wallet risk platform. The platform continuously evaluates wallet activity, subscriber behavior, device trust, SIM lifecycle events, transaction anomalies, cash-out behavior, graph relationships, AML indicators, and operational abuse signals. DeepSense enables telecom wallet providers to: prevent wallet fraud, secure subscriber ecosystems, reduce transaction losses, strengthen AML monitoring, detect coordinated fraud networks, improve operational visibility, and scale financial trust securely.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Prevent wallet fraud", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Secure subscriber ecosystems", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Reduce transaction losses", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Strengthen AML monitoring", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Detect coordinated fraud networks", desc: "Support financial governance with active security control overlays." },
                { title: "Improve operational visibility", desc: "Block duplicate withdrawals before cash-outs settle." }
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
              Mobile Money & Wallet Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Real-Time Wallet Fraud Detection", desc: "Detect suspicious wallet transfers, account takeover, rapid cash-outs, transaction laundering, abnormal transfer behavior, and fraudulent withdrawals." },
                { title: "SIM Swap Correlation Monitoring", desc: "Identify SIM lifecycle anomalies, suspicious subscriber changes, authentication inconsistencies, wallet access compromise, and device-switching attacks." },
                { title: "Wallet Trust Scoring", desc: "Generate subscriber trust scores, wallet legitimacy ratings, transaction consistency indicators, behavioral trust analytics, and AML exposure ratings." },
                { title: "Agent Fraud Monitoring", desc: "Detect suspicious agent activity, collusive cash-out schemes, onboarding abuse, settlement anomalies, and operational misconduct." },
                { title: "Behavioral Analytics", desc: "Analyze subscriber transaction behavior, authentication patterns, wallet usage consistency, transaction intent, and operational trust indicators." },
                { title: "Device & Session Intelligence", desc: "Detect spoofed devices, emulator farms, suspicious environments, shared infrastructure, and account compromise indicators." },
                { title: "AML & Financial Crime Monitoring", desc: "Monitor suspicious transaction chains, sanctions exposure, high-risk counterparties, laundering typologies, and operational compliance risk." },
                { title: "Graph Intelligence", desc: "Visualize linked wallets, connected agents, mule ecosystems, shared devices, collusive networks, and suspicious transaction flows." },
                { title: "Case Management & Investigations", desc: "Coordinate wallet investigations, subscriber escalations, AML reviews, evidence workflows, and remediation tracking." },
                { title: "Governance & Compliance Monitoring", desc: "Support telecom financial governance, AML obligations, audit readiness, operational transparency, and regulatory reporting." }
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
              How DeepSense Protects Telecom Wallet Ecosystems
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests wallet transactions, SIM lifecycle events, subscriber onboarding, authentication activity, cash-in/cash-out telemetry, agent operations, and device signals." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using graph intelligence, behavioral analytics, AML indicators, telecom telemetry, sanctions intelligence, and device trust analytics." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates transaction legitimacy, wallet trust, subscriber integrity, agent exposure, AML indicators, and fraud relationships." },
                { title: "Step 4 — Decisioning", desc: "The system generates transaction risk scores, fraud alerts, authentication interventions, AML escalations, and operational warnings." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers wallet investigations, AML reviews, agent escalations, remediation workflows, and governance reporting." }
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
              Built for Mobile Money and Telecom Financial Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "wallet", label: "Telecom Wallet Providers" },
                { id: "operator", label: "Mobile Money Operators" },
                { id: "inclusion", label: "Financial Inclusion Platforms" },
                { id: "crossborder", label: "Cross-Border Networks" },
                { id: "banking", label: "Telecom Banking" }
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
              {activeTab === "wallet" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect subscriber wallets, P2P transfers, authentication workflows, and transaction ecosystems.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "operator" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor agent fraud, cash-out abuse, transaction laundering, and onboarding integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "inclusion" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure digital onboarding, wallet trust, transaction integrity, and operational governance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "crossborder" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect suspicious transfers, mule wallet ecosystems, laundering indicators, and settlement abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "banking" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent account takeover, transaction fraud, operational abuse, and insider misconduct.</h4>
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
              Real-Time Mobile Money Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Wallet Fraud Operations Dashboard", desc: "Wallet fraud alerts, transaction monitoring, rapid cash-out visibility, and subscriber risk analytics." },
                { title: "Subscriber Trust Intelligence", desc: "Onboarding analytics, device trust scoring, behavioral indicators, and SIM lifecycle exposure." },
                { title: "AML & Financial Crime Dashboard", desc: "Suspicious transaction chains, sanctions monitoring, high-risk wallet visibility, and laundering indicators." },
                { title: "Agent Operations Dashboard", desc: "Agent risk scoring, onboarding analytics, operational misconduct indicators, and settlement anomalies." },
                { title: "Investigation Workspace", desc: "Linked wallets, transaction timelines, graph investigations, evidence management, and operational intelligence." }
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
                Enterprise-Grade Security for Mobile Money Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and compliance-ready sovereign hosting options for every single subscriber transaction.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Wallet Risk Decisions", desc: "Every fraud and AML decision includes reason codes, transaction evidence, behavioral indicators, graph relationships, and telecom telemetry." },
                { title: "Audit Logging", desc: "Track wallet investigations, AML escalations, subscriber reviews, and operational actions." },
                { title: "Multi-Tenant Telecom Financial Security", desc: "Secure operational separation across telecom ecosystems, wallet environments, and governance workflows." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with AML obligations, telecom financial governance, and operational resilience." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">WALLET RISK FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect mobile money fraud in real time?", 
                  a: "Yes. DeepSense continuously evaluates wallet transactions, SIM lifecycle events, behavioral anomalies, and transaction risk indicators in real time." 
                },
                { 
                  q: "Does DeepSense support SIM swap fraud monitoring?", 
                  a: "Yes. The platform correlates SIM lifecycle events with wallet activity, authentication changes, and device anomalies." 
                },
                { 
                  q: "Can DeepSense identify mule wallet ecosystems?", 
                  a: "Yes. DeepSense uses graph intelligence and transaction analytics to detect connected laundering and fraud networks." 
                },
                { 
                  q: "Does DeepSense support AML monitoring for telecom wallets?", 
                  a: "Yes. The platform continuously monitors suspicious transfers, sanctions exposure, and financial crime indicators." 
                },
                { 
                  q: "Can DeepSense monitor agent fraud?", 
                  a: "Yes. DeepSense detects collusive agent activity, onboarding abuse, settlement anomalies, and operational misconduct." 
                },
                { 
                  q: "Is DeepSense suitable for large-scale telecom financial ecosystems?", 
                  a: "Yes. DeepSense is designed for enterprise telecom wallet providers, mobile money operations, and financial inclusion platforms." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Trusted Mobile Money Ecosystems With Real-Time Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure wallet transactions and prevent <br />
                <span className="text-white/40 font-bold">SIM swap anomalies dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect telecom wallet operations, reduce fraud losses, strengthen AML monitoring, and improve subscriber trust using enterprise-grade mobile money intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/telecom-wallets#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Mobile Money Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
