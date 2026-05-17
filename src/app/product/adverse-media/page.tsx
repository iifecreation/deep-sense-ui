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

export default function AdverseMediaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Adverse Media dashboard mockup state
  const [activeArticle, setActiveArticle] = useState<string>("corruption");
  const [relevanceScore, setRelevanceScore] = useState<number>(91);
  const [credibilityTier, setCredibilityTier] = useState<string>("HIGH_CREDIBILITY");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleArticleChange = (type: string) => {
    setActiveArticle(type);
    if (type === "corruption") {
      setRelevanceScore(91);
      setCredibilityTier("HIGH (Reputable National Financial Daily)");
    } else if (type === "warning") {
      setRelevanceScore(96);
      setCredibilityTier("MAXIMUM (Official Regulatory Enforcement Registry)");
    } else {
      setRelevanceScore(35);
      setCredibilityTier("LOW (Unverified Local Forum/Blog Post)");
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
                <AlertTriangle className="w-3.5 h-3.5 text-lime-400" />
                Adverse Media & Reputational Risk Screening
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Negative Media, Enforcement Exposure, and <br />
                <span className="text-zinc-400">Reputational Risk Before It Becomes a Compliance Problem.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps compliance and risk teams screen customers, vendors, counterparties, merchants, beneficial owners, and entities for adverse media signals linked to fraud, corruption, money laundering, sanctions exposure, terrorism financing, regulatory enforcement, and financial misconduct.
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
                  Built for banks, fintechs, crypto platforms, payment companies, procurement teams, marketplaces, and regulated enterprises.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive Adverse Media Screening Dashboard */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">REPUTATIONAL RISK ANALYSIS DESK</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">STATUS: SYNCING NEGATIVE NEWS FEEDS</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Article select list */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Adverse Media Feed Hits</span>
                    
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                      <div>
                        <span className="text-zinc-500 block">SCREENED TARGET</span>
                        <span className="text-white font-bold text-xs">Vanguard Global Trade Ltd</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[
                        { id: "corruption", label: "Corruption Allegation (National Press)" },
                        { id: "warning", label: "Regulatory Warning (Enforcement Registry)" },
                        { id: "distress", label: "Low-Risk Mention (Local Forum / Blog)" }
                      ].map((item) => (
                        <div 
                          key={item.id}
                          onClick={() => handleArticleChange(item.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            activeArticle === item.id 
                              ? "bg-brand-lime/10 border-brand-lime text-white" 
                              : "bg-black/40 border-white/5 text-zinc-400 hover:border-white/10"
                          }`}
                        >
                          <span className="text-[10px] font-bold font-manrope">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Relevance & Credibility analysis panel */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start pb-4 border-b border-white/5">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Match Relevance Score</span>
                          <h4 className="text-4xl md:text-5xl font-black italic tracking-tighter text-red-500 animate-pulse mt-1">
                            {relevanceScore}% Match
                          </h4>
                        </div>
                        <span className="text-zinc-500 text-[10px] font-mono">CREDIBILITY: {credibilityTier}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-zinc-400">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">News Source Credibility</span>
                          <span className="text-brand-lime font-bold">Verified Database Influx</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Recency score</span>
                          <span className={activeArticle === "distress" ? "text-brand-lime font-bold" : "text-red-400 font-bold"}>
                            {activeArticle === "distress" ? "Stale (2 yrs ago)" : "Active (14 hours ago)"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Financial Typology tag</span>
                          <span className="text-white uppercase">
                            {activeArticle === "corruption" ? "Corruption" : activeArticle === "warning" ? "Enforcement" : "Uncategorized"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Compliance Action Needed</span>
                          <span className="text-red-400 font-bold">CASE_ESCALATION_RECOMMENDED</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-white/5 mt-6">
                      <button className="flex-1 py-3 bg-brand-lime text-neutral-900 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-brand-lime/90 transition-all text-center">
                        Escalate to AML Case
                      </button>
                      <button className="flex-1 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                        Resolve as False Positive
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Reputational gaps</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Financial Crime Risk Often Appears in the News Before It Appears on a Sanctions List.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Customers, vendors, merchants, and counterparties may carry serious reputational or criminal exposure even when they are not yet sanctioned. Adverse media helps teams identify risk earlier.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Sanctions Gaps", desc: "Entities may appear in fraud, corruption, or enforcement reports long before formal sanctions are issued.", icon: <AlertTriangle /> },
                { title: "Reputational Exposure", desc: "Doing business with high-risk individuals or companies can damage customer trust, investor confidence, and regulatory standing.", icon: <Shield /> },
                { title: "Manual Research", desc: "Analysts waste time searching news, enforcement records, and public sources manually.", icon: <Search /> },
                { title: "False Positives", desc: "Common names, irrelevant articles, and outdated results create noisy review queues.", icon: <Users /> },
                { title: "Weak Context", desc: "Adverse media alerts are difficult to interpret without sanctions, PEP, transaction, and customer context.", icon: <Layers /> },
                { title: "Ongoing Risk", desc: "A customer or vendor may become high-risk after onboarding due to new reports, investigations, or enforcement actions.", icon: <Clock /> }
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

        {/* ================= SECTION 3: DEEPSENSE ADVERSE MEDIA SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected Intelligence</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Adverse Media Connected to AML, PEP, KYC, Vendor Risk, and Case Workflows.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense turns negative media into structured risk intelligence by matching articles and public-risk signals to customers, entities, vendors, merchants, and beneficial owners.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Person Screening", desc: "Search and match individuals against adverse media sources using name, aliases, DOB, country, and contextual identifiers." },
                { title: "Company & Entity Screening", desc: "Screen businesses, merchants, vendors, counterparties, directors, and beneficial owners for negative media exposure." },
                { title: "Risk Categorization", desc: "Classify hits into fraud, corruption, money laundering, enforcement, sanctions proximity, organized crime, and terrorism financing." },
                { title: "Source Credibility", desc: "Score results based on source quality, authority, relevance, and reliability." },
                { title: "Recency Scoring", desc: "Prioritize recent and ongoing risk while preserving historical context." },
                { title: "Case Escalation", desc: "Escalate high-risk hits into investigations with evidence, notes, and audit history." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: RISK CATEGORIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Typologies</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Classify Media Risk by Financial Crime Typology.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense helps analysts focus on relevant risk by categorizing adverse media into meaningful financial crime and reputational risk groups.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Fraud", desc: "Articles involving fraud schemes, scams, embezzlement, deception, or financial manipulation." },
                { title: "Corruption & Bribery", desc: "Reports involving bribery, public corruption, procurement abuse, or misuse of office." },
                { title: "Money Laundering", desc: "Media connected to suspicious funds movement, laundering networks, shell companies, or illicit finance." },
                { title: "Sanctions Proximity", desc: "Articles linking entities to sanctioned persons, restricted regimes, high-risk jurisdictions, or embargoed activity." },
                { title: "Terrorism Financing", desc: "Signals related to extremist financing, prohibited organizations, or security-related financial crime." },
                { title: "Regulatory Enforcement", desc: "Public enforcement actions, fines, penalties, investigations, or regulatory warnings." },
                { title: "Organized Crime", desc: "Connections to criminal networks, trafficking, smuggling, cybercrime, or organized financial abuse." },
                { title: "Insolvency & Distress", desc: "Bankruptcy, insolvency, unpaid obligations, liquidation, or serious operational risk." }
              ].map((cat, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <span className="text-xs font-black text-brand-lime font-mono block">TYPOLOGY {idx+1}</span>
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{cat.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: MATCHING & RELEVANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Match Quality</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Find Relevant Matches, Not Just Name Similarities.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Adverse media screening is only useful when matches are relevant. DeepSense combines identity, context, source quality, and risk category to reduce noise.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Name & Alias Matching", desc: "Match individuals and entities across exact names, fuzzy names, aliases, and alternate spellings." },
                { title: "Country Context", desc: "Use nationality, residence, operating country, transaction country, or vendor location to improve match relevance." },
                { title: "Date of Birth / Age Context", desc: "Use DOB or year-of-birth signals where available to reduce false positives." },
                { title: "Entity Type Matching", desc: "Distinguish individuals, businesses, public bodies, merchants, vendors, and organizations." },
                { title: "Keyword Classification", desc: "Classify articles using financial crime, enforcement, corruption, fraud, and AML-related keywords." },
                { title: "Relevance Score Influx", desc: "Combine name confidence, article relevance, source credibility, recency, and entity context." }
              ].map((chk, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{chk.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{chk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: PROVIDER & SOURCE MANAGEMENT ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Providers</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Connect Adverse Media Providers and Public Risk Sources.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense supports a provider-based architecture so organizations can connect adverse media data from commercial providers, open sources, or internal intelligence teams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Commercial Providers", desc: "Connect third-party adverse media and financial crime intelligence providers where configured." },
                { title: "Open Sources", desc: "Use configurable open-source or public-risk datasets where available." },
                { title: "Search Providers", desc: "Connect search-based providers for structured adverse media retrieval." },
                { title: "Internal Intelligence", desc: "Upload internally curated adverse media or risk intelligence records." },
                { title: "Enforcement Sources", desc: "Track regulatory enforcement actions, public warnings, penalties, and government notices." },
                { title: "Provider Failover", desc: "Support provider-not-configured and insufficient-data behavior without fake results." }
              ].map((src, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{src.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{src.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: SCREENING WORKFLOW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Structured Pipeline</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              From Media Search to Risk Decision.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense converts adverse media searches into structured, reviewable, audit-ready risk workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "1. Submit Entity", desc: "Search an individual, company, vendor, merchant, beneficial owner, or counterparty." },
                { title: "2. Retrieve Hits", desc: "Query configured providers and public-risk sources." },
                { title: "3. Match & Classify", desc: "Score relevance, classify risk category, evaluate source credibility, and rank results." },
                { title: "4. Review Evidence", desc: "Show article summary, source, date, category, confidence, and matched fields." },
                { title: "5. Resolve Hit", desc: "Mark as relevant, false positive, needs review, escalated, or monitored." },
                { title: "6. Update Risk", desc: "Update customer, vendor, or entity risk score based on confirmed or high-confidence media." },
                { title: "7. Create Case", desc: "Escalate serious media exposure into AML, onboarding, vendor, or compliance investigations." }
              ].map((step, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{step.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: PEP & AML ENRICHMENT ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Context Enriches</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Enrich PEP and AML Reviews With Media Context.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Adverse media helps compliance teams understand whether a PEP, customer, or counterparty presents elevated financial crime or reputational risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "PEP Review context", desc: "Add corruption, bribery, enforcement, or reputational context to politically exposed person reviews." },
                { title: "Sanctions Proximity", desc: "Identify media linking customers or entities to sanctioned networks, regimes, or restricted sectors." },
                { title: "Customer Due Diligence", desc: "Support CDD and EDD decisions with relevant media evidence." },
                { title: "Transaction Monitoring Scrutiny", desc: "Increase scrutiny for customers or counterparties linked to negative media." },
                { title: "Vendor Risk Monitor", desc: "Identify suppliers or third parties associated with fraud, corruption, or financial distress." },
                { title: "Regulatory Reporting", desc: "Attach adverse media evidence to SAR/STR narratives where relevant." }
              ].map((enr, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{enr.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{enr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: ONGOING MONITORING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Continuous Profiling</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Monitor New Media Risk Over Time.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Adverse media risk changes continuously. DeepSense supports ongoing monitoring to detect new exposure after onboarding or vendor approval.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Scheduled Rescreening run", desc: "Automatically re-screen customers, vendors, and entities on a configurable schedule." },
                { title: "Event-Driven Monitoring triggers", desc: "Trigger media screening when customer risk changes, new transactions occur, or case activity escalates." },
                { title: "New Article Detection Alerts", desc: "Identify new relevant articles immediately after prior screening." }
              ].map((mon, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{mon.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mon.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: FALSE-POSITIVE RESOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Triage Options</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Reduce Noise Without Losing Review History.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense gives analysts tools to resolve irrelevant or low-confidence media hits while preserving auditability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "False-Positive Marking", desc: "Mark irrelevant articles or wrong-entity matches as false positives." },
                { title: "Resolution Notes capture", desc: "Capture analyst rationale and supporting context immutably." },
                { title: "Suppression Logic rules", desc: "Suppress repeated irrelevant hits when approved and signed off." },
                { title: "Relevance Review control", desc: "Adjust result relevance based on article content, source, and recency." },
                { title: "Triage Escalation", desc: "Escalate ambiguous or high-severity hits to compliance leadership." },
                { title: "Audit History tracks", desc: "Retain every review decision, note, and resolution action permanently." }
              ].map((rep, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{rep.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{rep.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: CASE MANAGEMENT ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Compliance Workspace</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Turn Serious Media Exposure Into Structured Investigations.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  High-risk adverse media hits can automatically create cases with article evidence, risk context, and analyst workflow.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "AML & Vendor cases", desc: "Create dedicated audit tracks populated directly from negative articles." },
                    { title: "Linked entity mapping", desc: "Track other companies or partners mentioned in the target controversy." },
                    { title: "Evidence exports", desc: "Generate report-ready pdfs and screenshot lists of all matched news pieces." }
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

              {/* Right Column: News Match visual mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">REPUTATION ANOMALY INBOUND</span>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between items-center text-white/55 border-b border-white/5 pb-2">
                      <span>Article source</span>
                      <span className="text-red-400 font-bold">STATE_REGULATORY_PROBE</span>
                    </div>
                    <div className="flex justify-between items-center text-white/55">
                      <span>Matched Keywords</span>
                      <span className="text-red-400 font-bold">Bribery, Embezzlement, Triage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: INTEGRATION WITH DEEPSENSE PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Unified Platform</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Adverse Media Connected to the Full Risk Ecosystem.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Adverse media signals strengthen the rest of the DeepSense platform by adding real-world reputational context to risk decisions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "AML Monitoring Integration", desc: "Media hits can increase AML risk and support suspicious activity investigations." },
                { title: "PEP Screening enrichment", desc: "Adverse media provides context for politically exposed customer reviews." },
                { title: "KYC Verification validation", desc: "Onboarding decisions can include reputational risk checks." },
                { title: "Vendor & Third-Party Risk review", desc: "Vendors and suppliers can be monitored for corruption, enforcement, or financial distress." },
                { title: "Graph Intelligence propagation", desc: "Entities connected to adverse media can propagate risk across linked networks." },
                { title: "Regulatory Reporting flows", desc: "Relevant media evidence can support FinCEN SAR/STR narratives and compliance reports." }
              ].map((int, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{int.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 13: INDUSTRIES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Sectors</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Adverse Media Screening for Regulated and High-Risk Businesses.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Banking", desc: "Evaluate customer, counterparty, and beneficial-owner reputational risk." },
                { title: "Fintech", desc: "Screen customers, merchants, wallets, and business accounts for negative media exposure." },
                { title: "Crypto & Web3", desc: "Identify high-risk users, entities, wallets, and counterparties linked to financial crime or enforcement." },
                { title: "Procurement & Vendor Risk", desc: "Monitor suppliers, vendors, directors, and beneficial owners for corruption or enforcement exposure." },
                { title: "Payments", desc: "Screen merchants, payout recipients, terminals, and high-risk business entities." },
                { title: "Marketplaces", desc: "Monitor sellers, merchants, business accounts, and counterparties for reputational risk." }
              ].map((ind, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4 hover:shadow-xl hover:border-brand-lime/20 transition-all duration-300">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 14: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Compliance Integrity</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Designed for Auditable Compliance Review.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for organizations that need transparent adverse media decisions, defensible review history, and connected financial crime workflows.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full text-left">
              {[
                "Role-based access", "Tenant isolation", "Secret masking", "Audit logging",
                "Resolution history", "False-positive evidence", "Risk review workflows",
                "Private deployment", "On-prem deployment"
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-5 rounded-2xl flex flex-col gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                  <span className="text-[10px] font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 15: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Reputation FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is adverse media screening?", 
                  a: "Adverse media screening identifies negative news, enforcement exposure, financial crime reports, corruption allegations, and reputational risk connected to people or organizations." 
                },
                { 
                  q: "Does DeepSense support adverse media providers?", 
                  a: "Yes. DeepSense supports a provider-based architecture. If a provider is not configured, the platform should fail honestly rather than returning fake results." 
                },
                { 
                  q: "Can adverse media affect AML risk?", 
                  a: "Yes. Relevant adverse media can increase AML risk, trigger enhanced review, and support suspicious activity investigations." 
                },
                { 
                  q: "Can adverse media be used for vendor risk?", 
                  a: "Yes. DeepSense can screen vendors, suppliers, directors, beneficial owners, merchants, and third parties for reputational risk." 
                },
                { 
                  q: "Does DeepSense support false-positive resolution?", 
                  a: "Yes. Analysts can mark hits as relevant, false positive, escalated, monitored, or resolved with audit history." 
                },
                { 
                  q: "Can media hits create cases?", 
                  a: "Yes. High-risk adverse media can automatically create AML, KYC, vendor risk, or compliance cases with evidence attached." 
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

        {/* ================= SECTION 16: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest font-bold">Ready to add reputational intelligence to compliance?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Detect adverse media risk before it <br />
                <span className="text-white/40">becomes regulatory or reputational exposure.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                DeepSense helps organizations connect negative media, AML screening, PEP reviews, vendor risk, and case workflows into one auditable risk intelligence platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/regulatory-reporting" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Regulatory Reporting
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
