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
  Search
} from "lucide-react";

export default function DocumentFraudPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Verification Dashboard state
  const [activeStep, setActiveStep] = useState<string>("forensics");
  const [riskLevel, setRiskLevel] = useState<number>(86);
  const [livenessStatus, setLivenessStatus] = useState<string>("PASSED");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleStepChange = (step: string) => {
    setActiveStep(step);
    if (step === "forensics") {
      setRiskLevel(86);
      setLivenessStatus("PASSED");
    } else if (step === "biometrics") {
      setRiskLevel(94);
      setLivenessStatus("FAILED (MORPH_ATTEMPT)");
    } else {
      setRiskLevel(32);
      setLivenessStatus("PASSED");
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
                <FileCheck className="w-3.5 h-3.5 text-lime-400" />
                Document Fraud & Identity Intelligence
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Fake Documents, Synthetic Identities, <br />
                <span className="text-zinc-400">and Deepfake Onboarding Attempts.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense verifies identity documents, extracts trusted data, validates MRZ checksums, detects tampering, identifies duplicate documents, compares faces, checks liveness, and screens extracted identities against AML risk sources.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/kyc-verification" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore KYC Verification
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Built for fintechs, banks, crypto platforms, telecom wallets, gaming companies, marketplaces, and regulated onboarding teams.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive Verification Dashboard Mockup */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">IDENTITY DOCUMENT FORENSICS & VERIFICATION WORKSPACE</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">FORENSIC ENGINE ACTIVE • V3.1</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Document portrait and extraction details */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Uploaded Identity Card Preview</span>
                    
                    <div className="aspect-[1.586/1] bg-black/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-lime/5 to-transparent pointer-events-none" />
                      
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/5">
                          <Eye className="w-6 h-6 text-zinc-400" />
                        </div>
                        <span className="px-2 py-0.5 bg-brand-lime/20 border border-brand-lime/40 text-brand-lime text-[8px] font-black rounded uppercase">PASSPORT</span>
                      </div>

                      <div className="space-y-1 z-10 font-mono text-[9px] text-zinc-400">
                        <p>NAME: JOHNATHAN DOE</p>
                        <p>NATIONALITY: GBR</p>
                        <p>MRZ: P&lt;GBRDOE&lt;&lt;JOHNATHAN&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</p>
                      </div>
                    </div>

                    {/* Checkboxes controls */}
                    <div className="space-y-2">
                      {[
                        { id: "forensics", label: "Tampering & Metadata Forensics" },
                        { id: "biometrics", label: "Face Match & Liveness checks" },
                        { id: "screening", label: "AML / Sanctions Watchlist Screening" }
                      ].map((step) => (
                        <div 
                          key={step.id}
                          onClick={() => handleStepChange(step.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            activeStep === step.id 
                              ? "bg-brand-lime/10 border-brand-lime text-white" 
                              : "bg-black/40 border-white/5 text-zinc-400 hover:border-white/10"
                          }`}
                        >
                          <span className="text-[10px] font-bold font-manrope">{step.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Risk and verification signals */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start pb-4 border-b border-white/5">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Forensics Risk Analysis</span>
                          <h4 className="text-4xl md:text-5xl font-black italic tracking-tighter text-red-500 animate-pulse mt-1">
                            {riskLevel}/100 Risk
                          </h4>
                        </div>
                        <span className="text-zinc-500 text-[10px] font-mono">STATUS: ACTION_REQUIRED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-zinc-400">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">MRZ Checksum Check</span>
                          <span className="text-red-400 font-bold">FAILED (Composite Error)</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">EXIF Software Check</span>
                          <span className="text-red-400 font-bold">TAMPER_DETECTED (Photoshop V25)</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Liveness Validation</span>
                          <span className="text-brand-lime font-bold">{livenessStatus}</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Identity Duplicate Check</span>
                          <span className="text-white font-bold">3 Accounts Linked (Multi-Reuse)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-white/5 mt-6">
                      <button className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-red-600 transition-all text-center">
                        Auto-Reject Identity
                      </button>
                      <button className="flex-1 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                        Escalate to Case Management
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Threat Landscape</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Identity Fraud Is No Longer Just a Bad Document.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern identity fraud combines manipulated documents, synthetic identities, stolen personal data, fake selfies, deepfakes, reused IDs, compromised devices, and mule onboarding patterns.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fake Documents", desc: "Fraudsters submit forged IDs, altered passports, edited PDFs, fake proof-of-address documents, and manipulated bank statements.", icon: <FileCheck /> },
                { title: "Synthetic Identities", desc: "Criminals combine real and fabricated identity attributes to pass onboarding checks.", icon: <Users /> },
                { title: "Deepfake Onboarding", desc: "AI-generated selfies, face morphs, replay attacks, and liveness bypass attempts are becoming more common.", icon: <Fingerprint /> },
                { title: "Reused Documents", desc: "The same document or identity may be reused across multiple accounts, wallets, merchants, or applications.", icon: <History /> },
                { title: "Weak KYC Workflows", desc: "Disconnected OCR, biometric, AML, and risk tools make onboarding decisions hard to explain and govern.", icon: <AlertTriangle /> },
                { title: "Manual Review Bottlenecks", desc: "Analysts spend too much time reviewing documents without unified evidence, risk scores, or case workflows.", icon: <Clock /> }
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

        {/* ================= SECTION 3: DEEPSENSE DOCUMENT INTELLIGENCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected Defense</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Verify Documents, Detect Fraud, and Screen Identity Risk in One Workflow.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines document analysis, OCR extraction, MRZ validation, metadata forensics, biometric checks, duplicate detection, graph intelligence, and AML screening into one connected identity risk engine.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "OCR & Data Extraction", desc: "Extract names, dates of birth, document numbers, nationalities, and addresses from uploaded documents automatically." },
                { title: "MRZ Validation", desc: "Parse and validate passport MRZ lines, document numbers, dates of birth, expiry dates, and checksum integrity." },
                { title: "Metadata Forensics", desc: "Inspect PDFs and images for suspicious editing tools, EXIF anomalies, compression artifacts, and digital manipulation indicators." },
                { title: "Duplicate Detection", desc: "Detect exact and near-duplicate documents, reused document numbers, identity reuse, and repeated onboarding attempts." },
                { title: "Face Match & Liveness", desc: "Compare document portraits with selfies and verify that the applicant is physically present." },
                { title: "AML Screening", desc: "Screen extracted identity fields against sanctions, PEP, adverse media, and organization watchlists." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: SUPPORTED DOCUMENT TYPES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Supported Forms</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Support for Identity, Financial, and Proof-of-Address Documents.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense is designed to support the document types commonly used in onboarding, compliance, lending, payments, payroll, and financial investigations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Passports", desc: "Validate passport MRZ checksum lines, expiry dates, issuing country, nationality, and identity consistency.", icon: <Globe /> },
                { title: "National IDs", desc: "Extract identity fields, validate document structure, detect tampering, and compare against submitted customer data.", icon: <FileCheck /> },
                { title: "Driver Licenses", desc: "Verify identity fields, expiry dates, issuing region, document metadata, and visual consistency.", icon: <Smartphone /> },
                { title: "Residence Permits", desc: "Support immigration and residency documents used in onboarding and compliance workflows.", icon: <Lock /> },
                { title: "Utility Bills", desc: "Extract addresses, providers, and dates, and identify suspicious PDF or image manipulation.", icon: <FileText /> },
                { title: "Bank Statements", desc: "Detect tampered statements, suspicious metadata, formatting anomalies, and inconsistent financial details.", icon: <Wallet /> },
                { title: "Invoices", desc: "Identify altered invoices, duplicate documents, vendor inconsistencies, and procurement fraud evidence.", icon: <Briefcase /> },
                { title: "Payroll / Tax Documents", desc: "Support income verification, employment fraud detection, and document consistency checks.", icon: <Database /> }
              ].map((doc, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[32px] flex flex-col gap-4 hover:shadow-xl transition-all duration-300">
                  <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-neutral-900 border border-zinc-100 shadow-xs">
                    {doc.icon}
                  </div>
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{doc.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{doc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: OCR & FIELD EXTRACTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Structured Data</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Extract Reliable Identity Data From Documents.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense uses provider-backed OCR and structured extraction workflows to convert documents into usable identity and risk signals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Provider-Agnostic OCR", desc: "Connect OCR providers such as AWS Textract, Azure Document Intelligence, Google Vision, or internal OCR pipelines." },
                { title: "Confidence Scoring", desc: "Track field-level extraction confidence to identify uncertain or suspicious documents." },
                { title: "Structured Output", desc: "Convert messy document uploads into normalized, structured data for downstream screening and scoring." },
                { title: "Honest Failure Handling", desc: "If OCR providers are not configured, DeepSense fails clearly instead of returning fake extraction results." }
              ].map((feat, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[28px] flex flex-col gap-4">
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{feat.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: MRZ & DOCUMENT VALIDATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Data Checks</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Validate Document Integrity Before Trusting the Identity.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense validates machine-readable zones and document fields to detect fake or manipulated identity documents.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "MRZ Checksum", desc: "Validate document number, date of birth, expiry date, and composite MRZ checksums." },
                { title: "Expiry Validation", desc: "Detect expired documents or suspicious future issue dates." },
                { title: "Field Consistency", desc: "Compare extracted document fields against submitted customer information." },
                { title: "Country Validation", desc: "Validate issuing country, nationality, and jurisdiction consistency." },
                { title: "Age Rules", desc: "Apply organization-specific age or eligibility requirements." },
                { title: "Document Number Integrity", desc: "Detect reused, malformed, or suspicious document numbers." }
              ].map((val, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{val.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: TAMPERING & METADATA FORENSICS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Metadata Forensics</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Detect Manipulated Images, PDFs, and Digital Artifacts.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense analyzes document files for signals of editing, manipulation, suspicious generation, or inconsistency.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Image EXIF metadata", desc: "Inspect EXIF metadata for editing software, timestamp mismatch, and compression artifacts." },
                    { title: "PDF Forensics", desc: "Analyze PDF producers, embedded font inconsistencies, and suspicious text layers." },
                    { title: "Anti-Forgery Signals", desc: "Identify low-resolution scans, encrypted files, and embedded JavaScript." }
                  ].map((tam, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-1.5 h-12 bg-zinc-100 group-hover:bg-brand-lime transition-all duration-300 rounded-full" />
                      <div>
                        <span className="text-xs font-bold text-neutral-950 font-manrope block">{tam.title}</span>
                        <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{tam.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: PDF Forensics analysis visual mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">METADATA FORENSIC DIAGNOSTICS</span>
                  
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-between text-mono">
                    <div>
                      <span className="text-red-400 font-black block text-[10px]">EDITING SOFTWARE DETECTED</span>
                      <span className="text-white text-xs font-bold">File modified with Photoshop V25</span>
                    </div>
                    <span className="px-2 py-0.5 bg-red-500/20 border border-red-500/40 text-red-400 text-[8px] font-black rounded uppercase">SUSPICIOUS</span>
                  </div>

                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between">
                      <span>PDF Producer</span>
                      <span className="text-red-400 font-bold">Mac OS X Quartz (Edited)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>EXIF Compression Quality</span>
                      <span className="text-white">65% (Lossy artifacts)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: DUPLICATE DOCUMENT & IDENTITY REUSE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Reuse Prevention</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Stop Reused Documents and Multi-Account Identity Abuse.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Fraudsters often reuse the same documents, document numbers, faces, addresses, or identity attributes across multiple accounts. DeepSense detects reuse patterns before they become fraud losses.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Exact File Match", desc: "Detect identical document files using secure hashes." },
                { title: "Near-Duplicate Match", desc: "Identify visually similar documents through perceptual hashing." },
                { title: "Document Number Reuse", desc: "Detect the same document number across multiple customers or accounts." },
                { title: "Identity Attribute Reuse", desc: "Identify repeated names, dates of birth, addresses, faces, or onboarding attributes." },
                { title: "Cross-Account Linking", desc: "Link duplicate identities into graph intelligence and fraud ring detection." },
                { title: "Multi-Account Abuse", desc: "Identify accounts connected through shared identity evidence." }
              ].map((method, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{method.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: BIOMETRICS, FACE MATCH & LIVENESS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Biometrics</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Verify That the Applicant Matches the Document.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense integrates biometric checks to detect impersonation, selfie reuse, replay attacks, face mismatch, and deepfake onboarding attempts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Face Match Similarity", desc: "Compare the document portrait with the submitted selfie to verify a true match." },
                { title: "Liveness Check", desc: "Verify that the applicant is physically present and not using a static image or replay attack." },
                { title: "Deepfake Risk detection", desc: "Identify synthetic selfies, face morphing, replay attempts, and manipulated biometric media." },
                { title: "Selfie Reuse Prevention", desc: "Detect the same selfie or face reused across multiple onboarding attempts." },
                { title: "Portrait Presence check", desc: "Flag documents where portrait extraction is missing or suspicious." },
                { title: "Honest Provider Handling", desc: "If biometric providers are not configured, DeepSense returns provider_not_configured instead of fake biometric approval." }
              ].map((bio, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{bio.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{bio.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: KYC + AML SCREENING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Sanctions Screening</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Screen Extracted Identity Data Against AML Risk Sources.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense does not treat document verification as separate from compliance. Extracted identity fields can be screened against sanctions, PEP, adverse media, and internal watchlists.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Global Sanctions Lists", desc: "Screen extracted identity fields against global sanctions databases automatically." },
                { title: "PEP Exposure checks", desc: "Identify domestic and foreign politically exposed persons during onboarding." },
                { title: "Adverse Media Matches", desc: "Flag individuals mentioned in negative news or financial crime databases." },
                { title: "Custom watchlists", desc: "Cross-reference extracted identity numbers and names against organization blocklists." },
                { title: "High-Risk Countries", desc: "Flag issuing jurisdictions and citizenships on watchlists." },
                { title: "False-Positive Resolution", desc: "Leverage intelligent triage and name matching algorithms to reduce friction." }
              ].map((aml, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{aml.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{aml.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: DOCUMENT RISK SCORING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Unified Decisioning</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Turn Document Signals Into an Explainable Risk Score.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines extraction confidence, validation checks, metadata forensics, duplicate detection, biometric checks, AML screening, device risk, and graph intelligence into one identity risk score.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "OCR Confidence", desc: "Field-level structured verification scores." },
                { title: "MRZ Validation", desc: "Passport machine-readable zone checksum results." },
                { title: "Metadata anomalies", desc: "Photo-editing detection and EXIF checks." },
                { title: "Duplicate metrics", desc: "Perceptual hashing and cross-account links." }
              ].map((input, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[28px] flex flex-col gap-4">
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{input.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{input.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: ANALYST REVIEW WORKFLOW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Analyst Tools</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Review High-Risk Documents With Full Evidence Context.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense gives analysts a dedicated workspace for reviewing document fraud, identity risk, and onboarding decisions.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "Document portrait comparison", desc: "Compare portraits against selfies inside the dashboard with detailed liveness logs." },
                    { title: "Field comparison tools", desc: "Examine extracted OCR elements versus submitted sign-up data." },
                    { title: "Escalation workflows", desc: "Seamlessly push high-risk cases to senior compliance leads." }
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

              {/* Right Column: Visual dashboard queue mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">ANALYST VERIFICATION QUEUE</span>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between items-center text-white/55 border-b border-white/5 pb-2">
                      <span>Target: ACC-9081</span>
                      <span className="text-red-400 font-bold">TAMPERING_HIGH</span>
                    </div>
                    <div className="flex justify-between items-center text-white/55">
                      <span>Liveness Result</span>
                      <span className="text-brand-lime font-bold">PASSED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 13: INTEGRATION WITH RISK PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Unified Platform</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Connected to Fraud, AML, Graph, ATO, and Case Management.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Document fraud signals are not isolated. DeepSense connects document intelligence to the broader risk ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fraud Scoring", desc: "Document risk contributes to onboarding and transaction risk scoring." },
                { title: "Graph Intelligence", desc: "Duplicate documents and shared identities create graph links automatically." },
                { title: "AML Screening Integration", desc: "Extracted identity fields are screened for sanctions, PEP, and watchlist exposure." },
                { title: "ATO & Device Intelligence", desc: "Document risk can combine with suspicious devices, session risk, and behavioral anomalies." },
                { title: "Case Management Engine", desc: "High-risk submissions automatically create alerts, cases, evidence timelines, and analyst tasks." },
                { title: "Webhooks & SIEM Stream", desc: "Document fraud events can be sent to downstream systems through webhooks and SIEM integrations." }
              ].map((int, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{int.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 14: USE CASES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Target Scenarios</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Built for High-Risk Onboarding and Identity Workflows.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fintech Onboarding", desc: "Verify customers, detect fake documents, identify duplicate identities, and prevent mule onboarding." },
                { title: "Banking KYC", desc: "Strengthen customer due diligence with document validation, AML screening, and identity risk scoring." },
                { title: "Crypto Exchanges", desc: "Detect fake IDs, sanctioned users, duplicate identities, and risky wallet onboarding." },
                { title: "Telecom Wallets", desc: "Prevent SIM-linked identity fraud, fake KYC submissions, and wallet abuse." },
                { title: "Gaming & Betting", desc: "Stop multi-accounting, fake KYC, bonus abuse, and duplicate document submissions." },
                { title: "Lending & Credit", desc: "Detect manipulated income documents, fake bank statements, payroll fraud, and synthetic identity applications." }
              ].map((ind, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 hover:shadow-xl hover:border-brand-lime/20 transition-all duration-300">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 15: SECURITY & PRIVACY ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Privacy Controls</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Built for Sensitive Identity Data.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed to support regulated identity workflows where document data, biometric checks, and personal information require strict access control and retention governance.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Encrypted fields", "Hashed doc matching", "Secure storage", "Role-based access",
                "Tenant isolation", "Audit logging", "Retention policies", "Document purge controls"
              ].map((sec, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                  <span className="text-[10px] font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 16: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Identity FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What document types does DeepSense support?", 
                  a: "DeepSense supports passports, IDs, driver licenses, residence permits, utility bills, bank statements, invoices, payroll documents, and tax documents." 
                },
                { 
                  q: "Does DeepSense support OCR?", 
                  a: "Yes. DeepSense supports provider-backed OCR and structured extraction workflows. If OCR is not configured, it fails honestly instead of returning fake results." 
                },
                { 
                  q: "Can DeepSense validate passport MRZ?", 
                  a: "Yes. DeepSense can parse and validate MRZ checksums, dates, document numbers, and expiry information." 
                },
                { 
                  q: "Can DeepSense detect fake or edited documents?", 
                  a: "Yes. DeepSense analyzes metadata, EXIF data, PDF structure, timestamps, compression artifacts, and suspicious editing indicators." 
                },
                { 
                  q: "Does DeepSense support face match and liveness?", 
                  a: "Yes. DeepSense supports provider-backed face match and liveness checks, with honest provider-not-configured behavior." 
                },
                { 
                  q: "Can document results trigger cases?", 
                  a: "Yes. High-risk document submissions can automatically create alerts, cases, risk signals, evidence timelines, and analyst review tasks." 
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

        {/* ================= SECTION 17: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest font-bold">Ready to stop fake identities?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Verify documents, detect fraud, and <br />
                <span className="text-white/40">onboard real customers with confidence.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                DeepSense helps organizations detect document fraud, synthetic identities, duplicate submissions, biometric risk, and AML exposure before users enter your platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/kyc-verification" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore KYC Verification
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
