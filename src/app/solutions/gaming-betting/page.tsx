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

export default function GamingBettingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("sportsbook");
  
  // Interactive betting integrity parameters
  const [bettingState, setBettingState] = useState<string>("authentic");
  const [marketAnomaly, setMarketAnomaly] = useState<boolean>(true);
  const [responsibleLimits, setResponsibleLimits] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic player legitimacy parameters
  const calculatePlayerLegitimacy = () => {
    let score = 96; // base trust score
    
    if (bettingState === "syndicate") score -= 52;
    if (!marketAnomaly) score -= 22;
    if (responsibleLimits) score -= 14;
    
    score = Math.max(score, 8);
    
    let status = "AUTHENTIC PLAYERS VERIFIED";
    let color = "text-emerald-500";
    if (score <= 35) {
      status = "COORDINATED WAGER SYNDICATE EXPOSURE";
      color = "text-red-500";
    } else if (score <= 65) {
      status = "SUSPICIOUS BETTING ODDS MANIPULATION";
      color = "text-amber-500";
    } else if (score <= 85) {
      status = "UNRESOLVED HIGH-VELOCITY PLAY DRIFT";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculatePlayerLegitimacy();

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
                BETTING FRAUD & PLAYER INTEGRITY INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect Gaming and Betting Ecosystems From <br />
                <span className="text-zinc-400">Fraud, Abuse, and Financial Crime</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps gaming and betting operators detect fraud, secure player ecosystems, monitor suspicious wagering activity, prevent bonus abuse, and strengthen operational integrity using AI-powered analytics and real-time intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/gaming-betting#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Betting Integrity
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for sportsbooks, online casinos, fantasy sports platforms, esports betting ecosystems, gaming operators, and regulated wagering environments.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Betting Integrity & Fraud Intelligence Console */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Betting Integrity & Fraud Intelligence Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">BETTING INTEGRITY ENGINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live gaming and betting operations center visualizing suspicious betting activity, player trust scoring, match-fixing indicators, bonus abuse analytics, AML and sanctions monitoring, multi-account detection, responsible gaming signals, and collusive betting ecosystem intelligence.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Betting Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Betting status</span>
                        <select 
                          value={bettingState} 
                          onChange={(e) => setBettingState(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="authentic">Trusted organic wagers</option>
                          <option value="syndicate">Suspicious syndicate spikes</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Market anomaly filters</span>
                        <input 
                          type="checkbox" 
                          checked={marketAnomaly} 
                          onChange={(e) => setMarketAnomaly(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Dynamic velocity warnings</span>
                        <input 
                          type="checkbox" 
                          checked={responsibleLimits} 
                          onChange={(e) => setResponsibleLimits(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE WAGERING TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Match-Fixing Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {bettingState === "syndicate" ? "Active Syndicate Anomaly" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Betting Risk Timeline</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {responsibleLimits ? "Active Velocity Warning" : "Standard GRC logs"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">PLAYER LEGITIMACY SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">LEGAL RESOLUTION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: Market integrity checks active</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Betting Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Gaming and Betting Platforms Face Sophisticated Fraud and Integrity Threats
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern betting and gaming ecosystems manage: digital onboarding, player wallets, wagering activity, bonus campaigns, live betting operations, affiliate ecosystems, payment workflows, and regulatory compliance. Fraudsters increasingly exploit gaming and betting environments using: multi-accounting, bonus abuse, betting syndicates, account takeover, match manipulation, transaction laundering, synthetic identities, bot-driven wagering, and collusive fraud ecosystems. Traditional fraud systems often struggle with: real-time wagering analysis, behavioral risk correlation, player trust scoring, market integrity monitoring, AML scalability, and fraud ring visibility. Without connected betting intelligence, organizations face: financial losses, AML exposure, regulatory penalties, player trust erosion, market manipulation, operational abuse, and reputational damage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Multi-Accounting & Bonus Abuse", desc: "Fraudsters create coordinated account ecosystems to exploit betting promotions.", icon: <Shield /> },
                { title: "Betting Syndicates", desc: "Connected networks manipulate wagering activity across markets and events.", icon: <Users /> },
                { title: "Match & Market Manipulation", desc: "Suspicious wagering patterns create integrity and regulatory exposure.", icon: <Sliders /> },
                { title: "Account Takeover", desc: "Compromised betting accounts enable unauthorized wagering and withdrawals.", icon: <Clock /> },
                { title: "AML & Financial Crime Exposure", desc: "Gaming ecosystems increasingly face transaction laundering and sanctions risk.", icon: <Building /> },
                { title: "Responsible Gaming Monitoring", desc: "Operators need real-time visibility into risky behavioral patterns.", icon: <Sliders /> }
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

            {/* Betting Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">BETTING LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Patient onboarding verified dynamically using liveness checks." },
                  { title: "2. Wagering Analysis", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Fraud Scoring", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. AML Monitoring", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Integrity Investigations", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
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
              Unified Betting Fraud and Integrity Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines wagering analytics, behavioral intelligence, graph analytics, AML monitoring, device intelligence, market anomaly detection, and governance automation into a unified betting integrity platform. The platform continuously evaluates: player behavior, wagering activity, onboarding trust, transaction patterns, market anomalies, bonus usage, graph relationships, AML indicators, and operational abuse signals. DeepSense enables gaming and betting operators to: prevent fraud and abuse, secure player ecosystems, detect betting syndicates, strengthen AML operations, improve market integrity, reduce operational losses, and support regulatory compliance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Prevent fraud and abuse", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Secure player ecosystems", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Detect betting syndicates", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Strengthen AML operations", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Improve market integrity", desc: "Support digital GRC with active security control overlays." },
                { title: "Reduce operational losses", desc: "Block duplicate submissions before cash-outs settle." }
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
              Betting Integrity & Gaming Fraud Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Betting Fraud Detection", desc: "Detect suspicious wagers, unusual betting velocity, correlated wagering activity, market manipulation, account abuse, and fraudulent withdrawals." },
                { title: "Multi-Account & Bonus Abuse Detection", desc: "Identify linked betting accounts, emulator farms, reward exploitation, fake onboarding, referral abuse, and coordinated bonus farming." },
                { title: "AML & Financial Crime Monitoring", desc: "Monitor suspicious transaction chains, laundering indicators, sanctions exposure, rapid cash-out activity, high-risk wallets, and financial crime typologies." },
                { title: "Match & Market Integrity Analytics", desc: "Analyze suspicious odds movement, correlated betting activity, high-risk events, betting syndicates, integrity anomalies, and operator exposure." },
                { title: "Player Trust Scoring", desc: "Generate player legitimacy scores, behavioral trust ratings, wagering integrity indicators, operational exposure analytics, and account risk levels." },
                { title: "Behavioral Analytics", desc: "Analyze wagering behavior, gameplay patterns, session consistency, operational anomalies, automation indicators, and risky engagement patterns." },
                { title: "Device & Session Intelligence", desc: "Detect spoofed devices, VPN/proxy abuse, emulator environments, shared infrastructure, and account takeover indicators." },
                { title: "Graph Intelligence", desc: "Visualize betting syndicates, linked accounts, shared wallets, collusive ecosystems, and suspicious wagering relationships." },
                { title: "Case Management & Investigations", desc: "Coordinate integrity investigations, fraud escalations, AML reviews, moderation workflows, and evidence management." },
                { title: "Governance & Regulatory Oversight", desc: "Support gaming compliance, AML governance, responsible gaming operations, audit readiness, and operational transparency." }
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
              How DeepSense Protects Gaming and Betting Operations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests wagering activity, player onboarding, wallet transactions, gameplay telemetry, bonus activity, payment workflows, and device signals." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using behavioral analytics, graph intelligence, AML indicators, market anomaly detection, device trust analytics, and integrity scoring." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates player legitimacy, wagering integrity, market exposure, bonus abuse indicators, fraud relationships, and operational anomalies." },
                { title: "Step 4 — Decisioning", desc: "The system generates fraud risk scores, wagering interventions, account restrictions, AML escalations, and integrity alerts." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers betting investigations, AML reviews, moderation workflows, remediation actions, and governance reporting." }
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
              Built for Modern Gaming and Betting Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "sportsbook", label: "Sportsbooks" },
                { id: "casino", label: "Online Casinos" },
                { id: "fantasy", label: "Fantasy Sports Platforms" },
                { id: "esports", label: "Esports Betting Platforms" },
                { id: "wallet", label: "Gaming Wallet Ecosystems" }
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
              {activeTab === "sportsbook" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect live betting operations, wagering integrity, player onboarding, and transaction ecosystems.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "casino" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor bonus abuse, multi-accounting, payment fraud, and responsible gaming indicators.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "fantasy" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure player ecosystems, referral campaigns, account legitimacy, and gameplay integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "esports" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect collusive betting patterns, suspicious event activity, betting syndicates, and operational abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "wallet" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent account takeover, laundering activity, withdrawal abuse, and wallet manipulation.</h4>
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
              Real-Time Betting and Gaming Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Betting Fraud Operations Dashboard", desc: "Suspicious wagering alerts, bonus abuse visibility, AML analytics, and player risk monitoring." },
                { title: "Player Trust Intelligence", desc: "Player legitimacy scoring, behavioral indicators, onboarding trust analytics, and operational exposure visibility." },
                { title: "Market Integrity Dashboard", desc: "Suspicious odds movement, event anomaly detection, wagering concentration visibility, and syndicate indicators." },
                { title: "AML & Financial Crime Dashboard", desc: "Suspicious transaction chains, high-risk wallet visibility, laundering indicators, and sanctions monitoring." },
                { title: "Investigation Workspace", desc: "Wagering timelines, graph investigations, evidence management, and GRC compliance reporting." }
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
                Enterprise-Grade Security for Betting and Gaming Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and compliance-ready sovereign hosting options for every single gaming event.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Betting Decisions", desc: "Every fraud and integrity decision includes reason codes, behavioral evidence, wagering indicators, graph relationships, and AML context." },
                { title: "Audit Logging", desc: "Track fraud investigations, wagering escalations, AML reviews, and governance actions." },
                { title: "Multi-Tenant Gaming Security", desc: "Secure operational separation across betting ecosystems, operational teams, and verification workflows." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with AML obligations, gaming regulations, responsible gaming programs, and operational resilience." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">GAMING INTEGRITY FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect suspicious betting activity in real time?", 
                  a: "Yes. DeepSense continuously evaluates wagering behavior, market anomalies, transaction patterns, and behavioral indicators in real time." 
                },
                { 
                  q: "Does DeepSense support bonus abuse detection?", 
                  a: "Yes. The platform identifies multi-accounting, emulator abuse, fake onboarding activity, and coordinated reward exploitation." 
                },
                { 
                  q: "Can DeepSense detect betting syndicates and collusive activity?", 
                  a: "Yes. DeepSense uses graph intelligence and behavioral analytics to identify connected wagering ecosystems and suspicious relationships." 
                },
                { 
                  q: "Does DeepSense support AML monitoring for betting ecosystems?", 
                  a: "Yes. The platform continuously monitors suspicious transaction chains, sanctions exposure, laundering indicators, and wallet anomalies." 
                },
                { 
                  q: "Can DeepSense support responsible gaming monitoring?", 
                  a: "Yes. DeepSense analyzes behavioral risk indicators, engagement anomalies, and operational trust signals to support responsible gaming programs." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise-scale betting operations?", 
                  a: "Yes. DeepSense is designed for sportsbooks, casinos, esports betting platforms, gaming operators, and regulated wagering ecosystems." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Protect Betting Integrity With Real-Time Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure gaming markets and prevent <br />
                <span className="text-white/40 font-bold">betting fraud dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Prevent fraud, detect collusive betting activity, strengthen AML operations, and secure gaming ecosystems using enterprise-grade betting intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/gaming-betting#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Betting Integrity
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
