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

export default function HospitalityTravelBookingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("airlines");
  
  // Interactive Travel parameters
  const [bookingVelocity, setBookingVelocity] = useState<string>("normal");
  const [travelerVerification, setTravelerVerification] = useState<boolean>(true);
  const [itineraryValue, setItineraryValue] = useState<boolean>(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  // Calculate dynamic travel risk parameters
  const calculateTravelRisk = () => {
    let score = 9; // base risk score
    
    if (bookingVelocity === "spike") score += 42;
    if (itineraryValue) score += 34;
    if (!travelerVerification) score += 13;
    
    score = Math.min(score, 99);
    
    let status = "SECURE BOOKING SESSION";
    let color = "text-emerald-500";
    if (score >= 80) {
      status = "COORDINATED CANCELLATION EXPLOIT";
      color = "text-red-500";
    } else if (score >= 50) {
      status = "UNTRUSTED GEOLOCATION PROXY";
      color = "text-amber-500";
    } else if (score >= 30) {
      status = "CROSS BORDER VALUE DRIFT";
      color = "text-orange-400";
    }
    
    return { score, status, color };
  };

  const { score, status, color } = calculateTravelRisk();

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
                TRAVEL & HOSPITALITY FRAUD INTELLIGENCE
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold font-manrope leading-[1.05] tracking-tighter text-neutral-900">
                Protect Travel and Hospitality Platforms <br />
                <span className="text-zinc-400">From Fraud and Abuse</span>
              </h1>

              <p className="max-w-[750px] mx-auto text-zinc-600 text-lg md:text-xl font-inter leading-relaxed">
                DeepSense helps airlines, hotels, OTAs, travel marketplaces, and booking platforms detect fraud, secure payments, protect traveler identities, and strengthen operational trust using AI-driven analytics and real-time risk intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-md mx-auto">
                <Link href="/request-demo" className="px-8 py-4 bg-neutral-900 text-white rounded-full text-base font-bold font-manrope hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-xl text-center flex-1">
                  Request Demo
                </Link>
                <Link href="/solutions/hospitality-travel-booking#use-cases" className="px-8 py-4 border border-zinc-200 bg-white text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center flex-1">
                  Explore Travel Use Cases
                </Link>
              </div>

              <div className="mt-6">
                <span className="text-zinc-400 text-[10px] font-bold font-manrope uppercase tracking-wider block">
                  Built for airlines, hotel groups, OTAs, travel marketplaces, booking ecosystems, hospitality platforms, and global travel operations.
                </span>
              </div>
            </div>

            {/* Hero Illustration: Travel Fraud Intelligence Command Center */}
            <div className="w-full bg-neutral-950 p-8 rounded-[48px] border border-white/10 shadow-3xl text-left relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-red-950/20 to-transparent pointer-events-none opacity-50" />
              
              <div className="flex flex-col gap-8 relative z-10 text-white">
                <div className="flex justify-between items-center pb-6 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <Workflow className="w-4 h-4 text-red-500 animate-ping" />
                    <span className="text-white text-xs font-bold font-manrope tracking-wider uppercase">Traveler Trust Dashboard</span>
                  </div>
                  <span className="text-zinc-500 text-[10px] font-mono">TRAVEL CORE ITINERARY ENGINE</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Column: Interactive controls */}
                  <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-3xl space-y-6">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block font-mono">Configure Travel Parameters</span>
                    
                    <div className="space-y-4 text-xs font-mono">
                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Booking Velocity</span>
                        <select 
                          value={bookingVelocity} 
                          onChange={(e) => setBookingVelocity(e.target.value)}
                          className="bg-neutral-900 border border-white/10 text-white rounded px-2 py-1 text-xs"
                        >
                          <option value="normal">Single reservation</option>
                          <option value="spike">Coordinated high velocity farm bookings</option>
                        </select>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">Traveler signature verified</span>
                        <input 
                          type="checkbox" 
                          checked={travelerVerification} 
                          onChange={(e) => setTravelerVerification(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>

                      <div className="flex justify-between items-center p-3 bg-black/40 border border-white/5 rounded-xl">
                        <span className="text-zinc-400">High value cross-border booking</span>
                        <input 
                          type="checkbox" 
                          checked={itineraryValue} 
                          onChange={(e) => setItineraryValue(e.target.checked)}
                          className="w-4 h-4 accent-red-600"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Dynamic decision dashboard */}
                  <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between font-mono">
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-white/5 text-[10px] text-zinc-400">
                        <span>DEEPSENSE TRAVEL TELEMETRY</span>
                        <span>ANALYSIS COMPLETED</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Loyalty Abuse Monitor</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1 uppercase">
                            {bookingVelocity === "spike" ? "Coordinated Spikes Vector" : "Clear limit check"}
                          </span>
                        </div>
                        <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                          <span className="text-[9px] text-zinc-500 uppercase block">Chargeback Analytics</span>
                          <span className="text-xs font-bold block text-zinc-300 mt-1">
                            {itineraryValue ? "Active Ring Cluster Alert" : "Standard payout history"}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center bg-black/60 border border-white/5 p-6 rounded-3xl">
                        <div>
                          <span className="text-zinc-400 text-[10px] block">BOOKING FRAUD SCORE</span>
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6">Travel Risks</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-neutral-900 leading-tight mb-8 max-w-[950px] tracking-tight">
              Travel Fraud and Booking Abuse Continue to Increase
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Modern travel and hospitality ecosystems manage airline reservations, hotel bookings, loyalty programs, digital payments, partner ecosystems, refunds and cancellations, customer accounts, and cross-border transactions. Fraudsters increasingly exploit travel ecosystems using stolen payment methods, fake bookings, loyalty fraud, account takeover, refund abuse, bot-driven reservations, reseller fraud, synthetic identities, and coordinated abuse networks. Traditional fraud systems often struggle with high booking velocity, cross-border risk visibility, omnichannel traveler behavior, operational scalability, loyalty abuse detection, and false positives. Without connected travel intelligence, organizations face chargeback growth, booking abuse, loyalty program losses, operational fraud, customer trust erosion, revenue leakage, and reputational damage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full mb-20">
              {[
                { title: "Booking Fraud", desc: "Fraudsters use stolen cards and fake identities to exploit reservation systems.", icon: <Shield /> },
                { title: "Loyalty Program Abuse", desc: "Points, rewards, and travel credits are increasingly targeted by abuse networks.", icon: <Users /> },
                { title: "Refund & Cancellation Fraud", desc: "Fraudsters manipulate cancellation and refund workflows for financial gain.", icon: <Sliders /> },
                { title: "Account Takeover", desc: "Compromised traveler accounts create financial and reputational risk.", icon: <Clock /> },
                { title: "Partner & Vendor Abuse", desc: "Third-party travel and hospitality ecosystems create operational exposure.", icon: <Building /> },
                { title: "Cross-Border Payment Risk", desc: "International bookings increase fraud and AML exposure.", icon: <Sliders /> }
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

            {/* Travel Risk Lifecycle Flow Diagram */}
            <div className="w-full bg-white border border-zinc-200 p-8 rounded-[40px] shadow-sm text-left">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 block mb-8 text-center font-mono">TRAVEL RISK LIFECYCLE FLOW</span>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6 text-center font-manrope">
                {[
                  { title: "1. Booking", desc: "Patient onboarding verified dynamically using HIPAA-compliant liveness checks." },
                  { title: "2. Payment verification", desc: "Claims details checked instantly against legacy historical templates." },
                  { title: "3. Fraud Scoring", desc: "Score computed using behavioral inputs and metadata parameters." },
                  { title: "4. Loyalty check", desc: "Points redemptions evaluated for proxy listings and synthetic anomalies." },
                  { title: "5. Investigation", desc: "Flagged transactions routed directly to dedicated Special Investigation Units." },
                  { title: "6. Governance", desc: "Approved payouts executed securely with complete compliance reports." }
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
              Unified Travel Fraud & Booking Trust Intelligence
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense combines booking fraud detection, behavioral analytics, traveler identity intelligence, payment monitoring, graph analysis, loyalty protection, and governance automation into a unified travel risk platform. The platform continuously evaluates booking activity, traveler trust, payment behavior, loyalty usage, account integrity, refund behavior, device intelligence, graph relationships, and operational risk indicators. DeepSense enables travel and hospitality businesses to: reduce chargebacks, stop booking abuse, protect loyalty ecosystems, secure traveler accounts, reduce operational losses, improve booking trust, and strengthen customer experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Reduce chargebacks", desc: "Block welfare farming and duplicate payouts dynamically in milliseconds." },
                { title: "Stop booking abuse", desc: "Verify portal checkouts without introducing user friction." },
                { title: "Protect loyalty ecosystems", desc: "Enforce multi-tenant environment separation rules dynamically." },
                { title: "Secure traveler accounts", desc: "Equip claims analysts with visual transaction relationship graphs." },
                { title: "Reduce operational losses", desc: "Support HIPAA-aligned workflows with active security control overlays." },
                { title: "Improve booking trust", desc: "Block duplicate medical disbursements before payouts settle." }
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
              Hospitality & Travel Intelligence Capabilities
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-left w-full">
              {[
                { title: "Real-Time Booking Fraud Detection", desc: "Detect fraudulent reservations, suspicious itineraries, stolen payment methods, high-risk bookings, bot-driven reservations, and transaction anomalies." },
                { title: "Traveler Identity Verification", desc: "Verify traveler identities, onboarding legitimacy, document authenticity, liveness integrity, and synthetic identities." },
                { title: "Account Takeover Prevention", desc: "Protect traveler accounts, loyalty accounts, hotel and airline portals, authentication workflows, and digital booking sessions." },
                { title: "Loyalty & Rewards Fraud Detection", desc: "Detect points abuse, reward farming, account sharing, suspicious redemptions, and loyalty ecosystem fraud." },
                { title: "Refund & Cancellation Abuse Monitoring", desc: "Monitor suspicious cancellations, refund manipulation, chargeback abuse, repeated exploitation behavior, and operational fraud." },
                { title: "Behavioral Analytics", desc: "Analyze booking behavior, traveler trust, session anomalies, itinerary patterns, and operational consistency." },
                { title: "Device & Session Intelligence", desc: "Detect emulator farms, spoofed devices, proxy/VPN abuse, shared infrastructure, and suspicious environments." },
                { title: "Graph Intelligence", desc: "Visualize linked travelers, connected payment methods, loyalty abuse networks, refund fraud rings, and operational relationships." },
                { title: "Case Management & Investigations", desc: "Coordinate fraud investigations, refund escalations, loyalty abuse reviews, operational investigations, and evidence management." },
                { title: "Governance & Operational Monitoring", desc: "Support audit readiness, operational governance, fraud controls, partner risk monitoring, and remediation workflows." }
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
              How DeepSense Protects Travel and Hospitality Ecosystems
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left font-manrope w-full">
              {[
                { title: "Step 1 — Ingestion", desc: "DeepSense ingests reservations, payment activity, traveler sessions, loyalty transactions, refunds and cancellations, operational telemetry, and partner ecosystem signals." },
                { title: "Step 2 — Enrichment", desc: "The platform enriches events using behavioral analytics, device intelligence, graph relationships, payment telemetry, traveler trust signals, and abuse indicators." },
                { title: "Step 3 — Evaluation", desc: "DeepSense evaluates booking legitimacy, traveler trust, refund exposure, loyalty abuse indicators, operational anomalies, and fraud relationships." },
                { title: "Step 4 — Decisioning", desc: "The system generates fraud scores, booking interventions, account restrictions, refund escalations, and operational alerts." },
                { title: "Step 5 — Action", desc: "High-risk activity triggers fraud investigations, refund reviews, loyalty escalations, operational remediation, and governance reporting." }
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
              Built for Modern Travel and Hospitality Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Explore how DeepSense deploys custom validation layers based on vertical specifications.
            </p>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-16 w-full max-w-4xl">
              {[
                { id: "airlines", label: "Airlines" },
                { id: "hotels", label: "Hotel Groups" },
                { id: "otas", label: "OTAs & Booking Platforms" },
                { id: "marketplaces", label: "Travel Marketplaces" },
                { id: "loyalty", label: "Loyalty Platforms" }
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
              {activeTab === "airlines" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Protect flight bookings, traveler accounts, loyalty systems, and cross-border payments.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure credit operations. Map login anomalies and device trust indicators dynamically to block rogue acquirer routings.
                  </p>
                </div>
              )}
              {activeTab === "hotels" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Monitor reservation fraud, guest identity trust, loyalty abuse, and refund manipulation.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Track mobile payout operations. Secure approval workflows and analyze threshold indicators before money leaves the wallet.
                  </p>
                </div>
              )}
              {activeTab === "otas" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Detect fake bookings, account takeover, payment abuse, and operational fraud.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Safeguard partner networks. Block synthetic registrations automatically during initial partner signups.
                  </p>
                </div>
              )}
              {activeTab === "marketplaces" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Secure vendor ecosystems, traveler trust, booking workflows, and partner operations.</h4>
                  <p className="text-zinc-600 text-sm font-inter leading-relaxed max-w-3xl">
                    Secure international correspondent banking connections. Track wire routings against global watchlists in real time.
                  </p>
                </div>
              )}
              {activeTab === "loyalty" && (
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold font-manrope text-neutral-900">Prevent points abuse, reward fraud, account sharing, and redemption manipulation.</h4>
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
              Connected Across the Travel Risk Ecosystem
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              DeepSense links travel fraud deciders with active GRC dashboards, GRC evidence matrices, device intelligence engines, and automated incident logs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
              {[
                { title: "Payment Fraud Intelligence", desc: "Real-time booking and transaction fraud monitoring." },
                { title: "Device Fingerprinting", desc: "Traveler trust and session integrity intelligence." },
                { title: "Behavioral Biometrics", desc: "Behavioral anomaly detection and traveler intent analysis." },
                { title: "Identity Intelligence", desc: "Traveler onboarding and synthetic identity prevention." },
                { title: "Graph Intelligence", desc: "Connected fraud ecosystem and abuse network visibility." },
                { title: "UEBA & Operational Monitoring", desc: "Behavioral anomaly detection across operational environments." },
                { title: "GRC & Controls Monitoring", desc: "Operational governance and audit readiness intelligence." }
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
              Real-Time Travel Risk Visibility
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left w-full">
              {[
                { title: "Travel Fraud Operations Dashboard", desc: "Booking fraud alerts, payment monitoring, operational abuse visibility, and reservation analytics." },
                { title: "Traveler Trust Intelligence", desc: "Traveler trust scoring, onboarding analytics, account integrity monitoring, and behavioral indicators." },
                { title: "Loyalty & Refund Analytics", desc: "Reward abuse monitoring, refund trends, operational anomalies, and abuse visibility." },
                { title: "Cross-Border Risk Dashboard", desc: "International booking risk, payment monitoring, traveler anomaly visibility, and operational trust trends." },
                { title: "Investigation Workspace", desc: "Linked entities, booking timelines, graph investigations, evidence management, and operational intelligence." }
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
              Designed for Global Travel and Hospitality Ecosystems
            </h2>
            <p className="max-w-[800px] text-zinc-600 text-base md:text-lg font-inter leading-relaxed mb-20">
              Deploy continuous travel models across diverse vertical operations globally.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-left w-full">
              {[
                "Airlines", "Hotel Groups", "OTAs", "Travel Marketplaces", "Vacation Rental Platforms", "Corporate Travel Platforms",
                "Cruise & Tourism Platforms", "Hospitality Management Platforms", "Loyalty & Rewards Programs", "Ticketing Platforms", "Cross-Border Travel Platforms", "Digital Travel Ecosystems"
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
                Enterprise-Grade Security for Travel and Hospitality Operations
              </h2>
              <p className="text-base text-zinc-600 font-inter leading-relaxed">
                DeepSense maintains secure database separation, explainable risk calculations, and comprehensive compliance templates for traveler profiles globally.
              </p>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-left">
              {[
                { title: "Explainable Fraud Decisions", desc: "Every fraud and trust decision includes reason codes, behavioral evidence, and payment indicators." },
                { title: "Audit Logging", desc: "Track fraud reviews, refund escalations, loyalty investigations, and operational workflows." },
                { title: "Multi-Tenant Travel Platform Security", desc: "Secure operational separation across travel ecosystems, partner environments, and operational teams." },
                { title: "Compliance-Ready Architecture", desc: "Support initiatives aligned with PCI DSS, fraud governance, privacy obligations, and compliance." },
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
            <span className="text-zinc-400 font-manrope text-xs font-extrabold uppercase tracking-widest mb-6 block text-center">TRAVEL FAQS</span>
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-neutral-900 leading-tight mb-20 text-center">
              Frequently Asked Questions
            </h2>

            <div className="w-full flex flex-col gap-4">
              {[
                { 
                  q: "Can DeepSense detect booking fraud in real time?", 
                  a: "Yes. DeepSense continuously evaluates reservations, traveler trust, payment activity, and behavioral indicators in real time." 
                },
                { 
                  q: "Does DeepSense support loyalty fraud detection?", 
                  a: "Yes. The platform identifies points abuse, reward manipulation, suspicious redemptions, and coordinated loyalty fraud networks." 
                },
                { 
                  q: "Can DeepSense reduce refund and cancellation abuse?", 
                  a: "Yes. DeepSense detects suspicious refund behavior, cancellation manipulation, and repeated exploitation activity." 
                },
                { 
                  q: "Does DeepSense support account takeover prevention for travel platforms?", 
                  a: "Yes. The platform protects traveler accounts using behavioral analytics, device intelligence, and session monitoring." 
                },
                { 
                  q: "Can DeepSense support cross-border payment monitoring?", 
                  a: "Yes. DeepSense supports international booking risk monitoring, payment fraud detection, AML intelligence, and operational trust analysis." 
                },
                { 
                  q: "Is DeepSense suitable for enterprise travel ecosystems?", 
                  a: "Yes. DeepSense is designed for large-scale travel operations, hospitality ecosystems, booking platforms, and global fraud governance." 
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
              <span className="text-red-400 font-manrope text-[11px] font-extrabold uppercase tracking-widest uppercase font-mono">Build Trusted Travel Experiences With Real-Time Fraud Intelligence</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-manrope text-white tracking-tight leading-tight">
                Secure flight bookings and prevent <br />
                <span className="text-white/40 font-bold">cross-border payment anomalies dynamically.</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base font-inter max-w-[600px] mx-auto leading-relaxed">
                Protect reservations, reduce booking fraud, secure loyalty ecosystems, and improve traveler trust using enterprise-grade travel fraud intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full justify-center">
              <Link href="/request-demo" className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full text-base font-bold font-manrope hover:bg-brand-lime/90 hover:scale-105 active:scale-95 transition-all shadow-xl text-center">
                Request Demo
              </Link>
              <Link href="/solutions/hospitality-travel-booking#use-cases" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full text-base font-bold font-manrope hover:bg-white/10 hover:scale-105 active:scale-95 transition-all text-center">
                Explore Travel Use Cases
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
