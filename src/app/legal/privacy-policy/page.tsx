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
  Users,
  Database,
  Lock,
  Globe,
  HelpCircle,
  BookOpen
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  subsections?: { title: string; points: string[] }[];
  ctaLink?: { text: string; href: string };
}

const privacySections: Section[] = [
  {
    id: "introduction",
    title: "Section 1 — Introduction",
    paragraphs: [
      "DeepSense is committed to protecting enterprise operational intelligence, customer privacy, fraud telemetry, onboarding records, identity information, AI-generated operational insights, governance data, and investigative evidence.",
      "This Privacy Policy applies to DeepSense SaaS services, APIs, AI systems, fraud intelligence tooling, onboarding systems, transaction monitoring infrastructure, reporting environments, and enterprise integrations.",
      "DeepSense operates under principles of privacy-by-design, least privilege access, operational transparency, responsible AI governance, enterprise accountability, and secure-by-default infrastructure."
    ]
  },
  {
    id: "scope-of-policy",
    title: "Section 2 — Scope of Policy",
    paragraphs: [
      "This policy applies to all enterprise customers, platform administrators, operational analysts, API consumers, integration environments, fraud operations teams, and governance stakeholders.",
      "This policy covers: hosted SaaS infrastructure, APIs and webhooks, operational telemetry, AI processing systems, cloud infrastructure, fraud analytics systems, graph intelligence platforms, and reporting services.",
      "This policy does not apply to third-party platforms not controlled by DeepSense, customer-managed infrastructure outside the platform, or external integrations independently governed by customers."
    ]
  },
  {
    id: "data-we-collect",
    title: "Section 3 — Data We Collect",
    paragraphs: [
      "DeepSense processes transactional and identity data to identify and block cyber threats, fraud, and financial crimes. The categories of information we collect and process include:"
    ],
    subsections: [
      {
        title: "A. Account & Organization Information",
        points: [
          "Organization Names, billing contacts, and subscription metadata.",
          "Administrator accounts, user identities, and enterprise configuration data."
        ]
      },
      {
        title: "B. Operational Fraud Intelligence Data",
        points: [
          "Transaction telemetry, fraud indicators, and onboarding records.",
          "Risk scoring metadata, graph relationships, case investigation activity, and behavioral analytics."
        ]
      },
      {
        title: "C. Technical & Infrastructure Data",
        points: [
          "IP addresses, device fingerprints, and browser metadata.",
          "API usage logs, authentication telemetry, infrastructure events, and system diagnostics."
        ]
      },
      {
        title: "D. AI & Operational Intelligence Data",
        points: [
          "AI-generated summaries and anomaly classifications.",
          "Fraud recommendations, governance insights, operational prioritization, and workflow intelligence."
        ]
      },
      {
        title: "E. Communication & Support Data",
        points: [
          "Support tickets, onboarding communications, and enterprise review requests.",
          "Governance inquiries and security incident requests."
        ]
      }
    ]
  },
  {
    id: "operational-telemetry",
    title: "Section 4 — Operational Telemetry",
    paragraphs: [
      "DeepSense continuously processes operational telemetry to detect fraud, secure infrastructure, monitor system integrity, improve fraud models, identify operational anomalies, and strengthen governance controls.",
      "Operational telemetry includes: authentication activity, transaction behavior, session analytics, API request patterns, workflow execution logs, infrastructure performance, and escalation activity.",
      "Telemetry processing is governed strictly using least privilege access, tenant isolation, encryption, governance monitoring, and retention controls."
    ]
  },
  {
    id: "fraud-intelligence-data",
    title: "Section 5 — Fraud Intelligence Data",
    paragraphs: [
      "DeepSense processes fraud intelligence data to identify suspicious activity, prevent account compromise, detect synthetic identities, monitor onboarding abuse, analyze graph relationships, orchestrate investigations, and support AML operations.",
      "Fraud intelligence processing may involve risk scoring, behavioral analytics, graph correlation, transaction evaluation, AI-driven anomaly detection, and operational prioritization.",
      "Fraud intelligence outputs are probabilistic, explainable, operationally reviewable, and subject to governance controls."
    ]
  },
  {
    id: "ai-automated-processing",
    title: "Section 6 — AI & Automated Processing",
    paragraphs: [
      "DeepSense uses artificial intelligence to generate operational insights, identify anomalies, prioritize investigations, summarize fraud patterns, orchestrate workflows, and optimize operational intelligence.",
      "AI systems process: behavioral telemetry, graph relationships, transaction history, operational workflows, governance activity, and fraud indicators."
    ],
    bulletPoints: [
      "Explainability Commitment: DeepSense is committed to explainable AI, human oversight, operational accountability, AI governance transparency, and audit traceability.",
      "Human-in-the-Loop: AI-generated outputs assist human operators, improve efficiency, and strengthen operational visibility. AI systems do not independently make legally binding decisions without organizational review."
    ]
  },
  {
    id: "legal-basis-for-processing",
    title: "Section 7 — Legal Basis for Processing",
    paragraphs: [
      "Depending on jurisdiction, DeepSense processes data under:",
      "Legal bases may vary depending on the deployment model, regional regulations, customer governance requirements, and active operational environments."
    ],
    bulletPoints: [
      "Contractual Necessity: Fulfilling obligations under Master Service Agreements.",
      "Legitimate Interests: Protecting system security, preventing payment fraud, and blocking financial crimes.",
      "Regulatory Obligations: Fulfilling AML, KYC, sanctions, and PEP screening mandates.",
      "Customer Instructions: Acting as a data processor on behalf of our enterprise clients."
    ]
  },
  {
    id: "how-we-use-data",
    title: "Section 8 — How We Use Data",
    paragraphs: [
      "DeepSense uses processed data solely to deliver, secure, and govern the fraud prevention services. Specifically, data is used to:"
    ],
    bulletPoints: [
      "Provide fraud intelligence services and secure operational infrastructure.",
      "Detect suspicious activity and generate real-time AI recommendations.",
      "Improve operational workflows and maintain platform performance.",
      "Support governance operations and generate audit-ready reporting analytics.",
      "Comply with global legal obligations and improve fraud models."
    ]
  },
  {
    id: "data-sharing-disclosure",
    title: "Section 9 — Data Sharing & Disclosure",
    paragraphs: [
      "DeepSense does not sell, rent, or trade customer operational data. Data may be disclosed only to authorized subprocessors, under lawful legal obligations, to support customer integrations, during security investigations, or under explicit enterprise contractual requirements.",
      "All disclosures are governed by strict contractual protections, security controls, confidentiality obligations, and internal governance reviews."
    ]
  },
  {
    id: "subprocessors",
    title: "Section 10 — Subprocessors",
    paragraphs: [
      "DeepSense may use approved subprocessors for: cloud infrastructure, observability, AI infrastructure, payment processing, identity management, and support tooling."
    ],
    ctaLink: { text: "View Full Subprocessor List", href: "/legal/subprocessors" }
  },
  {
    id: "international-data-transfers",
    title: "Section 11 — International Data Transfers",
    paragraphs: [
      "DeepSense supports global enterprise operations and may transfer data across regions where legally permitted. We ensure appropriate safeguards are implemented, including Standard Contractual Clauses (SCCs), regional hosting controls, end-to-end encryption, tenant isolation, and strict contractual governance."
    ]
  },
  {
    id: "data-residency",
    title: "Section 12 — Data Residency",
    paragraphs: [
      "DeepSense supports regional data hosting, multi-region infrastructure, geographic deployment restrictions, tenant-level residency policies, and enterprise governance requirements.",
      "Supported deployment models include: multi-tenant SaaS, hybrid deployments, private cloud instances, and regional infrastructure nodes."
    ]
  },
  {
    id: "data-retention",
    title: "Section 13 — Data Retention",
    paragraphs: [
      "DeepSense retains data only as long as necessary for fraud operations, regulatory obligations, governance requirements, enterprise contracts, operational integrity, and security investigations."
    ],
    ctaLink: { text: "Learn More About Retention Policies", href: "/legal/data-retention" }
  },
  {
    id: "security-measures",
    title: "Section 14 — Security Measures",
    paragraphs: [
      "DeepSense maintains rigorous technical and organizational security measures to protect transaction telemetry and identities. Our primary controls include:"
    ],
    bulletPoints: [
      "Encryption: End-to-end data encryption using TLS 1.3 in transit and AES-256 at rest.",
      "Isolation: Multi-tenant database isolation and zero-trust network access.",
      "Access Control: Strict Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA).",
      "Monitoring: Continuous security logging, SIEM integrations, and vulnerability management."
    ]
  },
  {
    id: "access-controls",
    title: "Section 15 — Access Controls",
    paragraphs: [
      "DeepSense enforces least privilege access, RBAC, MFA support, privileged access monitoring, governance approvals, and complete operational traceability.",
      "All administrative access is fully logged, monitored, governed under audit protocols, and periodically reviewed."
    ]
  },
  {
    id: "ai-governance-explainability",
    title: "Section 16 — AI Governance & Explainability",
    paragraphs: [
      "DeepSense AI governance principles include: explainability, operational accountability, fairness monitoring, human oversight, governance review, and complete AI traceability.",
      "Organizations are equipped to review AI outputs, override recommendations, configure custom governance workflows, and implement human approvals."
    ]
  },
  {
    id: "user-rights",
    title: "Section 17 — User Rights",
    paragraphs: [
      "Depending on jurisdiction, individuals may request: access to personal data, correction of inaccurate data, deletion requests, restriction requests, export requests, objection to processing, and consent withdrawal.",
      "Because DeepSense operates as a Data Processor for enterprise customers, data subject requests should be submitted directly to the primary customer controller or routed through privacy@deepsense.ai."
    ]
  },
  {
    id: "cookies-tracking",
    title: "Section 18 — Cookies & Tracking",
    paragraphs: [
      "DeepSense uses cookies and similar telemetry technologies for: authentication, security, analytics, operational functionality, performance monitoring, and preference management."
    ],
    ctaLink: { text: "View Full Cookie Policy", href: "/legal/cookies" }
  },
  {
    id: "childrens-privacy",
    title: "Section 19 — Children's Privacy",
    paragraphs: [
      "DeepSense services are not intended for individuals under applicable digital consent ages. The platform is designed and managed exclusively for enterprise operational and compliance use."
    ]
  },
  {
    id: "incident-response",
    title: "Section 20 — Incident Response",
    paragraphs: [
      "DeepSense maintains active security incident response procedures for unauthorized access, infrastructure compromise, operational disruptions, governance incidents, and security threats.",
      "Incident response protocols guarantee containment, systematic forensic investigation, rapid remediation, customer notification where required, and regulatory coordination where applicable."
    ]
  },
  {
    id: "regulatory-cooperation",
    title: "Section 21 — Regulatory Cooperation",
    paragraphs: [
      "DeepSense may respond to lawful government and law enforcement requests where legally required.",
      "All requests undergo strict legal review, validation, and documentation under internal compliance procedures before any data is disclosed."
    ],
    ctaLink: { text: "Learn More About Government Requests", href: "/legal/law-enforcement" }
  },
  {
    id: "policy-updates",
    title: "Section 22 — Policy Updates",
    paragraphs: [
      "DeepSense may update this Privacy Policy periodically to reflect regulatory changes, platform evolution, infrastructure improvements, governance enhancements, or operational changes.",
      "Material changes will be communicated through platform notifications, contractual updates, or direct enterprise communications."
    ]
  },
  {
    id: "contact-information",
    title: "Section 23 — Contact Information",
    paragraphs: [
      "For all formal data privacy inquiries, DPO questions, or regulatory compliance requests, please route communication to the designated department:"
    ]
  }
];

export default function PrivacyPolicyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    privacySections.forEach(s => {
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
    privacySections.forEach(s => {
      updated[s.id] = true;
    });
    setExpandedSections(updated);
  };

  const collapseAll = () => {
    const updated: Record<string, boolean> = {};
    privacySections.forEach(s => {
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

  const filteredSections = privacySections.filter(section => {
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
            ENTERPRISE PRIVACY & DATA GOVERNANCE
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
            Privacy <span className="text-zinc-400">Policy.</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg font-inter max-w-[800px] leading-relaxed italic">
            This Privacy Policy explains how DeepSense collects, processes, secures, governs, stores, transfers, and protects operational data, fraud intelligence telemetry, enterprise information, AI-generated insights, and user information across the DeepSense platform and related services.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">GDPR Ready</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">SOC 2 Aligned</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">ISO 27001 Support</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-brand-lime font-extrabold font-manrope uppercase text-[8px] tracking-wider">Enterprise AI Governance</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Privacy-by-Design</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Multi-Region Data Controls</span>
          </div>

          {/* Metadata Horizontal Bar */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Effective Date</span>
              <p className="text-xs font-bold text-white">January 1, 2026</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Last Updated</span>
              <p className="text-xs font-bold text-white">January 1, 2026</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Policy Version</span>
              <p className="text-xs font-bold text-white">v3.0 Enterprise</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Jurisdiction Coverage</span>
              <p className="text-xs font-bold text-white">Global</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Responsible Office</span>
              <p className="text-xs font-bold text-white">Privacy & Governance</p>
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
              <h3 className="text-base font-bold text-neutral-900">Privacy Framework</h3>
              <p className="text-[11px] text-zinc-500 font-inter">Audits, controls, and data residency guidelines.</p>
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
                placeholder="Search privacy controls..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 focus:outline-none focus:border-neutral-900 transition-all"
              />
            </div>

            {/* Anchored Sidebar Links */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
              {privacySections.map((section, idx) => (
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
              <span className="text-zinc-400 font-inter">Compliance queries?</span>
              <Link href="/company/contact" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                Privacy Portal
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

                      {/* Display Subsections (Categories) if applicable */}
                      {section.subsections && (
                        <div className="space-y-4 pt-2">
                          {section.subsections.map((sub, sIdx) => (
                            <div key={sIdx} className="space-y-2 border-l-2 border-zinc-100 pl-4">
                              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">{sub.title}</h4>
                              <ul className="space-y-1.5 list-disc pl-5 text-xs text-zinc-500">
                                {sub.points.map((pt, ptIdx) => (
                                  <li key={ptIdx}>{pt}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
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

                      {/* Specialized Data Tables for Specific Sections */}
                      {section.id === "data-retention" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Data Type</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Typical Retention</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Audit Logs</td>
                                <td className="p-4 text-zinc-500 font-inter italic">7 years</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Fraud Investigations</td>
                                <td className="p-4 text-brand-lime font-bold uppercase text-[9px] tracking-wider bg-brand-lime/5 inline-block rounded px-2 py-0.5 mt-2.5 ml-4">Configurable</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">API Logs</td>
                                <td className="p-4 text-zinc-500 font-inter italic">90 days</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Operational Telemetry</td>
                                <td className="p-4 text-brand-lime font-bold uppercase text-[9px] tracking-wider bg-brand-lime/5 inline-block rounded px-2 py-0.5 mt-2.5 ml-4">Configurable</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Billing Records</td>
                                <td className="p-4 text-zinc-500 font-inter italic">7 years</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">AI Traceability Logs</td>
                                <td className="p-4 text-brand-lime font-bold uppercase text-[9px] tracking-wider bg-brand-lime/5 inline-block rounded px-2 py-0.5 mt-2.5 ml-4">Configurable</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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

                      {/* Section 23 designated contact grid */}
                      {section.id === "contact-information" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Privacy Office</span>
                            <a href="mailto:privacy@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">privacy@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Data Protection</span>
                            <a href="mailto:dpo@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">dpo@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Security Ops</span>
                            <a href="mailto:security@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">security@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Compliance</span>
                            <a href="mailto:compliance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">compliance@deepsense.ai</a>
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
                <h3 className="text-base font-bold text-neutral-900">No Privacy Controls Found</h3>
                <p className="text-xs text-zinc-500 font-inter max-w-md mx-auto leading-relaxed">
                  No sections match your search query &ldquo;{searchQuery}&rdquo;. Try queries like &ldquo;GDPR&rdquo;, &ldquo;encryption&rdquo;, or &ldquo;retention&rdquo;.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Questions Bottom CTA Block */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pb-24">
        <div className="bg-neutral-900 text-white rounded-[32px] p-8 md:p-16 relative overflow-hidden border border-white/5 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          
          <div className="space-y-3 text-left relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black italic uppercase leading-none tracking-tight">
              Questions About Privacy, <span className="text-zinc-400">Governance, or AI?</span>
            </h2>
            <p className="text-zinc-400 text-sm font-inter leading-relaxed max-w-lg italic">
              Contact the DeepSense Privacy, Security, or Governance teams for enterprise privacy reviews, compliance assessments, procurement support, or data governance inquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
            <Link 
              href="mailto:privacy@deepsense.ai"
              className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-bold text-xs transition-all text-center uppercase tracking-wider"
            >
              Contact Privacy Team
            </Link>
            <button 
              onClick={() => window.print()}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              <Printer className="w-3.5 h-3.5 text-brand-lime" />
              Download PDF
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
