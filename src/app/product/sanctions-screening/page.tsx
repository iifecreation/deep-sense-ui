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
  FileSpreadsheet,
  FileText,
  Search,
  RefreshCw,
  Scale
} from "lucide-react";

export default function SanctionsScreeningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive match dashboard mockup states
  const [matchType, setMatchType] = useState<string>("potential");
  const [matchConfidence, setMatchConfidence] = useState<number>(87);
  const [decisionNotes, setDecisionNotes] = useState<string>("WAITING_FOR_REVIEWER_ACTION");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleDecisionChange = (type: string) => {
    setMatchType(type);
    if (type === "confirmed") {
      setMatchConfidence(99);
      setDecisionNotes("CONFIRMED_MATCH (OFAC Sanctions List Sync Triggered)");
    } else if (type === "false_positive") {
      setMatchConfidence(12);
      setDecisionNotes("FALSE_POSITIVE (DOB & Nationality Mismatch - Suppressed)");
    } else {
      setMatchConfidence(87);
      setDecisionNotes("ESCALATED (Pending Senior Compliance review)");
    }
  };

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
                <Globe className="w-3.5 h-3.5 text-lime-400" />
                Global Sanctions & Watchlist Screening
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Screen Customers, Counterparties, Vendors, <br />
                <span className="text-zinc-400">and Transactions Against Global Risk Lists.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense screens identities, documents, payments, merchants, vendors, beneficiaries, and counterparties against sanctions, watchlists, aliases, high-risk entities, and organization-specific risk lists with explainable match scoring.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/aml-monitoring" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore AML Monitoring
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Built for banks, fintechs, payment providers, crypto platforms, marketplaces, procurement teams, and regulated enterprises.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive Sanctions Screening Match Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">SANCTIONS MATCH DIAGNOSTICS CONTROL</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">WATCHLIST SOURCE: OFAC / EU CONSOLIDATED</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Target matched parameters */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Screening Entity Profile</span>
                    
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                      <div>
                        <span className="text-zinc-500 block">SUBMITTED IDENTITY</span>
                        <span className="text-white font-bold">Alexander Smirnov (DOB: 12-05-1981)</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">MATCHED SANCTIONS ALIAS</span>
                        <span className="text-white font-bold">Aleksandr Smirnov (PEP Category 1)</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">COUNTRY / REGISTRY MATCH</span>
                        <span className="text-red-400 font-bold">OFAC_SDN_RUSSIA (Fuzzy score 87%)</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[
                        { id: "confirmed", label: "Confirm Sanctions SDN Match" },
                        { id: "false_positive", label: "Resolve as False Positive (DOB mismatch)" },
                        { id: "escalate", label: "Escalate to EDD Case Triage" }
                      ].map((act) => (
                        <div 
                          key={act.id}
                          onClick={() => handleDecisionChange(act.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            matchType === act.id 
                              ? "bg-red-500/10 border-red-500 text-white" 
                              : "bg-black/40 border-white/5 text-zinc-400 hover:border-white/10"
                          }`}
                        >
                          <span className="text-[10px] font-bold font-manrope">{act.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Confidence metrics & decision panel */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start pb-4 border-b border-white/5">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Explainable Match Confidence</span>
                          <h4 className="text-4xl md:text-5xl font-black italic tracking-tighter text-red-500 animate-pulse mt-1">
                            {matchConfidence}% Match
                          </h4>
                        </div>
                        <span className="text-zinc-500 text-[10px] font-mono">AUDIT: {decisionNotes}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-zinc-400">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Name Similarity Score</span>
                          <span className="text-red-400 font-bold">94% (Fuzzy Transliteration)</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Date of Birth Match</span>
                          <span className={matchType === "false_positive" ? "text-red-400 font-bold" : "text-brand-lime font-bold"}>
                            {matchType === "false_positive" ? "MISMATCH (1984 vs 1981)" : "PARTIAL_MATCH"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Nationality / Address Match</span>
                          <span className="text-brand-lime font-bold">PASSED (Russian Fed check)</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Watchlist Freshness</span>
                          <span className="text-brand-lime font-bold">Fresh (Synced 4 mins ago)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-white/5 mt-6">
                      <button className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-600 transition-all text-center">
                        Enforce Sanctions Block
                      </button>
                      <button className="flex-1 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                        Add Review Note & Resolve
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Compliance Gaps</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Sanctions Risk Can Appear Anywhere in the Customer Lifecycle.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Restricted parties can enter through onboarding, payments, vendors, beneficiaries, merchants, documents, wallets, or third-party relationships. Screening only at onboarding is no longer enough.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fragmented Screening", desc: "Customer, transaction, vendor, and document screening often happen in separate workflows with inconsistent results.", icon: <Layers /> },
                { title: "False Positives", desc: "Weak matching creates excessive alerts and slows compliance teams.", icon: <AlertTriangle /> },
                { title: "Alias Complexity", desc: "Sanctioned individuals and entities may appear under multiple names, spellings, aliases, or transliterations.", icon: <Users /> },
                { title: "List Freshness", desc: "Outdated sanctions lists create regulatory exposure and missed matches.", icon: <Clock /> },
                { title: "Limited Context", desc: "Screening alerts without transaction, graph, document, or customer history are difficult to resolve.", icon: <Fingerprint /> },
                { title: "Audit Pressure", desc: "Regulated organizations need clear evidence for every screening decision and false-positive resolution.", icon: <Lock /> }
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

        {/* ================= SECTION 3: DEEPSENSE SANCTIONS SCREENING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Cross-Channel Screening</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Screen Risk Across Customers, Payments, Vendors, Documents, and Transactions.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense embeds sanctions screening into onboarding, transaction monitoring, document verification, procurement workflows, and case management so restricted-party exposure is detected wherever it appears.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Customer Screening", desc: "Screen individuals and entities during onboarding, periodic review, or ongoing monitoring." },
                { title: "Transaction Screening", desc: "Screen counterparties, beneficiaries, payment metadata, countries, and transaction parties before funds move." },
                { title: "Document-Based Screening", desc: "Screen extracted document fields such as name, date of birth, nationality, address, and document number." },
                { title: "Vendor Screening", desc: "Screen suppliers, merchants, procurement vendors, and third-party organizations before approval or payment." },
                { title: "Beneficiary Screening", desc: "Identify risky recipients, payout destinations, linked bank accounts, and suspicious counterparties." },
                { title: "Internal Watchlists", desc: "Allow organizations to upload and manage their own blocked, monitored, or high-risk entities." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: GLOBAL LIST COVERAGE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Watchlist Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Global and Organization-Specific Screening Coverage.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense supports global sanctions sources and organization-specific watchlists for flexible compliance workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "OFAC Watchlist", desc: "Screen against U.S. sanctions programs and restricted-party data." },
                { title: "United Nations list", desc: "Support UN sanctions screening across global regulatory contexts." },
                { title: "European Union list", desc: "Screen against EU financial sanctions and restricted entities." },
                { title: "UK OFSI / HMT Hashed", desc: "Support UK financial sanctions list coverage." },
                { title: "OpenSanctions sync", desc: "Use consolidated open-source risk intelligence where configured." },
                { title: "Internal Watchlists", desc: "Upload organization-specific blocked, monitored, or high-risk people and entities." },
                { title: "Local / Country Lists", desc: "Support local or jurisdiction-specific lists where configured or uploaded." },
                { title: "High-Risk Countries", desc: "Combine sanctions screening with jurisdiction and country-risk policies." }
              ].map((src, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <span className="text-xs font-black text-brand-lime font-mono block">SOURCE {idx+1}</span>
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{src.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{src.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: MATCHING QUALITY ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Structured Matching</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Reduce False Positives With Explainable Match Scoring.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense uses structured matching logic to help teams distinguish true risk from noisy alerts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Exact Name Matching", desc: "Identify direct matches against sanctioned individuals and entities." },
                { title: "Fuzzy Name Matching", desc: "Detect spelling variations, transliteration differences, and partial name similarities." },
                { title: "Alias Match tracking", desc: "Match against known aliases, alternate names, and associated identities." },
                { title: "Date of Birth checking", desc: "Use DOB or year-of-birth evidence to improve confidence." },
                { title: "Nationality Compare", desc: "Compare nationality, residence country, issuing country, and transaction country." },
                { title: "Document ID checking", desc: "Use passport numbers, document IDs, tax IDs, and other identifiers." },
                { title: "Structured Entity match", desc: "Screen companies, organizations, vessels, wallets, and structured entities." },
                { title: "Confidence Scoring system", desc: "Generate match confidence, reason codes, matched fields, and evidence explanations." }
              ].map((chk, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{chk.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{chk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: SCREENING WORKFLOW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Structured Pipeline</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              From Screening Request to Compliance Decision.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense turns screening results into structured compliance workflows with evidence, review queues, and audit trails.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "1. Submit Entity", desc: "Screen a customer, vendor, beneficiary, counterparty, document identity, or transaction party." },
                { title: "2. Normalize Data", desc: "Clean names, countries, identifiers, aliases, and document attributes." },
                { title: "3. Match Against Sources", desc: "Compare against global sanctions lists, internal watchlists, and configured local lists." },
                { title: "4. Score Confidence", desc: "Calculate match confidence based on names, aliases, DOB, nationality, and other identifiers." },
                { title: "5. Resolve Result", desc: "Return clear, possible match, strong match, confirmed match, or false positive." },
                { title: "6. Create Case", desc: "Escalate high-risk matches into compliance cases with evidence attached." },
                { title: "7. Audit Decision", desc: "Preserve match details, resolution decisions, reviewer notes, and audit history." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{step.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: ONGOING MONITORING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Rescreening Engines</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Keep Screening Current as Lists and Customers Change.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Sanctions exposure is not static. DeepSense supports ongoing monitoring so customers, vendors, and counterparties can be re-screened as lists update or risk changes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Dynamic List Sync", desc: "Refresh sanctions and watchlist data automatically from configured sources." },
                { title: "Customer Rescreening", desc: "Re-screen existing customers when lists update or risk profiles change." },
                { title: "Transaction Rescreening", desc: "Re-evaluate transactions and counterparties when new risk data becomes available." },
                { title: "Vendor Rescreening", desc: "Monitor suppliers, merchants, and procurement vendors for changing sanctions exposure." },
                { title: "Freshness Monitoring logs", desc: "Track list freshness, sync failures, and stale data risk." },
                { title: "Change Detection tracking", desc: "Identify newly added, removed, or updated sanctions entries." }
              ].map((feat, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{feat.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: FALSE-POSITIVE RESOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Noise Reduction</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Resolve Matches Faster Without Losing Auditability.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense helps compliance teams reduce noise while preserving complete records of match review and resolution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Marked Resolution Workflow", desc: "Mark matches as confirmed, false positive, needs review, or escalated." },
                { title: "Reviewer Notes capture", desc: "Capture analyst rationale and supporting evidence immutably." },
                { title: "Suppression Rules engine", desc: "Suppress repeated false positives when justified and approved." },
                { title: "Evidence Retention storage", desc: "Store matched fields, source list details, confidence scores, and decision history." },
                { title: "Reviewer Escalation", desc: "Escalate unresolved or high-risk matches to senior compliance reviewers." },
                { title: "Audit History logging", desc: "Maintain a complete record of screening decisions and analyst actions." }
              ].map((val, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{val.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: SCREENING IN REAL-TIME DECISIONS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Real-time Actions</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Use Screening Results Inside Real-Time Risk Decisions.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense does not treat sanctions screening as a separate compliance silo. Screening results can directly influence onboarding, payments, transactions, vendors, and customer risk scores.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Onboarding block", desc: "Block, review, or escalate applicants with sanctions or watchlist exposure." },
                { title: "Transaction limits", desc: "Hold or block payments involving restricted counterparties." },
                { title: "Vendor approvals", desc: "Prevent procurement payments to sanctioned suppliers." },
                { title: "Extracted Doc checking", desc: "Screen extracted identity fields from uploaded passport or license photos." },
                { title: "Customer Risk Tiers", desc: "Update customer risk tiers based on screening exposure." },
                { title: "Case Auto-Creation", desc: "Create compliance cases automatically for high-confidence matches." }
              ].map((dec, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{dec.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{dec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: CASE MANAGEMENT & EVIDENCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Compliance Evidence</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Investigate Screening Matches With Full Context.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense provides investigators with the evidence needed to resolve sanctions and watchlist alerts efficiently.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Matched Entity Details", desc: "Map exact matches, Dob, nationalities, and watchlist sources." },
                    { title: "Transaction & Graph Context", desc: "Correlate transaction volume and connected counterparties." },
                    { title: "Resolution control workflows", desc: "Enforce four-eye approvals before resolving or suppressing matches." }
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

              {/* Right Column: Visual Case Timeline Mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">SANCTIONS CASE DETAIL</span>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between items-center text-white/55 border-b border-white/5 pb-2">
                      <span>Target: SDN List Hit</span>
                      <span className="text-red-400 font-bold">MATCH_CONFIRMED</span>
                    </div>
                    <div className="flex justify-between items-center text-white/55">
                      <span>Confidence score</span>
                      <span className="text-red-400 font-bold">99% (Fuzzy name check)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: INTEGRATION WITH DEEPSENSE PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Unified Risk Portal</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Connected to AML, KYC, Fraud, Vendor Risk, and Regulatory Reporting.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Sanctions screening becomes more valuable when connected to the full DeepSense risk ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "AML Monitoring Integration", desc: "Screening results contribute to AML alerts, customer risk, and suspicious activity reviews." },
                { title: "KYC & Document Fraud feeds", desc: "Extracted identity fields are screened during onboarding and document verification." },
                { title: "Fraud Detection context", desc: "Sanctions and watchlist matches contribute directly to transaction risk scoring." },
                { title: "Procurement Risk screening", desc: "Vendors and suppliers can be screened before approval or payment." },
                { title: "Graph Intelligence networks", desc: "Relationships to restricted entities can increase risk across connected networks." },
                { title: "Regulatory Reporting flows", desc: "Screening matches can feed FinCEN SAR/STR workflows and compliance reports." }
              ].map((int, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{int.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Sectors</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Sanctions Screening Across Regulated Industries.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Banking", desc: "Screen customers, counterparties, beneficiaries, vendors, and transactions." },
                { title: "Fintech", desc: "Embed sanctions checks into onboarding, payments, wallets, and customer monitoring." },
                { title: "Payments", desc: "Screen merchants, payout destinations, terminals, and transaction parties." },
                { title: "Crypto & Web3", desc: "Screen customers, wallets, counterparties, and high-risk transaction exposure." },
                { title: "Procurement & Enterprise", desc: "Screen vendors, suppliers, third parties, and procurement payment flows." },
                { title: "Marketplaces", desc: "Screen sellers, buyers, merchants, payout accounts, and business entities." }
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
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Compliance Governance</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Built for Compliance Teams and Regulated Environments.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for organizations that require explainable sanctions decisions, reliable list freshness, and audit-ready compliance evidence.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Role-based access", "Tenant isolation", "Audit logging", "List sync history",
                "Evidence retention", "Resolution approvals", "Data encryption", "On-prem deploy",
                "Private cloud support"
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Sanctions FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What sanctions lists does DeepSense support?", 
                  a: "DeepSense supports OFAC, UN, EU, UK OFSI/HMT, OpenSanctions, internal watchlists, and configurable local or organization-specific lists." 
                },
                { 
                  q: "Can DeepSense screen transactions?", 
                  a: "Yes. DeepSense can screen transaction parties, counterparties, beneficiaries, merchants, vendors, and payment metadata." 
                },
                { 
                  q: "Does DeepSense support fuzzy matching?", 
                  a: "Yes. DeepSense supports fuzzy name matching, alias matching, DOB matching, nationality matching, document matching, and confidence scoring." 
                },
                { 
                  q: "Can organizations upload their own watchlists?", 
                  a: "Yes. Organizations can manage internal watchlists for blocked, monitored, or high-risk entities." 
                },
                { 
                  q: "Can screening results create cases?", 
                  a: "Yes. High-risk matches can automatically create compliance cases with evidence attached." 
                },
                { 
                  q: "Does DeepSense support ongoing monitoring?", 
                  a: "Yes. Customers, vendors, counterparties, and transactions can be re-screened as lists update or risk changes." 
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest font-bold">Ready to strengthen sanctions compliance?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Screen risk everywhere it <br />
                <span className="text-white/40">enters your business operations.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                DeepSense helps organizations screen customers, transactions, vendors, documents, and counterparties with explainable matching, workflow automation, and audit-ready evidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/pep-screening" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore PEP Screening
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
