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

export default function PreventBonusAbusePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive anti-abuse parameters
  const [campaignScope, setCampaignScope] = useState<string>("referral");
  const [emulatorFarm, setEmulatorFarm] = useState<boolean>(false);
  const [botVelocity, setBotVelocity] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic anti-abuse parameters
  const calculateAbuseRisk = () => {
    let score = 8; // base risk score
    
    if (campaignScope === "coupon") score += 34;
    if (emulatorFarm) score += 42;
    if (botVelocity) score += 15;
    
    score = Math.min(score, 99);
    
    let status = "SECURE CAMPAIGN REDEMPTION";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "COORDINATED MULTI-ACCOUNT EMULATOR RING";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "COUPON FARMING BOT VECTOR";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "HIGH VALUE REFERRAL VELOCITY SHIFT";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateAbuseRisk();

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
                BONUS ABUSE & PROMOTION INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Stop Bonus Abuse, Multi-Accounting, and <br />
                <span className="text-zinc-400">Reward Exploitation in Real Time</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps enterprises detect bonus abuse, prevent multi-accounting, identify collusive referral ecosystems, and protect promotional campaigns using AI-powered behavioral analytics and graph intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/prevent-bonus-abuse#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Reward Integrity
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for fintechs, gaming operators, ecommerce platforms, telecom rewards systems, marketplaces, loyalty ecosystems, and digital growth operations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Promotion Abuse Simulation Sandbox */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Promotion Abuse Simulation Sandbox</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">CAMPAIGN PROTECTION ENGINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  An interactive anti-abuse intelligence environment showing multi-account detection, referral abuse analytics, device-sharing intelligence, coupon farming indicators, promotion risk scoring, reward trust analytics, graph-linked abuse ecosystems, and campaign integrity monitoring.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Campaign Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Campaign type</span>
                        <select 
                          value={campaignScope} 
                          onChange={(e) => setCampaignScope(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="referral">Single onboarding referral</option>
                          <option value="coupon">Massive coupon farming ring</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Browser emulator farm</span>
                        <input 
                          type="checkbox" 
                          checked={emulatorFarm} 
                          onChange={(e) => setEmulatorFarm(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Automated bot signup velocity</span>
                        <input 
                          type="checkbox" 
                          checked={botVelocity} 
                          onChange={(e) => setBotVelocity(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE PROMOTION TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Multi-Account Console</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {campaignScope === "coupon" ? "Active Farming Anomaly" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Reward Integrity Timeline</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {emulatorFarm ? "Active Device-Share Alert" : "Standard GRC logs"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">ABUSE PROBABILITY SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">LEGAL RESOLUTION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: Device & session checks active</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Campaign Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Promotional Campaigns Are Increasingly Exploited by Coordinated Abuse Networks
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern digital platforms rely heavily on: referral programs, signup bonuses, cashback systems, promotional credits, loyalty rewards, coupon campaigns, affiliate incentives, and growth acquisition programs. Fraudsters increasingly exploit promotional ecosystems using: multi-accounting, coupon farming, referral rings, emulator farms, fake onboarding, account cycling, bot-driven abuse, collusive reward networks, and identity manipulation. Traditional anti-abuse systems often struggle with: behavioral correlation, device intelligence, graph-based abuse detection, campaign-level visibility, real-time intervention, and operational scalability. Without connected promotional intelligence, organizations face: revenue leakage, inflated acquisition costs, fraudulent payouts, reward exploitation, campaign abuse, operational inefficiencies, and trust erosion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Multi-Accounting", desc: "Fraudsters create large-scale fake account ecosystems to exploit rewards.", icon: <Shield /> },
                { title: "Referral Fraud Rings", desc: "Coordinated abuse networks manipulate referral incentives for financial gain.", icon: <Users /> },
                { title: "Coupon & Cashback Farming", desc: "Attackers automate promotional redemption workflows at scale.", icon: <Sliders /> },
                { title: "Device & Emulator Abuse", desc: "Fraudsters manipulate onboarding environments to bypass controls.", icon: <Clock /> },
                { title: "Loyalty Reward Exploitation", desc: "Rewards ecosystems become vulnerable to account cycling and abuse.", icon: <Building /> },
                { title: "Bot-Driven Campaign Abuse", desc: "Automated abuse creates massive operational and financial exposure.", icon: <Sliders /> }
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

            {/* Promotion Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">PROMOTION LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Patient onboarding verified dynamically using liveness checks." },
                  { title: "2. Referral Activity", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Reward Redemption", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Abuse Scoring", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Moderation Workflows", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
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
              Unified Bonus Abuse and Reward Integrity Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines behavioral analytics, device intelligence, graph intelligence, onboarding trust analytics, promotion monitoring, AI anomaly detection, and governance automation into a unified reward integrity platform. The platform continuously evaluates: account behavior, referral activity, reward redemption, onboarding trust, device reputation, behavioral anomalies, graph relationships, automation indicators, and campaign abuse signals. DeepSense enables organizations to: stop multi-accounting, reduce reward exploitation, improve campaign ROI, secure promotional ecosystems, detect abuse rings, strengthen user trust, and automate anti-abuse operations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Stop multi-accounting", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Reduce reward exploitation", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Improve campaign ROI", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Secure promotional ecosystems", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Detect abuse rings", desc: "Support digital GRC with active security control overlays." },
                { title: "Strengthen user trust", desc: "Block duplicate submissions before cash-outs settle." }
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
              Reward Integrity & Promotion Protection Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Multi-Account Detection", desc: "Detect duplicate accounts, linked onboarding activity, emulator abuse, shared devices, synthetic signup patterns, and account farming ecosystems." },
                { title: "Referral Fraud Monitoring", desc: "Identify collusive referral chains, suspicious growth patterns, fake referrals, reward farming, affiliate abuse, and coordinated signup activity." },
                { title: "Coupon & Cashback Abuse Detection", desc: "Monitor repeated redemptions, abnormal reward usage, automated redemption patterns, incentive manipulation, and campaign exploitation." },
                { title: "Behavioral Analytics", desc: "Analyze onboarding behavior, session consistency, reward interaction patterns, user trust indicators, and automation anomalies." },
                { title: "Device & Session Intelligence", desc: "Detect emulator farms, spoofed devices, VPN/proxy abuse, suspicious environments, and automation tooling." },
                { title: "Reward Trust Scoring", desc: "Generate user trust scores, campaign integrity ratings, reward legitimacy indicators, abuse probability analytics, and operational exposure scores." },
                { title: "Graph Intelligence", desc: "Visualize linked accounts, referral ecosystems, collusive abuse rings, shared infrastructure, and reward laundering networks." },
                { title: "AI Abuse Detection", desc: "Identify automated campaign abuse, coordinated reward manipulation, behavioral inconsistencies, bot-driven signup activity, and suspicious reward orchestration." },
                { title: "Case Management & Moderation", desc: "Coordinate abuse investigations, campaign escalations, moderation workflows, evidence reviews, and remediation tracking." },
                { title: "Governance & Campaign Monitoring", desc: "Support campaign governance, operational transparency, reward oversight, audit readiness, and anti-abuse reporting." }
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
              How DeepSense Prevents Bonus and Referral Abuse
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests onboarding events, referral activity, reward redemptions, coupon usage, device telemetry, behavioral sessions, and transaction activity." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using behavioral analytics, graph intelligence, device reputation, onboarding trust, automation indicators, and AI anomaly detection." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates account legitimacy, referral integrity, campaign abuse indicators, device trust, automation behavior, and collusive relationships." },
                { title: "Step 4 — Decisioning", desc: "The system generates abuse risk scores, reward restrictions, referral interventions, moderation alerts, and operational warnings." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers abuse investigations, moderation reviews, remediation workflows, governance reporting, and campaign escalation." }
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
              Built for Reward, Loyalty, and Growth Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "financial", label: "Fintech Platforms" },
                { id: "gaming", label: "Gaming & Betting Platforms" },
                { id: "ecommerce", label: "Ecommerce Platforms" },
                { id: "telecom", label: "Telecom Reward Systems" },
                { id: "marketplace", label: "Digital Marketplaces" }
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
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect referral bonuses, cashback campaigns, onboarding incentives, and wallet promotions.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "gaming" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect bonus abuse, multi-accounting, emulator farming, and collusive reward ecosystems.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "ecommerce" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure coupon systems, loyalty rewards, cashback programs, and promotional campaigns.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor loyalty abuse, subscriber promotions, onboarding rewards, and referral ecosystems.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "marketplace" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent fake seller onboarding, account farming, referral abuse, and reward manipulation.</h4>
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
              Real-Time Promotion Abuse Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Bonus Abuse Operations Dashboard", desc: "Multi-account alerts, referral fraud visibility, campaign abuse analytics, and onboarding anomalies." },
                { title: "Reward Integrity Intelligence", desc: "User trust scoring, reward legitimacy indicators, campaign risk visibility, and behavioral analytics." },
                { title: "Device & Automation Dashboard", desc: "Emulator detection, device-sharing visibility, automation indicators, and session anomalies." },
                { title: "Referral & Coupon Analytics", desc: "Referral chain visibility, coupon abuse monitoring, graph relationships, and reward ecosystem intelligence." },
                { title: "Investigation Workspace", desc: "Onboarding timelines, graph investigations, moderation workflows, evidence management, and compliance reporting." }
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
                Enterprise-Grade Security for Promotional Ecosystems
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and compliance-ready sovereign hosting options for every single promotional event.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Abuse Decisions", desc: "Every abuse decision includes reason codes, behavioral evidence, graph relationships, device indicators, and campaign context." },
                { title: "Audit Logging", desc: "Track campaign escalations, moderation workflows, reward investigations, and governance actions." },
                { title: "Multi-Tenant Reward Security", desc: "Secure operational separation across campaigns, user ecosystems, and governance workflows." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with operational governance, anti-fraud programs, loyalty oversight, and enterprise resilience." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">CAMPAIGN INTEGRITY FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect multi-accounting in real time?", 
                  a: "Yes. DeepSense continuously evaluates onboarding activity, device intelligence, behavioral anomalies, and graph relationships to detect linked accounts." 
                },
                { 
                  q: "Does DeepSense support referral fraud detection?", 
                  a: "Yes. The platform identifies collusive referral chains, fake onboarding activity, reward farming, and coordinated abuse ecosystems." 
                },
                { 
                  q: "Can DeepSense prevent coupon and cashback abuse?", 
                  a: "Yes. DeepSense detects repeated redemption patterns, automation abuse, suspicious reward usage, and campaign manipulation." 
                },
                { 
                  q: "Does DeepSense support emulator and bot detection?", 
                  a: "Yes. The platform identifies emulator farms, spoofed environments, automation tooling, and suspicious device ecosystems." 
                },
                { 
                  q: "Can DeepSense monitor loyalty and rewards ecosystems?", 
                  a: "Yes. DeepSense continuously evaluates reward integrity, onboarding trust, behavioral consistency, and operational exposure." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise-scale promotional ecosystems?", 
                  a: "Yes. DeepSense is designed for high-scale reward programs, loyalty ecosystems, gaming platforms, fintechs, and enterprise growth operations." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Trusted Digital Onboarding Ecosystems With Real-Time Identity Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure growth campaigns and prevent <br />
                <span className="text-white/40 font-bold">promotional abuse dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Stop multi-accounting, prevent referral abuse, secure reward ecosystems, and improve campaign integrity using enterprise-grade promotion intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/prevent-bonus-abuse#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Reward Integrity
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
