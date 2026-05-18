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

export default function AiCopilotPlatformPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedPrompt, setSelectedPrompt] = useState<string>("ring");
  
  // Interactive GRC simulation state
  const [actionLog, setActionLog] = useState<string[]>([]);
  const [aiConfidence, setAiConfidence] = useState<number>(98);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleAction = (act: string) => {
    setActionLog([`Executed: ${act} at ${new Date().toLocaleTimeString()}`, ...actionLog]);
  };

  // Dynamic responses based on chosen prompt
  const getPromptResponse = () => {
    switch (selectedPrompt) {
      case "ring":
        return {
          promptText: "Summarize this fraud ring.",
          explanation: "Analyzed 14 linked bank accounts sharing device signature ID #8920-A. The cluster displays high velocity payout attempts within 3 minutes of credential updates.",
          linkedEntities: "14 accounts, 2 devices, 1 IP range",
          riskScore: "94/100",
          confidence: 97
        };
      case "block":
        return {
          promptText: "Explain why this transaction was blocked.",
          explanation: "Transaction triggered velocity violations (12 attempts in 40s) paired with high pressure gesture drift, indicative of remote control accessibility abuse.",
          linkedEntities: "1 wallet, 1 device fingerprint",
          riskScore: "88/100",
          confidence: 94
        };
      case "aml":
        return {
          promptText: "Show linked accounts with high AML risk.",
          explanation: "Mapped 3 layered wire hops routing to dynamic shell merchant structures listed on sanctions lists. Flow traces show cyclic structured deposit transfers.",
          linkedEntities: "3 offshore accounts, 1 routing code",
          riskScore: "91/100",
          confidence: 96
        };
      case "sar":
        return {
          promptText: "Generate SAR-ready investigation notes.",
          explanation: "Drafted SAR summary: Coordinated group structured deposit patterns detected across decentralized wallet transfers bypassing standard KYC velocity ceilings.",
          linkedEntities: "6 wallets, 2 high-risk countries",
          riskScore: "76/100",
          confidence: 98
        };
      default:
        return {
          promptText: "Summarize this fraud ring.",
          explanation: "Analyzed 14 linked bank accounts sharing device signature ID #8920-A. The cluster displays high velocity payout attempts within 3 minutes of credential updates.",
          linkedEntities: "14 accounts, 2 devices, 1 IP range",
          riskScore: "94/100",
          confidence: 97
        };
    }
  };

  const { promptText, explanation, linkedEntities, riskScore, confidence } = getPromptResponse();

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
                AI FRAUD ANALYST & OPERATIONAL COPILOT
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                AI-Native Fraud Investigations and <br />
                <span className="text-zinc-400">Operational Intelligence</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense AI Copilot helps fraud teams investigate faster, uncover hidden risk patterns, explain fraud decisions, automate operational workflows, and generate enterprise intelligence using context-aware AI integrated directly into the fraud operations environment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request AI Copilot Demo
                </Link>
                <Link href="/platform/ai-copilot#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore AI Workflows
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for fraud analysts, AML teams, compliance operations, payment risk teams, SOC analysts, investigators, and enterprise governance organizations.
                </span>
              </div>
            </div>

            {/* Hero Interactive Widget: DeepSense AI Analyst Workspace */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">DeepSense AI Analyst Workspace</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">AI WORKBENCH CORE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A fully interactive AI-powered fraud investigation environment where analysts can ask natural language questions, summarize fraud cases, analyze suspicious transactions, generate fraud narratives, explore entity graphs, investigate onboarding abuse, review AML exposure, and orchestrate remediation workflows.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Sidebar — AI Tools */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">AI Tools</span>
                    
                    <div className="space-y-1 text-[11px] font-mono text-zinc-400">
                      {[
                        "Investigation Assistant",
                        "Graph Intelligence",
                        "Behavioral Analysis",
                        "AML Assistant",
                        "KYC Review Assistant",
                        "Transaction Explainer",
                        "Risk Summarizer",
                        "Workflow Generator",
                        "Governance Assistant",
                        "Threat Intelligence",
                        "AI Search"
                      ].map((tool, idx) => (
                        <div key={idx} className="flex justify-between items-center p-2 rounded hover:bg-white/5 hover:text-white cursor-pointer transition-all">
                          <span>{tool}</span>
                          <span className="text-[9px] text-zinc-600">v1.0</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Center Workspace — AI Conversation Panel */}
                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono relative">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>AI CONVERSATION PANEL</span>
                        <span>INTERACTIVE WORKSPACE</span>
                      </div>

                      {/* Prompts list */}
                      <div className="grid grid-cols-2 gap-2 text-[10px] mb-6">
                        <button 
                          onClick={() => setSelectedPrompt("ring")}
                          className={`p-2 rounded-xl text-left border ${selectedPrompt === "ring" ? "bg-red-950/20 border-red-500/35 text-white" : "bg-black/40 border-white/5 text-zinc-400"}`}
                        >
                          “Summarize this fraud ring.”
                        </button>
                        <button 
                          onClick={() => setSelectedPrompt("block")}
                          className={`p-2 rounded-xl text-left border ${selectedPrompt === "block" ? "bg-red-950/20 border-red-500/35 text-white" : "bg-black/40 border-white/5 text-zinc-400"}`}
                        >
                          “Explain why blocked.”
                        </button>
                        <button 
                          onClick={() => setSelectedPrompt("aml")}
                          className={`p-2 rounded-xl text-left border ${selectedPrompt === "aml" ? "bg-red-950/20 border-red-500/35 text-white" : "bg-black/40 border-white/5 text-zinc-400"}`}
                        >
                          “Show linked high-risk AML.”
                        </button>
                        <button 
                          onClick={() => setSelectedPrompt("sar")}
                          className={`p-2 rounded-xl text-left border ${selectedPrompt === "sar" ? "bg-red-950/20 border-red-500/35 text-white" : "bg-black/40 border-white/5 text-zinc-400"}`}
                        >
                          “Generate SAR draft.”
                        </button>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block uppercase">Analyst Prompt</span>
                          <span className="text-xs font-bold text-white mt-1 block">“{promptText}”</span>
                        </div>

                        <div className="p-4 bg-black/60 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 block uppercase">AI-generated risk reasoning</span>
                          <span className="text-xs text-zinc-300 mt-1 block leading-relaxed">{explanation}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom actions panel */}
                    <div className="pt-6 border-t border-white/5 mt-6 space-y-4">
                      <span className="text-zinc-400 font-bold block text-[10px]">Bottom Panel — AI Actions</span>
                      <div className="grid grid-cols-4 gap-2 text-[9px] text-zinc-300">
                        {["Create Case", "Freeze Account", "Trigger MFA", "Generate Report"].map((act, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => handleAction(act)}
                            className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:text-white"
                          >
                            {act}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Context Panel */}
                  <div className="lg:col-span-3 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Right Context Panel</span>
                      
                      <div className="space-y-3 text-[10px] text-zinc-300">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Linked Entities</span>
                          <span className="mt-1 block font-bold text-white">{linkedEntities}</span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">Aggregate risk score</span>
                          <span className="mt-1 block font-bold text-white">{riskScore}</span>
                        </div>

                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-[8px] text-zinc-500 block font-bold uppercase">AI Confidence score</span>
                          <span className="mt-1 block font-bold text-emerald-400">{confidence}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Dynamic console log */}
                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span className="block font-bold text-zinc-400">ACTION LOG</span>
                      {actionLog.slice(0, 2).map((log, i) => (
                        <div key={i} className="text-zinc-600 truncate">{log}</div>
                      ))}
                      {actionLog.length === 0 && <div className="text-zinc-600">No actions executed yet.</div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS / COPILOT OVERVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Embedded Intelligence</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Embedded AI Across the Entire Fraud Operations Lifecycle
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense AI Copilot operates as an intelligence layer across: fraud detection, investigations, onboarding review, AML monitoring, governance workflows, operational risk analysis, case management, and analyst operations. Unlike generic AI tools, DeepSense AI Copilot is: fraud-context aware, graph-aware, entity-aware, behavior-aware, compliance-aware, and investigation-native. The AI engine continuously understands: transactions, entities, devices, onboarding workflows, behavioral patterns, fraud typologies, governance rules, and operational history.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "fraud-context aware", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "graph-aware", desc: "Verify portal checkouts without introducing user friction." },
                { title: "entity-aware", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "behavior-aware", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "compliance-aware", desc: "Support digital GRC with active security control overlays." },
                { title: "investigation-native", desc: "Block duplicate submissions before cash-outs settle." }
              ].map((prob, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] hover:shadow-2xl hover:border-red-100 transition-all duration-300 flex flex-col gap-6">
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{prob.title}</h4>
                  <p className="text-sm text-zinc-500 font-inter leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: DEEPSENSE SOLUTION / CAPABILITIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white" id="workflows">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Capabilities Grid</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              AI Analyst Intelligence Capabilities
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "AI Investigation Summaries", desc: "Automatically generate fraud narratives, case summaries, investigation overviews, executive briefings, escalation notes, and SAR-ready intelligence." },
                { title: "Fraud Decision Explanations", desc: "Explain why alerts triggered, why transactions were blocked, behavioral anomalies detected, graph correlations identified, onboarding inconsistencies, and AI risk reasoning." },
                { title: "Natural Language Investigations", desc: "Allow analysts to search using natural language, ask fraud questions conversationally, investigate entities rapidly, discover hidden relationships, and explore operational anomalies." },
                { title: "Graph Intelligence Analysis", desc: "Analyze fraud rings, laundering ecosystems, linked entities, insider networks, suspicious relationships, coordinated attacks, and trace financial flows." },
                { title: "Behavioral Intelligence Insights", desc: "Surface unusual customer behavior, session anomalies, device inconsistencies, account takeover indicators, behavioral drift, and operational abuse signals." },
                { title: "AI Workflow Automation", desc: "Automate escalation routing, evidence gathering, remediation workflows, analyst recommendations, alert prioritization, and governance actions." },
                { title: "AML & Compliance Assistance", desc: "Support suspicious activity reviews, AML investigations, sanctions analysis, KYC escalations, audit summaries, and governance reporting." },
                { title: "Risk Prioritization", desc: "Prioritize highest-risk alerts, emerging fraud campaigns, operational threats, suspicious onboarding, and account compromise events." },
                { title: "AI Knowledge Search", desc: "Search across fraud cases, investigations, governance logs, analyst actions, transaction history, and entity relationships." },
                { title: "Executive Intelligence Reporting", desc: "Generate board-ready summaries, operational risk reports, fraud trend analysis, governance insights, and compliance intelligence." }
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

        {/* ================= SECTION 4: AI WORKFLOW EXAMPLES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">AI Workflows</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              AI-Powered Operational Workflows
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Fraud Ring Investigation", prompt: "“Show all linked accounts associated with this device cluster.”", action: "Graph correlation, fraud ring visualization, account trust scoring, behavioral anomaly analysis, and risk escalation recommendations." },
                { title: "AML Investigation", prompt: "“Summarize suspicious transaction activity across these wallets.”", action: "Transaction tracing, laundering pattern analysis, sanctions exposure review, SAR-ready summaries, and risk prioritization." },
                { title: "Identity Fraud Review", prompt: "“Explain why this onboarding attempt was flagged.”", action: "OCR analysis, biometric verification review, behavioral anomaly detection, synthetic identity analysis, and onboarding trust explanation." },
                { title: "Mobile Scam Detection", prompt: "“Analyze behavioral anomalies during this session.”", action: "Behavioral biometrics analysis, device telemetry review, session trust evaluation, remote access detection, and scam probability assessment." }
              ].map((wf, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs">
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono text-zinc-400 block uppercase">WORKFLOW 0{idx+1}</span>
                    <h4 className="text-lg font-bold font-manrope text-neutral-900">{wf.title}</h4>
                    <div className="p-3 bg-zinc-50 rounded-xl text-xs font-mono text-zinc-600 block">Prompt: {wf.prompt}</div>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">Action: {wf.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: AI GRAPH INTELLIGENCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Graph Reasoning</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              AI-Powered Graph Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              The AI Copilot continuously reasons across the DeepSense fraud graph to identify: hidden entity relationships, laundering ecosystems, onboarding abuse rings, mule networks, insider collusion, and transaction fraud clusters. AI graph reasoning enables analysts to: investigate faster, uncover hidden risk, reduce manual analysis, accelerate escalations, and improve operational accuracy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "graph summarization", desc: "Extract relationship matrices dynamically from unorganized wire hop charts." },
                { title: "relationship explanations", desc: "Expose hidden owner indicators across shell business lists." },
                { title: "AI-generated clusters", desc: "Flag merchant profiles sharing hardware fingerprints with banned syndicates." },
                { title: "entity reputation scoring", desc: "Track transaction movements continuously before settlement windows shut." }
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{item.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: AI GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Operational Trust</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Explainable AI for Enterprise Fraud Operations
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense AI Copilot is designed for: explainability, governance, operational transparency, analyst oversight, and enterprise accountability. Every AI-generated recommendation includes: supporting evidence, reasoning context, graph references, behavioral indicators, operational telemetry, and confidence scores.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Human-in-the-Loop Controls", desc: "Analysts remain in control of operational decisions." },
                { title: "AI Decision Logging", desc: "All AI recommendations are logged for auditability." },
                { title: "Role-Based AI Access", desc: "Granular access control across operational teams." },
                { title: "Explainable Risk Reasoning", desc: "Transparent fraud scoring and escalation logic." },
                { title: "Governance Workflows", desc: "Integrated compliance and operational review processes." }
              ].map((gov, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-red-500" />
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{gov.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{gov.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center font-mono">AI COPILOT FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Is DeepSense AI Copilot trained specifically for fraud operations?", 
                  a: "Yes. The AI Copilot is designed specifically for fraud investigations, AML monitoring, onboarding intelligence, governance workflows, and operational risk analysis." 
                },
                { 
                  q: "Can analysts investigate using natural language?", 
                  a: "Yes. Analysts can ask conversational questions and perform investigations using natural language prompts." 
                },
                { 
                  q: "Does the AI explain fraud decisions?", 
                  a: "Yes. Every AI recommendation includes explainable reasoning, evidence references, behavioral indicators, and confidence scoring." 
                },
                { 
                  q: "Can the AI automate operational workflows?", 
                  a: "Yes. The AI Copilot can automate escalations, summaries, remediation workflows, SAR generation, and alert prioritization." 
                },
                { 
                  q: "Does DeepSense AI support governance and compliance operations?", 
                  a: "Yes. The platform supports governance workflows, audit logging, operational transparency, and compliance reporting." 
                },
                { 
                  q: "Can DeepSense AI operate in highly regulated environments?", 
                  a: "Yes. DeepSense AI is designed for enterprise governance, explainability, auditability, and regulated operational environments." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Transform Fraud Operations With AI-Native Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Empower fraud analysts and accelerate <br />
                <span className="text-white/40 font-bold font-bold">investigations dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Accelerate investigations, uncover hidden fraud relationships, automate operational workflows, and strengthen enterprise trust using the DeepSense AI Copilot.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request AI Copilot Demo
              </Link>
              <Link href="/platform/ai-copilot#workflows" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore AI Workflows
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
