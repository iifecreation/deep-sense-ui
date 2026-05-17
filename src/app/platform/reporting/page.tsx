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

export default function PlatformReportingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("aml");
  
  // Interactive console parameters
  const [reportTarget, setReportTarget] = useState<string>("executive");
  const [kpiForcing, setKpiForcing] = useState<boolean>(true);
  const [amlTrace, setAmlTrace] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic reporting metrics
  const calculateReportingMetrics = () => {
    let riskPosture = "99.2%";
    let fraudExposure = "0 open exposures";
    let slaCompliance = "Immaculate (99.98% within target)";
    let recommendation = "REPORTING FABRIC GREEN: All SEC and GRC regulatory dashboards isolated cleanly";
    let color = "text-emerald-400";
    
    if (reportTarget === "operational") {
      riskPosture = "48.2%";
      fraudExposure = "18 critical exposures";
      slaCompliance = "Lagging (82.4% within target)";
      recommendation = "CRITICAL METRIC HIGH: raw log latency causing GRC compliance file generation bottlenecks.";
      color = "text-red-400 animate-pulse";
    }
    if (kpiForcing) {
      fraudExposure = "0 open exposures";
    }
    if (amlTrace) {
      slaCompliance = "100.00% absolute alignment";
    }
    
    return { riskPosture, fraudExposure, slaCompliance, recommendation, color };
  };

  const { riskPosture, fraudExposure, slaCompliance, recommendation, color } = calculateReportingMetrics();

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
                <FileSpreadsheet className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                EXECUTIVE INTELLIGENCE & REGULATORY REPORTING
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Transform Fraud, Risk, and Governance <br />
                <span className="text-zinc-400">Data Into Executive Intelligence</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Reporting centralizes fraud analytics, operational intelligence, governance metrics, AI insights, regulatory reporting, and executive decision support into one unified enterprise reporting environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Reporting Demo
                </Link>
                <Link href="/platform/reporting#lifecycle" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Executive Dashboards
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for executives, fraud leadership, AML teams, governance offices, regulators, operational analysts, and enterprise decision-makers.
                </span>
              </div>
            </div>

            {/* Hero Interactive Experience Widget */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Executive Fraud & Governance Intelligence Center</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">REPORT ENVELOPE: NOMINAL</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live reporting environment visualizing: fraud loss analytics, operational KPIs, governance posture, AML reporting, AI-generated summaries, investigation metrics, fraud trends, and executive intelligence dashboards.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Reporting Modules */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Reporting Modules</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Executive Dashboards",
                        "Fraud Analytics",
                        "AML Reporting",
                        "Governance Metrics",
                        "Operational KPIs",
                        "AI Intelligence Reports",
                        "Investigation Reporting",
                        "Audit Reporting",
                        "Workflow Performance",
                        "Regulatory Intelligence"
                      ].map((mod, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{mod}</span>
                          <span className="text-[9px] text-zinc-600">v4.8</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Column: Live Executive Intelligence Workspace */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>LIVE EXECUTIVE INTELLIGENCE WORKSPACE</span>
                        <span>REGULATORY CONTROLS ON</span>
                      </div>

                      {/* Configurations */}
                      <div className="grid grid-cols-3 gap-4 text-[10px] mb-6">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">Report Level</span>
                          <select 
                            value={reportTarget} 
                            onChange={(e) => setReportTarget(e.target.value)}
                            className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-[9px] w-full"
                          >
                            <option value="executive">Board-level summary</option>
                            <option value="operational">Operational raw metrics</option>
                          </select>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">KPI forcing</span>
                          <input 
                            type="checkbox" 
                            checked={kpiForcing} 
                            onChange={(e) => setKpiForcing(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-1">
                          <span className="text-zinc-500 block uppercase">AML filings trace</span>
                          <input 
                            type="checkbox" 
                            checked={amlTrace} 
                            onChange={(e) => setAmlTrace(e.target.checked)}
                            className="w-4 h-4 accent-red-600 block mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">executive risk posture</span>
                          <span className="text-xl font-bold text-white mt-1 block">{riskPosture}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">unresolved exposure</span>
                          <span className="text-xl font-bold text-white mt-1 block">{fraudExposure}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">reporting SLA metrics</span>
                          <span className={`text-xl font-bold mt-1 block ${slaCompliance === "Lagging (82.4% within target)" ? "text-red-400 animate-pulse font-extrabold" : "text-emerald-400"}`}>
                            {slaCompliance}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Operational Timeline */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Operational Timeline</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[19:30:10] • report generation: regional operational SLA audit reports dispatched</div>
                        <div>[19:30:25] • executive escalations: none pending globally</div>
                        <div>[19:30:40] • AML filing activity: SAR exports isolated and packaged</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Explanations */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">AI-Generated Summaries</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase font-mono">AI-Generated Analysis</span>
                          <span className={`mt-1 block text-[11px] leading-relaxed font-bold ${color}`}>
                            {recommendation}
                          </span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase font-mono font-mono">governance alerts</span>
                          <p className="mt-1 leading-relaxed">
                            Continuous data classification audit trace verified. Zero drift.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• active SIEM endpoint connections healthy</span>
                      <span>• disaster recovery pipelines operational</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Autonomous Reporting</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              One Unified Reporting Layer Across Fraud, Risk, and Governance Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Reporting centralizes: fraud intelligence, transaction analytics, governance visibility, AI-generated insights, operational KPIs, executive dashboards, audit evidence, and regulatory reporting. The platform continuously transforms operational data into: strategic executive insights, fraud performance metrics, governance analytics, operational intelligence, AML reporting, investigation visibility, and organizational accountability reporting. DeepSense enables organizations to: improve executive decision-making, strengthen regulatory readiness, reduce reporting overhead, automate intelligence generation, centralize operational transparency, and accelerate governance visibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "improve executive decisions", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "strengthen regulatory readiness", desc: "Verify portal checkouts without introducing user friction." },
                { title: "reduce reporting overhead", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "automate intelligence generation", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "centralize transparency", desc: "Support digital GRC with active security control overlays." },
                { title: "accelerate governance visibility", desc: "Block duplicate submissions before cash-outs settle." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] hover:shadow-2xl hover:border-red-100 transition-all duration-300 flex flex-col gap-6">
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{item.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: CORE CAPABILITIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white" id="capabilities">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Capabilities Grid</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise Reporting & Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Executive Intelligence Dashboards", desc: "Visualize fraud trends, operational KPIs, governance posture, organizational exposure, regional intelligence, and operational performance." },
                { title: "Fraud Analytics & Performance", desc: "Track fraud losses, fraud prevention efficiency, alert volumes, detection accuracy, false positives, and investigation outcomes." },
                { title: "AML & Regulatory Reporting", desc: "Generate AML summaries, suspicious activity reports, transaction intelligence reports, compliance filings, governance disclosures, and operational oversight reports." },
                { title: "Governance & Risk Reporting", desc: "Monitor governance posture, unresolved escalations, policy violations, operational accountability, remediation progress, and AI governance exposure." },
                { title: "Operational KPI Reporting", desc: "Analyze analyst productivity, investigation SLAs, workflow efficiency, operational throughput, escalation performance, and remediation timelines." },
                { title: "AI-Generated Intelligence", desc: "Use AI to summarize investigations, explain fraud trends, identify operational anomalies, prioritize executive risks, and generate governance summaries." },
                { title: "Real-Time Operational Dashboards", desc: "Monitor live fraud activity, onboarding intelligence, transaction monitoring, AI operations, workflow execution, and governance activity." },
                { title: "Audit & Evidence Reporting", desc: "Centralize audit evidence, governance logs, investigation history, AI traceability, operational approvals, and remediation records." },
                { title: "Custom Report Builder", desc: "Build executive dashboards, operational analytics, fraud intelligence reports, governance scorecards, regulatory exports, and workflow performance reports." },
                { title: "Scheduled Distribution", desc: "Automate executive reports, board summaries, AML filings, governance briefings, operational snapshots, and compliance reporting." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-red-500 font-bold block mb-2 font-mono">REP-0{idx+1}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: ARCHITECTURE LIFECYCLE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="lifecycle">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Architecture Layers</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Generates Enterprise Intelligence Reporting
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Collection", desc: "DeepSense ingests fraud alerts, transaction telemetry, onboarding activity, governance workflows, investigation outcomes, operational KPIs, and AI decision logs." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches data using AI summarization, graph intelligence, behavioral analytics, governance correlation, operational history, and organizational context." },
                { title: "Step 3 — Analytics", desc: "DeepSense continuously evaluates fraud trends, operational performance, governance exposure, investigation efficiency, AML activity, and organizational accountability." },
                { title: "Step 4 — Generation", desc: "The system generates executive summaries, fraud heatmaps, governance dashboards, operational insights, strategic analytics, and AI-generated recommendations." },
                { title: "Step 5 — Distribution", desc: "Reports are securely distributed, audit logged, governance reviewed, archived for compliance, and operationalized for leadership." }
              ].map((step, idx) => (
                <div key={idx} className="p-8 bg-white border border-gray-100 rounded-3xl relative flex flex-col justify-between">
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

        {/* ================= SECTION 5: AI INTEL WORKSPACE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block font-mono">Cognitive Reports</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              AI-Powered Executive Decision Intelligence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "AI Executive Summaries", desc: "Verify portal checkouts and detect behavioral anomalies dynamically without introducing user friction." },
                { title: "Fraud Trend Forecasting", desc: "Continuous token mapping and webhook authentication validation dynamically blocks malicious pipelines." },
                { title: "Governance Risk Prioritization", desc: "Enforce multi-tenant environment separation rules, tracking session trust indexes and regional constraints." },
                { title: "Operational KPI Intelligence", desc: "Map login anomalies and device trust indicators dynamically to block rogue cloud environment changes." },
                { title: "AI Investigation Reporting", desc: "Equip security analysts with visual transaction relationship graphs and continuous tenant vulnerability checks." },
                { title: "Executive Board Reporting", desc: "Block duplicate submissions before cash-outs settle using proactive AI vulnerability scoping." }
              ].map((sec, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-red-500" />
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{sec.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: SUPPORTED FRAMEWORKS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Frameworks</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Regulated Enterprise Reporting Environments
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "aml", label: "AML Programs" },
                { id: "pci", label: "PCI DSS Reporting" },
                { id: "soc2", label: "SOC 2 Visibility" },
                { id: "iso", label: "ISO 27001 Oversight" },
                { id: "audit", label: "Internal Audit" },
                { id: "risk", label: "Operational Risk" }
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
              {activeTab === "aml" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">AML SAR filing automation templates.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "pci" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">PCI DSS compliance metrics & data classification audits.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "soc2" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">SOC 2 Trust Services Criteria monitoring.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "iso" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">ISO/IEC 27001 information security dashboards.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "audit" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Continuous ledger validation and threat vector oversight.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "risk" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Executive GRC committee summaries & tracking.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">REPORTING FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What reporting capabilities does DeepSense provide?", 
                  a: "DeepSense provides executive dashboards, fraud analytics, AML reporting, governance visibility, operational KPI reporting, AI-generated summaries, and audit-ready intelligence reporting." 
                },
                { 
                  q: "Can DeepSense automate regulatory and AML reporting?", 
                  a: "Yes. The platform automates operational reporting, suspicious activity summaries, governance reporting, executive reporting, and audit-ready intelligence generation." 
                },
                { 
                  q: "Does DeepSense support real-time operational dashboards?", 
                  a: "Yes. DeepSense provides live fraud monitoring dashboards, operational KPI tracking, governance visibility, and AI-driven intelligence reporting." 
                },
                { 
                  q: "Can executives customize dashboards and reporting workflows?", 
                  a: "Yes. DeepSense supports configurable dashboards, custom report builders, scheduled reporting, board-level summaries, and operational analytics customization." 
                },
                { 
                  q: "Does DeepSense support AI-generated executive intelligence?", 
                  a: "Yes. DeepSense AI generates fraud summaries, operational insights, governance intelligence, anomaly explanations, and strategic reporting recommendations." 
                },
                { 
                  q: "Is DeepSense Reporting suitable for enterprise-scale governance and regulatory environments?", 
                  a: "Yes. DeepSense is designed for regulated industries, enterprise governance organizations, executive leadership teams, and operational intelligence environments." 
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

        {/* ================= SECTION 8: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-50/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Transform Operational Data Into Executive Fraud and Governance Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Transform operational telemetry and scale <br />
                <span className="text-white/40 font-bold font-bold font-bold">board-level audit compliance logs.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Centralize executive reporting, automate regulatory intelligence, visualize fraud performance, and operationalize governance analytics using DeepSense Reporting.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Reporting Demo
              </Link>
              <Link href="/platform/reporting#lifecycle" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Executive Dashboards
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
