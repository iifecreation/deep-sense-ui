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

export default function EnterpriseRiskTeamsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive GRC risk parameters
  const [riskEventLevel, setRiskEventLevel] = useState<string>("minor");
  const [controlAutomation, setControlAutomation] = useState<boolean>(true);
  const [thirdPartyScope, setThirdPartyScope] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic enterprise risk parameters
  const calculateEnterpriseRisk = () => {
    let score = 12; // base risk score
    
    if (riskEventLevel === "insider") score += 48;
    if (thirdPartyScope) score += 28;
    if (!controlAutomation) score += 11;
    
    score = Math.min(score, 99);
    
    let status = "OPTIMIZED GRC DEFENSE";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "HIGH IMPACT INSIDER COMPROMISE BREACH";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "UNCONTROLLED THIRD-PARTY EXPOSURE DECAY";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "MINOR OPERATIONAL DRIFT DETECTED";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateEnterpriseRisk();

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
                ENTERPRISE RISK & GOVERNANCE INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Unify Enterprise Risk Intelligence Across <br />
                <span className="text-zinc-400">Fraud, Operations, and Governance</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps enterprise risk teams centralize operational intelligence, monitor organizational exposure, detect fraud and insider threats, automate governance workflows, and improve enterprise resilience using AI-driven analytics and real-time intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/enterprise-risk-teams#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Enterprise Risk Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for enterprise risk teams, GRC organizations, operational risk leaders, audit teams, compliance departments, and governance operations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise Risk Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Enterprise Risk Intelligence Command Center</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">ENTERPRISE CORE GRC ENGINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A unified enterprise risk console visualizing organization-wide risk exposure, business unit risk scoring, operational anomaly monitoring, fraud and insider-risk alerts, control effectiveness tracking, third-party risk exposure, executive governance reporting, and enterprise risk heatmaps.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Risk Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Risk Event Level</span>
                        <select 
                          value={riskEventLevel} 
                          onChange={(e) => setRiskEventLevel(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="minor">Minor operational drift</option>
                          <option value="insider">High impact insider breach</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Automated GRC checks</span>
                        <input 
                          type="checkbox" 
                          checked={controlAutomation} 
                          onChange={(e) => setControlAutomation(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Expanding partner footprint</span>
                        <input 
                          type="checkbox" 
                          checked={thirdPartyScope} 
                          onChange={(e) => setThirdPartyScope(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE ENTERPRISE RISK TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Risk Heatmap</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {riskEventLevel === "insider" ? "Active Insider Danger" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Control Effectiveness</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {thirdPartyScope ? "Active Third-Party Alert" : "Standard compliance logs"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">ENTERPRISE RISK EXPOSURE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">LEGAL RESOLUTION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: Likelihood vs Impact Matrix active</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Enterprise Exposure</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Enterprise Risk Teams Need Unified Operational Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern enterprise risk teams manage increasingly complex exposure across: fraud operations, insider threats, compliance obligations, third-party ecosystems, operational resilience, procurement governance, cybersecurity operations, and financial crime monitoring. Risk leaders increasingly face: fragmented intelligence systems, disconnected business unit visibility, delayed investigations, manual governance workflows, operational blind spots, and growing regulatory pressure. Without connected enterprise risk intelligence, organizations face: operational disruption, governance failures, fraud losses, compliance exposure, reputational damage, control breakdowns, and delayed executive response.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Fragmented Risk Visibility", desc: "Risk data remains siloed across departments and operational systems.", icon: <Shield /> },
                { title: "Manual Governance Processes", desc: "Traditional governance workflows slow response and remediation efforts.", icon: <Users /> },
                { title: "Insider & Operational Threats", desc: "Internal abuse creates hidden organizational exposure.", icon: <Sliders /> },
                { title: "Third-Party Risk Expansion", desc: "Vendor ecosystems increase operational and compliance complexity.", icon: <Clock /> },
                { title: "Control Effectiveness Gaps", desc: "Organizations struggle to continuously monitor enterprise controls.", icon: <Building /> },
                { title: "Executive Reporting Complexity", desc: "Leadership requires real-time, explainable enterprise risk intelligence.", icon: <Sliders /> }
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

            {/* Enterprise Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">ENTERPRISE RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Data Ingestion", desc: "Patient onboarding verified dynamically using liveness checks." },
                  { title: "2. Risk Scoring", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Controls Monitoring", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Governance Escalation", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Investigations", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
                  { title: "6. Executive Reporting", desc: "Approved payouts executed securely with complete compliance reports." }
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
              Unified Enterprise Risk & Governance Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines fraud intelligence, insider-risk monitoring, controls analytics, behavioral intelligence, graph analysis, governance automation, and operational telemetry into a unified enterprise risk platform. The platform continuously evaluates: operational workflows, employee behavior, governance controls, third-party exposure, fraud indicators, compliance telemetry, insider-risk signals, remediation status, and enterprise operational anomalies. DeepSense enables enterprise risk teams to: centralize risk visibility, automate governance workflows, reduce operational blind spots, accelerate investigations, strengthen controls monitoring, improve executive reporting, and enhance organizational resilience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Centralize risk visibility", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Automate governance workflows", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Reduce operational blind spots", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Accelerate investigations", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Strengthen controls monitoring", desc: "Support enterprise GRC with active security control overlays." },
                { title: "Improve executive reporting", desc: "Block duplicate operational payments before cash-outs settle." }
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
              Enterprise Risk Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Enterprise Risk Scoring", desc: "Generate organizational risk scores, business unit exposure ratings, operational trust indicators, governance effectiveness metrics, and compliance exposure analytics." },
                { title: "Operational Risk Monitoring", desc: "Monitor operational anomalies, workflow inconsistencies, control failures, policy violations, and emerging organizational threats." },
                { title: "Fraud & Financial Crime Intelligence", desc: "Detect suspicious transactions, procurement abuse, insider fraud, operational misconduct, and collusive activity." },
                { title: "Insider Risk Detection", desc: "Identify privilege misuse, suspicious employee activity, unauthorized access, governance violations, and behavioral anomalies." },
                { title: "Third-Party Risk Intelligence", desc: "Analyze vendor exposure, procurement risk, onboarding integrity, supplier governance, and operational trust." },
                { title: "Controls Monitoring & Automation", desc: "Track policy enforcement, control effectiveness, remediation workflows, audit findings, and governance KPIs." },
                { title: "Behavioral Analytics", desc: "Analyze workforce behavior, operational workflows, business process anomalies, organizational trust indicators, and escalation patterns." },
                { title: "Graph Intelligence", desc: "Visualize organizational relationships, insider ecosystems, third-party exposure, operational dependencies, and collusive networks." },
                { title: "Case Management & Investigations", desc: "Coordinate enterprise investigations, audit workflows, remediation escalations, evidence management, and governance reporting." },
                { title: "Executive Reporting & Governance", desc: "Support board-level reporting, governance visibility, enterprise dashboards, compliance analytics, and operational transparency." }
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
              How DeepSense Supports Enterprise Risk Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests operational telemetry, HR workflows, procurement systems, ERP activity, audit logs, compliance telemetry, and governance workflows." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using behavioral analytics, graph intelligence, fraud indicators, insider-risk intelligence, operational telemetry, and governance signals." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates operational integrity, control effectiveness, employee trust, compliance exposure, insider-risk indicators, and organizational anomalies." },
                { title: "Step 4 — Decisioning", desc: "The system generates enterprise risk scores, governance alerts, remediation escalations, control effectiveness indicators, and operational warnings." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers investigations, audit reviews, remediation workflows, governance reporting, and executive escalation." }
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
              Built for Enterprise Governance and Risk Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "financial", label: "Financial Services" },
                { id: "grc", label: "Enterprise GRC Organizations" },
                { id: "operational", label: "Operational Risk" },
                { id: "audit", label: "Audit & Compliance" },
                { id: "leadership", label: "Executive Risk Leadership" }
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
              {activeTab === "financial" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor fraud exposure, operational resilience, AML risk, and insider threats.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "grc" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Centralize governance workflows, controls monitoring, audit readiness, and compliance reporting.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "operational" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure enterprise workflows, employee activity, third-party ecosystems, and organizational trust.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "audit" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect policy violations, operational anomalies, governance gaps, and remediation failures.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "leadership" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Visualize enterprise exposure, strategic risk indicators, governance metrics, and operational resilience.</h4>
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
              Real-Time Enterprise Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Enterprise Risk Operations Dashboard", desc: "Operational exposure alerts, fraud visibility, insider-risk indicators, and governance analytics." },
                { title: "Organizational Trust Intelligence", desc: "Workforce trust scoring, behavioral indicators, operational consistency analytics, and escalation monitoring." },
                { title: "Governance & Controls Dashboard", desc: "Policy enforcement tracking, control effectiveness visibility, remediation workflows, and audit findings." },
                { title: "Third-Party Risk Analytics", desc: "Vendor exposure visibility, procurement anomalies, operational trust indicators, and supplier governance monitoring." },
                { title: "Investigation Workspace", desc: "Organizational timelines, graph investigations, evidence management, and executive reporting." }
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
                Enterprise-Grade Security for Risk and Governance Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and compliance-ready sovereign hosting options for every single enterprise risk event.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Risk Decisions", desc: "Every risk decision includes reason codes, behavioral evidence, operational telemetry, graph relationships, and governance indicators." },
                { title: "Audit Logging", desc: "Track governance workflows, investigations, remediation actions, audit escalations, and executive reporting." },
                { title: "Multi-Tenant Enterprise Security", desc: "Secure operational separation across business units, enterprise environments, and governance workflows." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with SOX, ISO 27001, SOC 2, and enterprise governance frameworks." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">GRC RISK FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense unify enterprise risk visibility across departments?", 
                  a: "Yes. DeepSense centralizes fraud, operational, governance, insider-risk, and third-party intelligence into a unified enterprise risk platform." 
                },
                { 
                  q: "Does DeepSense support controls monitoring?", 
                  a: "Yes. The platform continuously monitors control effectiveness, remediation workflows, policy enforcement, and governance KPIs." 
                },
                { 
                  q: "Can DeepSense detect insider threats and operational abuse?", 
                  a: "Yes. DeepSense uses behavioral analytics and graph intelligence to identify suspicious employee activity and governance violations." 
                },
                { 
                  q: "Does DeepSense support executive and board-level reporting?", 
                  a: "Yes. The platform provides executive dashboards, enterprise heatmaps, governance reporting, and explainable risk analytics." 
                },
                { 
                  q: "Can DeepSense integrate with enterprise GRC and ERP systems?", 
                  a: "Yes. DeepSense integrates with ERP, HR, procurement, governance, and operational systems to centralize enterprise intelligence." 
                },
                { 
                  q: "Is DeepSense suitable for large enterprise risk organizations?", 
                  a: "Yes. DeepSense is designed for enterprise-scale governance, operational resilience, and organizational risk management." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build a Unified Enterprise Risk Intelligence Program</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure enterprise systems and prevent <br />
                <span className="text-white/40 font-bold">insider breaches dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Centralize enterprise visibility, strengthen governance operations, automate controls monitoring, and improve organizational resilience using enterprise-grade enterprise risk intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/enterprise-risk-teams#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Enterprise Risk Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
