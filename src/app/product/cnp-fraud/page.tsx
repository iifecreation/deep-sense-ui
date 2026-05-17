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
  Send,
  Smartphone,
  Eye,
  Users,
  BookOpen,
  Briefcase,
  Building2,
  ShoppingBag,
  Wallet,
  History,
  Clock,
  Search,
  RefreshCw,
  Scale,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CreditCard,
  Truck,
  Filter,
  Check
} from "lucide-react";

export default function CNPFraudPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive E-commerce Checkout Risk Playground States
  const [cardType, setCardType] = useState<string>("prepaid");
  const [binMismatch, setBinMismatch] = useState<boolean>(true);
  const [botRisk, setBotRisk] = useState<string>("high");
  const [shippingMismatch, setShippingMismatch] = useState<boolean>(true);
  
  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic risk score & recommendations based on selected playground variables
  const calculatePlaygroundRisk = () => {
    let score = 20;
    if (cardType === "prepaid") score += 20;
    if (cardType === "virtual") score += 15;
    if (binMismatch) score += 25;
    if (botRisk === "high") score += 30;
    if (botRisk === "medium") score += 15;
    if (shippingMismatch) score += 20;
    
    score = Math.min(score, 99);
    
    let decision = "APPROVE";
    let color = "text-emerald-500";
    if (score >= 80) {
      decision = "DECLINE (Blocked before Auth)";
      color = "text-red-500";
    } else if (score >= 50) {
      decision = "STEP-UP (Trigger 3DS Challenge)";
      color = "text-amber-500";
    } else if (score >= 35) {
      decision = "REVIEW (Hold Fulfillment)";
      color = "text-orange-400";
    }
    
    return { score, decision, color };
  };

  const { score, decision, color } = calculatePlaygroundRisk();

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-indigo-50 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Headers */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-indigo-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <CreditCard className="w-3.5 h-3.5 text-indigo-400" />
                Card-Not-Present Fraud Protection
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Stop Online Payment Fraud <br />
                <span className="text-zinc-400">Before Checkout Completes.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense detects stolen cards, card testing, bot checkout, BIN mismatch, risky devices, shipping anomalies, failed 3DS, chargeback abuse, and suspicious payment instrument behavior in real time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/nfc-contactless-fraud" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore NFC Fraud
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for e-commerce platforms, payment processors, fintechs, marketplaces, gaming platforms, subscription businesses, and digital merchants.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive E-commerce Checkout Risk Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-indigo-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">ECOMMERCE CHECKOUT FRAUD PLAYGROUND</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">ADAPTIVE RISK GATEWAY</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive variables config */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Checkout Risk Signals</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div>
                        <span className="text-zinc-500 block mb-2">Card Type</span>
                        <div className="grid grid-cols-3 gap-2">
                          {["credit", "prepaid", "virtual"].map((type) => (
                            <button 
                              key={type} 
                              onClick={() => setCardType(type)}
                              className={`py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${cardType === type ? "bg-indigo-600 text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">BIN Country Mismatch</span>
                        <input 
                          type="checkbox" 
                          checked={binMismatch} 
                          onChange={(e) => setBinMismatch(e.target.checked)}
                          className="w-4 h-4 accent-indigo-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Shipping/Billing Mismatch</span>
                        <input 
                          type="checkbox" 
                          checked={shippingMismatch} 
                          onChange={(e) => setShippingMismatch(e.target.checked)}
                          className="w-4 h-4 accent-indigo-600"
                        />
                      </div>

                      <div>
                        <span className="text-zinc-500 block mb-2">Bot Risk Level</span>
                        <div className="grid grid-cols-3 gap-2">
                          {["low", "medium", "high"].map((level) => (
                            <button 
                              key={level} 
                              onClick={() => setBotRisk(level)}
                              className={`py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${botRisk === level ? "bg-indigo-600 text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Checkout risk panel output */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>CHECKOUT FRAUD INTELLIGENCE OUTPUT</span>
                        <span>SCORE WEIGHTS VERIFIED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">AVS / CVV / 3DS STATUS</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">AVS Match • CVV Pass</span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Device Fingerprint</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">Header spoof alert</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">PAYMENT INSTRUMENT RISK SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">GATEWAY DECISION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{decision}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Checkout timeline: Page view ➔ Cart ➔ Checkout (9s)</span>
                      <span>3DS 2.2 Sync Enabled</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Friction vs Risk</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              CNP Fraud Happens Before You Ever See the Cardholder.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Online payments are vulnerable to stolen cards, bot-driven card testing, synthetic identities, shipping fraud, account takeover, refund abuse, and chargebacks. Traditional payment rules often lack the customer, device, behavioral, and graph context needed to stop modern CNP fraud.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Stolen Card Use", desc: "Fraudsters use compromised card details to make purchases before issuers or merchants can react.", icon: <CreditCard /> },
                { title: "Card Testing", desc: "Bots rapidly test stolen cards through small transactions, retries, and checkout automation.", icon: <Zap /> },
                { title: "Bot Checkout", desc: "Automated sessions exploit checkout flows, promotions, inventory, and payment systems at scale.", icon: <Cpu /> },
                { title: "Shipping Fraud", desc: "Fraudulent orders use mismatched billing and shipping details, freight forwarders, or risky delivery addresses.", icon: <Truck /> },
                { title: "Failed Authentication", desc: "AVS, CVV, and 3DS results may be incomplete, failed, bypassed, or inconsistent.", icon: <Lock /> },
                { title: "Chargeback Loss", desc: "CNP fraud often becomes visible only after chargebacks, disputes, refunds, or fulfillment losses occur.", icon: <Scale /> }
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

            {/* CNP Fraud Attack Flow Illustration */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">CNP FRAUD ATTACK LIFECYCLE PATH</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Compromise", desc: "Stolen card bought from dark web logs." },
                  { title: "2. Automate", desc: "Bot session generated with browser mimic." },
                  { title: "3. Spoof", desc: "Device configuration altered with residential proxy." },
                  { title: "4. Mismatch", desc: "Shipping set to drop address, billing to card owner." },
                  { title: "5. Capture", desc: "Payment captured successfully before card block." },
                  { title: "6. Dispute", desc: "True cardholder files chargeback resulting in lost funds." }
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

        {/* ================= SECTION 3: DEEPSENSE CNP SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Complete Context</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Score the Entire Checkout, Not Just the Card.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense analyzes card data, checkout behavior, device intelligence, customer history, shipping and billing signals, BIN intelligence, bot risk, 3DS outcomes, graph relationships, and dispute history to detect CNP fraud before approval or fulfillment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Payment Instrument Risk", desc: "Evaluate cards, tokens, wallets, payment methods, BINs, issuer behavior, and reuse across accounts." },
                { title: "Checkout Journey Analytics", desc: "Analyze form completion time, retries, shipping changes, coupon behavior, navigation patterns, and payment attempts." },
                { title: "Bot & Automation Detection", desc: "Detect scripted checkout behavior, headless browsers, impossible interaction speed, and high-velocity attempts." },
                { title: "Device Intelligence", desc: "Identify risky devices, emulators, VPNs, spoofing indicators, shared devices, and ATO-linked sessions." },
                { title: "Shipping & Billing Risk", desc: "Detect mismatches, risky addresses, freight forwarders, repeated shipping destinations, and account/card inconsistencies." },
                { title: "Real-Time Decisioning", desc: "Approve, review, decline, require 3DS, hold fulfillment, create case, or escalate based on risk." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>

            {/* CNP Risk Intelligence Architecture visual */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 text-white text-left overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full" />
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block mb-8 text-center">CHECKOUT TRANSACTION RISK TELEMETRY PIPELINE</span>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 text-center items-center font-mono text-[10px]">
                {[
                  { label: "1. Checkout Event", sub: "User hits pay" },
                  { label: "2. Device Risk", sub: "Spoof check" },
                  { label: "3. Card/BIN Risk", sub: "Issuer check" },
                  { label: "4. Address Match", sub: "Fulfillment drop" },
                  { label: "5. Behavior Cadence", sub: "Copy-paste speed" },
                  { label: "6. Graph Cluster", sub: "Card farms" },
                  { label: "7. Final Score", sub: "Aggregate weight" },
                  { label: "8. Action", sub: "Decline / Auth" }
                ].map((step, idx) => (
                  <div key={idx} className={`p-4 rounded-2xl border ${idx === 7 ? "bg-indigo-600 border-indigo-500 font-bold" : "bg-white/5 border-white/10"}`}>
                    <span className="block text-[11px] leading-tight text-white">{step.label}</span>
                    <span className="text-[8px] text-zinc-400 block mt-1 uppercase">{step.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: CNP FRAUD SIGNALS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Scoring Telemetry</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Detect the Signals That Indicate Online Payment Fraud.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines payment, identity, device, behavioral, graph, and merchant signals to identify risky checkout activity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "AVS / CVV Mismatch", desc: "Flag inconsistent address verification or card security results.", tag: "HIGH SEVERITY" },
                { title: "BIN Country Mismatch", desc: "Detect mismatch between card issuing country, customer country, device country, and shipping country.", tag: "CRITICAL SEVERITY" },
                { title: "Multiple Cards/Device", desc: "Identify devices testing or using many cards across accounts or sessions.", tag: "CRITICAL SEVERITY" },
                { title: "Same Card/Accounts", desc: "Detect payment instruments reused across multiple identities or customer profiles.", tag: "HIGH SEVERITY" },
                { title: "Shipping/Billing Mismatch", desc: "Score risk when billing and shipping data diverge significantly.", tag: "MEDIUM SEVERITY" },
                { title: "Decline Retry Patterns", desc: "Identify repeated payment attempts after declines, failures, or authentication issues.", tag: "HIGH SEVERITY" },
                { title: "Risky 3DS Outcome", desc: "Use failed, challenged, bypassed, or unavailable 3DS results in risk scoring.", tag: "CRITICAL SEVERITY" },
                { title: "High-Risk Identity Metadata", desc: "Incorporate disposable email, VOIP phone, SIM swap, or digital identity reputation signals.", tag: "MEDIUM SEVERITY" }
              ].map((sig, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-indigo-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-[9px] font-black font-mono px-3 py-1 bg-red-50 text-red-500 rounded-full">{sig.tag}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 pt-6 block border-t border-zinc-50 mt-6">SIGNAL CODE: SIG-0{idx+1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: CARD TESTING DETECTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Bot Prevention</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Stop Card Testing and Automated Payment Abuse.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Card testing attacks can generate high authorization volume, payment processor costs, chargeback exposure, and fraud losses. DeepSense detects card-testing patterns across cards, devices, IPs, accounts, and checkout behavior.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch w-full">
              {/* Left Column - List of capabilities */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-4 text-left">
                {[
                  { title: "Small-Value Test Transactions", desc: "Identify suspicious low-value attempts used to validate card credentials." },
                  { title: "High Decline Velocity", desc: "Detect bursts of failed payment attempts across many cards or accounts." },
                  { title: "Device / IP Concentration", desc: "Link repeated testing attempts through shared devices, IPs, proxies, or browser fingerprints." },
                  { title: "BIN Enumeration", desc: "Detect attempts concentrated around related BINs, issuers, or card ranges." },
                  { title: "Bot-Like Checkout Speed", desc: "Identify checkout attempts completed faster than human behavior." },
                  { title: "Distributed Attack Patterns", desc: "Correlate low-and-slow card testing across many devices, accounts, or sessions." }
                ].map((cap, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-1.5 h-12 bg-indigo-100 group-hover:bg-indigo-500 rounded-full transition-all duration-300" />
                    <div>
                      <span className="text-sm font-bold text-neutral-900 font-manrope block">{cap.title}</span>
                      <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Card testing Attack Dashboard mockup */}
              <div className="lg:col-span-7 bg-zinc-950 p-8 rounded-[48px] text-white text-left font-mono relative overflow-hidden flex flex-col justify-between border border-white/5">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-500">
                    <span>CARD TESTING DEFENSE WORKSPACE</span>
                    <span>BURST VELOCITY DETECTED</span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-red-950/40 border border-red-500/30 rounded-2xl">
                      <span className="text-red-400 block font-bold text-xs">WARNING: 114 Decline events inside 60 seconds</span>
                      <span className="text-[10px] text-zinc-400 block mt-1">Source IP: 84.110.14.8 • Fingerprint: FP-992182</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-[11px] text-zinc-400">
                      <div className="p-4 bg-white/5 rounded-2xl">
                        <span>CARDS ATTEMPTED:</span>
                        <span className="block font-bold text-white text-base mt-1">42 Unique cards</span>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl">
                        <span>BOT CONFIDENCE:</span>
                        <span className="block font-bold text-red-500 text-base mt-1">99.8% Headless</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-8 flex justify-between text-[10px] text-zinc-500">
                  <span>Action: Dynamic gateway CAPTCHA & Block initiated</span>
                  <span className="text-red-400 font-bold">CARD FARM DETECTED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: CHECKOUT JOURNEY ANALYTICS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Form Telemetry</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Understand How the Customer Behaved Before Payment.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              The checkout journey often reveals risk before the payment is submitted. DeepSense analyzes user behavior across the checkout flow to identify fraud, bots, and abuse.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
              {/* Left Column: timeline illustration */}
              <div className="lg:col-span-6 bg-white p-8 rounded-[48px] border border-zinc-200 shadow-sm text-left">
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block mb-8 text-center">CHECKOUT JOURNEY FLOW TIMELINE</span>
                
                <div className="flex flex-col gap-4 font-mono text-[10px]">
                  {[
                    { l: "Product Page view", t: "Standard reading cadence (18s)", r: "PASS" },
                    { l: "Cart Ingestion", t: "Single click (1s)", r: "PASS" },
                    { l: "Shipping Details Setup", t: "Autofill profile mismatch (2s)", r: "WARNING" },
                    { l: "Card Details Inbound", t: "Copy-paste code entry inside 120ms", r: "CRITICAL BOT" }
                  ].map((step, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-zinc-50 border border-zinc-100 rounded-xl">
                      <div>
                        <span className="font-bold text-neutral-900 block">{step.l}</span>
                        <span className="text-[9px] text-zinc-500">{step.t}</span>
                      </div>
                      <span className={`font-bold ${step.r === "PASS" ? "text-emerald-500" : step.r === "WARNING" ? "text-amber-500" : "text-red-500 animate-pulse"}`}>{step.r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: signals checklist */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {[
                  { title: "Form Completion Time", desc: "Detect unusually fast, scripted, or inconsistent form completion." },
                  { title: "Payment Method Changes", desc: "Monitor repeated card changes, payment retries, and failed attempts." },
                  { title: "Shipping Address Alter", desc: "Identify last-minute shipping address changes or unusual delivery patterns." },
                  { title: "Coupon & Promo Abuse", desc: "Detect suspicious coupon use, reward exploitation, or bonus abuse overlap." },
                  { title: "Copy / Paste Behavior", desc: "Identify unusual copy-paste patterns during payment or identity entry." },
                  { title: "Abandon / Retry Cycles", desc: "Detect repeated abandoned sessions followed by new checkout attempts." }
                ].map((sig, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-6 rounded-3xl">
                    <span className="text-indigo-600 font-bold block mb-2 font-mono font-bold">JOURNEY 0{idx+1}</span>
                    <h4 className="text-sm font-bold font-manrope text-neutral-900 mb-1">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{sig.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: BIN / ISSUER / ACQUIRER INTELLIGENCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Card Intelligence</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Use Card Network Context in Fraud Decisions.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense adds card intelligence to checkout scoring by evaluating BIN, issuer, acquirer, country, card type, and historical risk patterns.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch w-full">
              {/* Left Column: list of metadata inputs */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-4 text-left">
                {[
                  { title: "BIN Lookup", desc: "Identify card issuing country, card type, product type, and issuer metadata." },
                  { title: "Prepaid / Virtual Card Risk", desc: "Flag higher-risk card types where relevant to the merchant or product." },
                  { title: "Issuer Risk tracking", desc: "Track issuer-level fraud, decline, dispute, or approval patterns where data is available." },
                  { title: "Acquirer Risk profiling", desc: "Evaluate merchant/acquirer-side risk and dispute trends." },
                  { title: "Card Country Mismatch check", desc: "Compare BIN country against customer, shipping, billing, IP, and device location." }
                ].map((ev, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-1.5 h-12 bg-indigo-100 group-hover:bg-indigo-500 rounded-full transition-all duration-300" />
                    <div>
                      <span className="text-sm font-bold text-neutral-900 font-manrope block">{ev.title}</span>
                      <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ev.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: BIN Intelligence Profile Card */}
              <div className="lg:col-span-7 bg-zinc-950 p-8 rounded-[48px] text-white text-left font-mono relative overflow-hidden flex flex-col justify-between border border-white/5">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-500">
                    <span>DEEPSENSE BIN INTELLIGENCE</span>
                    <span>LOOKUP ACTIVE</span>
                  </div>

                  <div className="flex justify-between items-center bg-white/5 p-6 rounded-3xl border border-white/10">
                    <div>
                      <span className="text-zinc-400 text-[10px] block">VERIFIED BIN</span>
                      <span className="text-lg font-bold text-indigo-400">4111 11XX</span>
                    </div>
                    <div className="text-right">
                      <span className="text-zinc-400 text-[10px] block">ISSUER COUNTRY</span>
                      <span className="text-lg font-bold text-white">United Kingdom (GB)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-[11px] text-zinc-400">
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <span>PREPAID FLAG:</span>
                      <span className="block font-bold text-amber-400 mt-1">TRUE (High Risk Type)</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <span>IP GEOLOCATION:</span>
                      <span className="block font-bold text-red-500 mt-1">Brazil (BR) - MISMATCH</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-8 flex justify-between text-[10px] text-zinc-500">
                  <span>Acquirer Risk Level: 0.14% baseline</span>
                  <span className="text-red-400 font-bold">MISMATCH SCORE: 92/100</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: SHIPPING, BILLING & FULFILLMENT RISK ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Delivery Verification</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Connect Payment Risk to Fulfillment Risk.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              CNP fraud is often confirmed after fulfillment. DeepSense helps detect shipping and billing patterns that indicate stolen-card or first-party misuse risk.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
              {/* Left Column: signals comparison list */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {[
                  { title: "Billing / Shipping Mismatch", desc: "Detect risky mismatch between billing and delivery details." },
                  { title: "Freight Forwarder Address", desc: "Flag known or suspected forwarding addresses." },
                  { title: "Reused Shipping Address", desc: "Identify one address receiving orders from many cards or accounts." },
                  { title: "High-Risk Delivery Region", desc: "Apply geography and delivery-zone risk thresholds." },
                  { title: "Digital Goods Consumption", desc: "Track whether digital products or credits are consumed before dispute." },
                  { title: "Delivery Evidence sync", desc: "Connect fulfillment proof to dispute and friendly fraud workflows." }
                ].map((sig, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-6 rounded-3xl">
                    <span className="text-indigo-600 font-bold block mb-2 font-mono">DELIVERY 0{idx+1}</span>
                    <h4 className="text-sm font-bold font-manrope text-neutral-900 mb-1">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{sig.desc}</p>
                  </div>
                ))}
              </div>

              {/* Right Column: Address risk comparison panel */}
              <div className="lg:col-span-6 bg-white p-8 rounded-[48px] border border-zinc-200 shadow-sm text-left font-mono text-xs">
                <span className="text-[10px] tracking-widest text-zinc-400 uppercase block mb-8 text-center">SHIPPING AND BILLING COMPARISON</span>
                
                <div className="space-y-4">
                  <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl">
                    <span className="text-zinc-400 block font-mono text-[9px]">BILLING ADDRESS</span>
                    <span className="font-bold text-neutral-900">12 High Street, London, UK</span>
                  </div>

                  <div className="p-4 bg-red-50 border border-red-100 rounded-2xl">
                    <span className="text-red-500 block font-mono text-[9px]">SHIPPING ADDRESS (FREIGHT FORWARDER Drop)</span>
                    <span className="font-bold text-neutral-900">Suite 1928, Miami Forwarders, FL, USA</span>
                  </div>

                  <div className="p-4 bg-red-950 text-white rounded-2xl flex justify-between items-center">
                    <div>
                      <span className="text-zinc-400 block text-[9px]">MISMATCH DETECTED</span>
                      <span className="font-bold text-red-200">TRANS-ATLANTIC GAP</span>
                    </div>
                    <span className="text-lg font-black text-red-500">SCORE: 88</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: 3DS / AUTHENTICATION RISK ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Interactive Auth Gate</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Use Authentication Outcomes as Risk Signals.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              3DS, AVS, CVV, and authentication outcomes provide important context but should not be evaluated in isolation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "3DS Challenge Failed", desc: "Increase risk when authentication challenge fails or is abandoned." },
                { title: "3DS Bypassed / Unavailable", desc: "Evaluate risk when authentication is unavailable, bypassed, or frictionless with weak context." },
                { title: "AVS Result tracking", desc: "Use address verification results in checkout scoring." },
                { title: "CVV Result validation", desc: "Use security-code verification outcomes safely without storing sensitive data." },
                { title: "Step-Up Recommendation", desc: "Trigger 3DS or additional verification dynamically when risk increases." },
                { title: "Post-Authentication Risk", desc: "Continue scoring even after authentication succeeds when other signals remain suspicious." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{sig.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: GRAPH INTELLIGENCE FOR CNP ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Graph Analysis</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Uncover Connected Payment Abuse.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense graph intelligence links cards, devices, accounts, emails, phones, shipping addresses, merchants, sessions, and disputes to identify coordinated CNP fraud.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Card Farm", desc: "Many cards tested or used across linked sessions or devices." },
                { title: "Device Farm", desc: "One device or infrastructure cluster linked to many cards and accounts." },
                { title: "Address Cluster", desc: "Many cards or identities shipping to the same destination." },
                { title: "Chargeback Cluster", desc: "Accounts linked by repeated disputes, refunds, or abuse behavior." },
                { title: "Promo Abuse Overlap", desc: "CNP fraud linked to promotion, coupon, referral, or bonus exploitation." },
                { title: "Friendly Fraud Network", desc: "Customers or accounts connected through repeated dispute behavior." }
              ].map((mule, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{mule.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mule.desc}</p>
                </div>
              ))}
            </div>

            {/* Graph Visual */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] text-white border border-white/5 text-left font-mono relative overflow-hidden">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-8 text-center font-bold">CHECKOUT ABUSE NETWORK GRAPH</span>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-xs">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center w-full max-w-[200px]">
                  <span className="text-zinc-500 block">CONNECTED CARDS</span>
                  <span className="text-indigo-400 block text-lg font-mono mt-1">18 unique PANs</span>
                </div>
                <div className="text-zinc-500 text-2xl">➔</div>
                <div className="p-6 bg-red-950/40 border border-red-500/30 rounded-[32px] text-center w-full max-w-[300px]">
                  <span className="text-zinc-400 block">SHARED FINGERPRINT</span>
                  <span className="text-white block text-lg mt-1">Device ID: FP-88219 (99.8% match)</span>
                </div>
                <div className="text-zinc-500 text-2xl">➔</div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center w-full max-w-[200px]">
                  <span className="text-zinc-500 block">DISPUTED BALANCE</span>
                  <span className="text-red-500 block text-lg font-mono mt-1">$4,850.00 chargeback</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: REAL-TIME DECISIONING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Gateway Actions</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Approve Good Orders. Stop Risky Ones Before Fulfillment.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense helps teams make the right decision at checkout without unnecessary friction for legitimate customers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Approve", desc: "Approve low-risk checkouts automatically." },
                { title: "Review", desc: "Send suspicious orders to manual review." },
                { title: "Decline", desc: "Block high-risk payments before authorization or fulfillment." },
                { title: "Require 3DS", desc: "Trigger authentication when risk is elevated." },
                { title: "Hold Fulfillment", desc: "Pause shipment or digital delivery until review is complete." },
                { title: "Create Case", desc: "Create fraud investigation cases with evidence attached." }
              ].map((act, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{act.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{act.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: CHARGEBACK & FRIENDLY FRAUD CONNECTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Representment Feedback</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Learn From Disputes, Chargebacks, and Refund Abuse.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              CNP fraud does not end at checkout. DeepSense connects payment decisions with disputes, chargebacks, refunds, delivery evidence, and friendly fraud patterns.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Chargeback Feedback loop", desc: "Use dispute outcomes to improve future payment risk scoring." },
                { title: "Delivery Evidence sync", desc: "Attach fulfillment proof to dispute and representment workflows." },
                { title: "Refund Abuse Detection", desc: "Identify customers repeatedly requesting refunds or abusing policies." },
                { title: "Friendly Fraud Signals", desc: "Detect disputes after confirmed delivery, digital goods consumption, or repeated claims." },
                { title: "Customer Trust Scoring", desc: "Continuously update customer trust based on payments, disputes, refunds, and fraud outcomes." },
                { title: "Merchant Analytics dashboard", desc: "Monitor merchant exposure, chargeback ratio, dispute trends, and abuse patterns." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 13: INTEGRATION WITH DEEPSENSE PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Unified Risk Engine</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              CNP Fraud Connected to Identity, Behavior, Device, Graph, and Payments Risk.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense improves online payment fraud detection by combining checkout risk with the full platform intelligence layer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Behavioral Biometrics link", desc: "Use session and checkout behavior to detect bots and imposters." },
                { title: "Device Intelligence core", desc: "Evaluate spoofed devices, shared devices, emulators, and VPN/proxy usage." },
                { title: "Account Takeover alerts", desc: "Detect risky orders placed during compromised sessions." },
                { title: "Document Fraud & KYC sync", desc: "Use identity verification risk to improve payment decisions." },
                { title: "Graph Intelligence clusters", desc: "Link cards, accounts, shipping addresses, devices, and disputes." },
                { title: "Case Management tracking", desc: "Create investigations for high-risk payment activity and chargeback abuse." }
              ].map((int, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{int.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 14: ANALYTICS & DASHBOARD ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Command Center Metrics</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Monitor Payment Fraud and Checkout Risk in One View.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "CNP Fraud Rate", count: "0.08%" },
                { title: "Card Testing Blocked", count: "148,820 Events" },
                { title: "Top Risky BINs flagged", count: "12 BINs" },
                { title: "Frictionless 3DS Rate", count: "91.4%" }
              ].map((dash, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <span className="text-xs font-black text-indigo-600 font-mono block">WIDGET 0{idx+1}</span>
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{dash.title}</h4>
                  <span className="text-2xl font-black italic text-neutral-900">{dash.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 15: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Industry Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              CNP Fraud Protection for Digital Commerce and Payments.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense provides payment fraud analysis while helping digital merchants scale transaction volume.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "E-Commerce", desc: "Stop stolen cards, bot checkout, shipping fraud, and chargeback abuse." },
                { title: "Marketplaces", desc: "Protect buyers, sellers, payment instruments, payouts, and disputes." },
                { title: "Payment Processors", desc: "Score merchant transactions, card testing attacks, disputes, and issuer/acquirer risk." },
                { title: "Gaming & Betting", desc: "Detect card abuse, promo exploitation, multi-accounting, and payment fraud." },
                { title: "Fintech", desc: "Protect wallet funding, card payments, digital purchases, and customer accounts." },
                { title: "Subscription Businesses", desc: "Detect trial abuse, payment retries, stolen cards, and refund misuse." }
              ].map((ind, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 16: SECURITY & PCI-SAFE DESIGN ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">PCI Compliance</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Designed for Payment Risk Without Unsafe Card Storage.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed to support payment fraud analysis while avoiding unsafe handling of sensitive card data.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "No raw PAN storage", "No CVV storage", "Tokenized payment identifiers", "Hashed payment fingerprints",
                "Role-based access", "Tenant isolation", "Audit logging", "Secret masking",
                "Webhook signing", "Private cloud support", "On-prem deployment"
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-5 rounded-2xl flex flex-col gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                  <span className="text-[10px] font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 17: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Checkout FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is Card-Not-Present fraud?", 
                  a: "CNP fraud occurs when stolen or misused card details are used for online, phone, or digital purchases where the physical card is not present." 
                },
                { 
                  q: "Can DeepSense detect card testing?", 
                  a: "Yes. DeepSense detects small-value testing, high decline velocity, card/BIN enumeration, device concentration, and bot checkout behavior." 
                },
                { 
                  q: "Does DeepSense support 3DS signals?", 
                  a: "Yes. DeepSense can use 3DS challenge outcomes, AVS, CVV results, and authentication signals in risk scoring." 
                },
                { 
                  q: "Can DeepSense detect shipping fraud?", 
                  a: "Yes. DeepSense evaluates shipping/billing mismatch, risky addresses, freight forwarders, and repeated delivery destinations." 
                },
                { 
                  q: "Does CNP risk connect to chargebacks?", 
                  a: "Yes. DeepSense connects checkout decisions with chargebacks, disputes, refund abuse, delivery evidence, and friendly fraud patterns." 
                },
                { 
                  q: "Is DeepSense PCI-safe?", 
                  a: "DeepSense uses tokenized or hashed payment identifiers and does not store raw PAN, CVV, or track data." 
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

        {/* ================= SECTION 18: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-indigo-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest">Ready to reduce CNP fraud?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Protect checkout, payments, fulfillment, and <br />
                <span className="text-white/40 font-bold">disputes with connected fraud intelligence.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                DeepSense combines card intelligence, checkout analytics, device risk, behavioral biometrics, graph intelligence, and chargeback feedback to stop online payment fraud before losses occur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/nfc-contactless-fraud" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore NFC Fraud
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
