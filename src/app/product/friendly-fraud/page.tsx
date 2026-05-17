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
  CreditCard,
  FileText,
  BadgeAlert,
  Search,
  Check
} from "lucide-react";

export default function FriendlyFraudPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("ecommerce");
  
  // Interactive Representment Evidence Builder Simulator States
  const [disputeType, setDisputeType] = useState<string>("inr");
  const [deliveryEvidence, setDeliveryEvidence] = useState<boolean>(true);
  const [digitalActivity, setDigitalActivity] = useState<boolean>(true);
  const [deviceFingerprint, setDeviceFingerprint] = useState<boolean>(true);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic success probability based on provided evidence checkboxes
  const calculateSuccessProbability = () => {
    let probability = 10;
    if (deliveryEvidence) probability += 30;
    if (digitalActivity) probability += 25;
    if (deviceFingerprint) probability += 25;
    
    if (disputeType === "inr" && deliveryEvidence) probability += 5;
    if (disputeType === "ua" && deviceFingerprint) probability += 5;
    
    probability = Math.min(probability, 98);
    
    let label = "LOW PROBABILITY";
    let color = "text-red-500";
    if (probability >= 80) {
      label = "EXCELLENT PROBABILITY (Auto-Represent)";
      color = "text-emerald-500";
    } else if (probability >= 50) {
      label = "MODERATE PROBABILITY (Manual Enrichment)";
      color = "text-amber-500";
    }
    
    return { probability, label, color };
  };

  const { probability, label, color } = calculateSuccessProbability();

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-indigo-50/50 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Headers */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-indigo-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <BadgeAlert className="w-3.5 h-3.5 text-indigo-400" />
                REAL-TIME CHARGEBACK & FRIENDLY FRAUD INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Reduce Chargebacks and Detect <br />
                <span className="text-zinc-400">Friendly Fraud at Scale</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps merchants, fintechs, payment platforms, and marketplaces identify first-party fraud, refund abuse, policy exploitation, and dispute manipulation using behavioral intelligence, transaction analytics, graph detection, and real-time risk scoring.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/dispute-intelligence" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Dispute Intelligence
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for high-volume payment ecosystems, digital commerce platforms, subscription businesses, fintechs, and global marketplaces.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive Dispute Representment Evidence Builder Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-indigo-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-indigo-400" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Representment Evidence Builder</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">AUTOMATED EVIDENCE COMPLIANCE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Evidence Profile</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div>
                        <span className="text-zinc-500 block mb-2">Dispute Reason Code</span>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: "inr", label: "INR (Not Received)" },
                            { id: "ua", label: "UA (Unauthorized)" },
                            { id: "sub", label: "Sub Abuse" }
                          ].map((t) => (
                            <button 
                              key={t.id} 
                              onClick={() => setDisputeType(t.id)}
                              className={`py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${disputeType === t.id ? "bg-indigo-600 text-white" : "bg-white/5 text-zinc-400 hover:bg-white/10"}`}
                            >
                              {t.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block pt-4 font-mono">Enrichment evidence checks</span>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Delivery proof signature</span>
                        <input 
                          type="checkbox" 
                          checked={deliveryEvidence} 
                          onChange={(e) => setDeliveryEvidence(e.target.checked)}
                          className="w-4 h-4 accent-indigo-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Digital usage logs</span>
                        <input 
                          type="checkbox" 
                          checked={digitalActivity} 
                          onChange={(e) => setDigitalActivity(e.target.checked)}
                          className="w-4 h-4 accent-indigo-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Device fingerprint match</span>
                        <input 
                          type="checkbox" 
                          checked={deviceFingerprint} 
                          onChange={(e) => setDeviceFingerprint(e.target.checked)}
                          className="w-4 h-4 accent-indigo-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE DISPUTE INTELLIGENCE OUTPUT</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Chargeback Ratio Status</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">0.14% (SaaS safe limit)</span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Customer Abuse Score</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">Grade: F (High Abuse risk)</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">REPRESENTMENT SUCCESS PROBABILITY</span>
                          <span className="text-3xl font-black text-white">{probability}%</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">RECOMMENDED DISPUTE ACTION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{label}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Representment Success Rate: 84.8% baseline avg</span>
                      <span>Visa/Mastercard 3DS Sync Active</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Revenue Leakage</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Friendly Fraud Is Becoming More Sophisticated
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern fraud increasingly comes from legitimate customers abusing payment systems, refund policies, subscriptions, loyalty programs, delivery disputes, and chargeback mechanisms. Traditional fraud systems struggle to identify policy abuse, false “item not received” claims, digital consumption before disputes, repeat refund exploitation, multi-account abuse, synthetic consumer behavior, and coordinated dispute farming. Without behavioral and transaction intelligence, organizations face rising dispute losses, increased operational costs, elevated chargeback ratios, issuer penalties, damaged merchant trust, and revenue leakage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "False Chargeback Claims", desc: "Customers dispute legitimate purchases after consuming goods or services.", icon: <CreditCard /> },
                { title: "Refund Abuse", desc: "Users exploit refund and return systems repeatedly across accounts and devices.", icon: <RefreshCw /> },
                { title: "Multi-Account Exploitation", desc: "Fraudsters create linked accounts to bypass refund, loyalty, or platform restrictions.", icon: <Users /> },
                { title: "Subscription Abuse", desc: "Customers intentionally abuse recurring billing cycles and cancellation policies.", icon: <Clock /> },
                { title: "Digital Goods Fraud", desc: "Users consume digital products before claiming unauthorized usage or failed delivery.", icon: <Smartphone /> },
                { title: "Policy Manipulation", desc: "Fraudsters exploit promotional policies, delivery guarantees, and return workflows.", icon: <Scale /> }
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

            {/* Chargeback Lifecycle Flow Visualization */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">CHARGEBACK REPRESENTMENT LIFECYCLE PATH</span>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center font-manrope">
                {[
                  { title: "1. Transaction Ingestion", desc: "Digital checkout event parsed and mapped." },
                  { title: "2. Dispute Event Alert", desc: "Issuer triggers chargeback alert via payment network." },
                  { title: "3. Auto-Enrichment", desc: "DeepSense maps delivery proof, dynamic session keys, and device trust." },
                  { title: "4. Auto-Representment", desc: "Pre-formatted evidence pack compiled and submitted to card issuer." },
                  { title: "5. Win/Loss Feedback", desc: "Gateway outcome analyzed to update customer trust score." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">AI-Powered Defense</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              AI-Driven Friendly Fraud & Dispute Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines behavioral intelligence, payment analytics, graph detection, customer trust scoring, and transaction history analysis into a unified chargeback prevention and dispute intelligence platform. The platform continuously evaluates customer behavior, dispute history, refund activity, transaction intent, delivery evidence, device reputation, account linkages, policy abuse indicators, and chargeback velocity. DeepSense helps organizations reduce fraud losses, lower dispute rates, improve representment outcomes, protect merchant reputation, reduce operational burden, and strengthen customer trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce fraud losses", desc: "Automatically block first-party policy abusers before checkouts settle." },
                { title: "Lower dispute rates", desc: "Identify customers with high propensity to initiate false disputes." },
                { title: "Improve representment wins", desc: "Compile compelling evidence payloads including delivery confirmation and login logs." },
                { title: "Protect merchant reputation", desc: "Maintain chargeback ratios far below standard card brand penalty thresholds." },
                { title: "Reduce operational burden", desc: "Substitute tedious manual representation preparation with automated PDF submissions." },
                { title: "Strengthen customer trust", desc: "Allow low-risk customers to check out seamlessly with zero friction." }
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
              Enterprise Chargeback Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Friendly Fraud Detection", desc: "Detect false disputes, post-consumption disputes, digital goods abuse, subscription exploitation, delivery manipulation, and intentional chargeback abuse." },
                { title: "Refund Abuse Detection", desc: "Identify excessive refund patterns, repeat refund users, linked refund accounts, policy exploitation, refund farming, and rapid refund cycles." },
                { title: "Customer Trust Scoring", desc: "Analyze dispute behavior, refund history, account maturity, behavioral consistency, transaction legitimacy, and payment reputation." },
                { title: "Multi-Account Abuse", desc: "Correlate shared devices, linked payment methods, IP overlap, behavioral similarities, identity reuse, and household abuse patterns." },
                { title: "Delivery Verification", desc: "Validate delivery confirmation, device access history, digital product usage, session activity, content consumption, and account interactions." },
                { title: "Dispute Intelligence", desc: "Track dispute reason codes, issuer behavior, representment outcomes, merchant dispute trends, loss ratios, and dispute clusters." },
                { title: "Behavioral Fraud Analytics", desc: "Detect suspicious checkout behavior, abnormal refund timing, coordinated dispute activity, scripted account behavior, and loyalty abuse indicators." },
                { title: "Graph Intelligence", desc: "Visualize linked fraud clusters, repeat abusers, payment method sharing, refund rings, and household/device relationships." },
                { title: "Automated Case Management", desc: "Automatically create dispute cases, attach evidence, assign analysts, escalate abuse patterns, and manage investigations." },
                { title: "Explainable Fraud Decisions", desc: "Every fraud decision includes risk score, evidence summary, behavioral indicators, linked account analysis, and transaction reasoning." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-indigo-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-indigo-600 font-bold block mb-2 font-mono">CAP-0{idx+1}</span>
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
              How DeepSense Detects Friendly Fraud
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests transactions, refunds, disputes, chargeback events, customer activity, delivery evidence, and digital access telemetry." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches events using customer trust profiles, behavioral analytics, device intelligence, graph relationships, payment reputation, and historical dispute activity." },
                { title: "Step 3 — Pattern Detection", desc: "DeepSense evaluates refund velocity, post-consumption disputes, linked account behavior, policy abuse indicators, suspicious refund timing, and abnormal dispute activity." },
                { title: "Step 4 — Scoring", desc: "The system generates customer abuse score, dispute risk score, refund legitimacy assessment, and investigation recommendations." },
                { title: "Step 5 — Investigation", desc: "High-risk events trigger analyst workflows, dispute investigations, evidence collection, graph analysis, and representment preparation." }
              ].map((step, idx) => (
                <div key={idx} className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl relative flex flex-col justify-between">
                  <div>
                    <span className="text-indigo-600 font-black text-sm block mb-3 font-mono">{step.title}</span>
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
              Built for Modern Digital Commerce Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Select an ecosystem area below to explore how DeepSense optimizes dispute workflows across merchants and marketplaces.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "ecommerce", label: "Ecommerce Platforms" },
                { id: "subscription", label: "Subscription Businesses" },
                { id: "digital", label: "Digital Goods Platforms" },
                { id: "marketplaces", label: "Marketplaces" },
                { id: "fintech", label: "Fintech & Payment Platforms" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-xs font-bold font-manrope uppercase transition-all tracking-wider ${activeTab === tab.id ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="w-full bg-white border border-zinc-200 p-8 md:p-12 rounded-[48px] shadow-sm text-left animate-in fade-in duration-300">
              {activeTab === "ecommerce" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Reduce false delivery disputes, refund abuse, return manipulation, and policy exploitation.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    DeepSense parses shipping courier telemetry and correlates GPS data to demonstrate positive proof of delivery, defeating "item not received" claims with 100% certainty.
                  </p>
                </div>
              )}
              {activeTab === "subscription" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent recurring billing abuse, free trial exploitation, and cancellation fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track customers creating secondary profiles to repeatedly farm free trial subscription promos. Secure recurring authorization streams automatically.
                  </p>
                </div>
              )}
              {activeTab === "digital" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect post-consumption disputes, account sharing, and digital entitlement fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Provide robust proof of content consumption (e.g. streaming hours, file downloads, or game play time) tied to client device IDs to demonstrate legitimate usage before chargeback.
                  </p>
                </div>
              )}
              {activeTab === "marketplaces" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Identify coordinated refund abuse, seller-buyer collusion, and multi-account fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Expose collusion networks where buyer accounts repeatedly coordinate transactions and file mock disputes to split merchant payouts.
                  </p>
                </div>
              )}
              {activeTab === "fintech" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor payment dispute risk, merchant abuse patterns, and refund laundering.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Help neobank gateways identify credit card disputes matching synthetic consumer behavior to prevent financial write-offs.
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
              Unified Across the DeepSense Risk Platform
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense unifies chargeback intelligence with our broader fraud, AML, GRC, and device fingerprint modules.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Transaction Fraud Detection", desc: "Correlate chargeback abuse with fraud scoring and payment intelligence." },
                { title: "Behavioral Biometrics", desc: "Analyze customer interaction patterns during disputes and refunds." },
                { title: "Graph Intelligence", desc: "Detect connected fraud rings and linked abusive accounts." },
                { title: "Device Intelligence", desc: "Identify shared devices and suspicious account relationships." },
                { title: "Case Management", desc: "Escalate disputes into centralized investigation workflows." },
                { title: "AML & Risk Monitoring", desc: "Correlate suspicious dispute activity with broader financial crime indicators." },
                { title: "Regulatory Reporting", desc: "Maintain audit-ready evidence trails for investigations and reviews." }
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
              Real-Time Chargeback & Abuse Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Chargeback Operations Dashboard", desc: "Dispute rate trends, refund metrics, abuse ratios, and transaction risk analytics." },
                { title: "Customer Trust Analytics", desc: "Customer abuse scores, loyalty abuse detection, account maturity, and repeat offender trackers." },
                { title: "Refund Abuse Monitoring", desc: "Refund heatmaps, linked refund accounts, velocity trends, and policy abuse alerts." },
                { title: "Representment Workspace", desc: "Evidence builders, dispute timelines, transaction logs, and digital usage evidence." },
                { title: "Fraud Graph Intelligence", desc: "Linked accounts, shared payment methods, connected refund clusters, and coordinated abuse patterns." }
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">High Volume Verticals</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Designed for High-Volume Transaction Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Stop chargeback abuse across highly scalable consumer marketplaces and neobanks.
            </p>

            <div className="grid grid-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Ecommerce", "Marketplaces", "Subscription Platforms", "Digital Goods Platforms", "Fintechs", "Payment Processors",
                "Buy Now Pay Later Providers", "Food Delivery Platforms", "Travel Platforms", "Telecom Platforms", "Gaming Platforms", "Streaming Services"
              ].map((ind, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-2">
                  <Building2 className="w-4 h-4 text-indigo-500" />
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
                Explainable, Secure, and Audit-Ready
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense minimizes exposure to sensitive payment and identity data using tokenized and hashed architectures.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Dispute Decisions", desc: "Every customer risk decision includes reason codes, evidence trails, and behavioral indicators." },
                { title: "Audit Logging", desc: "Track analyst actions, dispute decisions, refund interventions, and rule changes." },
                { title: "Multi-Tenant Security", desc: "Secure isolation across merchants, payment ecosystems, and workflows." },
                { title: "Privacy-Conscious Intel", desc: "Minimize exposure to card data using tokenized and hashed architectures." },
                { title: "Flexible Deployment", desc: "Deploy via SaaS, private cloud, hybrid, or on-premise." }
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col gap-3 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500" />
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Dispute FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is friendly fraud?", 
                  a: "Friendly fraud occurs when legitimate customers intentionally abuse payment systems, refunds, subscriptions, or chargeback processes." 
                },
                { 
                  q: "Can DeepSense detect refund abuse?", 
                  a: "Yes. DeepSense analyzes refund velocity, linked accounts, customer trust behavior, and policy exploitation indicators." 
                },
                { 
                  q: "Does DeepSense support representment workflows?", 
                  a: "Yes. The platform supports evidence collection, dispute timelines, transaction analytics, and case-based representment preparation." 
                },
                { 
                  q: "Can the platform detect multi-account abuse?", 
                  a: "Yes. DeepSense uses graph intelligence, device fingerprinting, and behavioral analytics to detect linked abusive accounts." 
                },
                { 
                  q: "Does DeepSense support digital goods fraud detection?", 
                  a: "Yes. The platform analyzes digital access telemetry, entitlement usage, session activity, and post-consumption disputes." 
                },
                { 
                  q: "Can DeepSense integrate with payment providers?", 
                  a: "Yes. DeepSense supports APIs, webhooks, payment processor integrations, and event-driven ingestion pipelines." 
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-indigo-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-indigo-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase">Protect Revenue and Reduce Chargeback Losses</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Detect friendly fraud, stop refund abuse, <br />
                <span className="text-white/40 font-bold">and protect digital commerce ecosystems.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Detect friendly fraud, stop refund abuse, strengthen dispute intelligence, and protect digital commerce ecosystems with real-time behavioral and transaction risk analytics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/dispute-intelligence" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Dispute Intelligence
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
