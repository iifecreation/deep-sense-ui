"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Search, 
  ChevronRight,
  Download,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Printer,
  Scale,
  Eye,
  Info,
  Lock,
  Layers,
  Terminal,
  Activity,
  Cpu,
  RefreshCw,
  HelpCircle,
  Network,
  Users,
  CheckCircle2
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  subsections?: { title: string; points: string[] }[];
  ctaLink?: { text: string; href: string };
}

const aiPolicySections: Section[] = [
  {
    id: "introduction",
    title: "Section 1 — Introduction",
    paragraphs: [
      "DeepSense uses artificial intelligence to support: fraud detection, operational intelligence, graph reasoning, anomaly detection, onboarding trust analysis, workflow orchestration, governance analytics, and investigation acceleration.",
      "DeepSense AI systems are designed to: augment human decision-making, improve operational visibility, strengthen fraud prevention, reduce operational inefficiencies, support governance workflows, and improve enterprise resilience.",
      "DeepSense is committed to: responsible AI deployment, explainability, operational accountability, human oversight, secure AI infrastructure, and privacy-preserving intelligence systems."
    ]
  },
  {
    id: "ai-governance-principles",
    title: "Section 2 — AI Governance Principles",
    paragraphs: [
      "DeepSense operates under eight core AI governance principles to ensure ethical, secure, and transparent operations across all deployment environments:"
    ]
  },
  {
    id: "scope-of-ai-systems",
    title: "Section 3 — Scope of AI Systems Covered",
    paragraphs: [
      "This policy applies to: fraud intelligence models, AI copilots, anomaly detection systems, graph intelligence reasoning, onboarding trust scoring, operational summarization, workflow automation systems, AI-powered reporting, AI-assisted investigations, and behavioral intelligence systems.",
      "AI capabilities may include: risk scoring, fraud recommendations, entity analysis, anomaly prioritization, operational forecasting, and governance analytics."
    ]
  },
  {
    id: "human-oversight",
    title: "Section 4 — Human Oversight & Governance Controls",
    paragraphs: [
      "DeepSense AI systems are designed to support—not replace—human operational judgment.",
      "Organizations are expected to: review AI outputs, validate operational decisions, maintain governance approvals, oversee escalation workflows, and audit AI-generated recommendations.",
      "DeepSense supports: human-in-the-loop review, approval workflows, explainability dashboards, AI override capabilities, and operational traceability."
    ]
  },
  {
    id: "explainability-transparency",
    title: "Section 5 — Explainability & Operational Transparency",
    paragraphs: [
      "DeepSense AI systems are designed to provide: explainable outputs, evidence-backed recommendations, graph reasoning visibility, operational context, anomaly rationale, and governance traceability.",
      "Explainability mechanisms may include: confidence scoring, decision summaries, linked evidence visualization, graph intelligence tracing, anomaly explanations, and operational reasoning paths."
    ]
  },
  {
    id: "responsible-fraud-intelligence",
    title: "Section 6 — Responsible Fraud Intelligence Operations",
    paragraphs: [
      "DeepSense AI systems are intended solely for: legitimate fraud prevention, operational risk management, onboarding intelligence, AML workflows, governance oversight, and enterprise operational intelligence.",
      "AI systems may not be used for: unlawful profiling, discriminatory enforcement, abusive surveillance, unethical investigations, or malicious operational targeting.",
      "Organizations remain responsible for ensuring: lawful operational usage, regulatory compliance, governance oversight, and ethical investigation practices."
    ]
  },
  {
    id: "ai-decision-support-limitations",
    title: "Section 7 — AI Decision Support Limitations",
    paragraphs: [
      "DeepSense AI systems generate probabilistic outputs, may produce incomplete insights, rely on operational telemetry quality, are subject to evolving fraud patterns, and do not guarantee fraud prevention outcomes.",
      "AI-generated outputs should not be interpreted as: legal determinations, compliance certifications, guaranteed fraud conclusions, or autonomous enforcement decisions.",
      "Organizations should: validate operational context, apply human review, maintain governance oversight, and evaluate organizational risk tolerance."
    ]
  },
  {
    id: "bias-mitigation",
    title: "Section 8 — Bias Monitoring & Risk Mitigation",
    paragraphs: [
      "DeepSense continuously evaluates AI systems for: operational inconsistencies, anomalous recommendations, governance risks, unfair operational outcomes, and data quality issues.",
      "Bias mitigation efforts may include: model evaluation, operational testing, governance reviews, explainability analysis, feedback incorporation, and anomaly monitoring.",
      "DeepSense does not intentionally design AI systems to: discriminate unlawfully, target protected groups, enable harmful profiling, or automate biased enforcement."
    ]
  },
  {
    id: "data-governance",
    title: "Section 9 — AI Data Governance & Privacy Protection",
    paragraphs: [
      "AI systems may process: operational telemetry, fraud indicators, onboarding workflows, behavioral analytics, graph intelligence, and governance activity.",
      "DeepSense protects AI-related processing using: encryption, tenant isolation, access governance, regional controls, operational monitoring, and privacy-by-design principles.",
      "DeepSense does not use customer operational intelligence for: unauthorized advertising, unrelated commercial profiling, or external monetization."
    ]
  },
  {
    id: "ai-monitoring-observability",
    title: "Section 10 — Continuous AI Monitoring & Observability",
    paragraphs: [
      "DeepSense continuously monitors AI systems for: operational anomalies, infrastructure integrity, model performance, governance drift, suspicious outputs, and workflow reliability.",
      "Monitoring capabilities may include: AI telemetry analytics, explainability validation, anomaly tracking, governance alerts, infrastructure observability, and operational audit trails."
    ]
  },
  {
    id: "ai-security-controls",
    title: "Section 11 — AI Infrastructure Security & Protection",
    paragraphs: [
      "DeepSense protects AI systems using: infrastructure segmentation, secure model hosting, access controls, audit logging, runtime monitoring, encryption, governance approvals, and operational isolation.",
      "AI infrastructure security includes: workload segmentation, privileged access governance, telemetry monitoring, incident response controls, and infrastructure hardening."
    ]
  },
  {
    id: "acceptable-ai-usage",
    title: "Section 12 — Acceptable AI Usage",
    paragraphs: [
      "Permitted AI Use Cases: DeepSense AI may be used for: fraud investigations, onboarding intelligence, AML operations, operational analytics, governance reporting, workflow prioritization, anomaly detection, executive intelligence, and risk analysis.",
      "Organizations should ensure: lawful operational use, governance oversight, analyst review, and operational accountability."
    ]
  },
  {
    id: "prohibited-ai-usage",
    title: "Section 13 — Prohibited AI Usage",
    paragraphs: [
      "DeepSense AI systems may not be used for: unlawful surveillance, discriminatory enforcement, harmful profiling, deceptive practices, malicious automation, harassment, social engineering, or unauthorized behavioral manipulation.",
      "Organizations may not: bypass governance controls, use AI autonomously without oversight where legally required, misuse AI-generated intelligence, or exploit AI systems maliciously."
    ]
  },
  {
    id: "ai-automation-governance",
    title: "Section 14 — AI Automation & Workflow Governance",
    paragraphs: [
      "DeepSense supports automation workflows for: fraud escalation, investigation prioritization, operational orchestration, governance notifications, and AI-generated recommendations.",
      "Automation capabilities are governed using: configurable approval workflows, escalation controls, operational traceability, governance monitoring, and audit logging.",
      "Organizations may configure: approval thresholds, escalation requirements, automation restrictions, and human review gates."
    ]
  },
  {
    id: "enterprise-accountability",
    title: "Section 15 — Enterprise Accountability & Governance Responsibilities",
    paragraphs: [
      "Organizations using DeepSense AI are responsible for: lawful operational deployment, governance oversight, regulatory compliance, analyst supervision, operational approvals, and validating AI-assisted outcomes.",
      "DeepSense provides: governance tooling, explainability systems, audit traceability, operational monitoring, and AI observability infrastructure."
    ]
  },
  {
    id: "regulatory-alignment",
    title: "Section 16 — Regulatory & Governance Alignment",
    paragraphs: [
      "DeepSense AI governance principles are designed to support: GDPR principles, enterprise governance frameworks, operational accountability standards, privacy-by-design requirements, and emerging AI governance expectations.",
      "The platform supports: auditability, traceability, explainability, operational governance, regional controls, and privacy safeguards."
    ]
  },
  {
    id: "incident-management",
    title: "Section 17 — AI Incident Detection & Response",
    paragraphs: [
      "DeepSense maintains incident response procedures for: anomalous AI behavior, governance failures, infrastructure compromise, operational disruptions, suspicious outputs, and security incidents.",
      "Response workflows may include: containment, investigation, operational review, governance escalation, and remediation coordination."
    ]
  },
  {
    id: "continuous-improvement",
    title: "Section 18 — Continuous Improvement & Governance Evolution",
    paragraphs: [
      "DeepSense continuously improves AI systems using: governance feedback, operational learnings, explainability analysis, infrastructure monitoring, fraud intelligence evolution, and security assessments.",
      "AI governance frameworks may evolve to address: regulatory developments, operational risks, infrastructure advancements, enterprise requirements, and emerging AI standards."
    ]
  },
  {
    id: "policy-updates",
    title: "Section 19 — Changes to This Policy",
    paragraphs: [
      "DeepSense may update this policy periodically to reflect: evolving AI governance standards, regulatory developments, infrastructure changes, operational improvements, and explainability enhancements.",
      "Material changes may be communicated through: platform notifications, enterprise governance advisories, or procurement updates."
    ]
  },
  {
    id: "contact-information",
    title: "Section 20 — Contact Information",
    paragraphs: [
      "For all formal inquiries regarding AI governance frameworks, explainability audits, model compliance, or ethical AI operational tracking, contact our designated offices:"
    ]
  }
];

export default function AIPolicyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    aiPolicySections.forEach(s => {
      initial[s.id] = true; // Open by default
    });
    return initial;
  });

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleSection = (id: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    const updated: Record<string, boolean> = {};
    aiPolicySections.forEach(s => {
      updated[s.id] = true;
    });
    setExpandedSections(updated);
  };

  const collapseAll = () => {
    const updated: Record<string, boolean> = {};
    aiPolicySections.forEach(s => {
      updated[s.id] = false;
    });
    setExpandedSections(updated);
  };

  const scrollToAnchor = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      setExpandedSections(prev => ({ ...prev, [id]: true }));
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredSections = aiPolicySections.filter(section => {
    const query = searchQuery.toLowerCase();
    const titleMatch = section.title.toLowerCase().includes(query);
    const paraMatch = section.paragraphs.some(p => p.toLowerCase().includes(query));
    const bulletMatch = section.bulletPoints?.some(b => b.toLowerCase().includes(query));
    const subsectionMatch = section.subsections?.some(sub => 
      sub.title.toLowerCase().includes(query) || 
      sub.points.some(pt => pt.toLowerCase().includes(query))
    );

    return titleMatch || paraMatch || bulletMatch || subsectionMatch;
  });

  return (
    <div className="min-h-screen bg-zinc-50 text-neutral-900 font-manrope">
      
      {/* 1. Hero Header */}
      <section className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-24 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-brand-lime text-[10px] font-extrabold uppercase tracking-widest border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5" />
            RESPONSIBLE AI & OPERATIONAL ACCOUNTABILITY
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
            AI & Responsible <span className="text-zinc-400">Use.</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg font-inter max-w-[800px] leading-relaxed italic">
            This policy outlines the principles, governance frameworks, operational safeguards, explainability standards, and responsible usage requirements governing DeepSense artificial intelligence systems, fraud intelligence models, AI copilots, automation infrastructure, and operational decision-support technologies.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Explainable AI</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Human-in-the-Loop</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">AI Governance Controls</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-brand-lime font-extrabold font-manrope uppercase text-[8px] tracking-wider">Enterprise Accountability</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Operational Transparency</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Privacy-by-Design</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Audit-Ready AI</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Responsible Automation</span>
          </div>

          {/* Metadata Horizontal Bar */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Framework Version</span>
              <p className="text-xs font-bold text-white">v2.0 Enterprise</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Last Updated</span>
              <p className="text-xs font-bold text-white">January 1, 2026</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Governance Scope</span>
              <p className="text-xs font-bold text-white">Global Enterprise AI</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Coverage</span>
              <p className="text-xs font-bold text-white">AI Intelligence & Automation</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Responsible Office</span>
              <p className="text-xs font-bold text-white">AI Governance & Compliance</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Download</span>
              <button 
                onClick={() => window.print()}
                className="text-xs font-bold text-white hover:underline flex items-center gap-1 text-left"
              >
                <Download className="w-3 h-3 text-brand-lime" />
                PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Navigation Panel & Workspace */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Sticky Sidebar Navigator */}
          <div className="lg:col-span-4 bg-white border border-zinc-200 rounded-[32px] p-6 shadow-sm sticky top-28 space-y-6">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-neutral-900">AI Governance Framework</h3>
              <p className="text-[11px] text-zinc-500 font-inter">Audit explainability nodes, human-in-the-loop workflows, and bias checks.</p>
            </div>

            {/* Quick Action Toggle All */}
            <div className="flex gap-2">
              <button 
                onClick={expandAll}
                className="flex-1 py-1.5 bg-zinc-100 hover:bg-zinc-200 rounded-lg text-[10px] font-bold text-neutral-800 transition-all"
              >
                Expand All
              </button>
              <button 
                onClick={collapseAll}
                className="flex-1 py-1.5 bg-zinc-100 hover:bg-zinc-200 rounded-lg text-[10px] font-bold text-neutral-800 transition-all"
              >
                Collapse All
              </button>
            </div>

            {/* Policy Clause Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search AI governance terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 focus:outline-none focus:border-neutral-900 transition-all"
              />
            </div>

            {/* Anchored Sidebar Links */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
              {aiPolicySections.map((section, idx) => (
                <button 
                  key={idx}
                  onClick={() => scrollToAnchor(section.id)}
                  className="w-full flex items-center justify-between p-3 rounded-xl border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50 text-left transition-all"
                >
                  <span className="text-xs font-extrabold text-neutral-900">{section.title.split(" — ")[1] || section.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                </button>
              ))}
            </div>

            {/* External Links */}
            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px]">
              <span className="text-zinc-400 font-inter">Explore AI Hub?</span>
              <Link href="/platform/ai-intelligence" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                AI Intelligence Hub
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Right Column Actual Document Content */}
          <div className="lg:col-span-8 bg-white border border-zinc-200 rounded-[32px] p-8 md:p-14 shadow-sm space-y-10">
            
            {filteredSections.map((section) => {
              const isExpanded = expandedSections[section.id];
              return (
                <div 
                  key={section.id}
                  ref={(el) => { sectionRefs.current[section.id] = el; }}
                  className="border-b border-zinc-100 pb-8 last:border-b-0 last:pb-0 scroll-mt-28"
                >
                  {/* Collapsible Header */}
                  <button 
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <h2 className="text-lg md:text-xl font-bold font-manrope text-neutral-900 group-hover:text-zinc-600 transition-colors uppercase tracking-tight italic">
                      {section.title}
                    </h2>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-zinc-400 group-hover:text-neutral-900" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-400 group-hover:text-neutral-900" />
                    )}
                  </button>

                  {/* Stateful Expanded Section Body */}
                  {isExpanded && (
                    <div className="mt-4 space-y-5 font-inter text-sm text-zinc-600 leading-relaxed italic animate-fadeIn">
                      
                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}

                      {/* Section 2: Core AI Governance Principles Grid */}
                      {section.id === "ai-governance-principles" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Explainability</h4>
                            <p className="text-[11px] text-zinc-500 font-inter">AI-generated outputs should be understandable, reviewable, and operationally interpretable.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Human Oversight</h4>
                            <p className="text-[11px] text-zinc-500 font-inter">Humans remain responsible for operational decisions and governance approvals.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Accountability</h4>
                            <p className="text-[11px] text-zinc-500 font-inter">Organizations retain accountability for actions taken using AI-generated intelligence.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Privacy Protection</h4>
                            <p className="text-[11px] text-zinc-500 font-inter">AI systems operate under privacy-by-design and governance-by-default principles.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Fairness & Risk Awareness</h4>
                            <p className="text-[11px] text-zinc-500 font-inter">AI systems are continuously evaluated for harmful operational outcomes and governance risks.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Security-by-Design</h4>
                            <p className="text-[11px] text-zinc-500 font-inter">AI infrastructure is protected using enterprise-grade security controls and monitoring.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Auditability</h4>
                            <p className="text-[11px] text-zinc-500 font-inter">AI reasoning, recommendations, and operational actions are traceable and reviewable.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Operational Transparency</h4>
                            <p className="text-[11px] text-zinc-500 font-inter">Organizations receive visibility into AI workflows, recommendations, and governance activity.</p>
                          </div>
                        </div>
                      )}

                      {/* Section 4: Governance Features List */}
                      {section.id === "human-oversight" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                          {["AI Recommendation Review Queues", "Human Approval Workflows", "Escalation Governance", "Operational Override Controls", "AI Audit Logging"].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-zinc-50 border border-zinc-200 rounded-xl">
                              <CheckCircle2 className="w-4 h-4 text-brand-lime flex-shrink-0" />
                              <span className="text-xs font-bold text-neutral-800 not-italic">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section 5: Example Explainability Components Table */}
                      {section.id === "explainability-transparency" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Component</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Purpose</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Risk Score Rationale</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Explain fraud scoring logic and weightings</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Graph Relationships</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Visualize linked entities, devices, and shared accounts</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Anomaly Summaries</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Explain behavioral deviations and velocity spikes</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">AI Audit Trails</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Track operational decisions, inputs, and human approvals</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Confidence Indicators</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Show prediction certainty and probabilistic bounds</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Display Bullet Points if applicable */}
                      {section.bulletPoints && (
                        <ul className="space-y-3.5 pl-6 list-disc text-zinc-600">
                          {section.bulletPoints.map((bullet, bIdx) => (
                            <li key={bIdx} className="pl-1">
                              {bullet.includes(": ") ? (
                                <>
                                  <strong className="text-neutral-900 not-italic uppercase tracking-tight text-xs">{bullet.split(": ")[0]}:</strong>
                                  <span>{bullet.split(": ")[1]}</span>
                                </>
                              ) : (
                                <span>{bullet}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Display CTA Box if defined */}
                      {section.ctaLink && (
                        <div className="pt-4">
                          <Link 
                            href={section.ctaLink.href}
                            className="inline-flex items-center gap-2 p-4 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-2xl text-xs font-bold text-neutral-900 transition-all"
                          >
                            <span>{section.ctaLink.text}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                          </Link>
                        </div>
                      )}

                      {/* Section 20 designated contact grid */}
                      {section.id === "contact-information" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">AI Governance</span>
                            <a href="mailto:ai-governance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">ai-governance@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Privacy Office</span>
                            <a href="mailto:privacy@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">privacy@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Compliance Team</span>
                            <a href="mailto:compliance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">compliance@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Security Ops</span>
                            <a href="mailto:security@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">security@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Legal Team</span>
                            <a href="mailto:legal@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">legal@deepsense.ai</a>
                          </div>
                        </div>
                      )}

                    </div>
                  )}
                </div>
              );
            })}

            {filteredSections.length === 0 && (
              <div className="text-center py-20 space-y-4">
                <AlertCircle className="w-10 h-10 text-zinc-300 mx-auto" />
                <h3 className="text-base font-bold text-neutral-900">No AI Governance Policies Found</h3>
                <p className="text-xs text-zinc-500 font-inter max-w-md mx-auto leading-relaxed">
                  No sections match your search query &ldquo;{searchQuery}&rdquo;. Try queries like &ldquo;explainability&rdquo;, &ldquo;human oversight&rdquo;, or &ldquo;bias&rdquo;.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Questions Bottom CTA Box */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pb-24">
        <div className="bg-neutral-900 text-white rounded-[32px] p-8 md:p-16 relative overflow-hidden border border-white/5 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="space-y-3 text-left relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none tracking-tight">
              Need Responsible AI Documentation <span className="text-zinc-400">or Governance Reviews?</span>
            </h2>
            <p className="text-zinc-400 text-sm font-inter leading-relaxed max-w-lg italic">
              Contact DeepSense AI Governance, Security, Privacy, or Compliance teams for procurement reviews, AI governance assessments, explainability documentation, operational accountability reviews, or enterprise AI oversight discussions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 relative z-10 w-full sm:w-auto">
            <Link 
              href="mailto:ai-governance@deepsense.ai"
              className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-bold text-xs transition-all text-center uppercase tracking-wider"
            >
              Contact AI Governance Team
            </Link>
            <button 
              onClick={() => window.print()}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              <Printer className="w-3.5 h-3.5 text-brand-lime" />
              Download AI Policy PDF
            </button>
            <Link 
              href="/platform/ai-intelligence"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              Explore Responsible AI Center
            </Link>
            <Link 
              href="/legal/security-compliance"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              View Security Commitments
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
