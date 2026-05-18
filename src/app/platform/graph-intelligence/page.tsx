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

export default function GraphIntelligencePlatformPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive graph parameters
  const [graphMode, setGraphMode] = useState<string>("organic");
  const [heatOverlay, setHeatOverlay] = useState<boolean>(true);
  const [aiAssistant, setAiAssistant] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic graph metrics
  const calculateGraphMetrics = () => {
    let nodes = 1240;
    let clusters = 3;
    let alertScore = 21;
    
    if (graphMode === "syndicates") {
      nodes = 15800;
      clusters = 48;
      alertScore = 92;
    }
    if (heatOverlay) {
      alertScore = Math.max(alertScore - 5, 2);
    }
    if (aiAssistant) {
      alertScore = Math.max(alertScore - 12, 1);
    }
    
    return { nodes, clusters, alertScore };
  };

  const { nodes, clusters, alertScore } = calculateGraphMetrics();

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
                FRAUD GRAPH & ENTITY INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Uncover Hidden Fraud Networks With <br />
                <span className="text-zinc-400">Real-Time Graph Intelligence</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense Graph Intelligence connects identities, devices, transactions, merchants, sessions, and operational telemetry into a unified fraud graph that helps analysts uncover hidden relationships, detect coordinated attacks, and accelerate enterprise investigations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Graph Intelligence Demo
                </Link>
                <Link href="/platform/graph-intelligence#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Investigation Workflows
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for fraud teams, AML investigators, cybersecurity analysts, payment processors, fintechs, telecoms, governments, marketplaces, and enterprise risk organizations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Unified Fraud Graph Explorer */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Unified Fraud Graph Explorer</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">GRAPH ENGINE CORE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A fully interactive graph intelligence environment where analysts can explore fraud rings, trace transaction chains, investigate linked identities, analyze suspicious onboarding, visualize insider ecosystems, replay attack timelines, inspect behavioral relationships, and identify laundering networks.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Controls */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Graph Controls</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Graph analysis</span>
                        <select 
                          value={graphMode} 
                          onChange={(e) => setGraphMode(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="organic">Organic tracking</option>
                          <option value="syndicates">Active high-density syndicates</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Risk heat overlays</span>
                        <input 
                          type="checkbox" 
                          checked={heatOverlay} 
                          onChange={(e) => setHeatOverlay(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">AI path summaries</span>
                        <input 
                          type="checkbox" 
                          checked={aiAssistant} 
                          onChange={(e) => setAiAssistant(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] space-y-1 font-mono">
                      <span className="text-zinc-400 block uppercase font-bold">Interactive Nodes</span>
                      <div className="grid grid-cols-2 gap-1 text-zinc-500">
                        <span>• identities</span>
                        <span>• accounts</span>
                        <span>• devices</span>
                        <span>• transactions</span>
                        <span>• merchants</span>
                        <span>• IP addresses</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Column: Live Fraud Graph */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>LIVE FRAUD GRAPH VIEWPORT</span>
                        <span>GRAPH ENGINE ACTIVE</span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Connected entities</span>
                          <span className="text-xl font-bold text-white mt-1 block">{nodes.toLocaleString()}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Risk clusters mapped</span>
                          <span className="text-xl font-bold text-white mt-1 block">{clusters}</span>
                        </div>
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block">Aggregated alert score</span>
                          <span className={`text-xl font-bold mt-1 block ${alertScore > 50 ? "text-red-400 animate-pulse" : "text-emerald-400"}`}>
                            {alertScore}/100
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom timeline scrub */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-2 text-[10px]">
                      <span className="text-zinc-400 font-bold block">Bottom Timeline Console</span>
                      <div className="space-y-1 text-zinc-500 text-[9px]">
                        <div>[18:38:02] • account creation event: node updated dynamically</div>
                        <div>[18:38:12] • onboarding attempt: transaction flow traced against blacklist</div>
                        <div>[18:39:40] • analyst intervention: high-risk escalation triggered</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel: Intelligence Feed */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Right Panel — AI Graph Insights</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Relationship Explanation</span>
                          <p className="mt-1 leading-relaxed">
                            Mule device footprint resolved across 4 distinct geographic regions within 12 seconds.
                          </p>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Entity trust score</span>
                          <p className="mt-1 leading-relaxed">
                            Computed average cluster trust factor at {100 - alertScore}% legitimacy rating.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• timeline replay validated</span>
                      <span>• dynamic path tracing active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS / OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected Defense</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              A Unified Relationship Intelligence Layer Across the Enterprise
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense Graph Intelligence continuously builds a dynamic relationship model connecting: people, accounts, devices, transactions, merchants, employees, IP addresses, wallets, onboarding activity, and operational workflows. The graph engine allows organizations to: uncover hidden fraud rings, detect coordinated abuse, identify mule ecosystems, trace financial movement, discover insider collusion, accelerate investigations, and centralize operational visibility. Unlike static investigation tools, DeepSense Graph Intelligence evolves continuously in real time as new operational data enters the platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Uncover hidden fraud rings", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Detect coordinated abuse", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Identify mule ecosystems", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Trace financial movement", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Discover insider collusion", desc: "Support digital GRC with active security control overlays." },
                { title: "Accelerate investigations", desc: "Block duplicate submissions before cash-outs settle." }
              ].map((prob, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] hover:shadow-2xl hover:border-red-100 transition-all duration-300 flex flex-col gap-6">
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{prob.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: CORE CAPABILITIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white" id="workflows">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Capabilities Grid</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise Graph Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Fraud Ring Detection", desc: "Detect linked fraud ecosystems, coordinated onboarding abuse, collusive transaction networks, account farming operations, synthetic identity rings, and mule account ecosystems." },
                { title: "Transaction Flow Analysis", desc: "Trace payment movement, laundering chains, suspicious settlements, wallet relationships, merchant ecosystems, and transaction velocity anomalies." },
                { title: "Identity Correlation", desc: "Connect onboarding records, shared devices, behavioral patterns, document relationships, authentication signals, and synthetic identity indicators." },
                { title: "Device Relationship Intelligence", desc: "Analyze emulator farms, spoofed environments, shared infrastructure, session overlap, remote access abuse, and suspicious device clusters." },
                { title: "Insider Risk Mapping", desc: "Visualize employee relationships, privileged access patterns, operational dependencies, governance exposure, and suspicious collaboration networks." },
                { title: "Behavioral Relationship Analysis", desc: "Correlate interaction patterns, transaction behavior, onboarding consistency, navigation flows, operational anomalies, and fraud orchestration signals." },
                { title: "AML Network Intelligence", desc: "Identify laundering typologies, suspicious transaction paths, sanctions exposure, mule ecosystems, and coordinated financial crime activity." },
                { title: "Timeline Replay & Investigation Reconstruction", desc: "Replay fraud campaigns, onboarding events, payment chains, account takeover activity, coordinated attacks, and operational escalations." },
                { title: "AI Graph Correlation", desc: "Use AI to discover hidden relationships, summarize clusters, identify anomalies, prioritize investigations, and explain entity connections." },
                { title: "Cross-Platform Intelligence", desc: "Correlate fraud systems, SIEM telemetry, onboarding platforms, payment networks, operational workflows, and governance systems." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
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

        {/* ================= SECTION 4: WORKFLOWS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Graph Intelligence Accelerates Investigations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests transaction events, onboarding telemetry, authentication activity, device intelligence, employee workflows, payment systems, and operational metadata." },
                { title: "Step 2 — Mapping", desc: "The platform resolves identities, correlates devices, links operational events, builds graph relationships, scores entity trust, and identifies suspicious overlaps." },
                { title: "Step 3 — Analysis", desc: "DeepSense continuously evaluates fraud relationships, behavioral anomalies, laundering chains, insider networks, coordinated attack patterns, and operational exposure." },
                { title: "Step 4 — Scoring", desc: "The system generates graph risk scores, entity trust indicators, cluster intelligence, suspicious path analysis, and AI investigation summaries." },
                { title: "Step 5 — Action", desc: "High-risk graph relationships trigger fraud investigations, AML escalations, insider-risk reviews, governance workflows, and remediation operations." }
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

        {/* ================= SECTION 5: USE CASES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100" id="use-cases">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Use Case Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Enterprise Intelligence Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "financial", label: "Financial Services" },
                { id: "psp", label: "Fintech Platforms" },
                { id: "processor", label: "Payment Processors" },
                { id: "betting", label: "Gaming & Betting" },
                { id: "enterprise", label: "Enterprise Risk Teams" }
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
            <div className="w-full bg-zinc-50 border border-zinc-200 p-8 md:p-12 rounded-[48px] shadow-sm text-left animate-in fade-in duration-300">
              {activeTab === "financial" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect laundering chains, mule accounts, synthetic identities, and payment fraud ecosystems.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "psp" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor onboarding abuse, referral fraud, linked account activity, and transaction anomalies.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "processor" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Analyze merchant relationships, dispute ecosystems, transaction laundering, and payment abuse networks.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "betting" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Identify betting syndicates, collusive activity, bonus abuse rings, and account farming ecosystems.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "enterprise" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Map insider threats, governance dependencies, operational anomalies, and third-party risk exposure.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: AI GRAPH RELATIONSHIP ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">AI Powered Discovery</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              AI-Powered Relationship Discovery
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense AI continuously reasons across the fraud graph to uncover: hidden entity relationships, suspicious coordination, laundering paths, behavioral anomalies, emerging fraud campaigns, and insider collusion. AI-assisted graph reasoning dramatically reduces: manual analysis, investigation complexity, alert fatigue, and investigation timelines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "AI Graph Summaries", desc: "Automatically summarize graph clusters." },
                { title: "Relationship Explanations", desc: "Explain why entities are linked." },
                { title: "Suspicious Path Analysis", desc: "Trace high-risk transaction and identity paths." },
                { title: "Cluster Prioritization", desc: "Prioritize highest-risk ecosystems." },
                { title: "Fraud Narrative Generation", desc: "Generate investigation-ready intelligence summaries." }
              ].map((feat, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <Cpu className="w-8 h-8 text-red-500" />
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{feat.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">SaaS Governance</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Enterprise-Grade Security and Governance Controls
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Multi-Tenant Isolation", desc: "Secure enterprise graph segmentation." },
                { title: "Role-Based Graph Access", desc: "Granular permissions for investigations." },
                { title: "Immutable Investigation Logging", desc: "Tamper-resistant audit history." },
                { title: "Explainable AI Correlation", desc: "Transparent relationship reasoning." },
                { title: "Governance Workflow Integration", desc: "Integrated compliance and remediation processes." },
                { title: "Flexible Deployment Models", desc: "SaaS, hybrid, private cloud, on-premise." }
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[32px] flex flex-col gap-4 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-red-500" />
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{sec.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">GRAPH INTELLIGENCE FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is DeepSense Graph Intelligence?", 
                  a: "DeepSense Graph Intelligence is a real-time relationship analysis engine that connects entities, transactions, devices, onboarding activity, and operational telemetry into a unified fraud graph." 
                },
                { 
                  q: "Can DeepSense detect hidden fraud rings?", 
                  a: "Yes. The graph engine continuously identifies coordinated fraud ecosystems, mule networks, laundering paths, and collusive abuse relationships." 
                },
                { 
                  q: "Does DeepSense support AML transaction tracing?", 
                  a: "Yes. Analysts can trace transaction movement, identify laundering chains, visualize suspicious flows, and investigate financial crime ecosystems." 
                },
                { 
                  q: "Can AI explain graph relationships?", 
                  a: "Yes. AI-generated graph explanations help analysts understand why entities are connected and which relationships are suspicious." 
                },
                { 
                  q: "Does the platform support insider-risk investigations?", 
                  a: "Yes. DeepSense can map employee relationships, operational dependencies, privileged access patterns, and suspicious internal activity." 
                },
                { 
                  q: "Is DeepSense Graph Intelligence scalable for enterprise deployment?", 
                  a: "Yes. The graph engine is designed for high-scale, real-time enterprise relationship analysis across millions of connected entities." 
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

        {/* ================= SECTION 9: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-50/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Transform Investigations With Unified Graph Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Empower GRC analysts and trace <br />
                <span className="text-white/40 font-bold font-bold">suspicious networks dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Uncover hidden fraud networks, accelerate investigations, trace suspicious relationships, and centralize enterprise intelligence using DeepSense Graph Intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Graph Intelligence Demo
              </Link>
              <Link href="/platform/graph-intelligence#workflows" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Investigation Workflows
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
