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

export default function EcommerceMarketplacePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("retailers");
  
  // Interactive commerce parameters
  const [checkoutMethod, setCheckoutMethod] = useState<string>("guest");
  const [kycSellerListing, setKycSellerListing] = useState<boolean>(true);
  const [refundPatternAbuse, setRefundPatternAbuse] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic commerce risk parameters
  const calculateCommerceRisk = () => {
    let score = 12; // base risk score
    
    if (checkoutMethod === "guest") score += 25;
    if (refundPatternAbuse) score += 48;
    if (!kycSellerListing) score += 15;
    
    score = Math.min(score, 99);
    
    let status = "SECURE MERCHANT ROUTE";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "REFUND ABUSE FLAGGED";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "COORDINATED CHECKOUT ABUSE";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "UNTRUSTED GUEST METRIC";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateCommerceRisk();

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
                ECOMMERCE & MARKETPLACE FRAUD INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect Ecommerce and Marketplace <br />
                <span className="text-zinc-400">Platforms From Fraud and Abuse</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps ecommerce brands, online marketplaces, digital commerce platforms, and multi-vendor ecosystems detect fraud, secure payments, prevent abuse, and strengthen trust using AI-driven intelligence and real-time risk analytics.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/ecommerce-marketplace#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Ecommerce Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for ecommerce brands, marketplaces, delivery platforms, digital commerce ecosystems, and global online merchants.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Modern Ecommerce Trust and Fraud Operations Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Marketplace Risk Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">ECOMMERCE CORE TRUST ENCLAVE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Commerce Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Checkout Process</span>
                        <select 
                          value={checkoutMethod} 
                          onChange={(e) => setCheckoutMethod(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="auth">Authenticated Buyer Profile</option>
                          <option value="guest">Guest Checkout</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">KYC Verified Listing</span>
                        <input 
                          type="checkbox" 
                          checked={kycSellerListing} 
                          onChange={(e) => setKycSellerListing(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Refund pattern deviation</span>
                        <input 
                          type="checkbox" 
                          checked={refundPatternAbuse} 
                          onChange={(e) => setRefundPatternAbuse(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE ECOMMERCE TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Seller Trust Intelligence</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {kycSellerListing ? "Legitimate listing" : "Rogue catalog warning"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Refund Abuse Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {refundPatternAbuse ? "Repeated Claims Alert" : "Stable history"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">CHECKOUT FRAUD SCORE</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Commerce Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Ecommerce Fraud Evolves Faster Than Traditional Defenses
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern ecommerce and marketplace ecosystems face increasingly sophisticated threats across online checkout, seller onboarding, account access, promotional campaigns, refunds, payouts, delivery workflows, digital wallets, and loyalty systems. Fraudsters increasingly exploit commerce platforms using stolen payment credentials, account takeover, fake sellers, refund abuse, reseller fraud, promo abuse, bot activity, synthetic accounts, and collusive buyer-seller activity. Traditional fraud systems often struggle with real-time transaction volume, multi-channel commerce, digital identity abuse, trust and safety visibility, false positives, and operational scalability. Without connected fraud intelligence, ecommerce businesses face increased chargebacks, customer trust erosion, operational losses, marketplace abuse, seller fraud exposure, poor checkout conversion, and reputation damage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Checkout Fraud", desc: "Stolen payment methods and synthetic accounts increase transaction fraud risk.", icon: <Shield /> },
                { title: "Fake Sellers & Merchants", desc: "Fraudulent sellers manipulate marketplaces and exploit customers.", icon: <Users /> },
                { title: "Refund & Return Abuse", desc: "Fraudsters exploit refund workflows, return systems, and dispute processes.", icon: <Sliders /> },
                { title: "Account Takeover", desc: "Compromised buyer and seller accounts create trust and operational risk.", icon: <Clock /> },
                { title: "Promo & Loyalty Abuse", desc: "Fraud rings exploit discounts, referrals, coupons, and reward systems.", icon: <Building /> },
                { title: "Marketplace Manipulation", desc: "Coordinated fraud networks manipulate reviews, transactions, and seller ecosystems.", icon: <Sliders /> }
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

            {/* Commerce Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">ECOMMERCE RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Checkout", desc: "Buyer checks out using card credentials at payment page." },
                  { title: "2. Fraud Score", desc: "Metadata analyzed in real time for bot or stolen indicators." },
                  { title: "3. Account Guard", desc: "Device and session behaviors matched against stable profiles." },
                  { title: "4. Dispute Control", desc: "Suspicious checkout sessions flagged instantly to avoid chargebacks." },
                  { title: "5. Investigation", desc: "Rogue transactions routed dynamically to support desks." },
                  { title: "6. GRC Compliance", desc: "Operational records compiled to meet PCI DSS governance standards." }
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
              Unified Ecommerce Fraud, Payment, and Trust Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines transaction fraud detection, behavioral analytics, seller intelligence, account protection, graph analysis, payment risk scoring, and trust & safety operations into a unified ecommerce risk platform. The platform continuously evaluates checkout activity, customer trust, seller behavior, refund patterns, account integrity, device intelligence, payment anomalies, graph relationships, and operational abuse indicators. DeepSense enables ecommerce platforms to reduce chargebacks, stop fraud in real time, secure digital commerce, protect buyers and sellers, improve checkout conversion, reduce operational abuse, and strengthen marketplace trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce chargebacks", desc: "Identify and block card testing and stolen credentials dynamically." },
                { title: "Stop fraud in real time", desc: "Track guest checkouts against previous fraud clusters in milliseconds." },
                { title: "Secure digital commerce", desc: "Enforce Multi-Factor and session verifications automatically." },
                { title: "Protect buyers and sellers", desc: "Block fake merchants and payout manipulation workflows." },
                { title: "Improve checkout conversion", desc: "Eliminate customer friction by replacing rules with behavioral telemetry." },
                { title: "Reduce operational abuse", desc: "Track and block coupon farming and referral rings dynamically." }
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
              Ecommerce & Marketplace Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Real-Time Checkout Fraud Detection", desc: "Detect payment fraud, card testing, stolen credentials, transaction anomalies, bot-driven checkout abuse, and high-risk orders." },
                { title: "Account Takeover Prevention", desc: "Protect buyer accounts, seller accounts, loyalty accounts, digital wallets, authentication workflows, and session integrity." },
                { title: "Seller & Merchant Risk Intelligence", desc: "Monitor seller onboarding, marketplace abuse, fake merchants, suspicious listings, payout anomalies, and operational fraud." },
                { title: "Refund & Return Abuse Detection", desc: "Identify refund fraud, return manipulation, dispute abuse, policy exploitation, and repeated abuse behavior." },
                { title: "Promo & Loyalty Abuse Prevention", desc: "Detect coupon abuse, referral fraud, reward farming, multi-account abuse, and bonus exploitation." },
                { title: "Behavioral Analytics", desc: "Analyze checkout behavior, browsing patterns, transaction intent, session anomalies, buyer trust indicators, and seller operational behavior." },
                { title: "Device Fingerprinting", desc: "Detect emulator farms, spoofed environments, shared devices, proxy/VPN abuse, and coordinated fraud infrastructure." },
                { title: "Graph Intelligence", desc: "Visualize linked buyers, connected sellers, refund abuse rings, shared payment methods, mule relationships, and collusive networks." },
                { title: "Case Management & Investigations", desc: "Coordinate fraud reviews, seller investigations, dispute workflows, operational escalations, and evidence management." },
                { title: "Trust & Safety Governance", desc: "Support platform trust operations, governance monitoring, audit readiness, operational controls, and abuse remediation workflows." }
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
              How DeepSense Protects Ecommerce Ecosystems
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests checkout activity, orders, payment events, account sessions, seller onboarding, refunds, and operational telemetry." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches events using behavioral analytics, device intelligence, graph relationships, payment telemetry, abuse indicators, and trust signals." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates checkout legitimacy, customer trust, seller exposure, operational anomalies, fraud relationships, and abuse indicators." },
                { title: "Step 4 — Decisioning", desc: "The system generates fraud scores, order decisions, account interventions, seller escalations, and operational alerts." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers fraud investigations, dispute reviews, seller enforcement, remediation workflows, and governance reporting." }
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
              Built for Modern Digital Commerce Platforms
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "retailers", label: "Ecommerce Retailers" },
                { id: "marketplaces", label: "Multi-Vendor Marketplaces" },
                { id: "delivery", label: "Delivery & Commerce" },
                { id: "digitalgoods", label: "Digital Goods Platforms" },
                { id: "crossborder", label: "Cross-Border Commerce" }
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
              {activeTab === "retailers" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect online checkout, customer accounts, card payments, and loyalty programs.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure guest checkouts. Map device patterns dynamically to prevent automated bot testing cards.
                  </p>
                </div>
              )}
              {activeTab === "marketplaces" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor seller onboarding, marketplace abuse, fake listings, and payout fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track seller payout requests. Secure approval workflows and analyze threshold indicators before money leaves the platform.
                  </p>
                </div>
              )}
              {activeTab === "delivery" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect account abuse, payout manipulation, fake drivers or merchants, and operational fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard delivery accounts. Block payout manipulation attacks dynamically before funds are sent.
                  </p>
                </div>
              )}
              {activeTab === "digitalgoods" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent credential abuse, account resale, promo farming, and payment fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Validate virtual asset transfers. Enforce multi-account lookup validations dynamically during checkouts.
                  </p>
                </div>
              )}
              {activeTab === "crossborder" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Manage payment risk, sanctions exposure, fraud relationships, and international abuse patterns.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international shipping hubs. Track delivery configurations against fraud databases in real time.
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
              Connected Across the Ecommerce Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links transaction fraud deciders with active GRC dashboards, GRC evidence matrices, device intelligence engines, and automated incident logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Payment Fraud Intelligence", desc: "Real-time checkout scoring and transaction monitoring." },
                { title: "Device Fingerprinting", desc: "Session trust analysis and fraud infrastructure detection." },
                { title: "Behavioral Biometrics", desc: "Behavioral intent analysis and anomaly detection." },
                { title: "Seller & Merchant Intelligence", desc: "Marketplace trust and operational risk analytics." },
                { title: "Graph Intelligence", desc: "Connected fraud ecosystem and abuse network visibility." },
                { title: "UEBA & Operational Monitoring", desc: "Behavioral anomaly detection for buyers, sellers, and operators." },
                { title: "GRC & Controls Monitoring", desc: "Operational governance and compliance visibility." }
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
              Real-Time Ecommerce Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fraud Operations Dashboard", desc: "Checkout fraud alerts, transaction monitoring, abuse visibility, and operational risk analytics." },
                { title: "Seller Trust Intelligence", desc: "Seller risk scoring, payout monitoring, onboarding analytics, and operational anomalies." },
                { title: "Customer Risk Analytics", desc: "Behavioral trust scoring, account takeover monitoring, refund abuse analytics, and loyalty risk indicators." },
                { title: "Marketplace Abuse Monitoring", desc: "Collusive network detection, fake account analytics, graph relationships, and abuse heatmaps." },
                { title: "Investigation Workspace", desc: "Linked entities, order timelines, payment evidence, operational intelligence, and remediation workflows." }
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
              Designed for Digital Commerce Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous checkout fraud models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Ecommerce Retailers", "Online Marketplaces", "Delivery Platforms", "Digital Goods Platforms", "Travel & Booking Platforms", "Ticketing Platforms",
                "Fashion Commerce", "Luxury Retail", "Subscription Commerce", "Grocery Delivery", "Social Commerce", "Cross-Border Ecommerce"
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
                Enterprise-Grade Security for Ecommerce and Marketplace Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and comprehensive logging for every single transaction scan.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Fraud Decisions", desc: "Every fraud and trust decision includes reason codes, behavioral evidence, and payment intelligence." },
                { title: "Audit Logging", desc: "Track fraud reviews, seller investigations, refund workflows, and operational escalations." },
                { title: "Multi-Tenant Commerce Security", desc: "Secure operational separation across marketplace environments, merchant ecosystems, and customer operations." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with PCI DSS, GRC compliance programs, and privacy regulations." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">ECOMMERCE FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect ecommerce checkout fraud in real time?", 
                  a: "Yes. DeepSense provides millisecond-level transaction scoring and checkout fraud decisioning." 
                },
                { 
                  q: "Does DeepSense support seller and marketplace fraud detection?", 
                  a: "Yes. The platform continuously monitors seller onboarding, payout activity, operational abuse, and marketplace trust indicators." 
                },
                { 
                  q: "Can DeepSense reduce refund and return abuse?", 
                  a: "Yes. DeepSense detects suspicious refund patterns, repeated abuse behavior, and operational manipulation." 
                },
                { 
                  q: "Does DeepSense support account takeover prevention?", 
                  a: "Yes. The platform protects buyer and seller accounts using behavioral analytics, device intelligence, and session monitoring." 
                },
                { 
                  q: "Can DeepSense detect promo and loyalty abuse?", 
                  a: "Yes. The platform identifies referral abuse, coupon exploitation, reward farming, and coordinated multi-account fraud." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise ecommerce ecosystems?", 
                  a: "Yes. DeepSense is designed for large-scale ecommerce operations, digital marketplaces, and trust & safety environments." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Trusted Ecommerce Experiences With Real-Time Fraud Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure merchant environments and prevent <br />
                <span className="text-white/40 font-bold">digital fraud schemes dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect checkout experiences, stop marketplace abuse, reduce chargebacks, and strengthen buyer and seller trust using enterprise-grade ecommerce fraud intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/ecommerce-marketplace#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Ecommerce Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
