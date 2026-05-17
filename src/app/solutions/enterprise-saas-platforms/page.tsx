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
  ClipboardCheck
} from "lucide-react";

export default function EnterpriseSaaSPlatformsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("saas");
  
  // Interactive SaaS parameters
  const [tenantActivity, setTenantActivity] = useState<string>("normal");
  const [apiAccessVerification, setApiAccessVerification] = useState<boolean>(true);
  const [subscriptionLevel, setSubscriptionLevel] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic SaaS risk parameters
  const calculateSaaSRisk = () => {
    let score = 8; // base risk score
    
    if (tenantActivity === "spike") score += 42;
    if (subscriptionLevel) score += 35;
    if (!apiAccessVerification) score += 14;
    
    score = Math.min(score, 99);
    
    let status = "SECURE TENANT SESSION";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "CREDENTIAL STUFFING ATTACK DETECTED";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "UNTRUSTED API REQUEST PATTERN";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "HIGH VALUE SUBSCRIPTION DRIFT";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateSaaSRisk();

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
                ENTERPRISE SAAS FRAUD & PLATFORM RISK INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect SaaS Platforms From <br />
                <span className="text-zinc-400">Fraud, Abuse, and Operational Risk</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps SaaS companies and cloud platforms detect fraud, secure accounts, prevent platform abuse, monitor insider threats, and strengthen governance using AI-driven behavioral analytics and real-time risk intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/enterprise-saas-platforms#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore SaaS Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for B2B SaaS platforms, enterprise software providers, cloud ecosystems, API platforms, developer tools, and multi-tenant enterprise environments.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Enterprise SaaS Trust & Operational Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">SaaS Tenant Risk Console</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">SAAS CORE MULTI-TENANT PROTOCOL</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure SaaS Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Tenant Activity Level</span>
                        <select 
                          value={tenantActivity} 
                          onChange={(e) => setTenantActivity(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="normal">Standard user logins</option>
                          <option value="spike">Coordinated stuffing spikes</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">API key signatures active</span>
                        <input 
                          type="checkbox" 
                          checked={apiAccessVerification} 
                          onChange={(e) => setApiAccessVerification(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Suspicious trial farming</span>
                        <input 
                          type="checkbox" 
                          checked={subscriptionLevel} 
                          onChange={(e) => setSubscriptionLevel(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE SAAS TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">API Abuse Detection</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {tenantActivity === "spike" ? "Coordinated Threat Vector" : "API verified"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Insider Threat Dashboard</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {subscriptionLevel ? "Active Ring Cluster Alert" : "Standard query flow"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">TENANT RISK SCORE</span>
                          <span className="text-3xl font-black text-white">{score}/100</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-400 text-[10px] block">LEGAL RESOLUTION</span>
                          <span className={`text-xs font-black uppercase ${color}`}>{status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex justify-between text-[10px] text-zinc-500">
                      <span>Control validation: Graph relationship active</span>
                      <span>Secure tokenization isolation live</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">SaaS Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              SaaS Platforms Face Expanding Fraud and Operational Abuse Risks
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern SaaS and cloud platforms manage enterprise identities, API ecosystems, authentication workflows, tenant environments, developer access, subscription systems, platform integrations, and operational telemetry. Attackers increasingly target SaaS ecosystems using account takeover, API abuse, credential stuffing, insider misuse, tenant abuse, fake organizations, automation attacks, subscription fraud, and privilege escalation. Traditional security and fraud systems often struggle with multi-tenant visibility, API-scale monitoring, behavioral intelligence, insider-risk detection, operational governance, and real-time abuse detection. Without connected SaaS intelligence, organizations face customer trust erosion, platform abuse, account compromise, operational disruption, governance failures, data exposure, and revenue leakage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Account Takeover", desc: "Compromised user accounts create operational and reputational risk.", icon: <Shield /> },
                { title: "API Abuse", desc: "Attackers increasingly exploit APIs, automation workflows, and integrations.", icon: <Users /> },
                { title: "Insider Threats", desc: "Internal misuse and privilege abuse create hidden operational exposure.", icon: <Sliders /> },
                { title: "Tenant Abuse", desc: "Fraudulent organizations exploit SaaS onboarding and operational workflows.", icon: <Clock /> },
                { title: "Subscription & Billing Fraud", desc: "Fake signups and payment abuse impact growth and revenue quality.", icon: <Building /> },
                { title: "Governance Complexity", desc: "Rapid platform growth creates operational and compliance challenges.", icon: <Sliders /> }
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

            {/* SaaS Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">SAAS RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Onboarding", desc: "Enterprise tenant registers, triggering multi-tenant KYC validation." },
                  { title: "2. Authentication", desc: "Admin logs validated using session and device fingerprinting." },
                  { title: "3. API Activity", desc: "Outgoing webhook calls scanned instantly for stuffing vulnerabilities." },
                  { title: "4. Behavioral scoring", desc: "Operational activity monitored continuously for anomalous patterns." },
                  { title: "5. Investigations", desc: "High-risk alerts routed directly to specialized compliance analysts." },
                  { title: "6. Governance workflows", desc: "Operational records compiled to meet SOC 2 and GDPR standards." }
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
              Unified SaaS Fraud, Identity, and Operational Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines behavioral analytics, identity intelligence, fraud detection, API monitoring, graph analysis, insider-risk monitoring, and governance automation into a unified SaaS risk platform. The platform continuously evaluates user behavior, API activity, tenant trust, authentication integrity, operational anomalies, insider-risk indicators, payment activity, graph relationships, and governance exposure. DeepSense enables SaaS platforms to: stop abuse in real time, secure enterprise accounts, protect APIs and integrations, strengthen tenant trust, reduce operational risk, improve governance visibility, and scale securely.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Stop abuse in real time", desc: "Block automated bot networks during reward distribution cycles." },
                { title: "Secure enterprise accounts", desc: "Prevent key compromises and session hijacking vulnerabilities." },
                { title: "Protect APIs and integrations", desc: "Secure webhook channels against credential stuffing attacks." },
                { title: "Strengthen tenant trust", desc: "Verify organizational legitimacy before platform access is granted." },
                { title: "Reduce operational risk", desc: "Audit high value payouts and tokenized transfers continuously." },
                { title: "Improve governance visibility", desc: "Expose suspicious employee queries and permission drifts dynamically." }
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
              Enterprise SaaS Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Account Takeover Prevention", desc: "Protect enterprise accounts, admin portals, customer sessions, authentication workflows, API credentials, and privileged access." },
                { title: "API Abuse Detection", desc: "Detect automation abuse, suspicious API activity, token misuse, scraping attacks, abnormal request patterns, and credential abuse." },
                { title: "Tenant Risk Intelligence", desc: "Monitor fake organizations, suspicious onboarding, abusive tenants, operational anomalies, and risky account relationships." },
                { title: "Insider Threat Monitoring", desc: "Detect privilege misuse, unauthorized access, suspicious operational activity, data exposure behavior, and governance violations." },
                { title: "Behavioral Analytics", desc: "Analyze user behavior, login patterns, operational workflows, automation anomalies, trust indicators, and platform usage consistency." },
                { title: "Device & Session Intelligence", desc: "Detect spoofed devices, emulators, shared infrastructure, session hijacking, and abnormal access environments." },
                { title: "Subscription & Billing Fraud Monitoring", desc: "Identify fake signups, payment abuse, subscription manipulation, trial abuse, and refund exploitation." },
                { title: "Graph Intelligence", desc: "Visualize linked tenants, connected accounts, shared devices, abuse networks, operational relationships, and suspicious ecosystems." },
                { title: "Case Management & Investigations", desc: "Coordinate abuse investigations, tenant reviews, insider-risk workflows, evidence management, and remediation tracking." },
                { title: "Governance & Controls Monitoring", desc: "Support audit readiness, access governance, operational controls, compliance workflows, and remediation visibility." }
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
              How DeepSense Protects SaaS and Cloud Platforms
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests login events, API telemetry, onboarding activity, subscription workflows, operational signals, authentication events, and tenant activity." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches activity using behavioral analytics, device intelligence, graph relationships, operational telemetry, abuse indicators, and governance context." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates account legitimacy, tenant trust, API integrity, behavioral anomalies, insider-risk indicators, and operational abuse." },
                { title: "Step 4 — Decisioning", desc: "The system generates risk scores, abuse alerts, authentication interventions, tenant escalations, and operational warnings." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers investigations, tenant reviews, governance escalations, remediation workflows, and operational reporting." }
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
              Built for Modern SaaS and Cloud Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "saas", label: "B2B SaaS" },
                { id: "dev", label: "Developer Platforms" },
                { id: "collab", label: "Collaboration Tools" },
                { id: "infra", label: "Cloud Infrastructure" },
                { id: "sub", label: "Subscription Systems" }
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
              {activeTab === "saas" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect enterprise accounts, authentication systems, API ecosystems, and operational workflows.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "dev" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor API abuse, credential misuse, automation attacks, and suspicious integrations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "collab" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect insider misuse, account compromise, tenant abuse, and suspicious sharing activity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "infra" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure privileged access, tenant operations, service accounts, and platform integrity.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "sub" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent fake signups, billing abuse, trial farming, and operational fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
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
              Connected Across the SaaS Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links SaaS fraud deciders with active GRC dashboards, GRC evidence matrices, device intelligence engines, and automated incident logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "UEBA & Behavioral Analytics", desc: "Behavioral anomaly detection and operational trust analysis." },
                { title: "Device Fingerprinting", desc: "Authentication trust and session integrity intelligence." },
                { title: "DLP Monitoring", desc: "Sensitive enterprise data exposure and insider-risk monitoring." },
                { title: "Identity Intelligence", desc: "Enterprise onboarding and account trust verification." },
                { title: "Graph Intelligence", desc: "Connected tenant ecosystems and abuse network visibility." },
                { title: "GRC & Controls Monitoring", desc: "Operational governance and audit readiness intelligence." },
                { title: "Case Management", desc: "Abuse investigations and remediation workflow orchestration." }
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
              Real-Time SaaS Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Platform Security Dashboard", desc: "Account takeover alerts, API abuse monitoring, authentication risk analytics, and operational fraud visibility." },
                { title: "Tenant Trust Intelligence", desc: "Tenant risk scoring, onboarding analytics, abuse monitoring, and operational trust indicators." },
                { title: "Insider Risk Dashboard", desc: "Privilege misuse detection, behavioral anomalies, operational exposure, and governance indicators." },
                { title: "API & Automation Analytics", desc: "Request anomaly detection, automation abuse visibility, credential misuse monitoring, and operational telemetry." },
                { title: "Investigation Workspace", desc: "Linked entities, activity timelines, graph investigations, evidence management, and operational intelligence." }
              ].map((mod, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[36px] flex flex-col gap-4 shadow-xs">
                  <h4 className="text-lg font-bold font-manrope text-neutral-900">{mod.title}</h4>
                  <p className="text-xs text-zinc-500 font-inter leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 9: INDUSTRIES / SEGMENTS ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block">Scale Coverage</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-8">
              Designed for Modern Enterprise Platforms
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous SaaS security models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "B2B SaaS Platforms", "Developer Platforms", "Collaboration Platforms", "Cloud Infrastructure Providers", "Enterprise Productivity Platforms", "HR & Payroll Platforms",
                "CRM & ERP Platforms", "AI Platforms", "API-First Platforms", "Workflow Automation Platforms", "Identity & Access Platforms", "Subscription-Based Software Platforms"
              ].map((ind, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-100 p-5 rounded-2xl flex flex-col gap-2">
                  <Building2 className="w-4 h-4 text-red-500" />
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
                Enterprise-Grade Security for SaaS and Cloud Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and comprehensive logging for every single active tenant.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Risk Decisions", desc: "Every fraud and operational decision includes reason codes, behavioral evidence, and device intelligence." },
                { title: "Audit Logging", desc: "Track authentication reviews, tenant investigations, operational escalations, and governance workflows." },
                { title: "Multi-Tenant SaaS Security", desc: "Secure operational separation across tenants, enterprise customers, and operational environments." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with SOC 2, ISO 27001, GDPR, and enterprise compliance programs." },
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

        {/* ================= SECTION 11: FAQ ================= */}
        <section className="py-28 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-[900px] mx-auto flex flex-col items-center">
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">SAAS FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect SaaS account takeover attacks in real time?", 
                  a: "Yes. DeepSense continuously evaluates authentication workflows, behavioral anomalies, device trust, and session integrity." 
                },
                { 
                  q: "Does DeepSense support API abuse detection?", 
                  a: "Yes. The platform monitors API telemetry, automation abuse, suspicious requests, and token misuse in real time." 
                },
                { 
                  q: "Can DeepSense detect insider threats in SaaS environments?", 
                  a: "Yes. DeepSense identifies privilege misuse, suspicious operational activity, and insider-risk indicators using behavioral analytics." 
                },
                { 
                  q: "Does DeepSense support tenant risk monitoring?", 
                  a: "Yes. The platform evaluates onboarding integrity, tenant behavior, abuse patterns, and operational trust indicators." 
                },
                { 
                  q: "Can DeepSense support subscription and billing fraud monitoring?", 
                  a: "Yes. DeepSense detects fake signups, trial abuse, payment manipulation, and refund exploitation." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise-scale SaaS environments?", 
                  a: "Yes. DeepSense is designed for large-scale SaaS platforms, cloud-native ecosystems, and enterprise governance operations." 
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[56px] p-12 md:p-24 flex flex-col items-center text-center gap-10 relative overflow-hidden border border-white/5 shadow-3xl text-white">
            <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="space-y-4 max-w-[800px] relative z-10">
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Secure SaaS Platforms With Real-Time Operational Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure tenant environments and stop <br />
                <span className="text-white/40 font-bold">API credential stuffing anomalies dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect enterprise accounts, prevent platform abuse, strengthen governance, and improve operational trust using enterprise-grade SaaS fraud and behavioral intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/enterprise-saas-platforms#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore SaaS Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
