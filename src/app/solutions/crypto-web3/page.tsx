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

export default function CryptoWeb3Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("exchanges");
  
  // Interactive Crypto parameters
  const [onChainRiskProfile, setOnChainRiskProfile] = useState<string>("decentralized");
  const [sybilOnboarding, setSybilOnboarding] = useState<boolean>(false);
  const [crossChainVelocity, setCrossChainVelocity] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic crypto risk parameters
  const calculateCryptoRisk = () => {
    let score = 8; // base risk score
    
    if (onChainRiskProfile === "mixer") score += 45;
    if (sybilOnboarding) score += 32;
    if (crossChainVelocity) score += 14;
    
    score = Math.min(score, 99);
    
    let status = "SECURE WALLET ATTRIBUTION";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "MIXER / TORNADO COMPROMISE";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "COORDINATED SYBIL ATTACK FLAGGED";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "CROSS-CHAIN DRIFT OUTLIER";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateCryptoRisk();

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
                CRYPTO FRAUD & BLOCKCHAIN RISK INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Secure Crypto and Web3 Ecosystems <br />
                <span className="text-zinc-400">From Fraud and Financial Crime</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps crypto exchanges, wallets, DeFi platforms, NFT marketplaces, and Web3 ecosystems detect fraud, monitor blockchain risk, strengthen AML compliance, and secure digital asset operations using real-time intelligence and graph-powered analytics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/crypto-web3#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Web3 Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for crypto exchanges, custodians, DeFi platforms, NFT ecosystems, stablecoin providers, Web3 infrastructure, and digital asset operations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise Crypto Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">On-Chain Risk Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">WEB3 CORE DECENTRALIZED PROTOCOL</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Web3 Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">On-Chain Risk Profile</span>
                        <select 
                          value={onChainRiskProfile} 
                          onChange={(e) => setOnChainRiskProfile(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="decentralized">Standard DeFi liquidity pool</option>
                          <option value="mixer">Mixer / Tornado interaction</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Sybil Onboarding Pattern</span>
                        <input 
                          type="checkbox" 
                          checked={sybilOnboarding} 
                          onChange={(e) => setSybilOnboarding(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Stablecoin volume spike</span>
                        <input 
                          type="checkbox" 
                          checked={crossChainVelocity} 
                          onChange={(e) => setCrossChainVelocity(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE BLOCKCHAIN TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">On-Chain AML Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {onChainRiskProfile === "mixer" ? "High Risk Counterparty" : "DeFi verified pool"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Sybil Attack Detection</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {sybilOnboarding ? "Coordinated Farm Alert" : "Organic onboarding"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">WALLET RISK SCORE</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Web3 Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Web3 Fraud and AML Risks Continue to Evolve Rapidly
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Crypto and Web3 ecosystems face increasing threats across wallet onboarding, blockchain transfers, DeFi protocols, NFT marketplaces, staking platforms, stablecoin ecosystems, custodial wallets, cross-chain bridges, and token launches. Fraudsters increasingly exploit Web3 ecosystems using wallet farming, sybil attacks, account takeover, wash trading, sanctioned wallets, mixer services, phishing attacks, smart contract abuse, and mule wallet networks. Traditional fraud and AML systems often struggle with blockchain complexity, pseudonymous identities, cross-chain visibility, high transaction velocity, evolving Web3 attack patterns, and decentralized operational models. Without connected blockchain intelligence, organizations face AML exposure, regulatory pressure, reputational damage, financial losses, token ecosystem abuse, operational risk, and compromised user trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Wallet Fraud", desc: "Fraudsters exploit wallet ecosystems through phishing, compromise, and mule activity.", icon: <Shield /> },
                { title: "Sybil Attacks", desc: "Coordinated fake wallet ecosystems manipulate rewards, governance, and onboarding.", icon: <Users /> },
                { title: "Sanctions Exposure", desc: "Platforms risk interacting with sanctioned or high-risk blockchain entities.", icon: <Sliders /> },
                { title: "DeFi Exploitation", desc: "Protocols face abuse through flash loans, wash trading, and transaction manipulation.", icon: <Clock /> },
                { title: "NFT Marketplace Abuse", desc: "Fraudsters manipulate NFT ecosystems using fake activity and laundering techniques.", icon: <Building /> },
                { title: "Cross-Chain Complexity", desc: "Multi-chain ecosystems create visibility and governance challenges.", icon: <Sliders /> }
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

            {/* Blockchain Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">BLOCKCHAIN RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "User connects decentralized wallet, triggering multi-tenant KYC screens." },
                  { title: "2. SIM Swap check", desc: "DeepSense scans active SIM details instantly for rapid takeover signs." },
                  { title: "3. On-chain velocity", desc: "Token routing monitored for high value flash loan anomalies." },
                  { title: "4. AML Monitor", desc: "Continuous checks run asynchronously against PEP and global watchlists." },
                  { title: "5. Investigations", desc: "High-risk alerts routing directly to specialized Web3 SIU queues." },
                  { title: "6. GRC Compliance", desc: "Operational records compiled to meet MiCA and AMLD6 standards." }
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
              Unified Crypto Fraud, AML, and Blockchain Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines blockchain analytics, AML monitoring, wallet intelligence, behavioral analytics, graph detection, sanctions screening, and governance automation into a unified Web3 risk platform. The platform continuously evaluates wallet behavior, blockchain relationships, transaction exposure, sanctions indicators, onboarding integrity, device intelligence, behavioral anomalies, DeFi activity, and operational risk telemetry. DeepSense enables crypto and Web3 platforms to: stop fraud in real time, monitor blockchain risk, strengthen AML compliance, secure onboarding, reduce operational abuse, improve governance visibility, and scale trust in decentralized ecosystems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Stop fraud in real time", desc: "Block wallet compromise and private key manipulation dynamically." },
                { title: "Monitor blockchain risk", desc: "Scan smart contracts and multi-signature payouts continuously." },
                { title: "Strengthen AML compliance", desc: "Screen sanctions watchlists in milliseconds before on-chain logs settle." },
                { title: "Secure onboarding", desc: "Block automated bot networks during reward distribution cycles." },
                { title: "Reduce operational abuse", desc: "Spot wash trading and NFT transaction manipulation immediately." },
                { title: "Improve governance visibility", desc: "Audit cross-chain bridge balances and DeFi protocols automatically." }
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
              Crypto & Web3 Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Blockchain AML Monitoring", desc: "Detect suspicious wallet activity, sanctions exposure, mixer interactions, laundering typologies, suspicious transaction flows, and high-risk counterparties." },
                { title: "Wallet Risk Intelligence", desc: "Generate wallet trust scores, transaction exposure ratings, behavioral risk indicators, fraud relationship analysis, and operational risk profiles." },
                { title: "Sybil Attack Detection", desc: "Identify wallet farming, fake governance participation, coordinated onboarding, airdrop abuse, and collusive wallet ecosystems." },
                { title: "Account Takeover Prevention", desc: "Protect exchange accounts, custodial wallets, authentication workflows, wallet access sessions, and account recovery operations." },
                { title: "DeFi Risk Monitoring", desc: "Analyze liquidity pool abuse, flash loan anomalies, transaction manipulation, suspicious smart contract interactions, and DeFi operational risk." },
                { title: "NFT & Marketplace Fraud Detection", desc: "Detect wash trading, fake marketplace activity, manipulated transactions, suspicious wallet behavior, and collusive trading networks." },
                { title: "Behavioral Analytics", desc: "Analyze wallet behavior, onboarding activity, transaction intent, session anomalies, and operational trust indicators." },
                { title: "Device & Identity Intelligence", desc: "Detect emulator environments, spoofed devices, synthetic onboarding, shared infrastructure, and suspicious operational behavior." },
                { title: "Graph Intelligence", desc: "Visualize wallet relationships, transaction ecosystems, mule networks, blockchain entities, DeFi interactions, and fraud rings." },
                { title: "Case Management & Investigations", desc: "Coordinate AML investigations, fraud reviews, sanctions escalations, wallet investigations, and evidence management." }
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
              How DeepSense Protects Crypto and Web3 Platforms
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests blockchain transactions, wallet telemetry, onboarding events, exchange activity, DeFi interactions, operational signals, and authentication telemetry." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using blockchain intelligence, sanctions screening, graph relationships, behavioral analytics, device trust, and fraud telemetry." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates wallet legitimacy, transaction risk, blockchain exposure, onboarding trust, fraud relationships, and operational anomalies." },
                { title: "Step 4 — Decisioning", desc: "The system generates wallet risk scores, AML alerts, sanctions escalations, fraud interventions, and operational risk indicators." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers wallet investigations, AML workflows, fraud escalations, governance reporting, and remediation actions." }
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
              Built for Modern Web3 Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "exchanges", label: "Crypto Exchanges" },
                { id: "defi", label: "DeFi Platforms" },
                { id: "nft", label: "NFT Marketplaces" },
                { id: "stablecoin", label: "Stablecoin & Wallets" },
                { id: "institutional", label: "Institutional Platforms" }
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
              {activeTab === "exchanges" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect onboarding, trading activity, wallet transfers, and account access.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "defi" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor protocol abuse, flash loan activity, transaction manipulation, and suspicious wallet interactions.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "nft" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect wash trading, fake trading activity, collusive wallet behavior, and marketplace abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "stablecoin" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure wallet ecosystems, transfer activity, onboarding trust, and operational governance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "institutional" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage AML exposure, sanctions compliance, operational resilience, and blockchain investigations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure institutional correspondent banking connections. Track wire routings against global watchlists in real time.
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
              Connected Across the Crypto Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links wallet fraud deciders with active GRC dashboards, GRC evidence matrices, device intelligence engines, and automated incident logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "AML Monitoring", desc: "Continuous blockchain transaction and sanctions exposure monitoring." },
                { title: "Device Fingerprinting", desc: "Wallet onboarding trust and operational integrity analytics." },
                { title: "Behavioral Biometrics", desc: "Behavioral anomaly detection and operational trust intelligence." },
                { title: "Graph Intelligence", desc: "Connected wallet ecosystem and fraud network visibility." },
                { title: "UEBA & Operational Monitoring", desc: "Behavioral anomaly detection across users and internal operations." },
                { title: "GRC & Controls Monitoring", desc: "Governance and compliance visibility for digital asset operations." },
                { title: "Case Management", desc: "AML investigations and blockchain evidence workflows." }
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
              Real-Time Blockchain Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Crypto Fraud Operations Dashboard", desc: "Suspicious wallet monitoring, fraud alerts, blockchain risk analytics, and operational visibility." },
                { title: "Wallet Intelligence Dashboard", desc: "Wallet trust scoring, transaction exposure, behavioral analytics, and onboarding intelligence." },
                { title: "Blockchain AML Analytics", desc: "Sanctions exposure, suspicious transaction flows, AML typologies, and high-risk entity monitoring." },
                { title: "DeFi & NFT Monitoring", desc: "Protocol abuse detection, NFT fraud analytics, transaction anomaly visibility, and operational governance metrics." },
                { title: "Investigation Workspace", desc: "Wallet timelines, graph investigations, blockchain evidence, linked entities, and operational intelligence." }
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
              Designed for Digital Asset Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous Web3 fraud models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Crypto Exchanges", "Custodial Wallet Providers", "DeFi Platforms", "NFT Marketplaces", "Stablecoin Platforms", "Web3 Infrastructure Providers",
                "Tokenized Asset Platforms", "DAO Operations", "Blockchain Payment Platforms", "Crypto Lending Platforms", "Institutional Digital Asset Platforms", "Cross-Chain Ecosystems"
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
                Enterprise-Grade Security for Crypto and Web3 Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and comprehensive logging for every single wallet scan.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Blockchain Risk Decisions", desc: "Every fraud and AML decision includes wallet relationships, blockchain evidence, and transaction context." },
                { title: "Audit Logging", desc: "Track wallet investigations, AML escalations, fraud interventions, and governance workflows." },
                { title: "Multi-Tenant Web3 Security", desc: "Secure operational separation across crypto organizations, blockchain environments, and operational teams." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with AML, sanctions, GRC, and financial compliance programs." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">WEB3 FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense monitor blockchain AML exposure in real time?", 
                  a: "Yes. DeepSense continuously evaluates blockchain transactions, sanctions exposure, wallet relationships, and suspicious activity patterns." 
                },
                { 
                  q: "Does DeepSense support wallet risk scoring?", 
                  a: "Yes. The platform generates dynamic wallet trust scores using behavioral analytics, blockchain telemetry, and graph intelligence." 
                },
                { 
                  q: "Can DeepSense detect sybil attacks?", 
                  a: "Yes. DeepSense identifies coordinated wallet farming, airdrop abuse, fake governance participation, and collusive ecosystems." 
                },
                { 
                  q: "Does DeepSense support DeFi and NFT fraud monitoring?", 
                  a: "Yes. The platform detects DeFi abuse, wash trading, suspicious NFT activity, and blockchain manipulation techniques." 
                },
                { 
                  q: "Can DeepSense support exchange onboarding and account protection?", 
                  a: "Yes. DeepSense supports onboarding verification, device intelligence, behavioral monitoring, and account takeover prevention." 
                },
                { 
                  q: "Is DeepSense suitable for institutional crypto operations?", 
                  a: "Yes. DeepSense is designed for enterprise-grade crypto exchanges, custodians, blockchain platforms, and regulated digital asset environments." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Secure Web3 Ecosystems With Real-Time Blockchain Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure on-chain transfers and stop <br />
                <span className="text-white/40 font-bold">digital asset vulnerabilities dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Detect wallet fraud, strengthen AML monitoring, prevent operational abuse, and improve trust across digital asset ecosystems using enterprise-grade crypto intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/crypto-web3#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Web3 Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
