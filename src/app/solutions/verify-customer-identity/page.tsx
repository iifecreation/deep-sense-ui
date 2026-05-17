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
  Briefcase
} from "lucide-react";

export default function VerifyCustomerIdentityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("financial");
  
  // Interactive identity verification sandbox parameters
  const [identityInput, setIdentityInput] = useState<string>("authentic");
  const [biometricCheck, setBiometricCheck] = useState<boolean>(true);
  const [complianceTier, setComplianceTier] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic onboarding trust parameters
  const calculateOnboardingTrust = () => {
    let score = 97; // base trust score
    
    if (identityInput === "synthetic") score -= 52;
    if (!biometricCheck) score -= 22;
    if (complianceTier) score -= 15;
    
    score = Math.max(score, 7);
    
    let status = "VERIFIED";
    let color = "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
    if (score <= 35) {
      status = "BLOCKED";
      color = "text-red-500 bg-red-500/10 border-red-500/20";
    } else if (score <= 65) {
      status = "HIGH RISK";
      color = "text-amber-500 bg-amber-500/10 border-amber-500/20";
    } else if (score <= 85) {
      status = "ADDITIONAL REVIEW REQUIRED";
      color = "text-orange-400 bg-orange-400/10 border-orange-400/20";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateOnboardingTrust();

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
                CUSTOMER IDENTITY & DIGITAL TRUST INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Verify Customer Identities and Secure <br />
                <span className="text-zinc-400">Digital Onboarding in Real Time</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps enterprises verify customer identities, automate onboarding workflows, detect identity fraud, and strengthen digital trust using AI-powered verification, behavioral analytics, and biometric intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/verify-customer-identity#workflows" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Test Identity Verification
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for banks, fintechs, telecoms, insurers, healthcare providers, marketplaces, government onboarding systems, and enterprise digital platforms.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Intelligent Identity Verification Sandbox */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Intelligent Identity Verification Sandbox</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">IDENTITY VERIFICATION ENGINE</span>
                </div>

                <p className="text-zinc-400 text-xs font-inter max-w-2xl">
                  A live onboarding and identity intelligence environment where users can upload identity documents, run biometric verification, test liveness detection, inspect onboarding trust scores, simulate fraud detection, visualize onboarding risk, analyze behavioral identity signals, and review identity verification workflows.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls & Upload */}
                  <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Left Panel — Identity Upload & Capture</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Identity input</span>
                        <select 
                          value={identityInput} 
                          onChange={(e) => setIdentityInput(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="authentic">Valid biological passport</option>
                          <option value="synthetic">AI-generated synthetic ID</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Biometric check (selfie)</span>
                        <input 
                          type="checkbox" 
                          checked={biometricCheck} 
                          onChange={(e) => setBiometricCheck(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">KYC compliance tier</span>
                        <input 
                          type="checkbox" 
                          checked={complianceTier} 
                          onChange={(e) => setComplianceTier(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] space-y-2 font-mono">
                      <span className="text-zinc-400 block uppercase font-bold">Supported Credentials</span>
                      <div className="grid grid-cols-2 gap-2 text-zinc-500">
                        <span>• passports</span>
                        <span>• national IDs</span>
                        <span>• residency permits</span>
                        <span>• driver's licenses</span>
                        <span>• utility bills</span>
                        <span>• liveness verification</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Column: Verification Intelligence Engine */}
                  <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Center Panel — Verification Intelligence Engine</span>
                      
                      <div className="space-y-2 text-xs">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between">
                          <span className="text-zinc-400">OCR extraction</span>
                          <span className="text-zinc-300">COMPLETED</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between">
                          <span className="text-zinc-400">Biometric match confidence</span>
                          <span className="text-zinc-300">{biometricCheck ? "98.7%" : "0.0%"}</span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between">
                          <span className="text-zinc-400">Onboarding confidence</span>
                          <span className="text-zinc-300">{score}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• document authenticity indicators active</span>
                      <span>• AML and sanctions checks executed</span>
                      <span>• behavioral verification signals processed</span>
                    </div>
                  </div>

                  {/* Right Column: Fraud & Risk Analysis */}
                  <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block">Right Panel — Fraud & Risk Analysis</span>
                      
                      <div className="space-y-2 text-xs">
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between">
                          <span className="text-zinc-400">Synthetic probability</span>
                          <span className={identityInput === "synthetic" ? "text-red-400" : "text-emerald-400"}>
                            {identityInput === "synthetic" ? "94.2%" : "2.1%"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between">
                          <span className="text-zinc-400">Deepfake probability</span>
                          <span className={!biometricCheck ? "text-red-400" : "text-emerald-400"}>
                            {!biometricCheck ? "88.5%" : "0.4%"}
                          </span>
                        </div>
                        <div className="p-3 bg-black/40 border border-white/5 rounded-xl flex justify-between">
                          <span className="text-zinc-400">Device anomalies</span>
                          <span className="text-zinc-300">NONE DETECTED</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-4 text-[9px] text-zinc-500 space-y-1">
                      <span>• onboarding inconsistencies verified</span>
                      <span>• spoofing indicators monitored</span>
                      <span>• repeated identity attributes indexed</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Panel — Identity Decision Console */}
                <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 font-mono text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-2">Bottom Panel — Identity Decision Console</span>
                    <div className="flex items-center gap-3">
                      <span className={`px-4 py-1.5 rounded-full border text-[11px] font-black tracking-wider ${color}`}>
                        {status}
                      </span>
                      <span className="text-zinc-400">Onboarding trust scorecard resolved</span>
                    </div>
                  </div>
                  <div className="text-zinc-500 space-y-1">
                    <div>Reason code: <span className="text-zinc-300">{identityInput === "synthetic" ? "SYNTHETIC_CREDENTIALS" : "AUTHENTIC_IDENTITY"}</span></div>
                    <div>Compliance note: <span className="text-zinc-300">{complianceTier ? "ENHANCED_KYC_OK" : "STANDARD_PASS"}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: PROBLEMS / CHALLENGES ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-zinc-50/50">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Identity Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Digital Onboarding Ecosystems Face Increasing Identity Fraud Risk
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern enterprises increasingly rely on: remote onboarding, digital account opening, biometric authentication, identity verification workflows, KYC operations, mobile onboarding, customer trust ecosystems, and digital access management. Fraudsters increasingly exploit onboarding systems using: synthetic identities, stolen credentials, forged documents, deepfake biometrics, account takeover, AI-generated onboarding artifacts, device spoofing, and onboarding automation. Traditional identity verification systems often struggle with: real-time onboarding trust analysis, synthetic identity detection, biometric spoof prevention, cross-session verification, onboarding scalability, and operational efficiency. Without connected identity intelligence, organizations face: onboarding fraud, account compromise, AML exposure, customer trust erosion, operational inefficiencies, compliance failures, and reputational damage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Synthetic Identity Fraud", desc: "Fraudsters combine fake and real credentials to create fraudulent customer profiles.", icon: <Shield /> },
                { title: "Deepfake & Biometric Spoofing", desc: "AI-generated biometric attacks increase onboarding risk.", icon: <Users /> },
                { title: "Account Takeover", desc: "Compromised credentials enable unauthorized access and identity abuse.", icon: <Sliders /> },
                { title: "Manual KYC Bottlenecks", desc: "Verification teams struggle with operational scale and consistency.", icon: <Clock /> },
                { title: "Cross-Channel Identity Inconsistencies", desc: "Disconnected onboarding workflows reduce trust visibility.", icon: <Building /> },
                { title: "AML & Compliance Pressure", desc: "Organizations face growing KYC and financial crime obligations.", icon: <Sliders /> }
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

            {/* Identity Verification Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">IDENTITY VERIFICATION LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Document Upload", desc: "Patient onboarding verified dynamically using liveness checks." },
                  { title: "2. Biometric Capture", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Trust Scoring", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Fraud Detection", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Escalation Workflows", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
                  { title: "6. Governance Operations", desc: "Approved payouts executed securely with complete compliance reports." }
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
              Unified Identity Verification and Digital Trust Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines biometric verification, OCR intelligence, behavioral analytics, graph intelligence, device trust analytics, AI anomaly detection, and governance automation into a unified identity trust platform. The platform continuously evaluates: onboarding behavior, biometric authenticity, document legitimacy, device trust, behavioral consistency, identity relationships, fraud indicators, AML exposure, and operational anomalies. DeepSense enables organizations to: automate onboarding verification, reduce identity fraud, strengthen KYC operations, improve customer trust, detect onboarding abuse, accelerate investigations, and modernize identity governance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Automate onboarding verification", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Reduce identity fraud", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Strengthen KYC operations", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Improve customer trust", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Detect onboarding abuse", desc: "Support digital GRC with active security control overlays." },
                { title: "Accelerate investigations", desc: "Block duplicate submissions before cash-outs settle." }
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
              Customer Identity & Verification Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Document Verification", desc: "Verify passports, national IDs, driver's licenses, proof-of-address documents, business identity records, and onboarding documentation." },
                { title: "OCR & Data Extraction", desc: "Extract names, dates of birth, ID numbers, MRZ data, barcode information, and structured onboarding metadata." },
                { title: "Biometric Verification", desc: "Validate facial matching, selfie comparison, liveness indicators, biometric authenticity, spoofing resistance, and deepfake detection." },
                { title: "Identity Trust Scoring", desc: "Generate onboarding trust scores, identity legitimacy ratings, behavioral trust indicators, fraud exposure analytics, and customer confidence levels." },
                { title: "Behavioral Analytics", desc: "Analyze onboarding behavior, session consistency, interaction patterns, automation indicators, behavioral anomalies, and trust signals." },
                { title: "Device & Session Intelligence", desc: "Detect spoofed devices, emulator environments, suspicious onboarding sessions, shared infrastructure, and account takeover indicators." },
                { title: "Graph Intelligence", desc: "Visualize linked identities, shared onboarding attributes, fraud ecosystems, connected devices, and synthetic identity networks." },
                { title: "AML & Compliance Monitoring", desc: "Monitor sanctions exposure, high-risk onboarding, suspicious identity patterns, KYC obligations, and operational compliance risk." },
                { title: "Case Management & Investigations", desc: "Coordinate onboarding investigations, KYC escalations, fraud reviews, evidence management, and remediation workflows." },
                { title: "Governance & Audit Readiness", desc: "Support identity governance, onboarding transparency, audit workflows, compliance reporting, and operational resilience." }
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
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100" id="workflows">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Platform Steps</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20">
              How DeepSense Verifies Customer Identities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests identity documents, biometric captures, onboarding telemetry, device signals, authentication events, customer metadata, and behavioral interactions." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using OCR intelligence, biometric analysis, behavioral analytics, graph intelligence, device trust analytics, and AML screening." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates identity legitimacy, biometric authenticity, onboarding consistency, fraud indicators, device integrity, and behavioral trust." },
                { title: "Step 4 — Decisioning", desc: "The system generates onboarding trust scores, fraud alerts, verification recommendations, KYC escalations, and compliance warnings." },
                { title: "Step 5 — Action", desc: "High-risk onboarding triggers identity investigations, compliance reviews, remediation workflows, governance reporting, and operational escalation." }
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
              Built for Digital Identity and Trust Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "financial", label: "Financial Services" },
                { id: "psp", label: "Fintech Platforms" },
                { id: "telecom", label: "Telecom Providers" },
                { id: "healthcare", label: "Healthcare Organizations" },
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
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect customer onboarding, digital banking access, lending applications, and AML operations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "psp" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure wallet onboarding, payment identity verification, digital account creation, and transaction trust.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "telecom" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor subscriber verification, SIM registration, onboarding trust, and identity fraud exposure.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "healthcare" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Verify patient identities, healthcare onboarding, insurance validation, and operational trust.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "marketplace" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent fake seller onboarding, account farming, identity manipulation, and trust abuse.</h4>
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
              Real-Time Identity and Onboarding Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Identity Verification Operations Dashboard", desc: "Onboarding alerts, biometric verification analytics, fraud visibility, and compliance indicators." },
                { title: "Customer Trust Intelligence", desc: "Onboarding trust scoring, behavioral indicators, identity legitimacy analytics, and fraud probability visibility." },
                { title: "Biometric & Device Dashboard", desc: "Liveness monitoring, spoofing detection, device trust visibility, and onboarding session analytics." },
                { title: "Identity Relationship Dashboard", desc: "Linked identities, shared devices, onboarding ecosystems, and graph intelligence visibility." },
                { title: "Investigation Workspace", desc: "Onboarding timelines, graph investigations, evidence management, KYC escalations, and GRC compliance reporting." }
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
                Enterprise-Grade Security for Identity Verification Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and compliance-ready sovereign hosting options for every single digital identity verified.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Identity Decisions", desc: "Every onboarding decision includes reason codes, biometric evidence, behavioral indicators, graph relationships, and verification context." },
                { title: "Audit Logging", desc: "Track onboarding reviews, verification escalations, fraud investigations, and governance workflows." },
                { title: "Multi-Tenant Identity Security", desc: "Secure operational separation across onboarding environments, operational teams, and identity workflows." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with KYC obligations, AML frameworks, identity governance, and privacy requirements." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">IDENTITY VERIFICATION FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense verify customer identities in real time?", 
                  a: "Yes. DeepSense continuously evaluates identity documents, biometric verification, behavioral analytics, and onboarding trust indicators in real time." 
                },
                { 
                  q: "Does DeepSense support biometric and liveness verification?", 
                  a: "Yes. The platform supports facial verification, selfie matching, liveness analysis, spoofing detection, and deepfake prevention." 
                },
                { 
                  q: "Can DeepSense detect synthetic identities?", 
                  a: "Yes. DeepSense combines behavioral analytics, graph intelligence, OCR verification, and onboarding telemetry to detect synthetic identities." 
                },
                { 
                  q: "Does DeepSense support AML and KYC operations?", 
                  a: "Yes. The platform supports sanctions screening, onboarding governance, suspicious onboarding monitoring, and compliance workflows." 
                },
                { 
                  q: "Can DeepSense automate onboarding verification?", 
                  a: "Yes. DeepSense automates document verification, biometric analysis, trust scoring, escalation workflows, and onboarding intelligence." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise-scale onboarding ecosystems?", 
                  a: "Yes. DeepSense is designed for large-scale financial services, fintechs, telecoms, healthcare organizations, marketplaces, and enterprise onboarding operations." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Trusted Digital Identity and Onboarding Experiences</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure digital pipelines and prevent <br />
                <span className="text-white/40 font-bold">identity fraud dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Verify identities, prevent onboarding fraud, automate KYC workflows, and strengthen digital trust using enterprise-grade identity intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/verify-customer-identity#workflows" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Test Identity Verification
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
