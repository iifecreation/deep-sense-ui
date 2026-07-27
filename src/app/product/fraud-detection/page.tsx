"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  FileCheck,
  Layers,
  Terminal,
  ChevronDown,
  ChevronUp,
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
  Wallet
} from "lucide-react";

export default function FraudDetectionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // State for live fraud operations dashboard simulation
  const [liveEvents, setLiveEvents] = useState<Array<{id: string, time: string, channel: string, amount: number, risk: number, status: string}>>([
    { id: "tx_9103", time: "14:02:11", channel: "Card-Not-Present", amount: 1450.00, risk: 94, status: "BLOCKED" },
    { id: "tx_9102", time: "14:02:08", channel: "Mobile P2P", amount: 280.00, risk: 42, status: "ALLOWED" },
    { id: "tx_9101", time: "14:02:03", channel: "NFC Transaction", amount: 45.50, risk: 12, status: "ALLOWED" },
    { id: "tx_9100", time: "14:01:57", channel: "Crypto Outflow", amount: 8900.00, risk: 87, status: "REVIEW" }
  ]);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Simulating real-time incoming events
  useEffect(() => {
    const interval = setInterval(() => {
      const channels = ["Card-Not-Present", "Mobile P2P", "NFC Transaction", "Crypto Outflow", "Web Portal Login"];
      const statuses = ["ALLOWED", "REVIEW", "BLOCKED"];
      const randomChannel = channels[Math.floor(Math.random() * channels.length)];
      const randomRisk = Math.floor(Math.random() * 95) + 5;
      let randomStatus = "ALLOWED";
      if (randomRisk > 80) randomStatus = "BLOCKED";
      else if (randomRisk > 50) randomStatus = "REVIEW";

      const newEvent = {
        id: `tx_${Math.floor(Math.random() * 9000) + 1000}`,
        time: new Date().toTimeString().split(" ")[0],
        channel: randomChannel,
        amount: parseFloat((Math.random() * 1200 + 5).toFixed(2)),
        risk: randomRisk,
        status: randomStatus
      };

      setLiveEvents(prev => [newEvent, ...prev.slice(0, 3)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Hero Headers */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-lime-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <Shield className="w-3.5 h-3.5 text-lime-400" />
                Real-Time Fraud Decisioning Platform
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect and Stop Fraud <br />
                <span className="text-zinc-400">Before Money Moves.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense analyzes transactions, devices, identities, behavior, graph relationships, wallets, merchants, and risk signals in real time to stop fraud before losses occur. We provide infrastructure, not just alerts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/scoring-engine" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Risk Engine
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Built for banks, fintechs, payment processors, e-commerce, telecom wallets, crypto platforms, and regulated enterprises.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive Dark Enterprise Fraud Command-Center Dashboard Mockup replaced with Image */}
            <div className="w-full flex justify-center items-center rounded-[48px] overflow-hidden bg-neutral-50 p-8 border border-gray-100 shadow-2xl relative">
              <Image 
                src="/assets/images/home/Money Transform Card.svg"
                alt="Fraud Detection Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">The Threat Landscape</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Modern Fraud Moves Faster Than Traditional Systems.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Fraud today is multi-channel, coordinated, automated, and highly adaptive. Criminals move across accounts, devices, wallets, merchants, payment methods, and synthetic identities faster than rule-only systems can react.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fraud Rings", desc: "Fraudsters coordinate across accounts, devices, beneficiaries, terminals, and merchants to bypass isolated detection systems.", icon: <Layers className="text-red-500" /> },
                { title: "Real-Time Payments", desc: "APP scams, instant transfers, NFC payments, and wallet transactions reduce the window for human review.", icon: <Zap className="text-red-500" /> },
                { title: "Synthetic Identities", desc: "Fake documents, stolen credentials, AI-generated selfies, and mule accounts create high-confidence onboarding fraud.", icon: <FileCheck className="text-red-500" /> },
                { title: "Account Takeover", desc: "Credential stuffing, session hijacking, and behavioral impersonation compromise customer accounts.", icon: <Fingerprint className="text-red-500" /> },
                { title: "Bot Attacks", desc: "Automated card testing, checkout bots, promo abuse, and scripted abuse overwhelm legacy controls.", icon: <Cpu className="text-red-500" /> },
                { title: "False Positives", desc: "Disconnected systems generate excessive alerts and slow analyst response times, destroying clean customer experiences.", icon: <AlertTriangle className="text-red-500" /> }
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
          </div>
        </section>

        {/* ================= SECTION 3: DEEPSENSE APPROACH ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[900px] tracking-tight">
              One Connected Fraud Intelligence Engine.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines rules, machine learning, graph intelligence, device telemetry, behavioral biometrics, AML signals, and identity intelligence into one unified fraud decisioning engine.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Real-Time Risk Scoring", desc: "Score every transaction, login, onboarding flow, payment, wallet event, and session instantly in sub-100ms." },
                { title: "Graph Intelligence", desc: "Detect fraud rings, mule networks, shared devices, duplicate identities, risky beneficiaries, and linked entities." },
                { title: "Behavioral Intelligence", desc: "Analyze typing cadence, navigation behavior, login rhythm, and checkout activity to detect abnormal users and bots." },
                { title: "Device Intelligence", desc: "Identify risky devices, emulators, rooted phones, spoofed sessions, VPN/TOR usage, and multi-account abuse." },
                { title: "Payment Risk", desc: "Protect CNP payments, APP transfers, NFC transactions, wallets, terminals, and payment tokens." },
                { title: "Adaptive Decisioning", desc: "Automatically allow, review, block, hold, or step-up high-risk activity based on configurable policies." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>

            {/* central risk engine architecture mockup diagram */}
            <div className="w-full max-w-[1000px] bg-neutral-950 p-8 rounded-[40px] text-white border border-white/5 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/5 to-transparent pointer-events-none" />
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 text-center md:text-left">
                {/* Inputs */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">INGESTED RAW SIGNALS</span>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start max-w-xs">
                    {["Transactions", "Devices", "Documents", "Wallets", "Behavior", "AML", "Graph"].map((sig, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/70">{sig}</span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-brand-lime font-black text-2xl">→</div>

                {/* Engine core */}
                <div className="bg-white/5 border-2 border-brand-lime/40 px-8 py-6 rounded-3xl flex flex-col items-center gap-1.5 shadow-xl shadow-brand-lime/5">
                  <Cpu className="w-8 h-8 text-brand-lime" />
                  <span className="text-xs font-extrabold tracking-widest font-manrope uppercase">DEEPSENSE RISK CORE</span>
                  <span className="text-[9px] text-brand-lime font-mono">Latent Processing: 38ms</span>
                </div>

                {/* Arrow */}
                <div className="text-brand-lime font-black text-2xl">→</div>

                {/* Outputs */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">REAL-TIME INLINE DECISIONS</span>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start max-w-xs">
                    {["Allow", "Review", "Block", "Step-Up", "Case"].map((dec, i) => (
                      <span key={i} className={`px-3 py-1.5 rounded-full text-[10px] font-bold ${dec === 'Block' ? 'bg-red-500/10 border border-red-500/20 text-red-400' : dec === 'Allow' ? 'bg-brand-lime/10 border border-brand-lime/20 text-brand-lime' : 'bg-white/5 border border-white/10 text-white/70'}`}>{dec}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: FRAUD DETECTION COVERAGE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Platform Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Detect Fraud Across Every Channel.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full mb-20">
              {[
                { title: "Transaction Fraud", desc: "Detect unusual amounts, high-risk merchants, impossible travel, velocity spikes, structuring behavior, and rapid movement patterns." },
                { title: "APP Scams", desc: "Identify risky beneficiaries, scam typologies, mule accounts, unusual payment behavior, and intervention opportunities." },
                { title: "Card-Not-Present Fraud", desc: "Stop card testing, stolen card use, BIN mismatch, shipping anomalies, failed 3DS, and checkout abuse." },
                { title: "NFC & Wallet Fraud", desc: "Detect token replay, rogue terminals, wallet provisioning abuse, relay attacks, and contactless velocity anomalies." },
                { title: "Account Takeover", desc: "Detect credential stuffing, suspicious sessions, new devices, VPN/TOR usage, and abnormal login behavior." },
                { title: "Bonus & Promo Abuse", desc: "Uncover referral abuse, multi-account farming, collusion, and reward exploitation patterns." },
                { title: "Synthetic Identity Fraud", desc: "Detect fake identities, duplicate documents, risky onboarding behavior, and manipulated KYC flows." },
                { title: "Friendly Fraud & Chargebacks", desc: "Monitor refund abuse, delivery disputes, chargeback patterns, and customer misuse behavior." }
              ].map((cov, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 hover:shadow-xl transition-all">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cov.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cov.desc}</p>
                </div>
              ))}
            </div>

            {/* Illustration: Fraud Coverage Matrix table mockup */}
            <div className="w-full bg-white border border-gray-100 rounded-[36px] p-8 text-left overflow-x-auto">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-6">FRAUD COVERAGE & RELEVANT SIGNALS MATRIX</span>
              
              <table className="w-full text-xs text-neutral-900 border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-gray-100 text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                    <th className="pb-4 text-left">Fraud Coverage Domains</th>
                    <th className="pb-4 text-center">Device</th>
                    <th className="pb-4 text-center">Graph</th>
                    <th className="pb-4 text-center">Behavioral</th>
                    <th className="pb-4 text-center">AML Context</th>
                    <th className="pb-4 text-center">Document</th>
                    <th className="pb-4 text-center">Transaction</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { row: "Transaction Fraud", cols: [false, true, false, true, false, true] },
                    { row: "APP Scams / Mule Accounts", cols: [false, true, true, true, false, true] },
                    { row: "Card-Not-Present (CNP)", cols: [true, false, true, false, false, true] },
                    { row: "NFC & Wallets", cols: [true, true, false, false, false, true] },
                    { row: "Account Takeover (ATO)", cols: [true, false, true, false, false, false] }
                  ].map((matrixRow, idx) => (
                    <tr key={idx} className="border-b border-gray-50 last:border-0">
                      <td className="py-4 font-bold">{matrixRow.row}</td>
                      {matrixRow.cols.map((val, cIdx) => (
                        <td key={cIdx} className="py-4 text-center">
                          {val ? (
                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-lime border border-neutral-900" />
                          ) : (
                            <span className="text-zinc-200">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: REAL-TIME DECISIONING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Inline Action Framework</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Decide in Milliseconds.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense is designed for real-time inline decisioning, allowing organizations to stop fraud before transactions settle or accounts are compromised. We provide active mitigation, not delayed alerting.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {[
                    { title: "Allow", desc: "Approve low-risk activity instantly." },
                    { title: "Review", desc: "Escalate suspicious activity to alert queues." },
                    { title: "Block", desc: "Stop high-risk transactions inline." },
                    { title: "Step-Up", desc: "Trigger automated biometric or MFA checks." },
                    { title: "Hold Payment", desc: "Pause payouts pending analyst review." },
                    { title: "Session Revocation", desc: "Kill active compromised login sessions." }
                  ].map((dec, idx) => (
                    <div key={idx} className="p-4 bg-zinc-50 border border-zinc-100 rounded-2xl flex flex-col gap-1">
                      <span className="text-xs font-bold text-neutral-950 font-manrope">{dec.title}</span>
                      <span className="text-[10px] text-zinc-500 font-inter">{dec.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Decision Flow Animation Mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-10 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-8 relative z-10">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block">REAL-TIME RISK DECISION FLOW</span>
                  
                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white">1</div>
                      <div className="flex-1 p-3 bg-white/5 border border-white/5 rounded-2xl">
                        <span className="text-white text-xs font-bold block">Incoming API Transaction event</span>
                        <span className="text-[10px] text-zinc-400 font-mono">POST /v1/score • amount: $4,200</span>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-brand-lime/20 border border-brand-lime/40 flex items-center justify-center text-xs font-bold text-brand-lime">2</div>
                      <div className="flex-1 p-3 bg-white/5 border border-white/5 rounded-2xl">
                        <span className="text-white text-xs font-bold block">DeepSense Multi-Engine Scoring</span>
                        <span className="text-[10px] text-brand-lime font-mono">Scoring duration: 32ms • Risk level: CRITICAL (94/100)</span>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-xs font-bold text-red-400">3</div>
                      <div className="flex-1 p-3 bg-red-500/10 border border-red-500/20 rounded-2xl">
                        <span className="text-red-400 text-xs font-extrabold block">Policy Action Fired</span>
                        <span className="text-[10px] text-white/70">BLOCK TRANSACTION • Webhook trigger • Auto-create Case queue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: GRAPH INTELLIGENCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column: Red Fraud Cluster Visualization */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden min-h-[350px] flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="flex justify-between items-center pb-4 border-b border-white/5 relative z-10">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400">ENTITY LINKING: INTERACTIVE GRAPH MAP</span>
                  <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/20 text-red-400 text-[8px] font-black rounded-full uppercase tracking-widest">Fraud Cluster: 42</span>
                </div>

                {/* Graph mockup nodes */}
                <div className="my-10 flex flex-wrap justify-center gap-6 relative z-10">
                  <div className="w-16 h-16 bg-red-500/20 border border-red-500 rounded-full flex flex-col items-center justify-center text-red-400 font-bold text-xs shadow-lg shadow-red-500/10">
                    <span>Mule ID</span>
                    <span className="text-[8px] opacity-75">KYC Match</span>
                  </div>
                  <div className="text-zinc-500 text-xl self-center font-bold">⇌</div>
                  <div className="w-16 h-16 bg-red-500/20 border border-red-500 rounded-full flex flex-col items-center justify-center text-red-400 font-bold text-xs shadow-lg shadow-red-500/10">
                    <span>Device ID</span>
                    <span className="text-[8px] opacity-75">3 Accounts</span>
                  </div>
                  <div className="text-zinc-500 text-xl self-center font-bold">⇌</div>
                  <div className="w-16 h-16 bg-red-500/20 border border-red-500 rounded-full flex flex-col items-center justify-center text-red-400 font-bold text-xs shadow-lg shadow-red-500/10">
                    <span>Card No</span>
                    <span className="text-[8px] opacity-75">Velocity</span>
                  </div>
                </div>

                <p className="text-[10px] text-white/40 border-t border-white/5 pt-4">
                  Shared entity linkages flagged coordinated fraud ring attempts instantly.
                </p>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Coordinated Network Analysis</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Reveal Hidden Fraud Networks.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  Fraud rarely happens in isolation. DeepSense links customers, devices, IPs, documents, beneficiaries, merchants, wallets, vendors, and terminals to uncover coordinated network activity.
                </p>
                <div className="space-y-2 text-xs text-zinc-500 font-inter">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">Flagged Connections</span>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">• Shared device links</div>
                    <div className="flex items-center gap-2">• Shared bank beneficiaries</div>
                    <div className="flex items-center gap-2">• Duplicate MRZ documents</div>
                    <div className="flex items-center gap-2">• Wallet farm clusters</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: FRAUD ANALYST WORKFLOW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Operations Workspace</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Built for Fraud Operations Teams.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense does not stop at scoring. It provides analysts with the evidence, workflows, and context needed to investigate and respond quickly.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Alert Queue", desc: "Prioritize high-risk events with configurable severity and routing." },
                    { title: "Case Management", desc: "Create investigations automatically from fraud signals, AML events, document reviews, or payment anomalies." },
                    { title: "Evidence Timeline", desc: "View linked transactions, devices, graph entities, notes, documents, sessions, and sanctions hits in one place." },
                    { title: "Analyst Collaboration", desc: "Assign cases, add notes, escalate investigations, and maintain audit-ready workflows." },
                    { title: "Audit Trails", desc: "Track every decision, override, rule change, analyst action, and evidence update." }
                  ].map((wf, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-12 bg-zinc-100 group-hover:bg-brand-lime transition-all duration-300 rounded-full" />
                      <div>
                        <span className="text-xs font-bold text-neutral-950 font-manrope block">{wf.title}</span>
                        <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{wf.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Case Dashboard UI Mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-xs">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <div>
                      <span className="text-white font-bold block text-sm">CASE #CASE-8902: SUSPICIOUS TRANSFER</span>
                      <span className="text-[10px] text-zinc-400">Assigned Analyst: Sarah K. • Severity: HIGH</span>
                    </div>
                    <span className="px-2.5 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-[9px] font-black rounded-full uppercase tracking-wider">UNDER INVESTIGATION</span>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {/* Linked entities list */}
                    <div className="space-y-3">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400">Linked Entities Detected</span>
                      <div className="space-y-2 text-[11px] text-white/80">
                        <div className="flex justify-between border-b border-white/5 pb-1">
                          <span>Device Match</span>
                          <span className="text-red-400 font-bold">Blocked emulator</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1">
                          <span>IP Origin</span>
                          <span className="text-amber-400 font-bold">Nigeria (VPN used)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>KYC Checklist</span>
                          <span className="text-brand-lime font-bold">MRZ Verified</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline logs */}
                    <div className="space-y-3">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400">Activity Timeline Logs</span>
                      <div className="space-y-2 text-[10px] text-zinc-400 font-mono">
                        <div>14:02:11 • Ingested transaction</div>
                        <div>14:02:12 • Rules scoring: 94/100</div>
                        <div>14:02:12 • Action: BLOCKED</div>
                        <div>14:02:13 • Case dashboard created</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: AI & DETECTION MODELS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Risk Infrastructure Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Multi-Layered Fraud Detection.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines deterministic rules, statistical analysis, machine learning, graph analytics, and behavioral intelligence to reduce false positives while improving fraud detection accuracy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Rules Engine", desc: "Custom fraud rules with dynamic thresholds, backtesting simulations, and instant governance control." },
                { title: "Machine Learning", desc: "Supervised models score transaction risk instantly using behavioral profiles and historical transaction characteristics." },
                { title: "Anomaly Detection", desc: "Isolation Forest and statistical outlier detection locate unusual spikes, structuring, and card-testing velocity." },
                { title: "Graph Risk", desc: "Connected-entity linkages flag hidden duplicate credentials, mule networks, and coordinated device farming." },
                { title: "Behavioral Biometrics", desc: "Analyze raw keyboard dynamics, navigation pacing, and swipe dynamics to pinpoint imposters and bots." },
                { title: "AML Signals", desc: "Inject sanctions hits, watchlist screening, and PEP status into the real-time scoring engine for absolute compliance." }
              ].map((layer, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 hover:shadow-xl transition-all">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{layer.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{layer.desc}</p>
                </div>
              ))}
            </div>

            {/* Layered detection stack illustration mockup */}
            <div className="w-full max-w-[800px] bg-neutral-950 p-8 rounded-[40px] text-white border border-white/5 shadow-3xl text-left relative overflow-hidden flex flex-col gap-4">
              <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">LAYERED AI DETECTION ENGINE STACK</span>
              
              <div className="flex flex-col gap-2.5">
                {[
                  { name: "Deterministic Rules Engine & Policy", pct: 100 },
                  { name: "Supervised ML Fraud Scoring", pct: 90 },
                  { name: "Connected-Entity Graph Linkages", pct: 80 },
                  { name: "Behavioral Biometric Profile", pct: 70 },
                  { name: "AML watchlists & Sanctions Checks", pct: 60 },
                  { name: "Device fingerprinting Metadata Check", pct: 50 }
                ].map((row, idx) => (
                  <div key={idx} className="p-3 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white/80">{row.name}</span>
                    <span className="text-brand-lime text-[10px] font-mono">Layer Active</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Industry Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Built for High-Risk Industries.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Banking", desc: "Stop account takeover, APP scams, mule activity, card fraud, and suspicious transfers.", icon: <Building2 /> },
                { title: "Fintech", desc: "Protect onboarding, wallets, transactions, payments, and customer sessions.", icon: <Cpu /> },
                { title: "Payments", desc: "Monitor merchants, terminals, cards, wallets, chargebacks, and transaction risk.", icon: <Wallet /> },
                { title: "E-Commerce", desc: "Detect bot checkout, CNP fraud, refund abuse, and promo abuse.", icon: <ShoppingBag /> },
                { title: "Crypto & Web3", desc: "Monitor wallet risk, sanctions exposure, and suspicious account behavior.", icon: <Globe /> },
                { title: "Gaming & Betting", desc: "Detect multi-account abuse, bonus farming, and payment fraud.", icon: <Briefcase /> }
              ].map((ind, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-6 hover:shadow-xl hover:bg-white hover:border-brand-lime/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-2xl border border-zinc-100 flex items-center justify-center text-neutral-900 shadow-sm">
                    {ind.icon}
                  </div>
                  <h4 className="text-xl font-bold font-manrope text-neutral-900">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: INTEGRATIONS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Connectivity Hub</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-16">
              Connect DeepSense Into Your Existing Stack.
            </h2>

            <div className="flex flex-wrap justify-center gap-4 max-w-[1100px] mx-auto">
              {[
                "Core banking systems", "Payment gateways", "Card networks", "Identity providers",
                "OCR providers", "Biometric providers", "SIEM platforms", "Data warehouses",
                "Kafka / event streams", "Webhook consumers"
              ].map((intg, idx) => (
                <div key={idx} className="px-6 py-4 bg-white border border-gray-200/60 rounded-full flex items-center gap-2.5 hover:shadow-lg hover:border-brand-lime/40 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                  <span className="text-xs font-bold tracking-tight text-neutral-900">{intg}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Enterprise Architecture</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Enterprise-Ready Fraud Infrastructure.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for regulated environments that require strong governance, explainability, and operational control.
              </p>
            </div>

            {/* Right grid: 8 security points */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Multi-tenant isolation", "Role-based access", "Audit logging", "Webhook signing",
                "Encryption", "On-prem deployment", "Private cloud", "Air-gapped deployment"
              ].map((sec, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                  <span className="text-[10px] font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Operational FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense make real-time fraud decisions?", 
                  a: "Yes. DeepSense is designed for inline decisioning and can return allow, review, block, hold, step-up, or case-creation actions in milliseconds." 
                },
                { 
                  q: "Does DeepSense support machine learning?", 
                  a: "Yes. DeepSense combines rules, ML, anomaly detection, graph analytics, behavioral intelligence, and AML signals." 
                },
                { 
                  q: "Can DeepSense detect fraud rings?", 
                  a: "Yes. Graph intelligence links accounts, devices, wallets, documents, beneficiaries, terminals, and merchants to uncover coordinated fraud." 
                },
                { 
                  q: "Does DeepSense support payment fraud?", 
                  a: "Yes. DeepSense supports APP scams, CNP fraud, NFC fraud, wallet abuse, token replay, chargebacks, and merchant risk." 
                },
                { 
                  q: "Can fraud analysts investigate cases inside DeepSense?", 
                  a: "Yes. DeepSense includes case management, evidence timelines, analyst workflows, audit trails, and escalation flows." 
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

        {/* ================= SECTION 13: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-50/50 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest">Ready to stop fraud in real time?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                See how DeepSense detects and prevents <br />
                <span className="text-white/40">modern fraud across every channel.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Unify fraud scoring, graph intelligence, AML signals, behavioral analytics, payment risk, and investigation workflows into one platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/scoring-engine" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Risk Engine
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
