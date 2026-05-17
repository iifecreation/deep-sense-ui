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

export default function PepScreeningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive PEP profile simulator states
  const [activeTab, setActiveTab] = useState<string>("rca");
  const [matchScore, setMatchScore] = useState<number>(82);
  const [eddStatus, setEddStatus] = useState<string>("EDD_REVIEW_RECOMMENDED");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "rca") {
      setMatchScore(82);
      setEddStatus("EDD_REVIEW_RECOMMENDED (Spouse / Close Associate check)");
    } else if (tab === "media") {
      setMatchScore(94);
      setEddStatus("CRITICAL_RISK (PEP linked to corruption investigation)");
    } else {
      setMatchScore(45);
      setEddStatus("MONITORING (Former public official - low risk)");
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
                <Users className="w-3.5 h-3.5 text-lime-400" />
                PEP & High-Risk Customer Screening
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Identify Politically Exposed Persons and Escalate <br />
                <span className="text-zinc-400">High-Risk Customers With Confidence.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense screens customers, counterparties, vendors, documents, and entities for politically exposed person risk, relatives and close associates, adverse media, sanctions exposure, and enhanced due diligence requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/adverse-media" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Adverse Media Screening
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Built for banks, fintechs, crypto platforms, payment companies, lending platforms, procurement teams, and regulated compliance programs.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive PEP Screening Profile Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">PEP RISK PROFILE TRIAGE SYSTEM</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">STATUS: ACTIVE EDD AUDITING</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: PEP selectors */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Select PEP Exposure Vector</span>
                    
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                      <div>
                        <span className="text-zinc-500 block">SUBMITTED IDENTITY</span>
                        <span className="text-white font-bold text-xs">Viktor Petrov (DOB: 08-11-1976)</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">POLITICAL ROLE</span>
                        <span className="text-white">Senior Minister of Infrastructure (Active Country Level)</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[
                        { id: "rca", label: "Review RCA Connections (Spouse/Associate)" },
                        { id: "media", label: "Verify Adverse Media / Corruption check" },
                        { id: "former", label: "Demote to Former PEP (Residual risk only)" }
                      ].map((tab) => (
                        <div 
                          key={tab.id}
                          onClick={() => handleTabChange(tab.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            activeTab === tab.id 
                              ? "bg-brand-lime/10 border-brand-lime text-white" 
                              : "bg-black/40 border-white/5 text-zinc-400 hover:border-white/10"
                          }`}
                        >
                          <span className="text-[10px] font-bold font-manrope">{tab.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Dynamic EDD status & details */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start pb-4 border-b border-white/5">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Match Confidence Score</span>
                          <h4 className="text-4xl md:text-5xl font-black italic tracking-tighter text-red-500 animate-pulse mt-1">
                            {matchScore}% Match
                          </h4>
                        </div>
                        <span className="text-zinc-500 text-[10px] font-mono">EDD: {eddStatus}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-zinc-400">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Spouse / RCA Matches</span>
                          <span className={activeTab === "rca" ? "text-red-400 font-bold" : "text-brand-lime font-bold"}>
                            {activeTab === "rca" ? "DETECTED (1 close relation)" : "PASSED"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Corruption Allegations</span>
                          <span className={activeTab === "media" ? "text-red-400 font-bold" : "text-brand-lime font-bold"}>
                            {activeTab === "media" ? "ALERT (Bribery mention in press)" : "PASSED"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Foreign PEP Exposure</span>
                          <span className="text-brand-lime font-bold">YES (Level 1 Jurisdictional)</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Filing Lineage Log</span>
                          <span className="text-white">Immutably stored (Hash verified)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-white/5 mt-6">
                      <button className="flex-1 py-3 bg-brand-lime text-neutral-900 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-brand-lime/90 transition-all text-center">
                        Confirm PEP Match
                      </button>
                      <button className="flex-1 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                        Escalate to Senior Compliance
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Complexity</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              PEP Risk Requires More Than a Name Match.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Politically exposed risk is complex. Customers may be public officials, former officials, relatives, close associates, beneficial owners, vendors, or connected entities. Screening must account for relationships, jurisdiction, ongoing exposure, and reputational risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Relationship Complexity", desc: "PEP exposure often involves relatives, close associates, beneficial owners, and connected organizations.", icon: <Network /> },
                { title: "Jurisdiction Risk", desc: "Political exposure varies by country, role, seniority, corruption exposure, and regulatory expectations.", icon: <Globe /> },
                { title: "False Positives", desc: "Common names and incomplete data can overwhelm compliance teams with noisy alerts.", icon: <AlertTriangle /> },
                { title: "Adverse Media Exposure", desc: "PEP matches often require reputational context from news, enforcement, corruption, or financial crime indicators.", icon: <FileText /> },
                { title: "Ongoing Monitoring", desc: "A customer’s PEP status may change after onboarding as roles, elections, appointments, or relationships evolve.", icon: <Clock /> },
                { title: "EDD Burden", desc: "High-risk customers require enhanced due diligence, evidence collection, approval workflows, and periodic reviews.", icon: <Lock /> }
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

        {/* ================= SECTION 3: DEEPSENSE PEP SCREENING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Screening Coverage</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Screen PEP Exposure Across Customers, Entities, Documents, and Vendors.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense embeds PEP screening into onboarding, KYC, transaction monitoring, vendor reviews, procurement workflows, and ongoing customer monitoring.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Customer PEP Screening", desc: "Screen individual and business customers during onboarding, periodic review, and ongoing monitoring." },
                { title: "RCA Detection", desc: "Identify relatives and close associates connected to politically exposed individuals." },
                { title: "Entity & Beneficial Owner Screening", desc: "Screen companies, directors, shareholders, beneficial owners, and linked entities." },
                { title: "Document-Based PEP Screening", desc: "Screen identity fields extracted from uploaded documents during KYC and document verification." },
                { title: "Vendor & Third-Party Screening", desc: "Identify politically exposed vendors, suppliers, merchants, or third parties." },
                { title: "Ongoing Monitoring", desc: "Re-screen customers and entities as PEP data, roles, relationships, or risk profiles change." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: PEP RISK CATEGORIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">PEP Severity</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Understand the Type and Severity of Political Exposure.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense helps teams classify PEP exposure based on role, relationship, geography, recency, and associated risk factors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Domestic PEP", desc: "Individuals holding prominent public functions within the customer’s country." },
                { title: "Foreign PEP", desc: "Individuals holding public office or influence in another jurisdiction." },
                { title: "International Organization PEP", desc: "Senior officials of international bodies or public institutions." },
                { title: "Former PEP", desc: "Individuals who previously held public office and may still present residual risk." },
                { title: "Relatives & Close Associates (RCA)", desc: "Family members, associates, business partners, or linked entities connected." },
                { title: "Beneficial Owner Exposure", desc: "PEP risk connected through ownership, control, directorship, or corporate structure." }
              ].map((cat, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <span className="text-xs font-black text-brand-lime font-mono block">CATEGORY {idx+1}</span>
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{cat.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: MATCHING & CONFIDENCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Quality Triage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Prioritize True Risk With Explainable Match Confidence.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines identity attributes, aliases, countries, documents, and relationship data to help analysts distinguish meaningful PEP matches from noise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Exact Name Matching", desc: "Screen exact and fuzzy name matches across PEP records." },
                { title: "Alias Match checks", desc: "Match alternate spellings, aliases, transliterations, and alternate names." },
                { title: "DOB Match checking", desc: "Use DOB or year-of-birth signals to improve match confidence." },
                { title: "Nationality Matching", desc: "Compare nationality, residence country, issuing country, and jurisdiction." },
                { title: "Relationship Mapping", desc: "Identify family links, close associates, and beneficial ownership structures." },
                { title: "Document Checking", desc: "Compare passport and official document IDs where available." },
                { title: "Structured Entity match", desc: "Screen corporate networks and linked administrative bodies." },
                { title: "Explainable Confidence Scores", desc: "Generate scores, reasons, and recommended action steps." }
              ].map((chk, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{chk.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{chk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: ENHANCED DUE DILIGENCE WORKFLOW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Compliance Pipeline</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Escalate High-Risk Customers Into EDD Workflows Automatically.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              PEP exposure often requires enhanced due diligence, source-of-funds review, senior approval, and ongoing monitoring. DeepSense operationalizes that workflow.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "1. Match Detected", desc: "Customer, vendor, document identity, or beneficial owner triggers a PEP match." },
                { title: "2. Confidence Scored", desc: "DeepSense evaluates matched fields, relationship type, country risk, and source reliability." },
                { title: "3. Risk Tier Updated", desc: "Customer or entity risk profile is updated based on exposure." },
                { title: "4. Case Created", desc: "High-risk matches generate review cases with evidence attached." },
                { title: "5. Analyst Review", desc: "Compliance teams review match evidence, customer context, adverse media, and transaction history." },
                { title: "6. Approval Workflow", desc: "Senior reviewers or compliance officers approve, reject, or request info." },
                { title: "7. Ongoing Monitoring", desc: "Customer is placed on periodic review or continuous monitoring." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{step.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: ADVERSE MEDIA CONNECTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Reputation context</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Combine PEP Screening With Adverse Media Context.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              PEP exposure alone does not always mean rejection. DeepSense helps teams evaluate political exposure alongside reputational and financial crime indicators.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Bribery & Corruption", desc: "Flag allegations of public corruption, state bribery, or embezzlement." },
                { title: "Regulatory Enforcement", desc: "Highlight previous state agency sanctions, freeze orders, or compliance issues." },
                { title: "Financial Crime triggers", desc: "Spot money laundering, tax evasion, or fraud links in national news." }
              ].map((adv, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{adv.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: ONGOING PEP MONITORING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Continuous Check</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Monitor Political Exposure After Onboarding.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              PEP status and risk can change over time. DeepSense supports periodic and event-driven re-screening to keep customer risk profiles current.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Event-Driven checks", desc: "Trigger re-screening when customer data changes or country tags alter." },
                { title: "Periodic Rescreening schedules", desc: "Enforce daily, weekly, or monthly runs across existing PEP books." },
                { title: "Source Freshness syncs", desc: "Automatically sync data inputs when public registries updates." }
              ].map((mon, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{mon.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mon.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: CASE MANAGEMENT & REVIEW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Compliance Review</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Resolve PEP Alerts With Full Evidence Context.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense provides compliance teams with the context needed to review, escalate, and resolve PEP matches efficiently.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Clear Audit Trails", desc: "Preserve match history, analyst decisions, and reviewer comments." },
                    { title: "Source-of-Funds Uploads", desc: "Attach asset listings, salary slips, and corporate tax fillings." },
                    { title: "Resolution workflow buttons", desc: "Confirm matches, escalate to EDD, or suppress false positives." }
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

              {/* Right Column: Case Replay Sidebar */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">PEP DISCLOSURE FORM</span>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between items-center text-white/55 border-b border-white/5 pb-2">
                      <span>Disclosure State</span>
                      <span className="text-red-400 font-bold">EDD_TRIAGE_ACTIVE</span>
                    </div>
                    <div className="flex justify-between items-center text-white/55">
                      <span>Reason Code</span>
                      <span className="text-red-400 font-bold">RCA_ASSOCIATE_VERIFIED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: CUSTOMER RISK PROFILING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Living Profiles</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Turn PEP Exposure Into Ongoing Customer Risk Intelligence.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense updates customer and entity risk profiles based on PEP exposure, adverse media, geography, transaction behavior, and review outcomes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Risk Inputs", desc: "PEP category, role seniority, jurisdiction risk, RCA relationship, and adverse media severity." },
                { title: "Risk Outputs", desc: "Customer risk tier, EDD requirement, review frequency, and case priority." },
                { title: "AML Tuning", desc: "PEP flags adjust transaction monitoring thresholds and trigger AML investigations." }
              ].map((inp, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{inp.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{inp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: INTEGRATION WITH DEEPSENSE PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Full stack</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              PEP Intelligence Connected to AML, KYC, Fraud, and Reporting.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              PEP screening becomes more powerful when it is connected to the full DeepSense financial crime platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "KYC Verification", desc: "Screen applicants during onboarding and document verification." },
                { title: "AML Monitoring", desc: "Use PEP exposure to adjust transaction monitoring thresholds and customer risk tiers." },
                { title: "Adverse Media", desc: "Add reputational context to politically exposed customer reviews." },
                { title: "Graph Intelligence", desc: "Identify relationships between customers, entities, vendors, and politically exposed networks." },
                { title: "Case Management", desc: "Route PEP matches into review and EDD workflows." },
                { title: "Regulatory Reporting", desc: "Attach PEP evidence to SAR/STR workflows and compliance reports." }
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
              PEP Screening for Regulated and High-Risk Businesses.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Banking", desc: "Screen customers, beneficial owners, counterparties, and high-risk relationships during onboarding and monitoring." },
                { title: "Fintech", desc: "Detect politically exposed risk across wallets, customer onboarding, payments, and accounts." },
                { title: "Crypto & Web3", desc: "Screen users, beneficial owners, wallets, and linked entities for political exposure and reputational risk." },
                { title: "Lending", desc: "Evaluate applicant, guarantor, and business-owner exposure before credit decisions." },
                { title: "Procurement & Vendor Risk", desc: "Screen vendors, suppliers, directors, beneficial owners, and third parties for political exposure." },
                { title: "Marketplaces", desc: "Screen sellers, merchants, payout recipients, and business entities." }
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
                Designed for Compliance Governance and EDD Auditability.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for organizations that require explainable PEP decisions, enhanced due diligence evidence, and audit-ready customer risk workflows.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Role-based access", "Tenant isolation", "Audit logging", "EDD review history",
                "Resolution evidence", "Reviewer notes", "False-positive suppression", "Periodic review tracking",
                "Private deployment", "On-prem deployment"
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">PEP FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is PEP screening?", 
                  a: "PEP screening identifies politically exposed persons, former public officials, relatives and close associates, and entities connected to political exposure." 
                },
                { 
                  q: "Does DeepSense support relatives and close associates?", 
                  a: "Yes. DeepSense can support RCA-style relationship screening where relationship data is available from configured sources." 
                },
                { 
                  q: "Can PEP matches trigger EDD?", 
                  a: "Yes. PEP matches can automatically escalate customers or entities into enhanced due diligence workflows." 
                },
                { 
                  q: "Does DeepSense connect PEP screening to adverse media?", 
                  a: "Yes. PEP exposure can be reviewed alongside adverse media, sanctions proximity, transaction behavior, and graph relationships." 
                },
                { 
                  q: "Can PEP risk affect transaction monitoring?", 
                  a: "Yes. PEP exposure can update customer risk tiers and influence AML monitoring sensitivity." 
                },
                { 
                  q: "Are PEP decisions auditable?", 
                  a: "Yes. DeepSense stores match evidence, confidence scoring, analyst decisions, reviewer notes, and audit history." 
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
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest font-bold">Ready to strengthen PEP compliance?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Identify politically exposed risk and <br />
                <span className="text-white/40">manage EDD from one platform.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                DeepSense helps compliance teams screen customers, vendors, beneficial owners, and entities for PEP exposure while connecting results to AML monitoring, adverse media, cases, and regulatory workflows.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/adverse-media" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Adverse Media Screening
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
