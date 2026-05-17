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
  FileSpreadsheet,
  Workflow,
  Search,
  Check,
  Building,
  Sliders,
  ClipboardCheck,
  Briefcase,
  Upload,
  FileText
} from "lucide-react";

export default function DetectDocumentFraudPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive Document Verification sandbox parameters
  const [docType, setDocType] = useState<string>("passport_auth");
  const [analyzing, setAnalyzing] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Dynamic document intelligence profiles
  const getDocumentProfile = () => {
    switch (docType) {
      case "passport_auth":
        return {
          name: "ADRIAN OKOYE",
          id: "PP-9827361",
          dob: "14-SEP-1988",
          authority: "FEDERAL MINISTRY OF INTERNAL AFFAIRS",
          expiration: "28-OCT-2031",
          nationality: "NIGERIAN",
          address: "14 SHAW ROAD, IKOYI, LAGOS",
          mrz: "P<NGROKOYE<<ADRIAN<<<<<<<<<<<<<<<<<<<<<<",
          risk: 4,
          status: "VERIFIED",
          color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
          indicators: {
            manipulatedText: "Clear Pass",
            fontConsistency: "Uniform Match",
            aiEditArtifacts: "None Detected",
            templateMismatch: "Perfect Match",
            metadataAnomalies: "Exif Validated",
          },
          reasonCodes: "DOC-CLEAR-01 (All authentication checks passed successfully)"
        };
      case "id_tampered":
        return {
          name: "ADRIAN QKOYE", // Tampered letter
          id: "PP-98Z7361", // Font mismatch
          dob: "14-SEP-1988",
          authority: "FEDERAL MINISTRY OF INTERNAL AFFAIRS",
          expiration: "28-OCT-2022", // Expired
          nationality: "NIGERIAN",
          address: "14 SHAW ROAD, IKOYI, LAGOS",
          mrz: "P<NGROKOYE<<ADRIAN<<<<<<<<<<<<<<<<<<<<<<",
          risk: 86,
          status: "FRAUD DETECTED",
          color: "text-red-500 bg-red-500/10 border-red-500/20",
          indicators: {
            manipulatedText: "ID / name mismatch flag active",
            fontConsistency: "Pixel structure variation in 'Q'",
            aiEditArtifacts: "Inconsistent compression noise",
            templateMismatch: "Standard alignment discrepancy",
            metadataAnomalies: "Photoshop software signature found",
          },
          reasonCodes: "DOC-TAMPERED-09 (Severe character manipulation and metadata anomaly)"
        };
      case "ai_synthetic":
        return {
          name: "CHIDI ADEBAYO",
          id: "DL-8372649",
          dob: "02-FEB-1995",
          authority: "ROAD SAFETY COMMISSION",
          expiration: "19-AUG-2029",
          nationality: "NIGERIAN",
          address: "8 MARINA STREET, LAGOS ISLAND",
          mrz: "DL<NGRADB<<<CHIDI<<<<<<<<<<<<<<<<<<<<<<<<<",
          risk: 97,
          status: "HIGH RISK",
          color: "text-red-500 bg-red-500/10 border-red-500/20",
          indicators: {
            manipulatedText: "AI-generated text layout alignment drift",
            fontConsistency: "Non-standard character margins",
            aiEditArtifacts: "GAN rendering artifacts in facial patch",
            templateMismatch: "Security watermark structure mismatch",
            metadataAnomalies: "Synthetic file signature detected",
          },
          reasonCodes: "DOC-SYNTHETIC-03 (Generative Adversarial Network artifact matched)"
        };
      default:
        return getDocumentProfile();
    }
  };

  const profile = getDocumentProfile();

  const handleDocChange = (type: string) => {
    setAnalyzing(true);
    setDocType(type);
    setTimeout(() => {
      setAnalyzing(false);
    }, 800);
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
                <Smartphone className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                DOCUMENT FRAUD & FORENSIC INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Detect Forged, Manipulated, and <br />
                <span className="text-zinc-400">Synthetic Documents in Real Time</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps enterprises detect document fraud, validate identities, analyze uploaded files, and automate forensic verification workflows using AI-powered OCR intelligence, behavioral analytics, and real-time fraud detection.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/detect-document-fraud#sandbox" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Test Document Verification
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for KYC teams, financial institutions, fintechs, telecoms, marketplaces, government onboarding systems, and enterprise identity verification operations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: AI-Powered Document Verification Sandbox */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden" id="sandbox">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">AI-Powered Document Verification Sandbox</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">FORENSIC ANALYSIS STACK</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Upload Sandbox Simulator */}
                  <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between gap-6">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-4 font-mono">Left Panel — File Upload</span>
                      
                      <div className="border border-dashed border-white/15 p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 bg-black/20 hover:bg-black/40 transition-colors">
                        <Upload className="w-8 h-8 text-zinc-500 animate-bounce" />
                        <div className="space-y-1">
                          <span className="text-xs font-bold block">Drag and drop document file</span>
                          <span className="text-[9px] text-zinc-500 uppercase font-mono">PDF, PNG, JPG, HEIC, TIFF</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <span className="text-[10px] uppercase font-mono text-zinc-400 block">Select document type simulation</span>
                      <div className="flex flex-col gap-2 font-mono text-xs">
                        {[
                          { id: "passport_auth", label: "Standard Passport (Authentic)" },
                          { id: "id_tampered", label: "Manipulated ID (Tampered Text)" },
                          { id: "ai_synthetic", label: "Generative AI Passport (Synthetic)" }
                        ].map((btn) => (
                          <button
                            key={btn.id}
                            onClick={() => handleDocChange(btn.id)}
                            className={`px-4 py-2.5 rounded-xl border text-left transition-all ${docType === btn.id ? "bg-red-600 text-white border-red-500 shadow-lg" : "bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10"}`}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Column: OCR & Data Extraction */}
                  <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6 font-mono text-xs">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Center Panel — OCR & Identity Extraction</span>

                    {analyzing ? (
                      <div className="flex flex-col items-center justify-center h-[280px] gap-3">
                        <RefreshCw className="w-8 h-8 text-red-500 animate-spin" />
                        <span className="text-zinc-500 text-xs">PARSING ID DATA MATRIX...</span>
                      </div>
                    ) : (
                      <div className="space-y-3.5 bg-black/40 border border-white/5 p-5 rounded-2xl">
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-zinc-500">HOLDER NAME:</span>
                          <span className="text-white font-bold">{profile.name}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-zinc-500">ID NUMBER:</span>
                          <span className="text-white font-bold">{profile.id}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-zinc-500">DATE OF BIRTH:</span>
                          <span className="text-white font-bold">{profile.dob}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-zinc-500">AUTHORITY:</span>
                          <span className="text-white font-bold text-right max-w-[150px] leading-tight block">{profile.authority}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-zinc-500">EXPIRATION:</span>
                          <span className="text-white font-bold">{profile.expiration}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-zinc-500">NATIONALITY:</span>
                          <span className="text-white font-bold">{profile.nationality}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-zinc-500">ADDRESS:</span>
                          <span className="text-white font-bold text-right max-w-[150px] leading-tight block">{profile.address}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                          <span className="text-zinc-500">MRZ BLOCK:</span>
                          <span className="text-red-400 font-bold block text-[10px] break-all">{profile.mrz}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Fraud Analysis Engine */}
                  <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6 font-mono text-xs flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-4">Right Panel — Fraud Analysis Engine</span>
                      
                      {analyzing ? (
                        <div className="flex flex-col items-center justify-center h-[180px] gap-3">
                          <RefreshCw className="w-8 h-8 text-red-500 animate-spin" />
                          <span className="text-zinc-500 text-xs">ANALYZING FORGERY INDICATORS...</span>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                            <span className="text-zinc-400 text-[10px]">Manipulated text</span>
                            <span className="text-white font-bold text-[10px]">{profile.indicators.manipulatedText}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                            <span className="text-zinc-400 text-[10px]">Font consistency</span>
                            <span className="text-white font-bold text-[10px]">{profile.indicators.fontConsistency}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                            <span className="text-zinc-400 text-[10px]">AI-edit artifacts</span>
                            <span className="text-white font-bold text-[10px]">{profile.indicators.aiEditArtifacts}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                            <span className="text-zinc-400 text-[10px]">Template mismatch</span>
                            <span className="text-white font-bold text-[10px]">{profile.indicators.templateMismatch}</span>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                            <span className="text-zinc-400 text-[10px]">Metadata anomalies</span>
                            <span className="text-white font-bold text-[10px]">{profile.indicators.metadataAnomalies}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="bg-black/60 border border-white/5 p-4 rounded-2xl flex justify-between items-center mt-4">
                      <div>
                        <span className="text-zinc-400 text-[9px] block">FORGERY RISK</span>
                        <span className="text-xl font-bold text-white">{profile.risk}%</span>
                      </div>
                      <span className={`text-[10px] px-3 py-1.5 rounded-lg border font-bold uppercase ${profile.color}`}>
                        {profile.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Panel — Authenticity Decision Console */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl font-mono text-xs">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-4">Bottom Panel — Authenticity Decision Console</span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                      <span className="text-[9px] text-zinc-500 uppercase block">REASON CODES</span>
                      <p className="text-[10px] text-zinc-300 mt-1">{profile.reasonCodes}</p>
                    </div>
                    <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                      <span className="text-[9px] text-zinc-500 uppercase block">ANALYST NOTES</span>
                      <p className="text-[10px] text-zinc-300 mt-1">Cross-check passport signature field and MRZ checksum character index against database.</p>
                    </div>
                    <div className="p-4 bg-black/40 border border-white/5 rounded-2xl flex items-center justify-between">
                      <div>
                        <span className="text-[9px] text-zinc-500 uppercase block">DECISION ESCALATION</span>
                        <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">Automated API routing</span>
                      </div>
                      <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all text-[10px]">
                        Review Case
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS / CHALLENGES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Identity Verification Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Digital Onboarding Systems Face Growing Document Fraud Risks
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern onboarding and verification ecosystems process identity documents, passports, driver's licenses, utility bills, bank statements, business registration files, tax documents, and compliance paperwork. Fraudsters increasingly exploit onboarding systems using forged IDs, synthetic identities, manipulated PDFs, AI-generated documents, deepfake identity artifacts, metadata tampering, document template cloning, and stolen identity records. Traditional verification systems often struggle with sophisticated forgery detection, real-time OCR intelligence, AI-generated manipulation, onboarding scalability, manual review bottlenecks, and cross-document consistency analysis. Without intelligent document verification, organizations face onboarding fraud, account abuse, AML exposure, synthetic identity losses, compliance failures, reputational damage, and operational inefficiency.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Forged Identity Documents", desc: "Fraudsters increasingly manipulate government-issued documents using advanced editing techniques.", icon: <Shield /> },
                { title: "Synthetic Identity Fraud", desc: "Fake identities combine manipulated records and fabricated credentials.", icon: <Users /> },
                { title: "AI-Generated Document Manipulation", desc: "AI tools make forged documents harder to detect using traditional systems.", icon: <Sliders /> },
                { title: "Manual Review Bottlenecks", desc: "Verification teams struggle with scale, speed, and operational consistency.", icon: <Clock /> },
                { title: "Cross-Document Inconsistencies", desc: "Fraudsters submit mismatched or conflicting onboarding records.", icon: <Building /> },
                { title: "Compliance Exposure", desc: "Poor verification processes increase AML, KYC, and regulatory risk.", icon: <Sliders /> }
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

            {/* Verification Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">VERIFICATION LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Document Upload", desc: "Patient onboarding verified dynamically using liveness checks." },
                  { title: "2. OCR extraction", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Forgery analysis", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Trust scoring", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Investigations", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
                  { title: "6. Governance workflows", desc: "Approved payouts executed securely with complete compliance reports." }
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

        {/* ================= SECTION 3: DEEPSENSE SOLUTION ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Connected Defense</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Unified Document Fraud & Verification Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines OCR intelligence, forensic analysis, behavioral analytics, metadata inspection, AI forgery detection, graph intelligence, and governance automation into a unified document trust platform. The platform continuously evaluates: document authenticity, identity consistency, metadata integrity, forgery indicators, onboarding trust, image manipulation, behavioral anomalies, graph relationships, and compliance exposure. DeepSense enables organizations to: automate document verification, reduce onboarding fraud, detect synthetic identities, accelerate KYC workflows, improve analyst efficiency, strengthen identity trust, and modernize fraud investigations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Automate document verification", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Reduce onboarding fraud", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Detect synthetic identities", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Accelerate KYC workflows", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Improve analyst efficiency", desc: "Support digital governance with active security control overlays." },
                { title: "Strengthen identity trust", desc: "Block duplicate submissions before cash-outs settle." }
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
              Document Verification & Fraud Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "OCR & Data Extraction", desc: "Extract names, addresses, ID numbers, expiration dates, MRZ data, barcode information, and structured document metadata." },
                { title: "Forgery Detection", desc: "Detect edited text, cloned regions, image manipulation, template mismatches, font inconsistencies, and suspicious overlays." },
                { title: "AI-Generated Fraud Detection", desc: "Identify synthetic document artifacts, AI-generated edits, deepfake imagery, manipulated facial regions, and artificial rendering patterns." },
                { title: "Metadata Intelligence", desc: "Analyze EXIF inconsistencies, PDF metadata anomalies, timestamp manipulation, software signatures, and hidden document attributes." },
                { title: "Cross-Document Verification", desc: "Compare multiple uploaded documents, identity consistency, onboarding alignment, address discrepancies, and behavioral mismatches." },
                { title: "Identity Risk Scoring", desc: "Generate identity trust scores, document authenticity ratings, forgery confidence levels, onboarding risk indicators, and fraud probability metrics." },
                { title: "Behavioral Analytics", desc: "Analyze upload behavior, onboarding patterns, device intelligence, session anomalies, and repeated fraud indicators." },
                { title: "Graph Intelligence", desc: "Visualize linked identities, repeated document usage, fraud rings, device relationships, and onboarding abuse networks." },
                { title: "Case Management & Investigations", desc: "Coordinate document investigations, KYC escalations, compliance reviews, evidence workflows, and remediation tracking." },
                { title: "Compliance & Governance Monitoring", desc: "Support KYC operations, AML obligations, onboarding governance, audit readiness, and verification transparency." }
              ].map((sig, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col justify-between shadow-xs hover:border-red-400 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-4">
                    <span className="text-red-500 font-bold block mb-2 font-mono">CAP-0{idx+1}</span>
                    <h4 className="text-base font-bold font-manrope text-neutral-900">{sig.title}</h4>
                    <p className="text-xs text-zinc-500 font-inter leading-relaxed">{sig.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: WORKFLOWS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Detects Document Fraud
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests uploaded IDs, onboarding files, supporting documents, PDF records, mobile captures, selfie verification images, and metadata telemetry." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches documents using OCR extraction, metadata analysis, AI forgery detection, image inspection, graph intelligence, and identity trust analytics." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates authenticity indicators, metadata consistency, onboarding trust, forgery patterns, synthetic identity signals, and behavioral anomalies." },
                { title: "Step 4 — Decisioning", desc: "The system generates document trust scores, fraud alerts, onboarding interventions, analyst escalations, and compliance warnings." },
                { title: "Step 5 — Action", desc: "High-risk submissions trigger document investigations, KYC reviews, remediation workflows, governance reporting, and compliance escalation." }
              ].map((step, idx) => (
                <div key={idx} className="p-8 bg-zinc-50 border border-zinc-100 rounded-3xl relative flex flex-col justify-between">
                  <div>
                    <span className="text-red-500 font-black text-sm block mb-3 font-mono">{step.title}</span>
                    <p className="text-zinc-500 text-xs font-inter leading-relaxed">{step.desc}</p>
                  </div>
                  {idx < 4 && <ArrowRight className="hidden md:block absolute top-[45%] -right-4 w-6 h-6 text-zinc-300 translate-x-1/2 z-10" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: USE CASES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100" id="use-cases">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Use Case Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Built for Digital Identity and Verification Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "financial", label: "Financial Institutions" },
                { id: "fintech", label: "Fintech Platforms" },
                { id: "telecom", label: "Telecom Providers" },
                { id: "government", label: "Government & Public Sector" },
                { id: "marketplace", label: "Digital Marketplaces" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-xs font-bold font-manrope uppercase transition-all tracking-wider ${activeTab === tab.id ? "bg-red-600 text-white shadow-lg" : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="w-full bg-white border border-zinc-200 p-8 md:p-12 rounded-[48px] shadow-sm text-left animate-in fade-in duration-300">
              {activeTab === "financial" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Verify customer onboarding, KYC submissions, identity records, and AML compliance documentation.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "fintech" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect digital onboarding, lending applications, account creation workflows, and identity trust.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor subscriber onboarding, SIM registration, document legitimacy, and onboarding abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "government" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure citizen onboarding, identity verification, document validation, and operational governance.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "marketplace" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent fake seller onboarding, account farming, synthetic identities, and digital trust abuse.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ================= SECTION 7: DASHBOARD & ANALYTICS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Operations Center</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              Real-Time Document Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Document Fraud Operations Dashboard", desc: "Forgery alerts, onboarding anomalies, OCR extraction analytics, and compliance visibility." },
                { title: "Identity Trust Intelligence", desc: "Identity trust scoring, synthetic identity visibility, onboarding consistency indicators, and behavioral anomalies." },
                { title: "Forensic Analysis Dashboard", desc: "Metadata inspection, image manipulation indicators, AI-generated artifact detection, and template inconsistencies." },
                { title: "Cross-Document Intelligence", desc: "Linked identities, repeated submissions, graph relationships, and fraud network visibility." },
                { title: "Investigation Workspace", desc: "Onboarding timelines, evidence management, forensic analysis tools, graph investigations, and governance reporting." }
              ].map((mod, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{mod.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: SECURITY & GOVERNANCE ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest">SaaS Governance</span>
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight">
                Enterprise-Grade Security for Verification Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and compliance-ready sovereign hosting options for every single document uploaded.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Verification Decisions", desc: "Every document verification decision includes reason codes, forgery indicators, OCR evidence, metadata analysis, and behavioral context." },
                { title: "Audit Logging", desc: "Track onboarding reviews, document escalations, compliance workflows, analyst investigations, and governance actions." },
                { title: "Multi-Tenant Verification Security", desc: "Secure operational separation across onboarding teams, enterprise environments, verification workflows, and governance operations." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with KYC obligations, AML regulations, identity governance, and operational resilience." },
                { title: "Flexible Deployment Models", desc: "Available via SaaS, private cloud, hybrid, or on-premise infrastructure." }
              ].map((sec, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col gap-3 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-bold font-manrope text-neutral-900 uppercase tracking-wider">{sec.title}</span>
                  <p className="text-xs text-zinc-500">{sec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">DOCUMENT VERIFICATION FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect forged documents in real time?", 
                  a: "Yes. DeepSense continuously analyzes uploaded files using OCR intelligence, metadata inspection, AI forgery detection, and behavioral analytics." 
                },
                { 
                  q: "Does DeepSense support AI-generated document fraud detection?", 
                  a: "Yes. The platform detects synthetic edits, AI-generated imagery, manipulated document structures, and deepfake artifacts." 
                },
                { 
                  q: "Can DeepSense automate KYC document verification?", 
                  a: "Yes. DeepSense automates onboarding verification workflows while supporting analyst review and escalation operations." 
                },
                { 
                  q: "Does DeepSense support OCR and metadata extraction?", 
                  a: "Yes. The platform extracts structured document data, metadata telemetry, MRZ records, barcode intelligence, and identity attributes." 
                },
                { 
                  q: "Can DeepSense detect synthetic identities?", 
                  a: "Yes. DeepSense correlates document authenticity, behavioral analytics, onboarding consistency, and graph intelligence to identify synthetic identities." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise-scale verification environments?", 
                  a: "Yes. DeepSense is designed for large-scale onboarding, KYC, telecom, fintech, and enterprise identity verification ecosystems." 
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

        {/* ================= SECTION 10: FINAL CTA ================= */}
        <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-50/50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Trusted Digital Onboarding and Verification Workflows</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure customer uploads and prevent <br />
                <span className="text-white/40 font-bold">document forgeries dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Detect forged documents, reduce onboarding fraud, automate verification workflows, and strengthen identity trust using enterprise-grade document fraud intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/detect-document-fraud#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Test Document Verification
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
