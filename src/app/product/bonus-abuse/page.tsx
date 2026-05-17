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
  Gift,
  Search,
  Gauge,
  Workflow
} from "lucide-react";

export default function BonusAbusePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("fintech");
  
  // Interactive Promo Risk Simulator States
  const [emulatorDetected, setEmulatorDetected] = useState<boolean>(true);
  const [deviceMatch, setDeviceMatch] = useState<boolean>(true);
  const [payoutOverlap, setPayoutOverlap] = useState<boolean>(true);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic bonus abuse risk score
  const calculatePromoRisk = () => {
    let score = 10;
    if (emulatorDetected) score += 40;
    if (deviceMatch) score += 25;
    if (payoutOverlap) score += 20;
    
    score = Math.min(score, 99);
    
    let decision = "RELEASE BONUS";
    let color = "text-emerald-500";
    if (score >= 75) {
      decision = "BLOCK ACCOUNT & REDEEM DENIED";
      color = "text-red-500";
    } else if (score >= 50) {
      decision = "HOLD FOR MANUAL KYC TRIGGER";
      color = "text-amber-500";
    } else if (score >= 30) {
      decision = "REQUIRE SMS MFA";
      color = "text-orange-400";
    }
    
    return { score, decision, color };
  };

  const { score, decision, color } = calculatePromoRisk();

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
                <Gift className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                REAL-TIME BONUS & PROMO ABUSE DETECTION
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Stop Bonus Abuse, Referral Fraud, <br />
                <span className="text-zinc-400">and Incentive Exploitation</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps fintechs, gaming platforms, marketplaces, telecom wallets, and digital businesses detect multi-account abuse, self-referrals, synthetic identity farming, and coordinated promo fraud using behavioral analytics, device intelligence, graph detection, and real-time risk scoring.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/fraud-detection" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Fraud Platform
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for high-growth digital platforms, fintech ecosystems, gaming operators, marketplaces, telecom wallets, and modern consumer applications.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Advanced Promo Fraud Intelligence Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Incentive Fraud Control Center</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">PROMO REDEMPTION MONITOR</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Registration Telemetry</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Android Emulator Environment</span>
                        <input 
                          type="checkbox" 
                          checked={emulatorDetected} 
                          onChange={(e) => setEmulatorDetected(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Device Match (Existing Account)</span>
                        <input 
                          type="checkbox" 
                          checked={deviceMatch} 
                          onChange={(e) => setDeviceMatch(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Payout Wallet Overlap</span>
                        <input 
                          type="checkbox" 
                          checked={payoutOverlap} 
                          onChange={(e) => setPayoutOverlap(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE PROMO TELEMETRY DIAGNOSTIC</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Device Reuse Intelligence</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {deviceMatch ? "Linked Account Detected" : "Unique device signature"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Account Velocity Monitoring</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">45 signups/hr from range</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">BONUS ABUSE RISK SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">AUTOMATED ENFORCEMENT RECOMMENDATION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{decision}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Referral Fraud Analytics: Active loop checks</span>
                      <span>Privacy-Conscious Hashed KYC active</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Incentive Exposure</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Incentive Programs Are a Growing Fraud Target
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Promotions, referral systems, onboarding bonuses, loyalty rewards, cashback incentives, and gaming credits attract sophisticated fraud rings exploiting weak identity and behavioral controls. Fraudsters increasingly use synthetic identities, emulator farms, VPN/proxy networks, shared devices, stolen payment instruments, automated account creation, and collusive referral schemes. Traditional fraud tools often cannot detect linked account behavior, coordinated abuse rings, device reuse, synthetic onboarding patterns, and reward farming ecosystems. Without advanced fraud intelligence, organizations face incentive losses, distorted growth metrics, fake user acquisition, reduced campaign ROI, operational overhead, and payment/chargeback exposure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Multi-Account Farming", desc: "Fraudsters create large volumes of linked accounts to repeatedly claim incentives.", icon: <Users /> },
                { title: "Self-Referral Abuse", desc: "Users exploit referral programs using fake or connected identities.", icon: <Zap /> },
                { title: "Emulator & Bot Farms", desc: "Automated environments generate synthetic onboarding activity at scale.", icon: <Server /> },
                { title: "Synthetic Identity Abuse", desc: "Fraudsters use fake identities and manipulated KYC flows to unlock bonuses.", icon: <Shield /> },
                { title: "Payment Instrument Reuse", desc: "The same cards, wallets, or bank accounts are reused across multiple “new” accounts.", icon: <Wallet /> },
                { title: "Collusive Reward Rings", desc: "Fraud networks coordinate referral chains and payout extraction schemes.", icon: <Network /> }
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

            {/* Bonus Abuse Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">BONUS ABUSE REDEMPTION FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center font-manrope">
                {[
                  { title: "1. Signup Event", desc: "Device and IP fingerprints enriched inside secure enclave." },
                  { title: "2. Referral Link Bind", desc: "Referrer identity mapped to identify self-referral rings." },
                  { title: "3. Onboarding KYC", desc: "Synthetic document matching flags duplicate face patterns." },
                  { title: "4. Bonus Unlock", desc: "Payout wallet compared against historical redemption farm ledger." },
                  { title: "5. Enforcement Trigger", desc: "High-risk redemptions flagged for payout hold or account freeze." }
                ].map((step, idx) => (
                  <div key={idx} className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl relative flex flex-col items-center justify-between">
                    <div>
                      <span className="text-red-500 font-black text-sm block mb-3 font-mono">{step.title}</span>
                      <p className="text-zinc-500 text-xs font-inter leading-relaxed">{step.desc}</p>
                    </div>
                    {idx < 4 && <ArrowRight className="hidden md:block absolute top-[45%] -right-4 w-6 h-6 text-zinc-300 translate-x-1/2 z-10" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: DEEPSENSE SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Growth Intelligence</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Real-Time Promo Fraud & Incentive Abuse Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines graph intelligence, behavioral biometrics, device fingerprinting, transaction analytics, identity risk scoring, and onboarding intelligence into a unified bonus abuse detection platform. The platform continuously analyzes referral relationships, device reuse, onboarding patterns, emulator indicators, payment overlaps, identity consistency, behavioral anomalies, and reward redemption flows. DeepSense enables organizations to protect incentive programs, reduce fake acquisition, improve campaign ROI, prevent reward leakage, identify fraud rings, and strengthen trust and retention.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Protect incentive programs", desc: "Instantly identify emulator farms and self-referrals." },
                { title: "Reduce fake acquisition", desc: "Filter out synthetic registrations before bonuses clear." },
                { title: "Improve campaign ROI", desc: "Ensure advertising budgets acquire real human consumers." },
                { title: "Prevent reward leakage", desc: "Block coordinated payout farming clusters." },
                { title: "Identify fraud rings", desc: "Map linked accounts using our advanced payment graph ledger." },
                { title: "Strengthen trust & retention", desc: "Approve clean organic referral networks without friction." }
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
              Enterprise Promo Abuse Detection Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Multi-Account Abuse Detection", desc: "Identify linked accounts, duplicate identities, account farming, coordinated registrations, household abuse, and velocity anomalies." },
                { title: "Referral Fraud Detection", desc: "Detect self-referrals, collusive referral networks, fake referrals, referral loops, suspicious referral timing, and payout manipulation." },
                { title: "Device Intelligence", desc: "Analyze shared devices, emulators, rooted devices, spoofed environments, VPN/proxy usage, and cloned device fingerprints." },
                { title: "Synthetic Identity Detection", desc: "Identify fake onboarding attempts, manipulated KYC flows, identity inconsistencies, reused documents, deepfake onboarding, and behavioral anomalies." },
                { title: "Payment & Wallet Correlation", desc: "Correlate reused cards, shared wallets, bank account overlap, payout destination reuse, and payment graph relationships." },
                { title: "Behavioral Analytics", desc: "Analyze signup velocity, navigation behavior, interaction patterns, bot-like sessions, scripted onboarding activity, and reward redemption behavior." },
                { title: "Reward Redemption Monitoring", desc: "Track suspicious withdrawals, rapid bonus cash-outs, high-risk redemption behavior, linked redemption clusters, and payout velocity anomalies." },
                { title: "Graph Intelligence", desc: "Visualize referral fraud rings, connected identities, shared infrastructure, linked payout accounts, and coordinated abuse ecosystems." },
                { title: "Automated Risk Decisioning", desc: "Decision outcomes include approve, hold reward, deny bonus, require verification, escalate investigation, block account, and trigger enhanced KYC." },
                { title: "Case Management & Investigations", desc: "Automatically create abuse cases, assign analysts, attach graph evidence, monitor fraud rings, and track repeat offenders." }
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
              How DeepSense Detects Bonus & Promo Abuse
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Event Ingestion", desc: "DeepSense ingests signup events, referrals, bonus claims, wallet activity, transaction data, device telemetry, and KYC events." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches accounts using device intelligence, behavioral profiles, payment fingerprints, graph relationships, identity risk signals, and network telemetry." },
                { title: "Step 3 — Pattern Detection", desc: "DeepSense evaluates account farming behavior, referral abuse, device reuse, emulator activity, synthetic identity indicators, and reward extraction patterns." },
                { title: "Step 4 — Scoring", desc: "The system generates promo abuse scores, referral trust scores, account legitimacy assessments, and payout risk decisions." },
                { title: "Step 5 — Enforcement", desc: "High-risk accounts trigger analyst workflows, graph investigations, payout holds, enhanced verification, and coordinated fraud reviews." }
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
              Built for High-Growth Digital Platforms
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "fintech", label: "Fintech Platforms" },
                { id: "gaming", label: "Gaming & Betting Platforms" },
                { id: "ecommerce", label: "Ecommerce & Marketplaces" },
                { id: "telecom", label: "Telecom Wallets" },
                { id: "crypto", label: "Crypto & Web3 Platforms" }
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
              {activeTab === "fintech" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent onboarding bonus abuse, referral fraud, wallet farming, and synthetic account creation.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Stop neobank welcome promotion abuse. Verify device hardware hashes to block fraudsters registering 50 accounts to claim incentive rewards on the same physical phone.
                  </p>
                </div>
              )}
              {activeTab === "gaming" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect free-bet abuse, collusive reward farming, multi-account gaming fraud, and emulator-driven abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Identify coordinated players betting opposing outcomes across linked profiles to clear bonus rollover thresholds with zero risk.
                  </p>
                </div>
              )}
              {activeTab === "ecommerce" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Reduce coupon fraud, cashback abuse, fake user acquisition, and loyalty exploitation.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track checkout parameters and device linkages to block automated bots applying promo codes in rapid checkout loops.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Identify wallet farming, SIM-linked abuse, coordinated payout schemes, and telecom referral fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure mobile wallet activation rewards. Correlate carrier logs and SIM age parameters to expose bulk-registered phone farms.
                  </p>
                </div>
              )}
              {activeTab === "crypto" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor airdrop farming, sybil attacks, wallet clusters, and token reward abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Analyze blockchain transaction dependencies to group related wallet clusters and prevent automated scripts from draining token distribution budgets.
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
              Connected Across the DeepSense Risk Platform
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense unifies incentive fraud monitoring with our wider behavioral, KYC, device, and ledger graph systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Device Fingerprinting", desc: "Identify shared infrastructure and suspicious environments." },
                { title: "Behavioral Biometrics", desc: "Detect automated onboarding and scripted interaction behavior." },
                { title: "Graph Intelligence", desc: "Visualize coordinated fraud ecosystems and referral rings." },
                { title: "KYC Verification", desc: "Strengthen onboarding trust and synthetic identity prevention." },
                { title: "Transaction Fraud Detection", desc: "Correlate payout abuse with broader fraud signals." },
                { title: "Case Management", desc: "Escalate coordinated abuse into investigation workflows." },
                { title: "AML Monitoring", desc: "Correlate payout abuse and mule activity with financial crime indicators." }
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
              Real-Time Promo Abuse Intelligence
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Promo Abuse Operations Dashboard", desc: "Live abuse alerts, signup risk monitoring, bonus redemption analytics, and fraud velocity tracking." },
                { title: "Referral Network Analytics", desc: "Referral graph clusters, self-referral detection, payout overlap analysis, and campaign abuse monitoring." },
                { title: "Device & Emulator Intelligence", desc: "Emulator detection, shared device heatmaps, VPN/proxy analytics, and suspicious environment monitoring." },
                { title: "Reward Redemption Monitoring", desc: "Withdrawal risk scoring, rapid cash-out alerts, payout behavior analysis, and linked payout tracking." },
                { title: "Investigation Workspace", desc: "Fraud graph visualization, linked identities, device history, and case escalation workflows." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Target Verticals</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Designed for Modern Incentive Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Secure growth campaigns and promotional allocations across globally scaling neobanks and platforms.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Fintech", "Gaming & Betting", "Ecommerce", "Marketplaces", "Telecom Wallets", "Crypto & Web3",
                "Consumer Apps", "Digital Banking", "Super Apps", "Subscription Platforms", "Delivery Platforms", "Loyalty Platforms"
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
                Explainable, Scalable, and Enterprise-Ready
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense minimizes exposure to sensitive identity and payment data through tokenized and hashed architectures.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Fraud Decisions", desc: "Every promo abuse decision includes reason codes, behavioral evidence, graph relationships, and device intelligence." },
                { title: "Audit Logging", desc: "Track reward decisions, analyst actions, payout holds, rule modifications, and investigation activity." },
                { title: "Multi-Tenant Security", desc: "Secure isolation across organizations, campaigns, fraud models, analysts, and investigation data." },
                { title: "Privacy-Conscious Detection", desc: "Minimize exposure to sensitive identity data using tokenized and hashed architectures." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Promo FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect referral fraud?", 
                  a: "Yes. DeepSense detects self-referrals, collusive referral rings, payout manipulation, and suspicious referral behavior." 
                },
                { 
                  q: "Does the platform support emulator detection?", 
                  a: "Yes. DeepSense identifies emulators, spoofed devices, rooted environments, and automated onboarding infrastructure." 
                },
                { 
                  q: "Can DeepSense detect synthetic onboarding abuse?", 
                  a: "Yes. The platform combines device intelligence, behavioral analytics, KYC verification, and graph detection to identify synthetic identity fraud." 
                },
                { 
                  q: "Does DeepSense support gaming and betting platforms?", 
                  a: "Yes. The platform supports free-bet abuse detection, multi-account gaming fraud, and reward farming prevention." 
                },
                { 
                  q: "Can the platform detect payout account reuse?", 
                  a: "Yes. DeepSense correlates wallets, cards, bank accounts, and payout destinations across linked accounts." 
                },
                { 
                  q: "Can DeepSense automatically block reward abuse?", 
                  a: "Yes. The platform supports automated holds, denials, enhanced verification, and investigation escalation workflows." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase">Protect Incentive Programs From Coordinated Fraud</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Protect onboarding promotions, referrals, <br />
                <span className="text-white/40 font-bold">and reward campaigns globally.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Detect referral abuse, stop reward farming, reduce fake acquisition, and protect growth campaigns using real-time graph intelligence and behavioral fraud analytics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/fraud-detection" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Fraud Platform
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
