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

export default function RetailConsumerPlatformsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("omnichannel");
  
  // Interactive Retail parameters
  const [checkoutPattern, setCheckoutPattern] = useState<string>("normal");
  const [customerVerification, setCustomerVerification] = useState<boolean>(true);
  const [refundVolume, setRefundVolume] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic retail risk parameters
  const calculateRetailRisk = () => {
    let score = 10; // base risk score
    
    if (checkoutPattern === "spike") score += 42;
    if (refundVolume) score += 34;
    if (!customerVerification) score += 13;
    
    score = Math.min(score, 99);
    
    let status = "SECURE CHECKOUT SESSION";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "COORDINATED BOT REDIRECT FLAGGED";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "UNTRUSTED PATIENT SIGNUP";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "HIGH VALUE DISPUTE DRIFT";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateRetailRisk();

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
                RETAIL FRAUD & CUSTOMER TRUST INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect Retail and Consumer Platforms <br />
                <span className="text-zinc-400">From Fraud and Abuse</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps retail brands and consumer platforms detect fraud, secure payments, prevent account abuse, monitor loyalty fraud, and strengthen customer trust using AI-driven analytics and real-time operational intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/retail-consumer-platforms#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Retail Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for retail brands, omnichannel commerce platforms, subscription services, consumer apps, loyalty ecosystems, and digital customer platforms.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Retail Fraud Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Checkout Fraud Dashboard</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">RETAIL CORE CUSTOMER TRUST ENGINE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Retail Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Checkout Pattern</span>
                        <select 
                          value={checkoutPattern} 
                          onChange={(e) => setCheckoutPattern(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="normal">Secure card swipe</option>
                          <option value="spike">Coordinated bot purchase spikes</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">eID Verification verified</span>
                        <input 
                          type="checkbox" 
                          checked={customerVerification} 
                          onChange={(e) => setCustomerVerification(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">High value dispute spike</span>
                        <input 
                          type="checkbox" 
                          checked={refundVolume} 
                          onChange={(e) => setRefundVolume(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE RETAIL TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Loyalty Abuse Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {checkoutPattern === "spike" ? "Coordinated Spikes Vector" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Customer Trust Score</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {refundVolume ? "Active Ring Cluster Alert" : "Standard payout history"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">CUSTOMER TRUST SCORE</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Retail Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Retail Fraud and Consumer Abuse Continue to Evolve
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern retail and consumer platforms manage ecommerce transactions, loyalty programs, digital wallets, subscriptions, omnichannel payments, customer onboarding, refunds and returns, and mobile commerce. Fraudsters increasingly exploit retail ecosystems using stolen payment methods, account takeover, refund abuse, loyalty fraud, fake accounts, bot activity, coupon abuse, synthetic identities, and coordinated fraud rings. Traditional fraud systems often struggle with omnichannel visibility, customer identity trust, operational scalability, behavioral intelligence, false positives, and real-time fraud prevention. Without connected retail intelligence, businesses face chargeback growth, customer trust erosion, operational losses, loyalty abuse, revenue leakage, poor customer experience, and reputational damage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Checkout Fraud", desc: "Stolen payment methods and account abuse increase transaction risk.", icon: <Shield /> },
                { title: "Loyalty & Rewards Abuse", desc: "Fraudsters exploit reward systems, coupons, and referral programs.", icon: <Users /> },
                { title: "Refund & Return Fraud", desc: "Abusive refund behavior creates operational and financial losses.", icon: <Sliders /> },
                { title: "Account Takeover", desc: "Compromised customer accounts create trust and reputational exposure.", icon: <Clock /> },
                { title: "Omnichannel Fraud Complexity", desc: "Retailers struggle to unify fraud intelligence across online and offline channels.", icon: <Building /> },
                { title: "Fake Customer Accounts", desc: "Bot-driven signups and synthetic identities degrade trust ecosystems.", icon: <Sliders /> }
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

            {/* Retail Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">RETAIL RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Customer onboarding verified dynamically using liveness checks." },
                  { title: "2. Checkout", desc: "Checkout payments checked instantly against legacy historical templates." },
                  { title: "3. Fraud Scoring", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Loyalty check", desc: "Loyalty redemptions evaluated for proxy listings and synthetic anomalies." },
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
              Unified Retail Fraud & Customer Trust Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines fraud detection, behavioral analytics, payment intelligence, loyalty protection, graph analysis, customer trust scoring, and governance automation into a unified retail risk platform. The platform continuously evaluates customer behavior, payment activity, loyalty usage, account integrity, refund behavior, device intelligence, omnichannel interactions, graph relationships, and operational risk indicators. DeepSense enables retail platforms to: reduce chargebacks, stop abuse in real time, improve checkout trust, protect customer accounts, reduce operational losses, strengthen loyalty ecosystems, and improve customer experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce chargebacks", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Stop abuse in real time", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Improve checkout trust", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Protect customer accounts", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Reduce operational losses", desc: "Support HIPAA-aligned workflows with active security control overlays." },
                { title: "Strengthen loyalty ecosystems", desc: "Block duplicate medical disbursements before payouts settle." }
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
              Retail & Consumer Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Real-Time Checkout Fraud Detection", desc: "Detect payment fraud, card testing, suspicious orders, high-risk transactions, bot-driven purchases, and payment anomalies." },
                { title: "Account Takeover Prevention", desc: "Protect customer accounts, loyalty systems, subscriptions, authentication workflows, digital wallets, and mobile sessions." },
                { title: "Loyalty & Rewards Fraud Detection", desc: "Identify reward farming, referral abuse, coupon manipulation, fake redemption activity, and loyalty ecosystem abuse." },
                { title: "Refund & Return Abuse Monitoring", desc: "Monitor suspicious refunds, repeated return abuse, policy exploitation, refund manipulation, and operational fraud." },
                { title: "Behavioral Analytics", desc: "Analyze shopping behavior, session anomalies, transaction intent, customer trust indicators, and omnichannel behavior consistency." },
                { title: "Device & Session Intelligence", desc: "Detect spoofed devices, emulator farms, bot infrastructure, shared devices, and suspicious customer environments." },
                { title: "Subscription & Billing Fraud Detection", desc: "Detect fake signups, trial abuse, payment manipulation, refund exploitation, and account farming." },
                { title: "Graph Intelligence", desc: "Visualize linked accounts, connected devices, refund abuse networks, loyalty fraud rings, and operational relationships." },
                { title: "Case Management & Investigations", desc: "Coordinate fraud investigations, customer reviews, refund escalations, loyalty abuse investigations, and evidence workflows." },
                { title: "Governance & Operational Monitoring", desc: "Support audit readiness, operational governance, fraud controls, customer trust monitoring, and remediation workflows." }
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
              How DeepSense Protects Retail and Consumer Ecosystems
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests transactions, customer sessions, loyalty activity, refunds, onboarding workflows, operational telemetry, and omnichannel signals." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches events using behavioral analytics, device intelligence, graph relationships, payment telemetry, abuse indicators, and trust signals." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates transaction legitimacy, customer trust, refund exposure, loyalty abuse indicators, operational anomalies, and fraud relationships." },
                { title: "Step 4 — Decisioning", desc: "The system generates fraud scores, transaction interventions, account restrictions, refund escalations, and operational alerts." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers fraud investigations, customer reviews, operational escalations, remediation workflows, and governance reporting." }
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
              Built for Modern Consumer Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "omnichannel", label: "Omnichannel Retailers" },
                { id: "subscription", label: "Subscription Platforms" },
                { id: "mobile", label: "Consumer Mobile Apps" },
                { id: "loyalty", label: "Loyalty Platforms" },
                { id: "digital", label: "Digital Ecosystems" }
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
              {activeTab === "omnichannel" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect online checkout, in-store payments, customer accounts, and loyalty ecosystems.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "subscription" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor fake signups, billing fraud, account farming, and refund abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "mobile" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure onboarding, authentication, wallet activity, and customer trust.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "loyalty" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect reward abuse, referral fraud, fake activity, and coordinated fraud rings.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "digital" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage omnichannel fraud, customer trust, payment risk, and operational integrity.</h4>
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
              Connected Across the Consumer Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links retail fraud deciders with active GRC dashboards, GRC evidence matrices, device intelligence engines, and automated incident logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Payment Fraud Intelligence", desc: "Real-time checkout and transaction fraud monitoring." },
                { title: "Device Fingerprinting", desc: "Customer trust and session integrity intelligence." },
                { title: "Behavioral Biometrics", desc: "Behavioral anomaly detection and shopping intent analysis." },
                { title: "Identity Intelligence", desc: "Customer onboarding and synthetic identity prevention." },
                { title: "Graph Intelligence", desc: "Connected fraud ecosystem and abuse network visibility." },
                { title: "UEBA & Operational Monitoring", desc: "Behavioral anomaly detection across operational environments." },
                { title: "GRC & Controls Monitoring", desc: "Operational governance and audit readiness intelligence." }
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
              Real-Time Retail Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Retail Fraud Operations Dashboard", desc: "Checkout fraud alerts, payment monitoring, operational abuse visibility, and transaction analytics." },
                { title: "Customer Trust Intelligence", desc: "Customer trust scoring, onboarding analytics, account integrity monitoring, and behavioral indicators." },
                { title: "Loyalty & Refund Analytics", desc: "Reward abuse monitoring, refund trends, operational anomalies, and abuse visibility." },
                { title: "Omnichannel Risk Dashboard", desc: "Online and offline fraud visibility, behavioral consistency analytics, payment risk monitoring, and customer trust trends." },
                { title: "Investigation Workspace", desc: "Linked entities, transaction timelines, graph investigations, evidence management, and operational intelligence." }
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
              Designed for Consumer and Retail Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous retail claims models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Omnichannel Retailers", "Consumer Mobile Apps", "Subscription Platforms", "Loyalty Platforms", "Grocery & Delivery Platforms", "Fashion Retail",
                "Electronics Retail", "Travel & Booking Platforms", "Entertainment Platforms", "Digital Consumer Services", "Marketplace Retailers", "Social Commerce Platforms"
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
                Enterprise-Grade Security for Retail and Consumer Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and HIPAA-compliant sovereign hosting options for every single checkout scan.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Fraud Decisions", desc: "Every fraud and trust decision includes reason codes, behavioral evidence, and payment indicators." },
                { title: "Audit Logging", desc: "Track fraud reviews, refund escalations, loyalty investigations, and operational workflows." },
                { title: "Multi-Tenant Consumer Platform Security", desc: "Secure operational separation across customer environments, retail ecosystems, and operational teams." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with PCI DSS, fraud governance, privacy obligations, and compliance." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">RETAIL FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect retail payment fraud in real time?", 
                  a: "Yes. DeepSense continuously evaluates checkout activity, customer trust, behavioral indicators, and transaction risk in real time." 
                },
                { 
                  q: "Does DeepSense support loyalty and rewards fraud detection?", 
                  a: "Yes. The platform identifies reward farming, referral abuse, coupon manipulation, and coordinated loyalty fraud activity." 
                },
                { 
                  q: "Can DeepSense reduce refund and return abuse?", 
                  a: "Yes. DeepSense detects suspicious refund behavior, policy exploitation, and operational abuse patterns." 
                },
                { 
                  q: "Does DeepSense support omnichannel fraud monitoring?", 
                  a: "Yes. The platform unifies online, mobile, and offline risk intelligence into a connected fraud monitoring ecosystem." 
                },
                { 
                  q: "Can DeepSense prevent fake customer account creation?", 
                  a: "Yes. The platform detects bot activity, synthetic identities, emulator farms, and coordinated signup abuse." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise retail environments?", 
                  a: "Yes. DeepSense is designed for high-scale retail ecosystems, digital consumer platforms, and enterprise fraud governance." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Trusted Consumer Experiences With Real-Time Fraud Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure checkout journeys and prevent <br />
                <span className="text-white/40 font-bold">omnichannel dispute leakage anomalies dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect customer journeys, reduce operational abuse, strengthen loyalty ecosystems, and improve checkout trust using enterprise-grade retail fraud intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/retail-consumer-platforms#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Retail Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
