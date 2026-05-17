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
  PhoneCall,
  Heart,
  ArrowUpRight
} from "lucide-react";

export default function APPScamDetectionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Scam Simulator States
  const [scamType, setScamType] = useState<string>("safe_account");
  const [simulationActive, setSimulationActive] = useState<boolean>(true);
  const [riskScore, setRiskScore] = useState<number>(89);
  const [muleSignal, setMuleSignal] = useState<string>("HIGH VELOCITY (Many-to-One incoming)");
  const [typologyDetails, setTypologyDetails] = useState<string>("Victim urged to move funds to a new 'Safe' reserve");
  const [warningText, setWarningText] = useState<string>("DeepSense Alert: Payee account has high receiving frequency from unrelated sources. We recommend step-up biometric verification.");
  const [simulatorStatus, setSimulatorStatus] = useState<string>("PENDING_INTERVENTION");
  const [actionLogged, setActionLogged] = useState<string>("");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleScamTypeChange = (type: string) => {
    setScamType(type);
    setSimulationActive(true);
    setSimulatorStatus("PENDING_INTERVENTION");
    setActionLogged("");
    
    if (type === "safe_account") {
      setRiskScore(94);
      setMuleSignal("CRITICAL: New account with immediate fund routing");
      setTypologyDetails("Victim convinced their bank profile is compromised; moving funds to safe vault");
      setWarningText("Warning: Bank personnel will never ask you to move funds to another account. This matches a known safe-account scam pattern.");
    } else if (type === "bank_impersonation") {
      setRiskScore(89);
      setMuleSignal("HIGH: Beneficiary linked to recent peer reports");
      setTypologyDetails("Fraudster pretending to be security support; demanding immediate transfer");
      setWarningText("Intervention Trigger: Outgoing payment is to a newly registered domestic recipient under high pressure. Verify call authenticity.");
    } else if (type === "romance") {
      setRiskScore(78);
      setMuleSignal("MEDIUM: Recipient with high cash-out frequency");
      setTypologyDetails("Victim has high session duration; repeated screen pauses during transfer");
      setWarningText("Unusual Behavior: Session interaction cadence shows long hesitations. Recipient matches typical overseas proxy.");
    } else if (type === "investment") {
      setRiskScore(92);
      setMuleSignal("CRITICAL: Unregistered high-yield crypto platform gateway");
      setTypologyDetails("Victim moved funds through fiat-to-crypto proxy inside 15 minutes of session start");
      setWarningText("Scam Signature: Payment destination has been identified as a high-risk crypto intermediary with high velocity.");
    }
  };

  const handleAction = (action: string) => {
    if (action === "hold") {
      setSimulatorStatus("PAYMENT_HELD (Review case #DS-8821)");
      setActionLogged("Success: Outgoing transfer paused. Compliance analyst notified.");
    } else if (action === "stepup") {
      setSimulatorStatus("STEPUP_AUTHENTICATION_SENT");
      setActionLogged("Step-Up Triggered: Liveness check and SMS challenge delivered to customer device.");
    } else if (action === "block") {
      setSimulatorStatus("PAYMENT_BLOCKED (Risk limit exceeded)");
      setActionLogged("Action Completed: Beneficiary account permanently blacklisted across network.");
    } else if (action === "case") {
      setSimulatorStatus("CASE_CREATED");
      setActionLogged("Case #DS-8821 populated with full graph details, behavioral anomalies, and alerts.");
    }
  };

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
                <Shield className="w-3.5 h-3.5 text-red-400" />
                Authorized Push Payment Scam Protection
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect APP Scams Before <br />
                <span className="text-zinc-400">Customers Send Money to Fraudsters.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense identifies risky beneficiaries, mule accounts, unusual payment behavior, scam typologies, behavioral changes, and social-engineering indicators to help banks and fintechs intervene before authorized scam payments leave the account.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/card-not-present-fraud" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Payment Fraud
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for banks, fintechs, payment providers, telecom wallets, crypto platforms, and real-time payment networks.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive APP Scam Dashboard Simulator */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-white/5 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">APP SCAM PAYMENT INTERVENTION ENGINE</span>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleScamTypeChange("safe_account")} 
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono transition-all uppercase ${scamType === "safe_account" ? "bg-red-500 text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}
                    >
                      Safe Account
                    </button>
                    <button 
                      onClick={() => handleScamTypeChange("bank_impersonation")} 
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono transition-all uppercase ${scamType === "bank_impersonation" ? "bg-red-500 text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}
                    >
                      Impersonation
                    </button>
                    <button 
                      onClick={() => handleScamTypeChange("romance")} 
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono transition-all uppercase ${scamType === "romance" ? "bg-red-500 text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}
                    >
                      Romance
                    </button>
                    <button 
                      onClick={() => handleScamTypeChange("investment")} 
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold font-mono transition-all uppercase ${scamType === "investment" ? "bg-red-500 text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}
                    >
                      Investment
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Outgoing transfer details */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Outgoing Transfer Preview</span>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                        <div className="flex justify-between items-center text-zinc-500 text-[10px] mb-2 font-mono">
                          <span>SENDER ACCOUNT</span>
                          <span>VERIFIED SESSION</span>
                        </div>
                        <span className="text-sm font-bold block">Margaret Carter (Personal Checking)</span>
                        <span className="text-xs text-zinc-400 block">IP: 192.168.1.84 • Device: iPhone 14 Pro</span>
                      </div>

                      <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                        <div className="flex justify-between items-center text-zinc-500 text-[10px] mb-2 font-mono">
                          <span>BENEFICIARY DETAILS</span>
                          <span className="text-red-400 font-bold">MULE ALERT</span>
                        </div>
                        <span className="text-sm font-bold block text-red-200">Alexey Smirnov</span>
                        <span className="text-xs text-zinc-400 block">Sort Code: 20-44-88 • Account: 99881122</span>
                        <span className="text-[9px] text-amber-400 mt-2 block font-mono">SIGNAL: {muleSignal}</span>
                      </div>

                      <div className="flex justify-between items-center p-4 bg-black/60 border border-white/5 rounded-2xl">
                        <span className="text-xs text-zinc-400">TRANSFER VALUE:</span>
                        <span className="text-2xl font-black text-white font-mono">$18,450.00</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Risk telemetry & intervention control panel */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400 font-mono">
                        <span>DEEPSENSE RISK TELEMETRY</span>
                        <span>STATUS: <span className="text-red-400 font-bold">{simulatorStatus}</span></span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase tracking-wider block font-mono">Beneficiary Risk Score</span>
                          <span className="text-3xl font-black text-red-500 font-mono">{riskScore}/100</span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase tracking-wider block font-mono">Typology Match</span>
                          <span className="text-[11px] font-bold text-amber-400 font-mono block mt-1 uppercase">{scamType.replace("_", " ")}</span>
                        </div>
                      </div>

                      <div className="p-4 bg-red-950/40 border border-red-500/20 rounded-2xl text-xs space-y-2">
                        <div className="flex items-center gap-2 text-red-400 font-bold">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>CUSTOMER RECOMMENDATION WARNING</span>
                        </div>
                        <p className="text-zinc-300 text-[11px] leading-relaxed italic">{warningText}</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 space-y-4">
                      {actionLogged && (
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-mono text-brand-lime leading-tight">
                          {actionLogged}
                        </div>
                      )}
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <button onClick={() => handleAction("hold")} className="py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all text-center">
                          Hold Payment
                        </button>
                        <button onClick={() => handleAction("stepup")} className="py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all text-center">
                          Step-Up MFA
                        </button>
                        <button onClick={() => handleAction("block")} className="py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all text-center">
                          Block Payment
                        </button>
                        <button onClick={() => handleAction("case")} className="py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all text-center">
                          Create Case
                        </button>
                      </div>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">The Fraud Challenge</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              APP Scams Are Hard to Stop Because the Customer Authorizes the Payment.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              In authorized push payment scams, victims are manipulated into sending funds themselves. Traditional fraud systems often treat these payments as legitimate because the transaction is authorized by the account holder.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Social Engineering", desc: "Fraudsters impersonate banks, family members, vendors, investment advisors, employers, or trusted organizations.", icon: <PhoneCall /> },
                { title: "Mule Beneficiaries", desc: "Scam proceeds often move through mule accounts that receive funds from multiple unrelated victims.", icon: <Network /> },
                { title: "Real-Time Payment Speed", desc: "Instant payments leave little time for manual intervention or post-transaction recovery.", icon: <Zap /> },
                { title: "Trusted Customer Behavior", desc: "The payment may come from a real device, real session, and real customer, making it harder to detect.", icon: <Users /> },
                { title: "New Beneficiary Risk", desc: "Victims are often instructed to pay new or recently created beneficiaries.", icon: <Wallet /> },
                { title: "Limited Context", desc: "Banks often lack connected intelligence across beneficiary history, behavioral changes, mule networks, and prior scam patterns.", icon: <Database /> }
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

            {/* APP Scam Journey Illustration */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">APP SCAM JOURNEY WORKFLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center font-manrope">
                {[
                  { title: "1. Manipulate", desc: "Fraudster contacts victim via impersonation, threat, or romance." },
                  { title: "2. Setup", desc: "Victim is instructed to add a new beneficiary to their banking portal." },
                  { title: "3. Initiate", desc: "Victim authorizes and sends outgoing high-value real-time payment." },
                  { title: "4. Receive", desc: "A network of mule accounts receives the cash to layer and mask origin." },
                  { title: "5. Drain", desc: "Fraudsters execute rapid ATM cash-out or cross-border crypto swap." }
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

        {/* ================= SECTION 3: DEEPSENSE APP SCAM SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Pre-Settlement Interventions</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Detect Scam Risk Before the Payment Leaves.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense evaluates payment context, beneficiary risk, customer behavior, device intelligence, graph relationships, transaction history, and scam typologies to identify high-risk authorized payments in real time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Beneficiary Risk Scoring", desc: "Assess whether the recipient is new, risky, mule-linked, recently created, or connected to suspicious flows." },
                { title: "Scam Typology Detection", desc: "Classify patterns such as safe-account scams, romance scams, investment scams, invoice scams, impersonation scams, and crypto transfer scams." },
                { title: "Behavioral Change Detection", desc: "Identify unusual customer payment behavior, session patterns, or interaction anomalies before transfer." },
                { title: "Mule Network Intelligence", desc: "Detect beneficiaries receiving funds from many unrelated accounts or rapidly forwarding funds." },
                { title: "Real-Time Interventions", desc: "Trigger warnings, holds, step-up authentication, beneficiary confirmation, or case escalation." },
                { title: "Case & Evidence Workflow", desc: "Create investigation cases with payment context, beneficiary history, graph links, and customer risk signals." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>

            {/* APP Scam Detection Architecture Diagram */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 text-white text-left overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[100px] rounded-full" />
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block mb-8 text-center">DEEPSENSE SCAM PROTECTION ARCHITECTURE</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-center items-center font-mono text-xs">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-white block font-bold">1. Payment Event</span>
                  <span className="text-[9px] text-zinc-500">API Trigger</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-red-400 block font-bold">2. Beneficiary Risk</span>
                  <span className="text-[9px] text-zinc-500">Mule scoring</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-amber-400 block font-bold">3. Behavioral Risk</span>
                  <span className="text-[9px] text-zinc-500">Device/Cadence</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-indigo-400 block font-bold">4. Graph Risk</span>
                  <span className="text-[9px] text-zinc-500">Network links</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <span className="text-red-500 block font-bold">5. Typology Match</span>
                  <span className="text-[9px] text-zinc-500">Scam pattern</span>
                </div>
                <div className="p-4 bg-red-600 text-white rounded-2xl font-bold">
                  <span className="block">6. Action decision</span>
                  <span className="text-[9px] text-white/80">Step-Up / Pause</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: SCAM TYPOLOGIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Scam Typologies</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Identify Common and Emerging APP Scam Typologies.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense helps institutions classify suspicious payments based on known scam patterns and behavioral signals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Safe Account Scam", desc: "Victim is convinced to move money into a so-called safe account controlled by fraudsters.", tag: "Safe Account", risk: "CRITICAL" },
                { title: "Bank Impersonation", desc: "Fraudster pretends to be bank staff, support, or fraud prevention personnel.", tag: "Impersonation", risk: "HIGH" },
                { title: "Romance Scam", desc: "Victim is manipulated over time into sending funds to a fraudulent relationship partner.", tag: "Romance", risk: "MEDIUM" },
                { title: "Investment Scam", desc: "Victim sends money to fake investment platforms, crypto schemes, or high-return opportunities.", tag: "Investment", risk: "CRITICAL" },
                { title: "Invoice Redirection", desc: "Victim pays a fraudulent or altered invoice destination.", tag: "Redirection", risk: "HIGH" },
                { title: "Purchase Scam", desc: "Victim pays for goods or services that are never delivered.", tag: "Purchase", risk: "MEDIUM" },
                { title: "Crypto Transfer Scam", desc: "Victim is pushed to transfer funds to crypto wallets or exchanges controlled by fraudsters.", tag: "Crypto", risk: "CRITICAL" },
                { title: "Family / Emergency", desc: "Fraudster impersonates relatives, friends, or urgent emergency situations.", tag: "Emergency", risk: "HIGH" }
              ].map((typ, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className={`text-[9px] font-black font-mono px-3 py-1 rounded-full ${typ.risk === "CRITICAL" ? "bg-red-50 text-red-500" : "bg-amber-50 text-amber-500"}`}>{typ.risk}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{typ.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{typ.desc}</p>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 pt-6 block border-t border-zinc-50 mt-6">CATEGORY: {typ.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: BENEFICIARY RISK SCORING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Recipient Profiling</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Know the Risk of the Recipient Before Funds Move.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              In APP scams, the beneficiary is often the strongest signal. DeepSense evaluates recipient behavior, history, graph relationships, and mule indicators.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch w-full">
              {/* Left Column - List of signals */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-4 text-left">
                {[
                  { title: "New Beneficiary", desc: "First payment to a beneficiary or recently added recipient." },
                  { title: "Beneficiary Velocity", desc: "Beneficiary receives payments from many unrelated customers in a short window." },
                  { title: "Rapid Cash-Out", desc: "Recipient quickly moves incoming funds out after receipt." },
                  { title: "Mule Pattern", desc: "Recipient behaves like an intermediary rather than a legitimate payee." },
                  { title: "Fraud Case Link", desc: "Beneficiary is linked to previous fraud cases, suspicious activity, or high-risk networks." },
                  { title: "High-Risk Bank", desc: "Beneficiary account, bank, wallet, or country carries elevated risk." }
                ].map((sig, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-1.5 h-12 bg-red-100 group-hover:bg-red-500 rounded-full transition-all duration-300" />
                    <div>
                      <span className="text-sm font-bold text-neutral-900 font-manrope block">{sig.title}</span>
                      <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Risk profile Dashboard */}
              <div className="lg:col-span-7 bg-zinc-950 p-8 rounded-[48px] text-white text-left font-mono relative overflow-hidden flex flex-col justify-between border border-white/5">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-500">
                    <span>BENEFICIARY ACCOUNT PROFILE</span>
                    <span>ID: REC-99210</span>
                  </div>

                  <div className="flex justify-between items-center bg-white/5 p-6 rounded-3xl border border-white/10">
                    <div>
                      <span className="text-zinc-400 text-[10px] block">PAYEE ACCOUNT</span>
                      <span className="text-lg font-bold text-red-200">Ivan Petrovsky</span>
                    </div>
                    <div className="text-right">
                      <span className="text-zinc-400 text-[10px] block">RISK SCORE</span>
                      <span className="text-3xl font-black text-red-500">96/100</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-[11px] text-zinc-400">
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <span>INCOMING TRANSFERS:</span>
                      <span className="block font-bold text-white text-base mt-1">18 (Last 3 hours)</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <span>CASH-OUT STATUS:</span>
                      <span className="block font-bold text-red-400 text-base mt-1">98.2% Outbound</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-8 flex justify-between text-[10px] text-zinc-500">
                  <span>Linked Victims: 8 accounts</span>
                  <span className="text-red-400 font-bold">MULE SIGNATURE CONFIRMED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: CUSTOMER BEHAVIOR & VULNERABILITY ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Manipulation Signals</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Detect When a Legitimate Customer Is Acting Under Scam Pressure.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              APP scams often involve real customers making real payments under manipulation. DeepSense looks for behavioral and contextual changes that suggest the customer may be under pressure.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
              {/* Left Column: timeline illustration */}
              <div className="lg:col-span-6 bg-white p-8 rounded-[48px] border border-zinc-200 shadow-sm text-left">
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block mb-8 text-center">SESSION BEHAVIOR TIMELINE ANOMALY</span>
                
                <div className="space-y-6 text-xs">
                  <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 flex justify-between items-center">
                    <div>
                      <span className="text-zinc-400 block font-mono">NORMAL PATTERN</span>
                      <span className="font-bold text-neutral-900">Session length 2 mins • Standard type cadence</span>
                    </div>
                    <span className="text-emerald-500 font-bold">LEGITIMATE</span>
                  </div>

                  <div className="p-4 bg-red-50 rounded-2xl border border-red-100 flex justify-between items-center">
                    <div>
                      <span className="text-red-500 block font-mono">CURRENT SCAM SESSION</span>
                      <span className="font-bold text-neutral-900">14 min active session • 8 warning dismissals</span>
                    </div>
                    <span className="text-red-500 font-bold animate-pulse">UNDER PRESSURE</span>
                  </div>
                </div>
              </div>

              {/* Right Column: signals checklist */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                {[
                  { title: "Unusual Payment Size", desc: "Payment amount is unusual compared to the customer’s history." },
                  { title: "Unusual Payment Timing", desc: "Payment occurs at an unusual hour or after abnormal session behavior." },
                  { title: "New Payee Setup", desc: "Customer adds a new beneficiary shortly before a high-risk payment." },
                  { title: "Session Cadence Change", desc: "Customer behavior during the session differs from historical patterns." },
                  { title: "Repeated Payment Attempts", desc: "Customer attempts multiple payments after warnings, declines, or failed transfers." },
                  { title: "High-Pressure Pattern", desc: "Fast payment setup, repeated confirmation, and unusual navigation may indicate pressure." }
                ].map((sig, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-6 rounded-3xl">
                    <span className="text-red-500 font-bold block mb-2 font-mono">SIGNAL 0{idx+1}</span>
                    <h4 className="text-sm font-bold font-manrope text-neutral-900 mb-1">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{sig.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: MULE NETWORK DETECTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Mule Network Graph</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Expose Mule Accounts Behind Scam Payments.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Scam payments frequently flow into mule accounts that receive money from many victims and quickly move funds onward. DeepSense uses graph and transaction analytics to detect this behavior.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Many-to-One Recipient Pattern", desc: "Multiple unrelated customers send funds to the same beneficiary." },
                { title: "Rapid Forwarding", desc: "Funds are quickly transferred onward after receipt." },
                { title: "Low Balance Retention", desc: "Beneficiary retains little money after receiving incoming payments." },
                { title: "Connected Beneficiaries", desc: "Multiple beneficiaries are connected through shared devices, accounts, wallets, or IPs." },
                { title: "Layered Movement", desc: "Funds move through several accounts to obscure the destination." },
                { title: "Prior Fraud Links", desc: "Recipient connects to known fraud cases, chargebacks, scam reports, or suspicious activity." }
              ].map((mule, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{mule.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mule.desc}</p>
                </div>
              ))}
            </div>

            {/* Mule Beneficiary Graph Illustration */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] text-white border border-white/5 text-left font-mono relative overflow-hidden">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-8 text-center">NETWORK GRAPH VISUALIZATION (MULE DETECTED)</span>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-10 font-bold text-xs">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center w-full max-w-[200px]">
                  <span className="text-zinc-500 block">VICTIM ACCOUNTS</span>
                  <span className="text-red-400 block text-lg font-mono mt-1">12 Unrelated</span>
                </div>
                <div className="text-zinc-500 text-2xl">➔</div>
                <div className="p-6 bg-red-950/40 border border-red-500/30 rounded-[32px] text-center w-full max-w-[300px]">
                  <span className="text-zinc-400 block">PRIMARY MULE</span>
                  <span className="text-white block text-lg mt-1 font-mono">Alexey S. (Risk: 98%)</span>
                </div>
                <div className="text-zinc-500 text-2xl">➔</div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center w-full max-w-[200px]">
                  <span className="text-zinc-500 block">PAYOUT TARGET</span>
                  <span className="text-amber-400 block text-lg font-mono mt-1">Crypto Exchange</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: REAL-TIME PAYMENT INTERVENTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Intervention Decision Flow</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Intervene at the Right Moment Without Blocking Every Customer.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense helps teams apply the right action based on risk level, customer behavior, beneficiary risk, and payment context.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full mb-20">
              {[
                { title: "Customer Warning", desc: "Display targeted scam warnings before payment confirmation.", tag: "LOW RISK" },
                { title: "Step-Up Auth", desc: "Require MFA, biometric verification, liveness, or document verification.", tag: "MEDIUM RISK" },
                { title: "Payment Hold", desc: "Temporarily pause high-risk transfers for review.", tag: "HIGH RISK" },
                { title: "Payment Block", desc: "Block payments to confirmed or high-risk scam beneficiaries.", tag: "CRITICAL RISK" }
              ].map((act, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs">
                  <span className="text-[10px] font-mono font-black text-red-500 block uppercase mb-4">{act.tag}</span>
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{act.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed mt-2">{act.desc}</p>
                </div>
              ))}
            </div>

            {/* Decision flow visual */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase block mb-8 text-center">PAYMENT INTERVENTION DECISION PATH</span>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center font-manrope">
                <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl">
                  <span className="text-zinc-500 block font-mono">SCORE: &lt; 50</span>
                  <span className="text-emerald-500 font-bold block text-base mt-2">ALLOW TRANSFER</span>
                </div>
                <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl">
                  <span className="text-zinc-500 block font-mono">SCORE: 50 - 75</span>
                  <span className="text-amber-500 font-bold block text-base mt-2">RECOMMEND WARNING</span>
                </div>
                <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl">
                  <span className="text-zinc-500 block font-mono">SCORE: 75 - 90</span>
                  <span className="text-orange-500 font-bold block text-base mt-2">HOLD + STEP-UP</span>
                </div>
                <div className="p-6 bg-red-50 border border-red-100 rounded-3xl">
                  <span className="text-red-500 block font-mono">SCORE: &gt; 90</span>
                  <span className="text-red-600 font-bold block text-base mt-2">BLOCK + TRIGGER CASE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: APP SCAM CASE MANAGEMENT ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Investigation Workflows</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Investigate Scam Payments With Full Beneficiary and Customer Context.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense turns high-risk scam signals into structured investigations with evidence, graph links, payment history, and analyst workflows.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch w-full">
              {/* Left Column: Evidence Context */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-4 text-left">
                {[
                  { title: "Payment details", desc: "Amount, currency, time, channel, and standard device data." },
                  { title: "Beneficiary profile", desc: "Mule risk status, historical velocity, and recent creation dates." },
                  { title: "Customer behavior timeline", desc: "Session telemetry, abnormal hesitations, and pressure indicators." },
                  { title: "Graph relationships", desc: "Visual map of linked wallets, counterparties, and shared devices." },
                  { title: "Warnings shown", desc: "Complete log of warnings shown and customer confirmation actions." }
                ].map((ev, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-1.5 h-12 bg-red-100 group-hover:bg-red-500 rounded-full transition-all duration-300" />
                    <div>
                      <span className="text-sm font-bold text-neutral-900 font-manrope block">{ev.title}</span>
                      <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ev.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column: Case Investigator dashboard */}
              <div className="lg:col-span-7 bg-zinc-950 p-8 rounded-[48px] text-white text-left font-mono relative overflow-hidden flex flex-col justify-between border border-white/5">
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-500">
                    <span>SCAM CASE INVESTIGATION WORKSPACE</span>
                    <span>CASE #DS-8821</span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <span className="text-zinc-500 text-[10px] block">PRIMARY ALERT RISK CODE</span>
                      <span className="text-sm font-bold block text-red-400">SAFE_ACCOUNT_SCAM_SUSPECTED</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-[11px] text-zinc-400">
                      <div className="p-4 bg-white/5 rounded-2xl">
                        <span>OUTGOING TRANSACTION:</span>
                        <span className="block font-bold text-white mt-1">$18,450.00 paused</span>
                      </div>
                      <div className="p-4 bg-white/5 rounded-2xl">
                        <span>ANALYST RECOMMENDATION:</span>
                        <span className="block font-bold text-amber-400 mt-1">Step-Up verification</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 mt-8 flex justify-between text-[10px] text-zinc-500">
                  <span>Linked Cases: 3 matching networks</span>
                  <span className="text-red-400 font-bold">READY TO REVIEW</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: INTEGRATION WITH DEEPSENSE RISK PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Unified Platform Context</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              APP Scam Protection Connected to Fraud, AML, ATO, and Graph Intelligence.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              APP scam risk becomes more accurate when connected to the full DeepSense intelligence layer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Transaction Fraud Link", desc: "APP scam risk contributes to real-time payment scoring and intervention." },
                { title: "AML Monitoring flow", desc: "Mule accounts and rapid movement patterns feed AML typology detection." },
                { title: "Graph Intelligence networks", desc: "Beneficiaries, devices, wallets, and accounts connect into fraud-ring and mule-network analysis." },
                { title: "ATO Prevention vectors", desc: "Payment risk can be combined with suspicious login or session behavior." },
                { title: "Behavioral Biometrics input", desc: "Customer session behavior helps detect pressure, automation, or account compromise." },
                { title: "Case Management tracking", desc: "High-risk APP scam events automatically create investigations and evidence workflows." }
              ].map((int, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{int.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: ANALYTICS & REPORTING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Command Center Metrics</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Measure Scam Exposure and Intervention Effectiveness.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Losses Prevented This Month", count: "$1.48M" },
                { title: "Intervention Acceptance Rate", count: "94.2%" },
                { title: "Confirmed Mule Clusters Found", count: "38 Clusters" },
                { title: "False-Positive Rate", count: "0.14%" }
              ].map((dash, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <span className="text-xs font-black text-red-500 font-mono block">WIDGET 0{idx+1}</span>
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{dash.title}</h4>
                  <span className="text-2xl font-black italic text-neutral-900">{dash.count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Industry Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              APP Scam Protection for Real-Time Money Movement.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense provides scam protection across financial institutions, payments, fintechs, marketplaces, and wallets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Banking", desc: "Protect customers from impersonation scams, safe-account scams, mule beneficiaries, and real-time transfer fraud." },
                { title: "Fintech", desc: "Monitor wallet transfers, instant payments, peer-to-peer payments, and risky beneficiaries." },
                { title: "Telecom Wallets", desc: "Detect scam payments, agent-linked mule activity, SIM-linked wallet risk, and rapid cash-out behavior." },
                { title: "Crypto Platforms", desc: "Identify scam-related fiat-to-crypto flows, risky wallets, and mule transaction patterns." },
                { title: "Payment Providers", desc: "Score outgoing payments, payout destinations, and beneficiary networks for scam risk." },
                { title: "Marketplaces", desc: "Detect fake seller payments, purchase scams, invoice redirection, and risky payout recipients." }
              ].map((ind, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 13: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Enterprise Security</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Built for Responsible Customer Protection.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense helps institutions balance fraud prevention, customer friction, regulatory expectations, and explainable payment decisions.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Role-based access", "Tenant isolation", "Audit logging", "Payment decision logs",
                "Warning records", "Intervention audits", "Case-linked evidence", "On-prem deployment",
                "Private cloud support", "Explainable logic", "Friction balance"
              ].map((sec, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span className="text-[10px] font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 14: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Scam FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is an APP scam?", 
                  a: "An authorized push payment scam happens when a customer is tricked into authorizing a payment to a fraudster or mule account." 
                },
                { 
                  q: "How does DeepSense detect APP scams?", 
                  a: "DeepSense analyzes beneficiary risk, payment behavior, customer behavior changes, graph relationships, mule indicators, and scam typology patterns." 
                },
                { 
                  q: "Can DeepSense warn customers before payment?", 
                  a: "Yes. DeepSense can recommend customer warnings, beneficiary confirmations, step-up verification, payment holds, or blocks based on risk." 
                },
                { 
                  q: "Does APP scam detection connect to AML?", 
                  a: "Yes. Mule beneficiaries and rapid funds movement can feed AML monitoring and suspicious activity workflows." 
                },
                { 
                  q: "Can APP scam events create cases?", 
                  a: "Yes. High-risk payments can automatically generate cases with beneficiary evidence, graph links, payment history, and analyst actions." 
                },
                { 
                  q: "Can DeepSense detect mule accounts?", 
                  a: "Yes. DeepSense uses transaction behavior and graph intelligence to identify mule beneficiaries and suspicious recipient networks." 
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

        {/* ================= SECTION 15: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest">Ready to stop scam payments before they leave?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Protect customers from APP scams with <br />
                <span className="text-white/40 font-bold">real-time beneficiary risk and intervention.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                DeepSense helps banks and fintechs detect scam payments, identify mule beneficiaries, warn customers, hold suspicious transfers, and investigate APP scam networks from one platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/card-not-present-fraud" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore CNP Fraud
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
