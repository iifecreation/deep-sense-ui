"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Database, 
  Zap, 
  Shield, 
  BarChart2, 
  Cpu, 
  Layers, 
  Smartphone, 
  Globe, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Search, 
  RefreshCw, 
  Lock,
  ChevronRight,
  Code
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const steps = [
  {
    icon: <Database className="w-6 h-6" />,
    title: "Step 1 — Transaction Ingestion",
    content: "Deep Sense receives transaction events through secure APIs or streaming pipelines.",
    details: [
      "Validate payload structure",
      "Attach organization context (multi-tenancy)",
      "Ensure idempotency (no duplicate processing)",
      "Store raw transaction safely"
    ],
    data: ["user/account info", "amount, currency", "device data", "IP/location", "metadata"]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Step 2 — Data Enrichment",
    content: "Raw transactions are enriched with additional signals to provide context for analysis.",
    examples: [
      "historical transaction behavior",
      "device history",
      "linked accounts/devices/IPs",
      "geolocation insights",
      "velocity patterns"
    ]
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Step 3 — Feature Engineering",
    content: "Deep Sense transforms raw data into structured features used for scoring.",
    examples: [
      "transaction frequency in last X minutes",
      "deviation from user behavior",
      "unusual location/device",
      "repeated failed attempts",
      "shared device across accounts"
    ]
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Step 4 — Risk Scoring",
    content: "Multiple detection systems work together to evaluate risk.",
    components: [
      { name: "Machine Learning Models", desc: "classify fraud probability trained on historical data" },
      { name: "Anomaly Detection", desc: "detect unusual patterns (Isolation Forest, z-score)" },
      { name: "Rules Engine", desc: "custom business logic with instant triggers" },
      { name: "Device & Graph Intelligence", desc: "risky devices and linked fraud rings" }
    ],
    output: "risk score (0 → 1) with full breakdown"
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Step 5 — Decision Engine",
    content: "Deep Sense translates risk into clear decisions: Approve, Review, or Block.",
    features: [
      "organization-specific thresholds",
      "policy-based decisioning",
      "explainable outcomes",
      "customizable rules"
    ]
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Step 6 — Alerts & Actions",
    content: "When suspicious activity is detected, Deep Sense takes immediate action.",
    capabilities: [
      "create alerts automatically",
      "open fraud cases",
      "send webhooks / notifications",
      "trigger blocking logic"
    ]
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Step 7 — Investigation",
    content: "Fraud teams use Deep Sense to analyze and act on suspicious activity.",
    features: [
      "case management workflows",
      "transaction timelines",
      "linked entity views",
      "notes and audit logs"
    ]
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Step 8 — Feedback Loop",
    content: "Deep Sense continuously improves detection using feedback from analysts.",
    flow: [
      "analyst marks fraud / not fraud",
      "data becomes training signal",
      "models retrain over time",
      "system adapts to new patterns"
    ]
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <div className="max-w-[1440px] mx-auto px-8 mb-24">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime/10 rounded-full text-neutral-900 text-xs font-bold uppercase tracking-wider mb-8 border border-brand-lime/20">
              <span>Deep Dive</span>
              <ChevronRight className="w-3 h-3" />
              <span>Architecture</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-manrope leading-[1.1] mb-8 tracking-tight text-neutral-900">
              How Deep Sense Detects <br />
              <span className="text-zinc-400">Fraud in Real Time</span>
            </h1>
            <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-10 max-w-[600px]">
              From transaction ingestion to intelligent decisioning, Deep Sense analyzes every signal to detect and stop fraud instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/developers/api-overview" className="px-8 py-4 bg-neutral-900 text-white rounded-full font-bold font-manrope shadow-xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                <Code className="w-5 h-5" />
                View API Docs
              </Link>
              <button className="px-8 py-4 bg-white border border-gray-200 rounded-full font-bold font-manrope text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                Request Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 🧭 SYSTEM OVERVIEW (HIGH LEVEL FLOW) */}
        <section className="bg-gray-50 py-32 border-y border-gray-100">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold font-manrope mb-4">End-to-End Fraud Detection Pipeline</h2>
              <p className="text-zinc-500 max-w-[600px] mx-auto">Each step is optimized for speed, accuracy, and scalability to handle enterprise-level transaction volumes.</p>
            </div>

            {/* Pipeline Visualization */}
            <div className="relative mt-20">
              {/* Desktop Horizontal Flow */}
              <div className="hidden lg:flex justify-between items-start relative z-10">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 -z-10" />
                {steps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center gap-6 w-32 group">
                    <div className="w-16 h-16 bg-white rounded-2xl border border-gray-100 flex items-center justify-center shadow-lg shadow-gray-200/50 group-hover:scale-110 group-hover:border-brand-lime transition-all duration-300 relative">
                       <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center text-[10px] font-bold border-4 border-white">
                         {i + 1}
                       </div>
                       {React.cloneElement(step.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6 text-neutral-900" })}
                    </div>
                    <span className="text-[10px] font-bold font-manrope text-zinc-400 uppercase tracking-widest text-center leading-tight">
                      {step.title.split('—')[1] || step.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile Vertical Flow */}
              <div className="lg:hidden flex flex-col gap-8">
                 {steps.map((step, i) => (
                   <div key={i} className="flex items-center gap-6">
                      <div className="w-12 h-12 shrink-0 bg-white rounded-xl border border-gray-100 flex items-center justify-center shadow-sm">
                        {step.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-brand-lime uppercase tracking-widest">Step {i + 1}</span>
                        <span className="text-sm font-bold text-neutral-900">{step.title.split('—')[1] || step.title}</span>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </section>

        {/* 🧱 PIPELINE STEPS (DETAILED) */}
        <div className="max-w-[1440px] mx-auto px-8 py-32 space-y-40">
          {steps.map((step, i) => (
            <div key={i} id={`step-${i+1}`} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-32 items-center`}>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center text-brand-lime">
                    {step.icon}
                  </div>
                  <h2 className="text-3xl font-bold font-manrope">{step.title}</h2>
                </div>
                
                <p className="text-xl text-zinc-600 leading-relaxed">
                  {step.content}
                </p>

                {/* Specific Content Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                  {step.details && (
                    <div className="space-y-4">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400">What happens</h4>
                       <ul className="space-y-3">
                         {step.details.map((d, idx) => (
                           <li key={idx} className="flex items-start gap-2 text-sm text-zinc-600">
                             <CheckCircle2 className="w-4 h-4 text-brand-lime mt-0.5 shrink-0" />
                             {d}
                           </li>
                         ))}
                       </ul>
                    </div>
                  )}
                  {step.data && (
                    <div className="space-y-4">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Supported data</h4>
                       <div className="flex flex-wrap gap-2">
                         {step.data.map((d, idx) => (
                           <span key={idx} className="px-3 py-1 bg-gray-100 rounded-md text-[11px] font-bold text-zinc-500 uppercase">
                             {d}
                           </span>
                         ))}
                       </div>
                    </div>
                  )}
                  {step.examples && (
                    <div className="space-y-4 col-span-2">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Examples</h4>
                       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                         {step.examples.map((ex, idx) => (
                           <div key={idx} className="p-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-medium text-zinc-600">
                              {ex}
                           </div>
                         ))}
                       </div>
                    </div>
                  )}
                  {step.components && (
                    <div className="col-span-2 space-y-6">
                       <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Detection Components</h4>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         {step.components.map((comp, idx) => (
                           <div key={idx} className="p-6 bg-white border border-gray-100 rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
                              <h5 className="font-bold mb-2 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-brand-lime rounded-full" />
                                {comp.name}
                              </h5>
                              <p className="text-sm text-zinc-500 leading-relaxed">{comp.desc}</p>
                           </div>
                         ))}
                       </div>
                    </div>
                  )}
                  {step.features && (
                    <div className="col-span-2 space-y-4">
                       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                         {step.features.map((f, idx) => (
                           <div key={idx} className="p-4 bg-neutral-900 rounded-2xl">
                             <span className="text-xs font-bold text-white/50 block mb-1">FEATURE</span>
                             <span className="text-sm font-bold text-white">{f}</span>
                           </div>
                         ))}
                       </div>
                    </div>
                  )}
                  {step.flow && (
                    <div className="col-span-2 space-y-4 bg-brand-lime/5 p-8 rounded-[32px] border border-brand-lime/10">
                       <div className="flex items-center gap-4 mb-6">
                         <RefreshCw className="w-5 h-5 text-neutral-900" />
                         <h4 className="font-bold font-manrope">Continuous Adaption Loop</h4>
                       </div>
                       <div className="flex flex-col lg:flex-row gap-6 items-center">
                          {step.flow.map((f, idx) => (
                            <React.Fragment key={idx}>
                              <div className="flex-1 p-4 bg-white rounded-xl border border-brand-lime/20 text-sm font-bold text-center">
                                {f}
                              </div>
                              {idx < step.flow!.length - 1 && <ArrowRight className="w-4 h-4 text-brand-lime rotate-90 lg:rotate-0" />}
                            </React.Fragment>
                          ))}
                       </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Step Visualization/Graph Placeholder */}
              <div className="flex-1 w-full bg-gray-50 rounded-[40px] aspect-4/3 relative overflow-hidden border border-gray-100 flex items-center justify-center p-12">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-brand-lime/5 via-transparent to-transparent opacity-50" />
                 
                 {/* Dynamic Visual Based on Step */}
                 <div className="w-full h-full relative">
                    {/* Common Background Elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-full h-px bg-gray-200 absolute top-1/2 left-0" />
                       <div className="h-full w-px bg-gray-200 absolute left-1/2 top-0" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                       {i === 0 && (
                         <div className="flex flex-col gap-4 w-full h-full justify-center p-4">
                            <div className="bg-neutral-900 rounded-2xl p-6 shadow-2xl border border-white/10 font-mono text-xs overflow-hidden leading-relaxed">
                               <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
                                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                                  <span className="text-white/30 ml-2">POST /v1/transactions</span>
                               </div>
                               <pre className="text-brand-lime">
{`{
  "transaction_id": "tx_8z902x",
  "amount": 1250.00,
  "currency": "USD",
  "user": {
    "id": "u_9tk3m",
    "ip": "184.22.1.91",
    "device_hash": "a4b2c..."
  },
  "metadata": {
    "payment_method": "credit_card"
  }
}`}
                               </pre>
                            </div>
                            <div className="flex justify-end pr-8">
                               <div className="w-12 h-12 bg-brand-lime rounded-full flex items-center justify-center text-neutral-900 shadow-lg shadow-brand-lime/20 animate-bounce">
                                  <ArrowRight className="w-6 h-6" />
                               </div>
                            </div>
                         </div>
                       )}
                       {i === 3 && (
                         <div className="relative w-64 h-64 bg-white rounded-full border-8 border-gray-50 shadow-2xl flex items-center justify-center">
                            <div className="text-center">
                              <span className="text-6xl font-bold text-neutral-900">0.84</span>
                              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-2">Risk Score</p>
                            </div>
                            <div className="absolute inset-0 border-8 border-brand-lime border-t-transparent rounded-full animate-spin-slow" />
                         </div>
                       )}
                       {i === 5 && (
                         <div className="grid grid-cols-2 gap-4 w-full h-full p-8">
                            <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm flex flex-col justify-between">
                               <RefreshCw className="w-6 h-6 text-brand-lime" />
                               <span className="text-xs font-bold uppercase text-zinc-400">Webhook Sent</span>
                               <div className="h-2 w-full bg-gray-100 rounded-full" />
                            </div>
                            <div className="bg-neutral-900 rounded-3xl p-6 flex flex-col justify-between">
                               <Shield className="w-6 h-6 text-brand-lime" />
                               <span className="text-xs font-bold uppercase text-white/50">Tx Blocked</span>
                               <div className="h-2 w-full bg-white/10 rounded-full" />
                            </div>
                         </div>
                       )}
                       {/* Placeholder for other steps */}
                       {![0, 3, 5].includes(i) && (
                         <div className="w-2/3 h-2/3 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col gap-6 transform rotate-2">
                            <div className="flex items-center gap-3">
                               <div className="w-10 h-10 bg-brand-lime rounded-lg flex items-center justify-center">
                                  {step.icon}
                               </div>
                               <div className="h-4 w-32 bg-gray-100 rounded-full" />
                            </div>
                            <div className="space-y-2">
                               <div className="h-2 w-full bg-gray-50 rounded-full" />
                               <div className="h-2 w-full bg-gray-50 rounded-full" />
                               <div className="h-2 w-3/4 bg-gray-50 rounded-full" />
                            </div>
                            <div className="mt-auto flex justify-between items-center">
                               <div className="w-12 h-12 bg-gray-50 rounded-full" />
                               <div className="w-24 h-4 bg-gray-100 rounded-full" />
                            </div>
                         </div>
                       )}
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* ⚡ REAL-TIME PERFORMANCE */}
        <section className="bg-neutral-900 py-32 text-white">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl font-bold font-manrope mb-8">Built for Speed</h2>
                <p className="text-xl text-white/60 leading-relaxed mb-12">
                  Deep Sense processes transactions in milliseconds. Our architecture is designed for the most demanding financial workloads on earth.
                </p>
                <div className="space-y-8">
                  {[
                    { label: "Latency", value: "< 50ms", desc: "end-to-end scoring latency" },
                    { label: "Throughput", value: "100k+", desc: "transactions per second" },
                    { label: "Uptime", value: "99.999%", desc: "enterprise-grade reliability" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-1 h-12 bg-brand-lime group-hover:h-16 transition-all" />
                      <div>
                        <div className="flex items-baseline gap-4">
                          <span className="text-3xl font-bold font-manrope">{stat.value}</span>
                          <span className="text-sm font-bold text-white/40 uppercase tracking-widest">{stat.label}</span>
                        </div>
                        <p className="text-sm text-white/50">{stat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Low-latency scoring", icon: <Zap /> },
                  { title: "Async heavy tasks", icon: <Layers /> },
                  { title: "Scalable architecture", icon: <Database /> },
                  { title: "High-throughput ingestion", icon: <Activity /> },
                ].map((item, i) => (
                  <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[32px] hover:bg-white/10 transition-all">
                    <div className="text-brand-lime mb-6">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
                    </div>
                    <h3 className="font-bold text-lg font-manrope">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 🧠 INTELLIGENCE LAYER */}
        <section className="py-32">
          <div className="max-w-[1440px] mx-auto px-8">
            <div className="text-center mb-20">
               <h2 className="text-4xl font-bold font-manrope mb-4">Detect What Others Miss</h2>
               <p className="text-zinc-500 max-w-[600px] mx-auto">Advanced intelligence modules that go beyond simple rules to find sophisticated fraud patterns.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Graph Intelligence", desc: "Identify fraud rings and linked suspicious entities across your entire network." },
                 { title: "Behavioral Biometrics", desc: "Analyze how users interact with their devices to detect bot activity and account takeover." },
                 { title: "Device Fingerprinting", desc: "Detect emulators, rooted devices, and high-risk network origins instantly." },
                 { title: "Anomaly Detection", desc: "Automatically identify deviations from standard behavior without pre-defined rules." }
               ].map((item, i) => (
                 <div key={i} className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:scale-[1.02] transition-all group">
                    <h3 className="text-xl font-bold font-manrope mb-4 group-hover:text-brand-lime transition-colors">{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 🔐 SECURITY & RELIABILITY */}
        <section className="py-24 bg-brand-lime/5 border-y border-brand-lime/10">
          <div className="max-w-[1440px] mx-auto px-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <h2 className="text-4xl font-bold font-manrope mb-6">Secure and Reliable Processing</h2>
               <p className="text-lg text-zinc-600 mb-8">Data security is at the heart of everything we do. Our pipelines are built with redundant safeguards and strict encryption.</p>
               <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                  {[
                    { label: "Encryption", val: "AES-256", icon: <Lock className="w-4 h-4" /> },
                    { label: "Isolation", val: "Multi-tenant", icon: <Layers className="w-4 h-4" /> },
                    { label: "Auditing", val: "Full Logs", icon: <Database className="w-4 h-4" /> },
                    { label: "Reliability", val: "Fail-safe", icon: <Shield className="w-4 h-4" /> },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-2">
                       <div className="flex items-center gap-2 text-zinc-400 font-bold text-[10px] uppercase tracking-widest">
                          {item.icon}
                          {item.label}
                       </div>
                       <span className="text-lg font-bold text-neutral-900">{item.val}</span>
                    </div>
                  ))}
               </div>
            </div>
            <div className="flex-1">
               <div className="bg-neutral-900 rounded-[40px] p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8">
                     <Shield className="w-24 h-24 text-brand-lime opacity-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-manrope mb-6">Compliance First</h3>
                  <div className="space-y-4 opacity-70">
                     <div className="flex justify-between border-b border-white/10 pb-4">
                        <span>SOC2 Type II</span>
                        <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                     </div>
                     <div className="flex justify-between border-b border-white/10 pb-4">
                        <span>PCI-DSS Level 1</span>
                        <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                     </div>
                     <div className="flex justify-between border-b border-white/10 pb-4">
                        <span>GDPR / CCPA</span>
                        <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 📊 SUMMARY SECTION */}
        <section className="py-32 text-center text-neutral-900">
           <div className="max-w-[800px] mx-auto px-8">
              <h2 className="text-4xl lg:text-5xl font-bold font-manrope mb-8">From Data to Decision — <span className="text-zinc-300">Instantly</span></h2>
              <p className="text-xl text-zinc-500 mb-12">Deep Sense transforms raw transaction data into actionable fraud decisions in real time, giving your team the power to stop fraud before it happens.</p>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24">
           <div className="bg-neutral-900 rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-brand-lime/20 via-transparent to-transparent opacity-50" />
              <h2 className="text-4xl md:text-6xl font-bold font-manrope text-white mb-8 relative z-10">Ready to See It in Action?</h2>
              <p className="text-xl text-white/50 mb-12 max-w-[600px] mx-auto relative z-10">Schedule a technical deep dive with our engineers and see how Deep Sense can protect your business.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                 <button className="px-10 py-5 bg-brand-lime text-neutral-900 rounded-full font-bold font-manrope text-lg hover:scale-105 transition-all shadow-xl shadow-brand-lime/10">
                   Request Demo
                 </button>
                 <button className="px-10 py-5 bg-white/10 text-white border border-white/10 rounded-full font-bold font-manrope text-lg hover:bg-white/20 transition-all">
                   Explore API
                 </button>
              </div>
           </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}
