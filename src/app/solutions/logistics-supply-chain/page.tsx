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

export default function LogisticsSupplyChainPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("freight");
  
  // Interactive Logistics parameters
  const [gpsTelemetry, setGpsTelemetry] = useState<string>("normal");
  const [carrierVerification, setCarrierVerification] = useState<boolean>(true);
  const [invoiceSpike, setInvoiceSpike] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic logistics risk parameters
  const calculateLogisticsRisk = () => {
    let score = 9; // base risk score
    
    if (gpsTelemetry === "spike") score += 42;
    if (invoiceSpike) score += 34;
    if (!carrierVerification) score += 13;
    
    score = Math.min(score, 99);
    
    let status = "SECURE FREIGHT DISPATCH";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "COORDINATED CARGO DIVERSION ALERT";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "UNTRUSTED CARRIER SIGNUP";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "HIGH VALUE DISBURSEMENT DRIFT";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateLogisticsRisk();

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
                LOGISTICS & SUPPLY-CHAIN FRAUD INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect Logistics and Supply Chains <br />
                <span className="text-zinc-400">From Fraud, Theft, and Operational Abuse</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps logistics providers, freight operators, and supply-chain ecosystems detect fraud, secure shipment operations, monitor vendor risk, and strengthen operational governance using AI-driven analytics and real-time intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/logistics-supply-chain#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Logistics Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for logistics providers, freight operators, warehouse networks, transportation ecosystems, delivery platforms, and enterprise supply-chain operations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Supply-Chain Fraud Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Vendor Integrity Dashboard</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">LOGISTICS CORE COMPLIANCE ENGINE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Logistics Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">GPS Telemetry Check</span>
                        <select 
                          value={gpsTelemetry} 
                          onChange={(e) => setGpsTelemetry(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="normal">Standard route history</option>
                          <option value="spike">Coordinated route diversion spikes</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Carrier eID verified</span>
                        <input 
                          type="checkbox" 
                          checked={carrierVerification} 
                          onChange={(e) => setCarrierVerification(e.target.checked)}
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
                        <span>DEEPSENSE LOGISTICS TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Cargo Theft Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {gpsTelemetry === "spike" ? "Coordinated Diversion Vector" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Shipment Risk Score</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {invoiceSpike ? "Active Ring Cluster Alert" : "Standard invoice history"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">SHIPMENT RISK SCORE</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Logistics Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Supply Chains Face Increasing Fraud and Operational Risk
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern logistics and supply-chain ecosystems manage shipment operations, freight coordination, warehouse activity, fleet management, procurement workflows, carrier onboarding, delivery verification, and supplier payments. Fraudsters increasingly exploit logistics ecosystems using cargo theft, fake delivery confirmations, procurement fraud, invoice manipulation, carrier impersonation, fuel theft, insider abuse, vendor collusion, and coordinated fraud networks. Traditional logistics systems often struggle with fragmented operational visibility, disconnected vendor intelligence, delayed fraud detection, manual investigations, limited behavioral analytics, and operational scalability. Without connected logistics intelligence, organizations face cargo losses, operational disruption, payment fraud, procurement abuse, insider threats, vendor risk exposure, and reputational damage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Cargo Theft", desc: "High-value shipments are increasingly targeted by organized theft networks.", icon: <Shield /> },
                { title: "Fake Deliveries", desc: "Fraudsters manipulate proof-of-delivery workflows and shipment confirmations.", icon: <Users /> },
                { title: "Vendor & Carrier Fraud", desc: "Fake carriers and collusive vendors exploit supply-chain operations.", icon: <Sliders /> },
                { title: "Invoice & Procurement Abuse", desc: "Fraudulent invoices and procurement manipulation create financial exposure.", icon: <Clock /> },
                { title: "Insider Threats", desc: "Internal operational abuse and privilege misuse create hidden risk.", icon: <Building /> },
                { title: "Fleet & Dispatch Manipulation", desc: "Operational workflows and routing systems are vulnerable to exploitation.", icon: <Sliders /> }
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

            {/* Logistics Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">LOGISTICS RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Shipment intake", desc: "Patient onboarding verified dynamically using HIPAA-compliant liveness checks." },
                  { title: "2. Dispatch verification", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Fraud Scoring", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Payment check", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
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
              Unified Logistics Fraud & Operational Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines fraud detection, shipment analytics, behavioral intelligence, vendor monitoring, graph analysis, operational telemetry, and governance automation into a unified logistics risk platform. The platform continuously evaluates shipment activity, vendor trust, fleet operations, dispatch behavior, delivery integrity, payment workflows, operational anomalies, graph relationships, and insider-risk indicators. DeepSense enables logistics organizations to: reduce cargo losses, secure operational workflows, strengthen vendor trust, reduce payment fraud, improve visibility, accelerate investigations, and strengthen supply-chain resilience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce cargo losses", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Secure operational workflows", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Strengthen vendor trust", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Reduce payment fraud", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Improve visibility", desc: "Support HIPAA-aligned workflows with active security control overlays." },
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
              Logistics & Supply-Chain Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Shipment & Cargo Fraud Detection", desc: "Detect suspicious shipments, cargo diversion, fake deliveries, route anomalies, shipment manipulation, and theft indicators." },
                { title: "Vendor & Carrier Risk Intelligence", desc: "Monitor carrier onboarding, fake vendors, collusive relationships, operational anomalies, trust indicators, and procurement exposure." },
                { title: "Fleet & Dispatch Monitoring", desc: "Analyze dispatch anomalies, route inconsistencies, fleet misuse, suspicious operational activity, and unauthorized movement." },
                { title: "Invoice & Payment Fraud Detection", desc: "Identify duplicate invoices, fraudulent payouts, suspicious procurement activity, abnormal payment behavior, and settlement anomalies." },
                { title: "Insider Threat Monitoring", desc: "Detect operational abuse, privilege misuse, unauthorized access, suspicious employee behavior, and governance violations." },
                { title: "Behavioral Analytics", desc: "Analyze shipment workflows, operational behavior, dispatch consistency, vendor trust indicators, and delivery patterns." },
                { title: "Device & IoT Intelligence", desc: "Detect spoofed GPS telemetry, suspicious device behavior, unauthorized access environments, route manipulation, and infrastructure anomalies." },
                { title: "Graph Intelligence", desc: "Visualize linked vendors, connected shipments, collusive carrier networks, shared infrastructure, and operational relationships." },
                { title: "Case Management & Investigations", desc: "Coordinate shipment investigations, procurement reviews, insider-risk escalations, evidence workflows, and remediation tracking." },
                { title: "Governance & Compliance Monitoring", desc: "Support operational governance, audit readiness, logistics controls, vendor compliance, and remediation workflows." }
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
              How DeepSense Protects Logistics and Supply-Chain Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests shipment telemetry, dispatch activity, fleet data, vendor workflows, payment transactions, warehouse operations, and operational signals." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches events using behavioral analytics, graph intelligence, operational telemetry, fraud indicators, vendor trust signals, and route intelligence." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates shipment legitimacy, operational trust, payment exposure, vendor integrity, insider-risk indicators, and fraud relationships." },
                { title: "Step 4 — Decisioning", desc: "The system generates risk scores, shipment alerts, dispatch interventions, payment escalations, and operational warnings." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers investigations, procurement reviews, operational escalations, remediation workflows, and governance reporting." }
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
              Built for Modern Supply-Chain Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "freight", label: "Freight & Transportation" },
                { id: "warehouse", label: "Warehouse Networks" },
                { id: "platform", label: "Supply-Chain Platforms" },
                { id: "delivery", label: "Last-Mile Delivery" },
                { id: "procurement", label: "Enterprise Procurement" }
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
              {activeTab === "freight" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect shipment operations, dispatch systems, delivery verification, and fleet integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "warehouse" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor inventory movement, operational abuse, employee anomalies, and shipment integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "platform" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure vendor onboarding, procurement workflows, payment systems, and operational governance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "delivery" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect fake deliveries, route manipulation, operational abuse, and account compromise.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "procurement" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent invoice fraud, collusive vendors, procurement manipulation, and payout abuse.</h4>
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
              Connected Across the Logistics Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links logistics fraud deciders with active GRC dashboards, GRC evidence matrices, device intelligence engines, and automated incident logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Behavioral Analytics", desc: "Operational anomaly detection and workflow intelligence." },
                { title: "Device & IoT Intelligence", desc: "Fleet telemetry and route integrity monitoring." },
                { title: "Graph Intelligence", desc: "Connected vendor ecosystem and collusive network visibility." },
                { title: "Payment Fraud Intelligence", desc: "Procurement and logistics payment monitoring." },
                { title: "UEBA & Insider Risk Monitoring", desc: "Behavioral anomaly detection across employees and operations." },
                { title: "GRC & Controls Monitoring", desc: "Supply-chain governance and audit readiness intelligence." },
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
              Real-Time Logistics Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Logistics Fraud Operations Dashboard", desc: "Shipment fraud alerts, cargo theft monitoring, operational abuse visibility, and dispatch analytics." },
                { title: "Vendor Trust Intelligence", desc: "Vendor risk scoring, onboarding analytics, collusive relationship visibility, and operational trust indicators." },
                { title: "Fleet & Dispatch Analytics", desc: "Route anomaly detection, dispatch monitoring, fleet risk visibility, and operational telemetry." },
                { title: "Procurement & Payment Dashboard", desc: "Invoice monitoring, payout anomalies, procurement risk visibility, and fraud indicators." },
                { title: "Investigation Workspace", desc: "Linked entities, shipment timelines, graph investigations, evidence management, and operational intelligence." }
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
              Designed for Global Logistics and Supply-Chain Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous logistics models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Freight & Transportation Providers", "Warehouse & Distribution Networks", "Last-Mile Delivery Platforms", "Supply-Chain Platforms", "Fleet Management Providers", "Maritime Logistics",
                "Air Cargo Operations", "Rail & Freight Networks", "Enterprise Procurement Operations", "Manufacturing Supply Chains", "Cross-Border Logistics", "Third-Party Logistics Providers"
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
                Enterprise-Grade Security for Logistics Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and HIPAA-compliant sovereign hosting options for every single dispatch transaction.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Risk Decisions", desc: "Every fraud and operational decision includes reason codes, behavioral evidence, and shipment telemetry." },
                { title: "Audit Logging", desc: "Track shipment investigations, procurement reviews, payment escalations, and governance workflows." },
                { title: "Multi-Tenant Logistics Security", desc: "Secure operational separation across logistics environments, vendor ecosystems, and operational teams." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with logistics governance, operational controls, procurement compliance, and audit readiness." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">LOGISTICS FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect shipment and cargo fraud in real time?", 
                  a: "Yes. DeepSense continuously evaluates shipment telemetry, route integrity, delivery workflows, and operational anomalies in real time." 
                },
                { 
                  q: "Does DeepSense support vendor and carrier risk monitoring?", 
                  a: "Yes. The platform monitors onboarding integrity, collusive relationships, operational behavior, and procurement exposure." 
                },
                { 
                  q: "Can DeepSense detect fake deliveries and dispatch manipulation?", 
                  a: "Yes. DeepSense identifies suspicious delivery confirmations, route anomalies, and dispatch inconsistencies." 
                },
                { 
                  q: "Does DeepSense support invoice and procurement fraud detection?", 
                  a: "Yes. The platform detects duplicate invoices, payout anomalies, collusive procurement behavior, and settlement manipulation." 
                },
                { 
                  q: "Can DeepSense monitor insider threats in logistics operations?", 
                  a: "Yes. DeepSense monitors privilege misuse, operational abuse, suspicious employee activity, and governance violations." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise logistics ecosystems?", 
                  a: "Yes. DeepSense is designed for large-scale logistics operations, transportation ecosystems, and enterprise supply-chain governance." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Strengthen Supply-Chain Trust With Real-Time Operational Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure dispatch routes and prevent <br />
                <span className="text-white/40 font-bold">cargo diversion anomalies dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect shipments, prevent operational abuse, strengthen vendor trust, and modernize logistics investigations using enterprise-grade supply-chain fraud intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/logistics-supply-chain#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Logistics Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
