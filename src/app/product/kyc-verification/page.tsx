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

export default function KycVerificationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Onboarding Dashboard mockup state
  const [activeCheck, setActiveCheck] = useState<string>("documents");
  const [kycRiskScore, setKycRiskScore] = useState<number>(34);
  const [onboardingDecision, setOnboardingDecision] = useState<string>("APPROVED");

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleCheckChange = (checkType: string) => {
    setActiveCheck(checkType);
    if (checkType === "documents") {
      setKycRiskScore(34);
      setOnboardingDecision("APPROVED");
    } else if (checkType === "biometrics") {
      setKycRiskScore(89);
      setOnboardingDecision("MANUAL_REVIEW (LIVENESS_FAILED)");
    } else {
      setKycRiskScore(94);
      setOnboardingDecision("REJECTED (SANCTIONS_SDN_MATCH)");
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
                Risk-Based KYC & Customer Onboarding
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Verify Customers, Detect Identity Risk, <br />
                <span className="text-zinc-400">and Automate KYC Decisions.</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense combines document verification, biometric checks, AML screening, synthetic identity detection, device intelligence, graph risk, and case workflows into one connected KYC platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/product/document-fraud" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Document Fraud
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider">
                  Built for banks, fintechs, crypto platforms, telecom wallets, lending companies, gaming platforms, marketplaces, and regulated onboarding teams.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Interactive Onboarding Dashboard Mockup */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-lime/10 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider">RISK-BASED KYC ONBOARDING ORCHESTRATOR</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">FLOW ACTIVE • Low Latency Decisioning</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Applicant Profile details and toggle triggers */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Applicant Details</span>
                    
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                      <div>
                        <span className="text-zinc-500 block">APPLICANT NAME</span>
                        <span className="text-white font-bold text-xs">ELIZABETH VANE</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">NATIONALITY / REGION</span>
                        <span className="text-white">GBR / London</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">SUBMITTED ID PORTRAIT</span>
                        <span className="text-brand-lime font-bold">Image_Extracted (100% Match)</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {[
                        { id: "documents", label: "Perform Standard Identity Validation" },
                        { id: "biometrics", label: "Trigger Biometric Liveness check" },
                        { id: "screening", label: "Perform Sanctions Watchlist Screening" }
                      ].map((check) => (
                        <div 
                          key={check.id}
                          onClick={() => handleCheckChange(check.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            activeCheck === check.id 
                              ? "bg-brand-lime/10 border-brand-lime text-white" 
                              : "bg-black/40 border-white/5 text-zinc-400 hover:border-white/10"
                          }`}
                        >
                          <span className="text-[10px] font-bold font-manrope">{check.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Decisions Panel & Risk meter */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start pb-4 border-b border-white/5">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">KYC Orchestration Score</span>
                          <h4 className="text-4xl md:text-5xl font-black italic tracking-tighter text-red-500 animate-pulse mt-1">
                            {kycRiskScore}/100 Risk
                          </h4>
                        </div>
                        <span className="text-zinc-500 text-[10px] font-mono">STATUS: {onboardingDecision}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 font-mono text-[10px] text-zinc-400">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Document Validity</span>
                          <span className="text-brand-lime font-bold">PASSED (Valid Passport)</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Face Match Score</span>
                          <span className="text-brand-lime font-bold">98% High Proximity Match</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Watchlist Screening</span>
                          <span className={activeCheck === "screening" ? "text-red-400 font-bold" : "text-brand-lime font-bold"}>
                            {activeCheck === "screening" ? "SDN MATCH DETECTED" : "CLEAR"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                          <span className="text-white/60 block">Identity Graph Match</span>
                          <span className="text-white">0 Linked Accounts (Clean)</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-6 border-t border-white/5 mt-6">
                      <button className="flex-1 py-3 bg-brand-lime text-neutral-900 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-brand-lime/90 transition-all text-center">
                        Proceed with Decision
                      </button>
                      <button className="flex-1 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all text-center">
                        Request Enhanced Due Diligence
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Onboarding Friction</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Customer Onboarding Has Become a High-Risk Fraud Channel.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Fraudsters no longer wait until after onboarding. They enter platforms using fake documents, synthetic identities, stolen credentials, deepfakes, mule profiles, duplicate devices, and manipulated customer information.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fake Identity Documents", desc: "Applicants submit altered IDs, fake passports, manipulated PDFs, reused utility bills, and fraudulent proof-of-address documents.", icon: <FileCheck /> },
                { title: "Synthetic Identities", desc: "Criminals combine real and fake identity attributes to create identities that pass simple checks.", icon: <Users /> },
                { title: "Weak AML Screening", desc: "Disconnected sanctions, PEP, and watchlist checks create compliance gaps during onboarding.", icon: <AlertTriangle /> },
                { title: "Manual Review Bottlenecks", desc: "Operations teams struggle with large KYC queues, unclear evidence, and slow decision-making.", icon: <Clock /> },
                { title: "Deepfake & Liveness Bypass", desc: "AI-generated selfies, replay attacks, face morphing, and selfie reuse increase onboarding risk.", icon: <Fingerprint /> },
                { title: "Poor Risk Context", desc: "Most KYC systems verify documents without connecting device, behavior, graph, AML, and fraud intelligence.", icon: <Network /> }
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

        {/* ================= SECTION 3: DEEPSENSE KYC SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">The Solution</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Risk-Based KYC That Connects Identity, Fraud, and AML.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense turns customer onboarding into a connected risk decision by combining identity verification, document intelligence, biometric risk, sanctions screening, device intelligence, behavioral signals, and graph analytics.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-16">
              {[
                { title: "Identity Verification", desc: "Verify customer-submitted identity information against extracted document fields and onboarding data." },
                { title: "Document Intelligence", desc: "Perform OCR extraction, MRZ validation, metadata forensics, duplicate detection, and document risk scoring." },
                { title: "Biometric Checks", desc: "Compare document portraits to selfies, verify liveness, detect selfie reuse, and identify deepfake risk." },
                { title: "AML Screening", desc: "Screen customers against sanctions, PEP, adverse media, high-risk countries, and internal watchlists." },
                { title: "Synthetic Identity Detection", desc: "Detect duplicate attributes, reused documents, shared devices, suspicious identity combinations, and graph-linked identities." },
                { title: "Risk-Based Decisions", desc: "Automatically approve, review, reject, request more information, or escalate to enhanced due diligence." }
              ].map((cap, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[32px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{cap.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: END-TO-END KYC WORKFLOW ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Onboarding Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              From Application to Decision in One Connected Workflow.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense orchestrates the full onboarding journey from document upload to compliance decision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "1. Collect Applicant Data", desc: "Capture customer identity information, address, date of birth, nationality, documents, and onboarding metadata." },
                { title: "2. Upload & Verify Documents", desc: "Extract fields, validate MRZ, check expiry, inspect metadata, detect manipulation, and identify duplicate documents." },
                { title: "3. Perform Biometric Checks", desc: "Compare the applicant selfie to the document portrait and evaluate liveness or deepfake risk." },
                { title: "4. Screen AML Risk", desc: "Screen names, dates of birth, nationality, addresses, and document attributes against sanctions, PEP, adverse media, and watchlists." },
                { title: "5. Evaluate Identity Graph", desc: "Link applicants to shared devices, documents, IP addresses, faces, wallets, beneficiaries, and known fraud clusters." },
                { title: "6. Score Risk", desc: "Generate a unified onboarding risk score with reason codes, evidence, and confidence levels." },
                { title: "7. Decide Onboarding outcome", desc: "Approve, review, reject, request more information, or escalate to EDD." },
                { title: "8. Store Evidence logs", desc: "Preserve audit-ready onboarding evidence, analyst notes, decisions, and regulatory history." }
              ].map((step, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <span className="text-xs font-black text-brand-lime font-mono block">STAGE 0{idx+1}</span>
                  <h4 className="text-base font-bold font-manrope text-neutral-900">{step.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: DOCUMENT + BIOMETRIC VERIFICATION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Unified validation</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Verify Documents and Applicants Together.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              KYC decisions are stronger when document checks and biometric checks work together.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "OCR Field Extraction", desc: "Extract trusted identity fields from passports, IDs, utility bills, bank statements, and proof-of-address documents." },
                { title: "MRZ Validation", desc: "Validate passport MRZ checksums, dates, document numbers, and expiry integrity." },
                { title: "Tampering & EXIF forensics", desc: "Detect suspicious PDF metadata, EXIF anomalies, editing tools, compression artifacts, and manipulated files." },
                { title: "Face Match Similarity Check", desc: "Compare the document portrait with the submitted selfie to verify a close match." },
                { title: "Selfie Liveness Validation", desc: "Confirm the applicant is physically present and not using a static image or replay attack." },
                { title: "Deepfake Risk detection", desc: "Detect synthetic media, selfie manipulation, face morphing, and replay attempts." }
              ].map((chk, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{chk.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{chk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: AML SCREENING FOR ONBOARDING ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Sanctions Screening</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Screen Every Applicant Against Compliance Risk.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense embeds AML screening directly into onboarding decisions so compliance risk is evaluated before customer approval.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Global Sanctions Lists", desc: "Screen against OFAC, UN, EU, UK OFSI/HMT, and OpenSanctions lists automatically." },
                { title: "PEP Exposure checks", desc: "Identify domestic and foreign politically exposed persons during onboarding." },
                { title: "Adverse Media Matches", desc: "Flag individuals mentioned in negative news or financial crime databases." },
                { title: "Fuzzy Name Matching", desc: "Leverage intelligent triage and alias matching to resolve common name variations." },
                { title: "High-Risk Countries", desc: "Flag issuing jurisdictions and citizenships on watchlists." },
                { title: "False-Positive Resolution", desc: "Fuzzy matching reduces manual review queue burden." }
              ].map((aml, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{aml.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{aml.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: SYNTHETIC IDENTITY PREVENTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Synthetic ID Checks</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Detect Synthetic and Reused Identities Before Approval.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links identity attributes, devices, documents, biometrics, behavioral signals, and graph connections to identify synthetic identities and multi-account abuse.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Duplicate Document Detection", desc: "The same document or document number appears across multiple accounts or applications." },
                { title: "Reused Face or Selfie", desc: "The same biometric signal appears across multiple onboarding attempts." },
                { title: "Shared Device or IP footprint", desc: "Multiple applicants are connected through the same device, IP address, emulator, or suspicious network." },
                { title: "Identity Attribute Mismatch", desc: "Applicant information conflicts with document fields, address information, or screening results." },
                { title: "Thin or Inconsistent Identity profile", desc: "Identity attributes appear incomplete, newly created, or inconsistent across sources." },
                { title: "Fraud Graph Links", desc: "Applicant is connected to a known fraud ring, mule network, or high-risk entity cluster." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{sig.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: RISK-BASED ONBOARDING DECISIONS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Decisioning</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Approve Good Customers Faster. Escalate Risky Ones Automatically.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense helps teams reduce onboarding friction while improving fraud and compliance controls.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Auto-Approve", desc: "Low-risk applicants can be approved automatically to minimize friction." },
                { title: "Manual Review Queue", desc: "Suspicious applicants are routed to analysts with full evidence context." },
                { title: "Auto-Reject", desc: "High-risk applicants can be rejected based on clear fraud, compliance, or identity risk." },
                { title: "Request More Information", desc: "Ask customers to resubmit documents, provide additional proof, or complete extra verification." },
                { title: "Require Selfie Liveness", desc: "Trigger biometric verification when identity risk increases." },
                { title: "Escalate to EDD", desc: "Route high-risk or PEP-exposed applicants into enhanced due diligence workflows." }
              ].map((dec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{dec.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{dec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: ANALYST REVIEW WORKSPACE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Column Content */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Triage Tools</span>
                <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                  Review KYC Risk With Full Evidence Context.
                </h2>
                <p className="text-base text-zinc-600 font-inter leading-relaxed">
                  DeepSense gives analysts one workspace to review documents, screening matches, identity risk, device signals, graph links, and decision history.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "OCR field comparison dashboard", desc: "Compare extracted passport details against the submitted applicant form." },
                    { title: "Sanctions / PEP match panels", desc: "Examine screening hits with highlighted confidence percentages and alias listings." },
                    { title: "Audit history and notes logs", desc: "Record analyst review notes and document escalation rationale immutably." }
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

              {/* Right Column: Visual triage dashboard queue mockup */}
              <div className="lg:col-span-7 bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="space-y-6 relative z-10 text-white text-xs">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">ANALYST KYC PORTAL</span>
                  
                  <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 font-mono text-[10px] text-zinc-400">
                    <div className="flex justify-between items-center text-white/55 border-b border-white/5 pb-2">
                      <span>Target: Elizabeth Vane</span>
                      <span className="text-brand-lime font-bold">MATCH_CLEARED</span>
                    </div>
                    <div className="flex justify-between items-center text-white/55">
                      <span>Document Status</span>
                      <span className="text-brand-lime font-bold">VALID_PASSPORT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 10: CUSTOMER DUE DILIGENCE & EDD ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Enhanced Due Diligence</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Support CDD, EDD, and Compliance Review Workflows.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense supports risk-based customer due diligence by escalating higher-risk applicants into enhanced review processes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Customer Risk Tiering", desc: "Assign customers to low, medium, high, or critical risk tiers based on onboarding signals." },
                { title: "Enhanced Due Diligence", desc: "Trigger EDD for PEP exposure, sanctions risk, adverse media, high-risk jurisdictions, or suspicious identity signals." },
                { title: "Evidence Collection", desc: "Attach documents, screening matches, analyst notes, graph evidence, and customer history." },
                { title: "Review Workflows", desc: "Route EDD cases to compliance officers or senior analysts automatically." },
                { title: "Periodic Review Cycles", desc: "Schedule future review cycles based on customer risk tier." },
                { title: "Audit Readiness", desc: "Maintain complete evidence and decision history for compliance reviews." }
              ].map((edd, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{edd.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{edd.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 11: INTEGRATION WITH RISK PLATFORM ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Unified Platform</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              KYC Risk Connected to Fraud, AML, Graph, and Case Management.
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense connects onboarding risk to the rest of the financial crime platform so customer risk is monitored continuously after approval.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Fraud Detection Contribution", desc: "KYC signals contribute to future transaction and account risk scoring." },
                { title: "AML Monitoring feeds", desc: "Customer screening and risk tiering feed ongoing monitoring workflows." },
                { title: "Graph Intelligence links", desc: "Identity relationships, devices, documents, and linked accounts feed graph risk." },
                { title: "ATO Prevention", desc: "Suspicious devices and sessions during onboarding influence account takeover risk." },
                { title: "Case Management triggers", desc: "High-risk onboarding attempts can automatically create review cases." },
                { title: "Webhooks & SIEM Streams", desc: "KYC decisions and risk events can be exported to downstream systems through webhooks." }
              ].map((int, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-8 rounded-[36px] flex flex-col gap-4">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{int.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{int.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 12: USE CASES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Sectors</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Designed for Regulated and High-Risk Onboarding.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Digital Banking", desc: "Verify customers, meet compliance requirements, and detect mule onboarding before accounts are opened." },
                { title: "Fintech Wallets", desc: "Detect fake KYC, risky devices, synthetic identities, and payment abuse before wallet activation." },
                { title: "Crypto Exchanges", desc: "Screen users, verify documents, detect sanctioned exposure, and reduce fake identity onboarding." },
                { title: "Lending Platforms", desc: "Validate identity and income documents while detecting synthetic identity and application fraud." },
                { title: "Telecom Wallets", desc: "Prevent SIM-linked wallet abuse, fake identity submissions, and duplicate onboarding." },
                { title: "Gaming & Betting", desc: "Stop multi-accounting, bonus abuse, fake documents, and duplicate KYC profiles." }
              ].map((ind, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 hover:shadow-xl hover:border-brand-lime/20 transition-all duration-300">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{ind.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 13: SECURITY & PRIVACY ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">Data Protection</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Built for Sensitive Identity and Compliance Data.
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense is designed for identity workflows where personal data, documents, biometric checks, and regulatory evidence require strict governance.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full text-left">
              {[
                "Encrypted fields", "Secure storage", "Hashed identifiers", "Role-based access",
                "Tenant isolation", "Audit logging", "Retention policies", "Purge workflows"
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">Onboarding FAQs</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "What is KYC verification in DeepSense?", 
                  a: "DeepSense KYC verification combines document checks, biometric checks, AML screening, device intelligence, graph analysis, and risk scoring to evaluate customer onboarding risk." 
                },
                { 
                  q: "Does DeepSense support document upload and OCR?", 
                  a: "Yes. DeepSense supports document upload, OCR extraction, MRZ validation, metadata analysis, and document fraud signals." 
                },
                { 
                  q: "Can DeepSense screen applicants for sanctions and PEP risk?", 
                  a: "Yes. Extracted identity fields can be screened against sanctions, PEP, adverse media, internal watchlists, and high-risk country rules." 
                },
                { 
                  q: "Can DeepSense detect synthetic identities?", 
                  a: "Yes. DeepSense detects duplicate documents, reused identity attributes, shared devices, risky onboarding patterns, and fraud graph links." 
                },
                { 
                  q: "Can high-risk applicants go to manual review?", 
                  a: "Yes. DeepSense can route applicants to analyst review, request more information, require liveness, reject onboarding, or escalate to EDD." 
                },
                { 
                  q: "Is KYC evidence auditable?", 
                  a: "Yes. DeepSense stores verification evidence, analyst notes, decision history, audit logs, and review workflows." 
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
              <span className="text-brand-lime font-manrope text-[11px] font-extrabold uppercase tracking-widest font-bold">Ready to modernize onboarding risk?</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Verify real customers and stop risky <br />
                <span className="text-white/40">identities before they enter your platform.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                DeepSense connects document verification, biometrics, AML screening, synthetic identity detection, device intelligence, and case workflows into one KYC decisioning platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/product/synthetic-identity" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Synthetic Identity Detection
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
