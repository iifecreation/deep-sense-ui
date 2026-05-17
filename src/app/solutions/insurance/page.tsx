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

export default function InsurancePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("health");
  
  // Interactive Insurance parameters
  const [underwritingStatus, setUnderwritingStatus] = useState<string>("normal");
  const [brokerVerification, setBrokerVerification] = useState<boolean>(true);
  const [payoutVelocity, setPayoutVelocity] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic insurance risk parameters
  const calculateInsuranceRisk = () => {
    let score = 10; // base risk score
    
    if (underwritingStatus === "swap") score += 42;
    if (payoutVelocity) score += 36;
    if (!brokerVerification) score += 20;
    
    score = Math.min(score, 99);
    
    let status = "SECURE CLAIMS ROUTE";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "COORDINATED FRAUD RING DETECTED";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "FABRICATED CLAIM ALERT";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "BROKER PAYOUT DEVIATION";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateInsuranceRisk();

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
                INSURANCE FRAUD & CLAIMS RISK INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Insurance Fraud <br />
                <span className="text-zinc-400">Before It Becomes Financial Loss</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps insurance providers detect fraudulent claims, policy abuse, identity fraud, payment anomalies, and organized fraud networks using AI-driven analytics, behavioral intelligence, graph detection, and real-time risk scoring.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/insurance#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Insurance Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for health insurers, life insurers, P&C carriers, insurtech platforms, claims operations, underwriting teams, and special investigation units.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise Insurance Fraud Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">SIU Underwriting Risk Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">INSURANCE CORE SECURITY ENGINE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Insurance Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Underwriting Status</span>
                        <select 
                          value={underwritingStatus} 
                          onChange={(e) => setUnderwritingStatus(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="normal">Standard validation profile</option>
                          <option value="swap">Coordinated claims ring</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Broker KYC verification</span>
                        <input 
                          type="checkbox" 
                          checked={brokerVerification} 
                          onChange={(e) => setBrokerVerification(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Payout velocity deviation</span>
                        <input 
                          type="checkbox" 
                          checked={payoutVelocity} 
                          onChange={(e) => setPayoutVelocity(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE INSURANCE TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Underwriting Risk Engine</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {underwritingStatus === "swap" ? "Coordinated Threat Vector" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Fraud Ring Analytics</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {payoutVelocity ? "Active Ring Cluster Alert" : "Standard payout history"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">CLAIMS FRAUD SCORE</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Insurance Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Insurance Fraud Is Becoming More Organized and Sophisticated
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern insurance ecosystems face increasing fraud risk across claims processing, underwriting, onboarding, broker operations, payouts, healthcare claims, policy applications, and digital customer channels. Fraudsters increasingly exploit insurers using fabricated claims, staged accidents, identity fraud, policy manipulation, synthetic identities, organized fraud rings, medical billing abuse, and collusive networks. Traditional insurance fraud systems often struggle with fragmented customer intelligence, disconnected claims workflows, delayed investigations, lack of behavioral visibility, false positives, and operational inefficiencies. Without connected fraud intelligence, insurers face claims leakage, inflated payouts, operational abuse, underwriting losses, regulatory pressure, investigation backlogs, and reputational damage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Claims Fraud", desc: "Fraudulent claims continue to increase across digital and traditional channels.", icon: <Shield /> },
                { title: "Organized Fraud Rings", desc: "Coordinated networks exploit insurers through repeated and connected fraud activity.", icon: <Users /> },
                { title: "Synthetic Identity Abuse", desc: "Fraudsters create fake policyholders and manipulate onboarding processes.", icon: <Sliders /> },
                { title: "Provider & Broker Abuse", desc: "Internal and external actors manipulate claims and commission workflows.", icon: <Clock /> },
                { title: "Payment & Payout Fraud", desc: "Fraudulent payouts and beneficiary manipulation create financial exposure.", icon: <Building /> },
                { title: "Investigation Inefficiency", desc: "SIU teams struggle with fragmented evidence and disconnected systems.", icon: <Sliders /> }
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

            {/* Insurance Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">INSURANCE RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Policyholder onboarding verified dynamically using liveness checks." },
                  { title: "2. Underwriting", desc: "Underwriting risks evaluated for proxy listings and synthetic anomalies." },
                  { title: "3. Submission", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "4. Fraud Scoring", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "5. Investigation", desc: "Flagged payouts routed directly to dedicated Special Investigation Units." },
                  { title: "6. Payout Operations", desc: "Approved payouts executed securely with complete compliance reports." }
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
              Unified Insurance Fraud & Claims Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines claims analytics, behavioral intelligence, graph analysis, identity verification, underwriting intelligence, payment monitoring, and operational governance into a unified insurance risk platform. The platform continuously evaluates claims activity, customer trust, policyholder behavior, payout anomalies, underwriting exposure, identity integrity, graph relationships, operational telemetry, and fraud indicators. DeepSense enables insurers to: reduce claims leakage, detect organized fraud, accelerate investigations, improve underwriting quality, strengthen policyholder trust, reduce operational losses, and modernize SIU operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce claims leakage", desc: "Block duplicate claims and premium payment anomalies dynamically." },
                { title: "Detect organized fraud", desc: "Map linked policyholders and shared beneficiaries dynamically." },
                { title: "Accelerate investigations", desc: "Supply SIU analysts with clear claims timelines instantly." },
                { title: "Improve underwriting quality", desc: "Spot application inconsistencies and synthetic identities." },
                { title: "Strengthen policyholder trust", desc: "Eliminate manual verification checks for trusted customers." },
                { title: "Reduce operational losses", desc: "Monitor broker and agent operations for collusive misconduct." }
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
              Insurance Fraud Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Claims Fraud Detection", desc: "Detect suspicious claims, staged incidents, duplicate claims, fabricated evidence, payout anomalies, and organized abuse patterns." },
                { title: "Identity & Policyholder Verification", desc: "Verify customer identities, onboarding legitimacy, liveness integrity, synthetic identities, and document authenticity." },
                { title: "Fraud Ring Detection", desc: "Identify linked claims, connected policyholders, shared devices, repeated beneficiaries, and organized fraud ecosystems." },
                { title: "Underwriting Risk Intelligence", desc: "Analyze application inconsistencies, policy manipulation, onboarding anomalies, customer trust indicators, and underwriting fraud exposure." },
                { title: "Payment & Payout Monitoring", desc: "Monitor suspicious payouts, beneficiary manipulation, duplicate disbursements, refund abuse, and settlement anomalies." },
                { title: "Behavioral Analytics", desc: "Analyze customer behavior, claims submission patterns, digital interactions, operational anomalies, and account trust indicators." },
                { title: "Agent & Broker Risk Monitoring", desc: "Detect commission abuse, collusive activity, onboarding manipulation, operational misconduct, and suspicious broker relationships." },
                { title: "Graph Intelligence", desc: "Visualize linked claims, connected entities, shared beneficiaries, provider relationships, fraud ecosystems, and collusive networks." },
                { title: "SIU Case Management", desc: "Coordinate fraud investigations, claims escalations, evidence workflows, investigation timelines, and remediation tracking." },
                { title: "Governance & Compliance Monitoring", desc: "Support audit readiness, operational governance, controls monitoring, compliance reporting, and remediation workflows." }
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
              How DeepSense Protects Insurance Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests claims activity, policyholder records, onboarding events, payout telemetry, broker activity, customer interactions, and operational signals." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches events using behavioral analytics, graph intelligence, identity verification, device telemetry, fraud indicators, and operational context." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates claims legitimacy, policyholder trust, payout risk, operational anomalies, linked fraud exposure, and organized abuse indicators." },
                { title: "Step 4 — Decisioning", desc: "The system generates fraud scores, investigation alerts, payout interventions, underwriting warnings, and operational risk indicators." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers SIU investigations, claims reviews, fraud escalations, remediation workflows, and governance reporting." }
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
              Built for Modern Insurance Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "health", label: "Health Insurance" },
                { id: "pc", label: "Property & Casualty" },
                { id: "life", label: "Life Insurance" },
                { id: "insurtech", label: "Insurtech Platforms" },
                { id: "siu", label: "Special Investigation Units" }
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
              {activeTab === "health" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect provider fraud, duplicate claims, billing abuse, and identity manipulation.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure healthcare payout parameters. Spot double-billing and coordinate with GRC compliance controls automatically.
                  </p>
                </div>
              )}
              {activeTab === "pc" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor staged incidents, claims fraud, payout abuse, and organized fraud rings.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track auto claim velocities. Cross-reference photos and incident metadata with deep fraud maps automatically.
                  </p>
                </div>
              )}
              {activeTab === "life" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect onboarding workflows, beneficiary integrity, payout operations, and synthetic identities.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Validate beneficiary lists. Enforce identity liveness validation checks during settlement operations.
                  </p>
                </div>
              )}
              {activeTab === "insurtech" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure digital onboarding, claims automation, customer trust, and fraud operations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure direct REST checkouts. Spot synthetic profiles before policy issuance triggers occur.
                  </p>
                </div>
              )}
              {activeTab === "siu" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Accelerate fraud investigations, graph analysis, evidence collection, and operational intelligence.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Equip SIU investigators with clear transaction relationship flows and auto-compiled reports dynamically.
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
              Connected Across the Insurance Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links claim fraud deciders with active GRC dashboards, GRC evidence matrices, device intelligence engines, and automated incident logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Identity Intelligence", desc: "Customer verification, liveness detection, and synthetic identity prevention." },
                { title: "Graph Intelligence", desc: "Connected claims and fraud ring visibility." },
                { title: "Behavioral Biometrics", desc: "Behavioral anomaly detection and customer trust analysis." },
                { title: "Payment Fraud Intelligence", desc: "Payout monitoring and beneficiary risk analytics." },
                { title: "UEBA & Operational Monitoring", desc: "Behavioral anomaly detection across agents and internal workflows." },
                { title: "GRC & Controls Monitoring", desc: "Operational governance and compliance intelligence." },
                { title: "Case Management", desc: "Claims investigations and SIU workflow orchestration." }
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
              Real-Time Insurance Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Claims Fraud Operations Dashboard", desc: "Suspicious claims monitoring, payout analytics, fraud heatmaps, and operational fraud alerts." },
                { title: "Policyholder Risk Intelligence", desc: "Customer trust scoring, onboarding analytics, behavioral risk indicators, and synthetic identity monitoring." },
                { title: "Fraud Ring Analytics", desc: "Graph relationships, linked claims, collusive activity monitoring, and ecosystem intelligence." },
                { title: "Underwriting Risk Dashboard", desc: "Onboarding quality, policy anomaly detection, operational risk visibility, and underwriting exposure analytics." },
                { title: "Investigation Workspace", desc: "Claims timelines, graph investigations, evidence management, operational intelligence, and SIU workflows." }
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
              Designed for Modern Insurance Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous insurance claims models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Health Insurance", "Property & Casualty", "Life Insurance", "Auto Insurance", "Travel Insurance", "Digital Insurance Platforms",
                "Insurtech Companies", "Reinsurance Providers", "Specialty Insurance", "Workers Compensation", "Claims Processing Platforms", "SIU Operations"
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
                Enterprise-Grade Security for Insurance Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and comprehensive logging for every single claims scan.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Fraud Decisions", desc: "Every fraud and claims decision includes reason codes, behavioral evidence, and graph relationships." },
                { title: "Audit Logging", desc: "Track claims reviews, payout decisions, investigation workflows, and operational escalations." },
                { title: "Multi-Tenant Insurance Security", desc: "Secure operational separation across insurance entities, claims environments, and operational teams." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with insurance governance, fraud controls, and compliance programs." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">INSURANCE FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect insurance claims fraud in real time?", 
                  a: "Yes. DeepSense continuously evaluates claims activity, policyholder behavior, payout patterns, and fraud indicators in real time." 
                },
                { 
                  q: "Does DeepSense support fraud ring detection?", 
                  a: "Yes. The platform uses graph intelligence to identify connected claims, collusive networks, shared beneficiaries, and organized fraud ecosystems." 
                },
                { 
                  q: "Can DeepSense support SIU investigations?", 
                  a: "Yes. DeepSense provides investigation workflows, graph analysis, evidence timelines, and operational intelligence for SIU teams." 
                },
                { 
                  q: "Does DeepSense support underwriting risk analysis?", 
                  a: "Yes. The platform detects onboarding anomalies, synthetic identities, and policy manipulation indicators." 
                },
                { 
                  q: "Can DeepSense monitor agent and broker activity?", 
                  a: "Yes. DeepSense continuously evaluates operational behavior, commission anomalies, and collusive relationships." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise insurance environments?", 
                  a: "Yes. DeepSense is designed for large-scale insurance operations, claims ecosystems, and enterprise fraud governance." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Modernize Insurance Fraud and Claims Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure claims workflows and stop <br />
                <span className="text-white/40 font-bold">financial exposure vulnerabilities at scale.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Reduce claims leakage, detect organized fraud rings, accelerate investigations, and strengthen policyholder trust using enterprise-grade insurance fraud intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/insurance#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Insurance Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
