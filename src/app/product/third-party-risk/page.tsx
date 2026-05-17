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

export default function ThirdPartyRiskPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("banking");
  
  // Interactive TPRM parameters
  const [vendorType, setVendorType] = useState<string>("fintech");
  const [cyberScreened, setCyberScreened] = useState<boolean>(true);
  const [highConcentration, setHighConcentration] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic Third-Party risk based on inputs
  const calculateThirdPartyRisk = () => {
    let score = 15; // base risk score
    
    if (vendorType === "payout") score += 20;
    if (highConcentration) score += 40;
    if (!cyberScreened) score += 24;
    
    score = Math.min(score, 99);
    
    let status = "NORMAL THIRD-PARTY PROFILE";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "HIGH SUPPLY CHAIN RISK";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "CONCENTRATION WARNING";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "CYBER POSTURE DRIFT";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateThirdPartyRisk();

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
                <Globe className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                CONTINUOUS THIRD-PARTY & SUPPLY CHAIN RISK INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Continuously Monitor Vendor, <br />
                <span className="text-zinc-400">Supplier, and Third-Party Risk</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps enterprises identify vendor risk, sanctions exposure, operational weaknesses, compliance gaps, cyber threats, and supply chain dependencies using continuous monitoring, graph intelligence, and enterprise governance automation.
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
                  Built for financial institutions, regulated enterprises, procurement operations, security teams, compliance programs, and global supply chain ecosystems.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise TPRM Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Third-Party Risk Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">SUPPLY CHAIN SHIELD ACTIVE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Third-Party parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Vendor Category</span>
                        <select 
                          value={vendorType} 
                          onChange={(e) => setVendorType(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="cloud">Cloud Hosting / SaaS</option>
                          <option value="fintech">Fintech Partner</option>
                          <option value="payout">Payout Agent / Gateway</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Cyber Posture Screened</span>
                        <input 
                          type="checkbox" 
                          checked={cyberScreened} 
                          onChange={(e) => setCyberScreened(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">High Concentration Risk</span>
                        <input 
                          type="checkbox" 
                          checked={highConcentration} 
                          onChange={(e) => setHighConcentration(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE TPRM GRAPH ANALYSIS</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Fourth-Party Mapping</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {highConcentration ? "Concentration Flags" : "Dependencies Clear"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Cyber Posture Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {cyberScreened ? "Continuous Check Live" : "Assessments Outdated"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">THIRD-PARTY RISK VALUE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">AUDIT CONTEXT</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">TPRM Gaps</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Third-Party Risk Extends Beyond Vendor Onboarding
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern enterprises rely on increasingly complex ecosystems of vendors, suppliers, contractors, cloud providers, fintech partners, payment processors, software providers, and outsourced operations. Traditional third-party reviews are often periodic, questionnaire-driven, manually maintained, and disconnected from operational telemetry. As vendor ecosystems expand, organizations struggle to continuously monitor sanctions exposure, cyber risk, operational resilience, compliance posture, vendor concentration, fourth-party dependencies, fraud exposure, and geopolitical risk. Without continuous third-party intelligence, organizations face supply chain disruption, operational outages, fraud exposure, regulatory violations, data security incidents, reputational damage, and governance blind spots.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Static Vendor Reviews", desc: "Annual assessments fail to identify rapidly changing vendor risk conditions.", icon: <Shield /> },
                { title: "Hidden Fourth-Party Dependencies", desc: "Critical supplier relationships often exist beyond direct vendor visibility.", icon: <Network /> },
                { title: "Sanctions & Regulatory Exposure", desc: "Organizations may unknowingly transact with sanctioned or high-risk entities.", icon: <AlertTriangle /> },
                { title: "Operational Resilience Gaps", desc: "Vendor outages and failures create cascading business disruptions.", icon: <Clock /> },
                { title: "Cyber & Security Risk", desc: "Third-party systems may introduce data exposure and operational vulnerabilities.", icon: <Sliders /> },
                { title: "Fragmented Governance", desc: "Procurement, compliance, legal, and security teams often operate independently.", icon: <Sliders /> }
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

            {/* Vendor Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">VENDOR LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Vendor registers details and uploads compliance questionnaires." },
                  { title: "2. Assessment", desc: "DeepSense screens profiles across sanctions and cyber posture databases." },
                  { title: "3. Monitoring", desc: "Continuous checks tracking adverse media and system outage health." },
                  { title: "4. Incident Detection", desc: "Platform automatically escalates anomalies when SLA indicators drop." },
                  { title: "5. Remediation Queue", desc: "Risk cases created and assigned to compliance specialists." },
                  { title: "6. Governance Review", desc: "Board members verify corrective controls on audit dashboards." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected Governance</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Unified Third-Party Risk & Supply Chain Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines third-party governance, sanctions screening, operational telemetry, graph intelligence, fraud analytics, compliance monitoring, and continuous controls evaluation into a unified third-party risk platform. The platform continuously evaluates vendor trust, compliance posture, cyber exposure, operational resilience, sanctions exposure, relationship dependencies, fraud indicators, workflow governance, and geopolitical and supply chain risk. DeepSense enables organizations to continuously monitor vendor ecosystems, strengthen supply chain resilience, improve governance visibility, reduce operational exposure, accelerate third-party reviews, improve audit readiness, and strengthen compliance programs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Continuously monitor vendor ecosystems", desc: "Replace yearly reviews with continuous real-time API integrations." },
                { title: "Strengthen supply chain resilience", desc: "Visualize fourth-party connections to avoid concentration risk." },
                { title: "Improve governance visibility", desc: "Enforce uniform SLA standards across departments dynamically." },
                { title: "Reduce operational exposure", desc: "Track provider outages and cyber exposure ratings instantly." },
                { title: "Accelerate third-party reviews", desc: "Automate onboarding document collection and PEP scans." },
                { title: "Improve audit readiness", desc: "Maintain immutable audit evidence repositories for GRC compliance." }
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
              Enterprise Third-Party Risk Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Third-Party Risk Scoring", desc: "Generate vendor trust scores, operational risk ratings, compliance posture indicators, cyber exposure scores, and supply chain risk metrics." },
                { title: "Continuous Vendor Monitoring", desc: "Continuously monitor sanctions exposure, adverse media, operational incidents, compliance drift, cyber posture changes, and financial instability indicators." },
                { title: "Supply Chain Dependency", desc: "Visualize direct vendor relationships, fourth-party dependencies, operational concentration, critical supplier exposure, and interconnected ecosystems." },
                { title: "Third-Party Onboarding", desc: "Evaluate onboarding documentation, compliance attestations, sanctions screening, fraud indicators, risk questionnaires, and governance approvals." },
                { title: "Contract & Compliance", desc: "Track contract obligations, policy requirements, SLA adherence, regulatory controls, attestation workflows, and renewal timelines." },
                { title: "Cyber & Operational Visibility", desc: "Monitor provider outages, operational anomalies, incident exposure, access governance, security telemetry, and resilience indicators." },
                { title: "Fraud & Financial Crime", desc: "Correlate suspicious payments, procurement fraud, sanctions exposure, linked entities, risky jurisdictions, and operational abuse patterns." },
                { title: "Graph Intelligence", desc: "Visualize connected vendors, shared infrastructure, linked payment flows, ownership relationships, and risk propagation pathways." },
                { title: "Audit & Evidence Management", desc: "Maintain vendor assessments, evidence repositories, governance workflows, remediation history, and review timelines." },
                { title: "Investigation & Remediation", desc: "Automatically create vendor risk cases, escalate critical findings, assign remediation owners, track governance actions, and monitor corrective controls." }
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
              How DeepSense Monitors Third-Party Risk Continuously
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests vendor records, contracts, onboarding documents, sanctions data, operational telemetry, procurement workflows, and external risk intelligence." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches vendor profiles using sanctions screening, adverse media, graph relationships, operational analytics, cyber posture indicators, and fraud intelligence." },
                { title: "Step 3 — Monitoring", desc: "DeepSense evaluates vendor risk drift, operational anomalies, compliance gaps, supply chain dependencies, governance violations, and resilience indicators." },
                { title: "Step 4 — Scoring", desc: "The system generates third-party risk scores, operational resilience ratings, governance indicators, and remediation priorities." },
                { title: "Step 5 — Action", desc: "High-risk findings trigger vendor investigations, compliance reviews, remediation workflows, escalation management, and executive reporting." }
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
              Built for Enterprise Third-Party Governance
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "banking", label: "Financial Institutions" },
                { id: "procurement", label: "Enterprise Procurement" },
                { id: "security", label: "Security & Risk Teams" },
                { id: "compliance", label: "Compliance Operations" },
                { id: "executive", label: "Executive Risk Committees" }
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
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor fintech partners, payment processors, AML exposure, and operational resilience.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Maintain rigorous partner risk models. Enforce financial controls mapping directly to regulatory standards.
                  </p>
                </div>
              )}
              {activeTab === "procurement" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage vendor onboarding, supplier governance, contract risk, and procurement compliance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Streamline third-party registrations. Automatically assess vendor risks against active procurement guidelines.
                  </p>
                </div>
              )}
              {activeTab === "security" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect cyber exposure, operational vulnerabilities, privileged access risks, and third-party incidents.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Ensure third-party integrations remain secure. Track provider outages and API availability metrics continuously.
                  </p>
                </div>
              )}
              {activeTab === "compliance" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Validate sanctions compliance, governance controls, attestation workflows, and regulatory readiness.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Keep compliance pipelines fully aligned. Screen third parties against adverse media and global sanction registries.
                  </p>
                </div>
              )}
              {activeTab === "executive" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Gain enterprise vendor visibility, supply chain intelligence, operational resilience insights, and governance analytics.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Equip board members with deep risk visibility. Streamline supply chain dependency maps into board-ready indicators.
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
              Connected Across the DeepSense Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links TPRM risk engines with active AML workflows, GRC dashboards, SIEM telemetry pipelines, and automated incident case logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Procurement & Vendor Risk", desc: "Correlate procurement anomalies with broader third-party governance exposure." },
                { title: "GRC Management", desc: "Map vendor risk into enterprise governance and remediation workflows." },
                { title: "Continuous Controls Monitoring", desc: "Continuously validate vendor governance controls and policy enforcement." },
                { title: "Sanctions & Adverse Media Screening", desc: "Monitor evolving sanctions and reputational exposure continuously." },
                { title: "Graph Intelligence", desc: "Visualize supply chain relationships and operational dependencies." },
                { title: "Case Management", desc: "Escalate vendor findings into investigation and remediation workflows." },
                { title: "SIEM Integrations", desc: "Correlate operational telemetry with enterprise security monitoring." }
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
              Real-Time Third-Party Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Third-Party Operations Dashboard", desc: "Vendor risk trends, operational resilience visibility, sanctions exposure alerts, and governance monitoring." },
                { title: "Supply Chain Intelligence Analytics", desc: "Dependency mapping, concentration risk analysis, fourth-party visibility, and operational exposure heatmaps." },
                { title: "Compliance & Governance Dashboard", desc: "Attestation completion, policy compliance, remediation tracking, and audit readiness monitoring." },
                { title: "Cyber & Operational Monitoring", desc: "Outage visibility, operational incidents, access governance analytics, and resilience scoring." },
                { title: "Investigation Workspace", desc: "Vendor timelines, graph relationships, evidence management, and remediation workflows." }
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
              Designed for Complex Enterprise Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous third-party assessments across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Banking", "Fintech", "Insurance", "Healthcare", "Government", "Telecom",
                "Manufacturing", "Energy", "Enterprise SaaS", "Ecommerce", "Payment Processors", "Global Enterprises"
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
                Enterprise-Grade Vendor Governance and Operational Resilience
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and comprehensive logging for every single third-party audit.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Third-Party Decisions", desc: "Every vendor risk event includes operational context, sanctions indicators, and dependency maps." },
                { title: "Audit Logging", desc: "Track vendor reviews, governance actions, remediation workflows, and evidence updates." },
                { title: "Multi-Tenant Security", desc: "Secure operational separation across organizations, vendor ecosystems, and compliance datasets." },
                { title: "Privacy & Data Governance", desc: "DeepSense minimizes exposure to sensitive vendor and operational data through governed access." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">TPRM FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is third-party risk management?", 
                  a: "Third-party risk management continuously evaluates vendor, supplier, partner, and operational ecosystem exposure across compliance, operational resilience, fraud, and governance domains." 
                },
                { 
                  q: "Can DeepSense continuously monitor vendor risk?", 
                  a: "Yes. DeepSense continuously monitors sanctions exposure, operational risk, cyber posture, compliance drift, and supply chain dependencies." 
                },
                { 
                  q: "Does DeepSense support fourth-party visibility?", 
                  a: "Yes. The platform supports supply chain dependency mapping and fourth-party relationship intelligence." 
                },
                { 
                  q: "Can DeepSense support vendor onboarding workflows?", 
                  a: "Yes. The platform supports onboarding reviews, governance approvals, compliance attestations, and vendor risk scoring." 
                },
                { 
                  q: "Does DeepSense integrate with procurement and ERP systems?", 
                  a: "Yes. DeepSense supports APIs, ERP integrations, orchestration workflows, and enterprise telemetry pipelines." 
                },
                { 
                  q: "Can DeepSense support audit and compliance operations?", 
                  a: "Yes. The platform includes evidence management, remediation tracking, governance workflows, and audit-ready reporting." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Strengthen Supply Chain Resilience and Vendor Governance</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure vendor networks and strengthen continuous <br />
                <span className="text-white/40 font-bold">operational third-party GRC intelligence.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Continuously monitor vendor ecosystems, reduce operational exposure, improve governance visibility, and strengthen enterprise resilience using real-time third-party risk intelligence.
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
