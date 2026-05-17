"use client";

import React, { useState, useEffect } from "react";
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
  Wallet,
  History,
  TrendingDown,
  Clock,
  FileSpreadsheet
} from "lucide-react";

export default function GraphIntelligencePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive graph demo state
  const [selectedNode, setSelectedNode] = useState<string>("Card-1");
  const [graphRiskScore, setGraphRiskScore] = useState<number>(94);
  const [propagationStep, setPropagationStep] = useState<number>(1);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Node data for the interactive mockup
  const nodes = [
    { id: "Account-1", label: "Bank Account (Mule)", type: "account", risk: "high", x: "20%", y: "30%" },
    { id: "Device-1", label: "Rooted Phone", type: "device", risk: "high", x: "40%", y: "20%" },
    { id: "IP-1", label: "TOR Egress IP", type: "ip", risk: "high", x: "50%", y: "55%" },
    { id: "Card-1", label: "CNP Card Target", type: "card", risk: "critical", x: "70%", y: "40%" },
    { id: "Identity-1", label: "Synthetic ID Check", type: "identity", risk: "medium", x: "85%", y: "70%" },
  ];

  const handleNodeClick = (nodeId: string, riskStr: string) => {
    setSelectedNode(nodeId);
    if (riskStr === "critical") setGraphRiskScore(98);
    else if (riskStr === "high") setGraphRiskScore(89);
    else setGraphRiskScore(62);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPropagationStep((prev) => (prev % 3) + 1);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-white">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative pt-40 pb-28 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-gray-100 bg-white">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-16 relative z-10">
            {/* Headers */}
            <div className="flex flex-col gap-6 items-center max-w-[950px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-lime-400 text-[11px] font-extrabold uppercase tracking-widest shadow-xl shadow-neutral-900/10">
                <Network className="w-3.5 h-3.5 text-lime-400" />
                Connected Entity & Fraud Ring Intelligence
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Reveal Hidden Fraud Networks Across <br />
                <span className="text-zinc-400">Accounts, Devices, Payments, and Identities.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense connects transactions, devices, wallets, documents, beneficiaries, merchants, vendors, sessions, terminals, and identities to uncover fraud rings, mule networks, coordinated abuse, and hidden financial crime patterns.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/fraud-detection" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Fraud Detection
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Built for institutions that need connected intelligence beyond rule-based detection.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive Dark Mode Fraud Graph Visualization */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">REAL-TIME RISK PROPAGATION & FRAUD RING GRAPH</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">SCANNED ENTITIES: 184k • ALERTS: 9</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive Node Map Canvas */}
                  <div className="lg:col-span-8 bg-black/60 border border-white/5 p-8 rounded-3xl min-h-[380px] relative overflow-hidden flex flex-col justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 block mb-4">Click Nodes to Propagate Entity Proximity Scores</span>
                    
                    {/* SVG Links Drawing Background */}
                    <div className="absolute inset-0 pointer-events-none">
                      <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                        <line x1="20%" y1="30%" x2="40%" y2="20%" stroke="#e11d48" strokeWidth="2.5" />
                        <line x1="40%" y1="20%" x2="50%" y2="55%" stroke="#e11d48" strokeWidth="2.5" />
                        <line x1="50%" y1="55%" x2="70%" y2="40%" stroke="#e11d48" strokeWidth="2.5" />
                        <line x1="70%" y1="40%" x2="85%" y2="70%" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" />
                      </svg>
                    </div>

                    {/* Render Interactive Nodes */}
                    <div className="relative w-full h-[220px]">
                      {nodes.map((node) => {
                        const isSelected = selectedNode === node.id;
                        return (
                          <div 
                            key={node.id} 
                            onClick={() => handleNodeClick(node.id, node.risk)}
                            className="absolute cursor-pointer flex flex-col items-center gap-1.5 transition-all duration-300"
                            style={{ left: node.x, top: node.y }}
                          >
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all hover:scale-115 ${
                              isSelected 
                                ? "bg-red-500 border-white shadow-xl scale-110" 
                                : node.risk === "critical"
                                ? "bg-red-950 border-red-500 text-red-400"
                                : node.risk === "high"
                                ? "bg-amber-950 border-amber-500 text-amber-400"
                                : "bg-neutral-900 border-neutral-700 text-zinc-400"
                            }`}>
                              <Network className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] font-mono bg-black/80 px-2 py-0.5 rounded border border-white/5 whitespace-nowrap text-zinc-300">
                              {node.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="text-[10px] text-zinc-500 font-mono flex justify-between items-center pt-4 border-t border-white/5">
                      <span>* Real-time traversal detects shared emulators, document checksum re-use, and instant transfers.</span>
                    </div>
                  </div>

                  {/* Right Column: Node Details & Action Context */}
                  <div className="lg:col-span-4 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Threat Score Insights</span>
                      
                      <div className="my-2 space-y-2">
                        <span className="text-4xl md:text-5xl font-black italic tracking-tighter text-red-500 animate-pulse">
                          {graphRiskScore}/100 Risk
                        </span>
                        <span className="block text-zinc-400 text-[10px] uppercase tracking-wider">
                          CONNECTED THREAT PROXIMITY INDEX
                        </span>
                      </div>

                      <div className="p-4 bg-black/40 border border-white/5 rounded-2xl text-xs space-y-3 font-mono">
                        <div className="flex justify-between">
                          <span className="text-white/60">Selected Node</span>
                          <span className="text-white font-bold">{selectedNode}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Calculated Path</span>
                          <span className="text-red-400 font-bold">3 Degrees of Separation</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Confidence Level</span>
                          <span className="text-brand-lime font-bold">98% High Proximity</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-white/5">
                      <button className="w-full py-3 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-600 transition-all text-center">
                        Auto-Block Coordinated Ring
                      </button>
                      <button className="w-full py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                        Escalate to Graph Workspace
                      </button>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">The Network Threat</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Fraudsters Operate as Networks, Not Individuals.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Traditional fraud systems evaluate transactions and accounts independently. Modern fraud operations coordinate activity across multiple entities, making isolated analysis ineffective.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Mule Networks", desc: "Fraudsters distribute money across linked accounts and beneficiaries to obscure movement patterns.", icon: <Network /> },
                { title: "Multi-Accounting", desc: "Criminals create clusters of accounts connected through devices, documents, wallets, IPs, or payment instruments.", icon: <Users /> },
                { title: "Fraud Rings", desc: "Coordinated groups abuse onboarding, payments, referrals, merchants, or promotions together.", icon: <Shield /> },
                { title: "Hidden Relationships", desc: "Shared infrastructure and suspicious connections remain invisible in non-graph systems.", icon: <Layers /> },
                { title: "Layered Financial Crime", desc: "AML activity, account takeover, document fraud, and payment fraud often overlap across the same network.", icon: <AlertTriangle /> },
                { title: "Investigation Complexity", desc: "Analysts waste time manually piecing together relationships across disconnected tools.", icon: <Clock /> }
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

        {/* ================= SECTION 3: DEEPSENSE GRAPH INTELLIGENCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Synthesis Engine</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              DeepSense Turns Isolated Events Into Connected Intelligence.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense continuously builds relationship graphs across entities, enabling organizations to detect suspicious connections, hidden risk concentration, and coordinated abuse in real time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Fraud Ring Detection", desc: "Identify coordinated groups operating across linked accounts, devices, merchants, wallets, terminals, or beneficiaries." },
                { title: "Mule Network Detection", desc: "Detect pass-through accounts, suspicious fund movement chains, and layered transfer activity." },
                { title: "Identity Linkage", desc: "Connect customers through shared identities, documents, biometrics, addresses, or onboarding patterns." },
                { title: "Shared Device Analysis", desc: "Reveal risky devices used across multiple accounts, sessions, or onboarding attempts." },
                { title: "Merchant & Vendor Intelligence", desc: "Identify suspicious merchant clusters, vendor collusion, invoice fraud, and coordinated payment abuse." },
                { title: "Wallet & Token Analysis", desc: "Track wallet farms, token replay abuse, NFC fraud relationships, and contactless payment risk." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: CONNECTED ENTITY TYPES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Entities Stack</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Connect Every Risk Entity Across the Platform.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense builds graph relationships across fraud, AML, onboarding, payments, procurement, and enterprise risk domains.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Accounts", desc: "Customer accounts, merchants, vendors, employees, and counterparties.", icon: <Building2 /> },
                { title: "Devices", desc: "Mobile devices, browsers, terminals, emulators, rooted devices, and fingerprinted sessions.", icon: <Smartphone /> },
                { title: "Wallets & Tokens", desc: "Digital wallets, tokenized cards, payment instruments, and NFC identifiers.", icon: <Wallet /> },
                { title: "Documents", desc: "Passports, IDs, invoices, utility bills, onboarding documents, and proof-of-address records.", icon: <FileCheck /> },
                { title: "Transactions", desc: "Transfers, purchases, withdrawals, payouts, wallet events, and payment flows.", icon: <Zap /> },
                { title: "Beneficiaries", desc: "Recipients, payout destinations, linked bank accounts, and suspicious payment targets.", icon: <Users /> },
                { title: "Merchants & Vendors", desc: "Merchant IDs, terminals, invoice flows, procurement entities, and supplier networks.", icon: <Briefcase /> },
                { title: "IPs & Sessions", desc: "Shared IPs, VPNs, TOR usage, session behavior, and login infrastructure.", icon: <Globe /> }
              ].map((ent, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[32px] flex flex-col gap-4 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-neutral-900 border border-zinc-100 shadow-xs">
                    {ent.icon}
                  </div>
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{ent.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ent.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: FRAUD RING DETECTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Coordinated Rings</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Detect Coordinated Fraud Rings Automatically.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense identifies suspicious clusters using connected-entity analysis, relationship scoring, and graph traversal algorithms.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Multi-Account Abuse", desc: "Multiple accounts linked through shared devices, IPs, wallets, or documents." },
                    { title: "Referral Fraud Rings", desc: "Coordinated bonus abuse and self-referral schemes across connected identities." },
                    { title: "Synthetic Identity Clusters", desc: "Groups of identities sharing overlapping onboarding signals and suspicious infrastructure." }
                  ].map((ex, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-12 bg-zinc-100 group-hover:bg-brand-lime transition-all duration-300 rounded-full" />
                      <div>
                        <span className="text-xs font-bold text-neutral-950 font-manrope block">{ex.title}</span>
                        <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{ex.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Fraud ring cluster visualization mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">GRAPH HEURISTIC SCORING ENGINE</span>
                  
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-between text-mono">
                    <div>
                      <span className="text-red-400 font-black block text-[10px]">SUSPICIOUS RING CLUSTER IDENTIFIED</span>
                      <span className="text-white text-xs font-bold">Cluster ID: FR-0810 (6 Connected Nodes)</span>
                    </div>
                    <span className="px-2 py-0.5 bg-red-500/20 border border-red-500/40 text-red-400 text-[8px] font-black rounded uppercase">CRITICAL</span>
                  </div>

                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between">
                      <span>Shared Mobile Emulator ID</span>
                      <span className="text-white font-bold">EMU-8910 (Linked)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shared Identity MRZ Passport Checksum</span>
                      <span className="text-white font-bold">MRZ-7711 (Linked)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shared Web Session ID</span>
                      <span className="text-white font-bold">SES-9081 (Linked)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: GRAPH INVESTIGATION WORKFLOW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Investigation Center</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Investigate Relationships Visually.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense allows analysts to navigate graph relationships interactively and understand how entities connect across fraud events.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Start With an Alert", desc: "Open a suspicious transaction, onboarding attempt, or fraud case." },
                { title: "Expand Relationships", desc: "Reveal connected accounts, devices, wallets, beneficiaries, merchants, or identities." },
                { title: "Explore Paths", desc: "Trace shortest paths and suspicious transfer chains between entities." },
                { title: "Analyze Clusters", desc: "Identify concentrated risk, suspicious network communities, and coordinated activity." },
                { title: "Attach Evidence", desc: "Add graph snapshots and evidence directly into investigations and regulatory reports." },
                { title: "Escalate Cases", desc: "Create fraud, AML, procurement, or compliance investigations automatically based on threat propagation." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <span className="text-xs font-black text-brand-lime font-mono block">STEP 0{idx+1}</span>
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{step.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: AML & FINANCIAL CRIME GRAPH ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Graph-Powered AML</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Graph-Powered AML Intelligence.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense uses graph analytics to uncover money laundering patterns that are difficult to detect through isolated transaction monitoring.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Pass-Through Accounts", desc: "Detect accounts rapidly receiving and forwarding funds to obscure origins." },
                    { title: "Layering Detection", desc: "Identify suspicious transfer chains designed to break audit trails." },
                    { title: "High-Risk Network Proximity", desc: "Propagate sanctions, PEP, or adverse-media exposure through connected entities." }
                  ].map((aml, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-12 bg-zinc-100 group-hover:bg-brand-lime transition-all duration-300 rounded-full" />
                      <div>
                        <span className="text-xs font-bold text-neutral-950 font-manrope block">{aml.title}</span>
                        <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{aml.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: AML money routing visualization mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/15 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">AML MONEY LAUNDERING TRAJECTORY</span>
                  
                  <div className="flex flex-col gap-3 font-mono text-[10px]">
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between">
                      <span className="text-white/80">Origin: High-Risk Region Wallet</span>
                      <span className="text-amber-400 font-bold">$148,000 Inflow</span>
                    </div>
                    
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between">
                      <span className="text-white/80">Layer 1: 4 Linked Bank Accounts</span>
                      <span className="text-red-400 font-bold">Split Structuring</span>
                    </div>

                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-between">
                      <span className="text-red-400 font-black">Destination: Sanctioned Wallet Endpoint</span>
                      <span className="text-red-400 font-black">MATCH DETECTED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: REAL-TIME RISK PROPAGATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Threat Proximity</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Risk Spreads Across Connected Entities.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense propagates risk signals across connected entities to reveal hidden exposure before losses escalate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Shared Device Risk propagation", desc: "A compromised device automatically increases the threat level of linked accounts." },
                { title: "Sanctions Exposure propagation", desc: "Direct or indirect links to sanctioned beneficiaries inflate downstream transfer score check flags." },
                { title: "Fraud Ring Propagation", desc: "Unverified accounts inheriting threat factors from historical linked fraudulent entities." },
                { title: "Beneficiary Exposure Analysis", desc: "Payout targets influencing transaction risk bands dynamically based on linked networks." },
                { title: "Merchant Fraud Proximity", desc: "Corrupt terminal linkages propagating transaction scores down to associated user checkout events." }
              ].map((prop, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{prop.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{prop.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: GRAPH ANALYTICS ENGINE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Advanced Graph Analytics for Fraud and AML.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Shortest Path Analysis", desc: "Reveal indirect links between suspicious entities across degrees of separation." },
                { title: "Relationship Scoring", desc: "Measure connection strength, frequency of communication, and suspicious proximity indicators." },
                { title: "Community Cluster Detection", desc: "Automatically partition large graphs to identify fraud communities and rings." },
                { title: "Temporal Graph Tracking", desc: "Analyze how entity relationships evolve and morph historically to prevent transaction structuring." },
                { title: "Connected Risk Ranking", desc: "Rank and prioritize entities according to their threat propagation factor." },
                { title: "Cross-Domain Identity Synthesis", desc: "Unify signals from fraud rules, device footprints, documents, and payments into one graph." }
              ].map((engine, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{engine.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{engine.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: REAL-TIME DECISION INTEGRATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Inline Enforcement</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Graph Intelligence Integrated Into Real-Time Decisions.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Graph risk contributes directly to transaction scoring, onboarding decisions, AML monitoring, and fraud prevention workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Transaction Scoring", desc: "Block transfers linked to mule networks or suspicious beneficiaries." },
                { title: "Onboarding Risk Analysis", desc: "Detect applicants connected to duplicate identities or known fraud clusters." },
                { title: "Session Risk Enforcement", desc: "Identify accounts linked to compromised mobile device infrastructure." },
                { title: "Payment Gateways Risk Check", desc: "Analyze merchant and terminal relationships in under 100ms during authorization." },
                { title: "Procurement Collusion Checks", desc: "Reveal suspicious vendor relationships and invoice abuse dynamically." }
              ].map((useCase, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{useCase.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: ANALYST EXPERIENCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Workspace Experience</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Designed for Fraud, AML, and Risk Investigators.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense provides investigators with a visual relationship workspace that simplifies complex investigations.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Interactive Graph Exploration", desc: "Expand nodes and relationships visually to view linked elements." },
                    { title: "Dynamic Entity Timelines", desc: "Track how connections evolve over time through replay steps." },
                    { title: "Case evidence integration", desc: "Attach graph snapshots and evidence directly into case management notes." }
                  ].map((feat, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-12 bg-zinc-100 group-hover:bg-brand-lime transition-all duration-300 rounded-full" />
                      <div>
                        <span className="text-xs font-bold text-neutral-950 font-manrope block">{feat.title}</span>
                        <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual timeline/graph explorer dashboard mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">ANALYST GRAPH EXPLORER WORKSPACE</span>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-3 font-mono text-[10px]">
                    <div className="flex justify-between items-center text-white/55 border-b border-white/5 pb-2">
                      <span>Node Identity: ACC-8104</span>
                      <span className="text-brand-lime font-bold">12 Linked Devices</span>
                    </div>
                    <div className="flex justify-between items-center text-white/55">
                      <span>Active Triage Analyst</span>
                      <span className="text-white">Sarah Jenkins (Compliance Lead)</span>
                    </div>
                    <div className="flex justify-between items-center text-white/55">
                      <span>SAR Filing Attachment</span>
                      <span className="px-2 py-0.5 bg-brand-lime/10 border border-brand-lime/20 text-brand-lime text-[8px] font-black rounded uppercase">Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Industry Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Connected Intelligence Across Every High-Risk Industry.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Banking", desc: "Detect mule accounts, layering, suspicious beneficiaries, and coordinated fraud rings." },
                { title: "Fintech", desc: "Uncover multi-account abuse, onboarding fraud, referral loops, and wallet networks." },
                { title: "Payments", desc: "Analyze merchant relationships, terminal fraud, token replay, and chargeback clusters." },
                { title: "Crypto & Web3", desc: "Monitor wallet networks, sanctions exposure, mixing behavior, and suspicious transfer paths." },
                { title: "Gaming & Betting", desc: "Identify bonus abuse rings, coordinated player collusion, and synthetic IDs." },
                { title: "Procurement & Enterprise Risk", desc: "Reveal vendor collusion, invoice fraud, third-party risk, and UEBA anomalies." }
              ].map((ind, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 hover:shadow-xl hover:border-brand-lime/20 transition-all duration-300">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 13: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Enterprise Trust</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Enterprise-Grade Graph Intelligence Infrastructure.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for regulated institutions requiring explainable investigations and auditable relationship intelligence.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Multi-tenant isolation", "Role-based access", "Audit logging", "Case-linked evidence",
                "Secure graph exploration", "Graph segmentation", "On-prem deployment", "Private cloud support"
              ].map((sec, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                  <span className="text-[10px] font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 14: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Graph FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What entities can DeepSense connect?", 
                  a: "DeepSense can connect accounts, devices, wallets, beneficiaries, merchants, vendors, documents, sessions, terminals, IPs, and transactions." 
                },
                { 
                  q: "Can DeepSense detect fraud rings?", 
                  a: "Yes. DeepSense identifies suspicious clusters and coordinated activity using graph analytics and relationship scoring." 
                },
                { 
                  q: "Does graph intelligence contribute to risk scoring?", 
                  a: "Yes. Graph risk directly contributes to fraud scoring, AML monitoring, onboarding risk, and payment decisions." 
                },
                { 
                  q: "Can analysts investigate graph relationships visually?", 
                  a: "Yes. Analysts can explore connected entities interactively and attach graph evidence directly into cases." 
                },
                { 
                  q: "Does DeepSense support AML graph analysis?", 
                  a: "Yes. DeepSense supports pass-through detection, layering analysis, suspicious transfer chains, and beneficiary exposure analysis." 
                },
                { 
                  q: "Can DeepSense operate in real time?", 
                  a: "Yes. Graph intelligence integrates directly into real-time decision workflows." 
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-50/50 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest font-bold">Ready to uncover hidden fraud networks?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Turn disconnected fraud signals into <br />
                <span className="text-white/40">connected intelligence with DeepSense.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Reveal fraud rings, mule networks, shared infrastructure, suspicious relationships, and hidden exposure across your organization in real time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/case-management" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Case Management
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
