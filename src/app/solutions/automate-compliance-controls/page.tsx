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

export default function AutomateComplianceControlsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive compliance sandbox parameters
  const [controlsStatus, setControlsStatus] = useState<string>("optimized");
  const [evidenceCollection, setEvidenceCollection] = useState<boolean>(true);
  const [frameworkScope, setFrameworkScope] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic compliance maturity parameters
  const calculateComplianceMaturity = () => {
    let score = 98; // base health score
    
    if (controlsStatus === "violations") score -= 45;
    if (!evidenceCollection) score -= 25;
    if (frameworkScope) score -= 14;
    
    score = Math.max(score, 8);
    
    let status = "OPTIMIZED GRC RESILIENCE";
    let color = "text-emerald-500";
    if (score <= 35) {
      status = "HIGH IMPACT PRIVILEGE VIOLATIONS DETECTED";
      color = "text-red-500";
    } else if (score <= 65) {
      status = "MANUAL BATCH GRC AUDITING GAPS";
      color = "text-amber-500";
    } else if (score <= 85) {
      status = "STANDARD CONTROLS POLICY EXCEPTION";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateComplianceMaturity();

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
                CONTINUOUS COMPLIANCE & CONTROLS AUTOMATION
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Automate Compliance Controls and <br />
                <span className="text-zinc-400">Continuously Monitor Enterprise Risk</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps enterprises automate compliance operations, continuously monitor internal controls, detect governance failures, and strengthen audit readiness using AI-driven analytics and real-time intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/automate-compliance-controls#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Compliance Workflows
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for compliance teams, GRC organizations, audit departments, financial institutions, healthcare providers, government agencies, and regulated enterprises.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Continuous Compliance Monitoring Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Continuous Compliance Monitoring Command Center</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">CONTINUOUS CONTROLS ENGINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live enterprise compliance console visualizing real-time control effectiveness, automated evidence collection, policy violation monitoring, compliance health scoring, audit readiness indicators, remediation workflow tracking, governance heatmaps, and regulatory exposure intelligence.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Compliance Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Continuous Controls Monitor</span>
                        <select 
                          value={controlsStatus} 
                          onChange={(e) => setControlsStatus(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="optimized">Optimized GRC logs</option>
                          <option value="violations">Coordinated privilege violations</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Automated evidence capture</span>
                        <input 
                          type="checkbox" 
                          checked={evidenceCollection} 
                          onChange={(e) => setEvidenceCollection(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Global GDPR/SOX/HIPAA frameworks</span>
                        <input 
                          type="checkbox" 
                          checked={frameworkScope} 
                          onChange={(e) => setFrameworkScope(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE COMPLIANCE TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Audit Evidence Automation</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {controlsStatus === "violations" ? "Active Segregation Anomaly" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Regulatory Risk Heatmap</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {frameworkScope ? "Active Framework Alert" : "Standard GRC logs"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">COMPLIANCE HEALTH SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">LEGAL RESOLUTION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: Policy enforcement active</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">GRC Gaps</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Manual Compliance Operations Create Enterprise Risk and Operational Inefficiency
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern enterprises must continuously comply with: internal governance controls, regulatory obligations, audit requirements, data protection mandates, financial crime frameworks, operational resilience standards, industry-specific controls, and third-party governance obligations. Compliance teams increasingly struggle with: fragmented compliance systems, manual evidence gathering, delayed control testing, disconnected governance visibility, operational complexity, and audit preparation bottlenecks. Organizations without continuous controls monitoring face: audit failures, policy violations, operational blind spots, regulatory penalties, control breakdowns, insider-risk exposure, and reputational damage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Manual Control Testing", desc: "Traditional compliance reviews are slow, expensive, and reactive.", icon: <Shield /> },
                { title: "Limited Real-Time Visibility", desc: "Organizations struggle to continuously monitor operational compliance.", icon: <Users /> },
                { title: "Audit Preparation Complexity", desc: "Audit evidence collection remains fragmented and time-consuming.", icon: <Sliders /> },
                { title: "Policy & Access Violations", desc: "Unauthorized operational behavior creates hidden governance exposure.", icon: <Clock /> },
                { title: "Cross-Framework Compliance Complexity", desc: "Multiple regulatory frameworks increase operational overhead.", icon: <Building /> },
                { title: "Delayed Remediation", desc: "Control failures are often discovered too late to reduce exposure.", icon: <Sliders /> }
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

            {/* Compliance Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">COMPLIANCE LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Control Ingestion", desc: "Patient onboarding verified dynamically using liveness checks." },
                  { title: "2. Policy Evaluation", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Evidence Collection", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Remediation Workflows", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Audit Escalation", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
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
              Unified Compliance Automation and Controls Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines continuous controls monitoring, governance automation, behavioral analytics, operational telemetry, graph intelligence, policy monitoring, and audit orchestration into a unified compliance intelligence platform. The platform continuously evaluates: control effectiveness, policy enforcement, operational workflows, privileged access activity, governance anomalies, remediation workflows, audit readiness, employee behavior, and compliance risk indicators. DeepSense enables organizations to: automate compliance operations, reduce manual audit preparation, strengthen governance visibility, detect control failures in real time, improve remediation workflows, centralize compliance intelligence, and strengthen enterprise resilience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Automate compliance operations", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Reduce manual audit preparation", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Strengthen governance visibility", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Detect control failures in real time", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Improve remediation workflows", desc: "Support digital GRC with active security control overlays." },
                { title: "Centralize compliance intelligence", desc: "Block duplicate operational logs before cash-outs settle." }
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
              Continuous Controls Monitoring Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Continuous Controls Monitoring", desc: "Monitor control failures, operational anomalies, segregation-of-duty violations, privileged access misuse, workflow inconsistencies, and governance exceptions." },
                { title: "Compliance Automation", desc: "Automate evidence collection, compliance reviews, remediation workflows, control attestations, audit preparation, and governance reporting." },
                { title: "Policy Enforcement Monitoring", desc: "Detect policy violations, unauthorized activity, suspicious workflow behavior, access control gaps, and operational inconsistencies." },
                { title: "Audit Readiness Intelligence", desc: "Track audit status, evidence completeness, remediation progress, unresolved findings, compliance gaps, and governance maturity." },
                { title: "Behavioral Analytics", desc: "Analyze employee behavior, privileged access activity, operational workflows, policy adherence, and governance trust indicators." },
                { title: "Third-Party Compliance Monitoring", desc: "Monitor vendor governance, third-party policy adherence, operational exposure, procurement compliance, and external risk indicators." },
                { title: "Regulatory Framework Mapping", desc: "Support SOX, ISO 27001, SOC 2, GDPR, PCI DSS, HIPAA, AML obligations, and enterprise governance frameworks." },
                { title: "Graph Intelligence", desc: "Visualize operational relationships, governance dependencies, insider-risk ecosystems, policy violations, and organizational exposure." },
                { title: "Case Management & Remediation", desc: "Coordinate compliance investigations, remediation workflows, audit escalations, evidence reviews, and governance reporting." },
                { title: "Executive Governance Reporting", desc: "Generate compliance scorecards, board-ready dashboards, audit summaries, operational exposure reports, and remediation analytics." }
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
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100" id="workflows">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Automates Compliance Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests ERP telemetry, IAM activity, HR workflows, policy systems, audit logs, operational telemetry, and governance workflows." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using behavioral analytics, graph intelligence, governance indicators, operational telemetry, risk intelligence, and compliance mappings." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates control effectiveness, policy adherence, audit readiness, operational anomalies, privileged access behavior, and governance exposure." },
                { title: "Step 4 — Decisioning", desc: "The system generates compliance alerts, remediation tasks, governance escalations, audit warnings, and operational recommendations." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers audit workflows, governance reporting, remediation escalation, evidence reviews, and executive notifications." }
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
              Built for Regulated Enterprise Environments
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "financial", label: "Financial Services" },
                { id: "healthcare", label: "Healthcare Organizations" },
                { id: "government", label: "Government & Public Sector" },
                { id: "saas", label: "Enterprise SaaS & Tech" },
                { id: "industrial", label: "Manufacturing & Industrial" }
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
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Automate SOX controls, AML governance, audit readiness, and operational monitoring.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "healthcare" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor HIPAA controls, privileged access, operational workflows, and compliance exposure.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "government" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Strengthen governance visibility, audit transparency, operational compliance, and policy enforcement.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "saas" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure access governance, cloud compliance, operational controls, and enterprise resilience.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "industrial" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect operational violations, insider abuse, governance failures, and control anomalies.</h4>
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
              Real-Time Compliance and Governance Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Compliance Operations Dashboard", desc: "Control failures, policy violations, governance alerts, and remediation visibility." },
                { title: "Audit Readiness Dashboard", desc: "Evidence collection status, unresolved findings, audit preparation analytics, and compliance maturity indicators." },
                { title: "Governance & Controls Intelligence", desc: "Control effectiveness, operational trust analytics, behavioral anomalies, and insider-risk indicators." },
                { title: "Third-Party Compliance Dashboard", desc: "Vendor governance exposure, operational compliance indicators, procurement oversight, and policy adherence visibility." },
                { title: "Investigation Workspace", desc: "Compliance timelines, remediation tracking, evidence management, and executive reporting." }
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
                Enterprise-Grade Security for Governance and Compliance Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and compliance-ready sovereign hosting options for every single compliance event.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Compliance Decisions", desc: "Every governance alert includes reason codes, operational evidence, behavioral indicators, control mappings, and remediation context." },
                { title: "Audit Logging", desc: "Track policy reviews, governance escalations, remediation workflows, audit activities, and operational changes." },
                { title: "Multi-Tenant Governance Security", desc: "Secure operational separation across business units, compliance environments, and governance workflows." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with SOX, SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">GRC COMPLIANCE FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense continuously monitor enterprise controls?", 
                  a: "Yes. DeepSense continuously evaluates operational workflows, control effectiveness, privileged access behavior, and governance anomalies in real time." 
                },
                { 
                  q: "Does DeepSense automate audit evidence collection?", 
                  a: "Yes. The platform automates evidence gathering, remediation tracking, compliance reporting, and audit preparation workflows." 
                },
                { 
                  q: "Can DeepSense detect policy and governance violations?", 
                  a: "Yes. DeepSense identifies unauthorized operational behavior, access violations, segregation-of-duty issues, and governance failures." 
                },
                { 
                  q: "Does DeepSense support multiple regulatory frameworks?", 
                  a: "Yes. The platform supports SOX, ISO 27001, SOC 2, HIPAA, GDPR, PCI DSS, AML frameworks, and enterprise governance programs." 
                },
                { 
                  q: "Can DeepSense support executive governance reporting?", 
                  a: "Yes. DeepSense provides executive dashboards, governance scorecards, remediation analytics, and board-ready reporting." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise-scale compliance operations?", 
                  a: "Yes. DeepSense is designed for large-scale governance, compliance automation, audit operations, and enterprise resilience programs." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build a Continuous Compliance and Governance Intelligence Program</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure compliance frameworks and prevent <br />
                <span className="text-white/40 font-bold">control failures dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Automate compliance operations, continuously monitor controls, improve audit readiness, and strengthen governance resilience using enterprise-grade compliance intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/automate-compliance-controls#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Compliance Workflows
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
