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
  HelpCircle
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  subsections?: { title: string; points: string[] }[];
  ctaLink?: { text: string; href: string };
}

const securitySections: Section[] = [
  {
    id: "security-philosophy",
    title: "Section 1 — Security Philosophy",
    paragraphs: [
      "DeepSense is designed from the ground up using zero-trust principles, privacy-by-design architecture, defense-in-depth security, least privilege access, operational governance, continuous monitoring, AI accountability, and enterprise resilience engineering.",
      "Security is embedded across our fraud intelligence systems, AI processing infrastructure, graph intelligence platforms, operational workflows, APIs, integrations, governance systems, reporting infrastructure, and cloud environments.",
      "DeepSense prioritizes operational integrity, infrastructure resilience, customer trust, governance accountability, regulatory readiness, and secure AI operations."
    ]
  },
  {
    id: "shared-responsibility-model",
    title: "Section 2 — Shared Responsibility Model",
    paragraphs: [
      "Security and compliance responsibilities are shared between DeepSense and our enterprise customers."
    ],
    subsections: [
      {
        title: "A. DeepSense Responsibilities",
        points: [
          "Infrastructure security, platform availability, and operational monitoring.",
          "AI governance controls, tenant isolation, encryption infrastructure, vulnerability management, and incident response."
        ]
      },
      {
        title: "B. Customer Responsibilities",
        points: [
          "User access governance, lawful data collection, and endpoint security.",
          "Integration governance, internal compliance obligations, analyst oversight, and identity lifecycle management."
        ]
      }
    ]
  },
  {
    id: "infrastructure-security",
    title: "Section 3 — Infrastructure Security",
    paragraphs: [
      "DeepSense infrastructure is built using a cloud-native architecture, segmented workloads, distributed resilience, secure orchestration, hardened runtime environments, and immutable infrastructure principles.",
      "Infrastructure protections include workload isolation, continuous monitoring, infrastructure logging, automated patching, runtime security controls, and configuration governance."
    ]
  },
  {
    id: "cloud-network-security",
    title: "Section 4 — Cloud & Network Security",
    paragraphs: [
      "DeepSense protects network and cloud environments using private networking, segmented environments, Web Application Firewall (WAF) protections, DDoS mitigation, secure API gateways, and regional isolation controls."
    ]
  },
  {
    id: "encryption-standards",
    title: "Section 5 — Encryption Standards",
    paragraphs: [
      "DeepSense protects data using encryption at rest, encryption in transit, key management systems (KMS), tokenization, certificate lifecycle governance, and cryptographic rotation policies."
    ]
  },
  {
    id: "identity-access-management",
    title: "Section 6 — Identity & Access Management",
    paragraphs: [
      "DeepSense enforces strict Role-Based Access Control (RBAC), Multi-Factor Authentication (MFA) support, least privilege access, session governance, privileged access monitoring, and identity federation.",
      "Supported identity standards include SAML, OAuth2, OpenID Connect, and Enterprise Single Sign-On (SSO)."
    ]
  },
  {
    id: "zero-trust-architecture",
    title: "Section 7 — Zero-Trust Architecture",
    paragraphs: [
      "DeepSense operates using zero-trust principles, including continuous verification, least privilege enforcement, identity-aware access, workload isolation, operational telemetry validation, and infrastructure trust scoring.",
      "Every single request is authenticated, authorized, logged, monitored, and governance validated."
    ]
  },
  {
    id: "tenant-isolation",
    title: "Section 8 — Tenant Isolation",
    paragraphs: [
      "DeepSense provides tenant workload isolation, segmented operational environments, regional separation, isolated analytics processing, governance boundaries, and dedicated deployment options.",
      "Isolation protections apply to AI processing, operational telemetry, fraud investigations, graph intelligence, reporting environments, APIs, and integrations."
    ]
  },
  {
    id: "operational-monitoring",
    title: "Section 9 — Operational Monitoring",
    paragraphs: [
      "DeepSense continuously monitors authentication activity, infrastructure health, API traffic, fraud intelligence pipelines, operational anomalies, governance activity, and AI decision telemetry.",
      "Monitoring supports operational resilience, anomaly detection, threat correlation, infrastructure observability, and governance accountability."
    ]
  },
  {
    id: "threat-detection-response",
    title: "Section 10 — Threat Detection & Response",
    paragraphs: [
      "DeepSense maintains Security Information and Event Management (SIEM) integrations, anomaly detection systems, threat intelligence pipelines, behavioral monitoring, and operational alerting.",
      "Security response capabilities include incident triage, containment, forensic analysis, remediation coordination, governance escalation, and customer notification workflows."
    ]
  },
  {
    id: "vulnerability-management",
    title: "Section 11 — Vulnerability Management",
    paragraphs: [
      "DeepSense maintains a vulnerability management program including continuous scanning, dependency monitoring, infrastructure patching, penetration testing, remediation tracking, and operational security reviews."
    ]
  },
  {
    id: "secure-development-lifecycle",
    title: "Section 12 — Secure Development Lifecycle",
    paragraphs: [
      "DeepSense integrates security throughout the development lifecycle using secure coding standards, peer reviews, CI/CD security scanning, dependency analysis, infrastructure testing, and governance approvals."
    ]
  },
  {
    id: "ai-governance-security",
    title: "Section 13 — AI Governance & Security",
    paragraphs: [
      "DeepSense AI systems are governed using explainability controls, operational traceability, human oversight, governance approvals, AI telemetry monitoring, and model accountability frameworks.",
      "AI systems are continuously evaluated for operational integrity, governance alignment, anomalous outputs, explainability consistency, and infrastructure security."
    ]
  },
  {
    id: "compliance-programs",
    title: "Section 14 — Compliance Programs",
    paragraphs: [
      "DeepSense supports enterprise compliance initiatives through detailed audit logging, governance workflows, retention controls, operational traceability, reporting infrastructure, and access governance."
    ]
  },
  {
    id: "privacy-data-governance",
    title: "Section 15 — Privacy & Data Governance",
    paragraphs: [
      "DeepSense implements privacy-by-design principles, data minimization, regional residency controls, operational governance, lawful processing safeguards, and retention governance."
    ]
  },
  {
    id: "incident-response",
    title: "Section 16 — Incident Response",
    paragraphs: [
      "DeepSense maintains incident response procedures for unauthorized access, infrastructure compromise, operational disruptions, AI governance incidents, data exposure risks, and service outages.",
      "Response workflows include containment, remediation, forensic investigation, governance escalation, customer notification, and regulatory coordination."
    ]
  },
  {
    id: "business-continuity-disaster-recovery",
    title: "Section 17 — Business Continuity & Disaster Recovery",
    paragraphs: [
      "DeepSense maintains resilience controls including multi-region failover, distributed redundancy, infrastructure recovery automation, operational continuity workflows, backup governance, and disaster recovery testing."
    ]
  },
  {
    id: "third-party-risk-management",
    title: "Section 18 — Third-Party Risk Management",
    paragraphs: [
      "DeepSense evaluates subprocessors using strict security reviews, privacy assessments, governance controls, contractual safeguards, infrastructure monitoring, and operational risk analysis."
    ],
    ctaLink: { text: "View Full Subprocessor List", href: "/legal/subprocessors" }
  },
  {
    id: "audit-assurance",
    title: "Section 19 — Audit & Assurance",
    paragraphs: [
      "DeepSense maintains operational audit trails, governance reviews, infrastructure logging, compliance reporting, AI traceability, and executive oversight processes.",
      "Customers may request security summaries, compliance documentation, governance reports, and procurement questionnaires."
    ]
  },
  {
    id: "security-reporting-reviews",
    title: "Section 20 — Security Reporting & Reviews",
    paragraphs: [
      "Enterprise customers may request security architecture reviews, compliance mappings, governance summaries, AI accountability documentation, and operational resilience reviews.",
      "DeepSense supports procurement reviews, vendor assessments, regulatory discussions, and enterprise security evaluations."
    ]
  },
  {
    id: "customer-responsibilities",
    title: "Section 21 — Customer Responsibilities",
    paragraphs: [
      "Customers are expected to enforce MFA, manage privileged access, secure endpoints, review AI outputs, govern integrations, maintain lawful operational usage, and monitor analyst activity."
    ]
  },
  {
    id: "policy-updates",
    title: "Section 22 — Policy Updates",
    paragraphs: [
      "DeepSense may update this page periodically to reflect evolving security standards, infrastructure enhancements, governance improvements, AI oversight advancements, or regulatory changes.",
      "Material changes will be communicated through enterprise communications, governance notifications, or procurement updates."
    ]
  },
  {
    id: "contact-information",
    title: "Section 23 — Contact Information",
    paragraphs: [
      "For all formal inquiries regarding enterprise security architecture, GRC compliance certifications, penetration testing reports, or data governance audits, contact our designated offices:"
    ]
  }
];

export default function SecurityCompliancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    securitySections.forEach(s => {
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
    securitySections.forEach(s => {
      updated[s.id] = true;
    });
    setExpandedSections(updated);
  };

  const collapseAll = () => {
    const updated: Record<string, boolean> = {};
    securitySections.forEach(s => {
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

  const filteredSections = securitySections.filter(section => {
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
            ENTERPRISE SECURITY & COMPLIANCE
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
            Security & <span className="text-zinc-400">Compliance.</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg font-inter max-w-[800px] leading-relaxed italic">
            DeepSense maintains enterprise-grade security architecture, governance controls, privacy safeguards, AI accountability frameworks, operational resilience systems, and compliance programs designed to support global fraud intelligence operations and regulated enterprise environments.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Zero-Trust Architecture</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">SOC 2 Alignment</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">ISO 27001 Support</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-brand-lime font-extrabold font-manrope uppercase text-[8px] tracking-wider">GDPR Ready</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">AI Governance Controls</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Enterprise Security Monitoring</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Multi-Region Infrastructure</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Encryption by Default</span>
          </div>

          {/* Metadata Horizontal Bar */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Framework Version</span>
              <p className="text-xs font-bold text-white">v3.0 Enterprise</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Last Updated</span>
              <p className="text-xs font-bold text-white">January 1, 2026</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Deployment Scope</span>
              <p className="text-xs font-bold text-white">Global</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Compliance Scope</span>
              <p className="text-xs font-bold text-white">Enterprise SaaS</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Responsible Office</span>
              <p className="text-xs font-bold text-white">Security & Compliance</p>
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
              <h3 className="text-base font-bold text-neutral-900">Security Architecture</h3>
              <p className="text-[11px] text-zinc-500 font-inter">Audit cryptographic protocols, SDLC workflows, and compliance badges.</p>
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
                placeholder="Search security controls..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 focus:outline-none focus:border-neutral-900 transition-all"
              />
            </div>

            {/* Anchored Sidebar Links */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
              {securitySections.map((section, idx) => (
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
              <span className="text-zinc-400 font-inter">Audit review?</span>
              <Link href="/company/contact" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                Open Trust Center
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

                      {/* Section 2 Subsections (Shared Responsibility Roles) */}
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

                      {/* Section 3: Infrastructure Security Grid */}
                      {section.id === "infrastructure-security" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">01</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Kubernetes Workloads</h4>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">Secure pod isolation, active routing configurations, and segmentations.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">02</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Distributed Infrastructure</h4>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">Multi-region active load routing to maintain operational performance.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">03</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Immutable Infrastructure</h4>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">Workload instances are systematically replaced, never modified in production.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">04</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Runtime Threat Monitoring</h4>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">Real-time system behavior profiling to capture malicious anomalies.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">05</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Infrastructure Segmentation</h4>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">Systematic database partitioning and isolated cloud VPC networks.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">06</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">IaC Governance</h4>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">All settings reviewed and committed strictly via code workflows.</p>
                          </div>
                        </div>
                      )}

                      {/* Section 4: Cloud & Network Security Features */}
                      {section.id === "cloud-network-security" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Network Segmentation</h4>
                            <p className="text-[11px] text-zinc-500 font-inter">VPC environment controls, memory isolation, and secured networks.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Secure Cloud Architecture</h4>
                            <p className="text-[11px] text-zinc-500 font-inter">Global deployment using tier-1 enterprise-grade cloud node infrastructure.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">API Gateway Protection</h4>
                            <p className="text-[11px] text-zinc-500 font-inter">Granular rate-limiting, secure token checks, and protocol validations.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">DDoS Mitigation</h4>
                            <p className="text-[11px] text-zinc-500 font-inter">Edge traffic filtering, anomaly checks, and scaling safeguards.</p>
                          </div>
                        </div>
                      )}

                      {/* Section 5: Encryption Standards Table */}
                      {section.id === "encryption-standards" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Control</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Standard</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Data at Rest</td>
                                <td className="p-4 text-zinc-500 font-inter italic">AES-256 (System volume & database encryption)</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Data in Transit</td>
                                <td className="p-4 text-zinc-500 font-inter italic">TLS 1.2+ (Secure endpoint routing)</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">API Encryption</td>
                                <td className="p-4 text-zinc-500 font-inter italic">HTTPS/TLS (Secure interface communication)</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Key Management</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Managed KMS (Automatic rotation & isolation)</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Secrets Management</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Segmented secret storage & dynamic injection</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 6: Identity Governance Features */}
                      {section.id === "identity-access-management" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Multi-Factor Authentication</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Strictly required across all administrator and analyst logins.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Role-Based Controls</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Fine-grained dataset access permissions mapped to user categories.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Privileged Session Monitoring</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Every action performed under privilege credentials is audited.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Identity Federation</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Direct integration with OKTA, Azure AD, and Ping Identity SSO.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Access Approvals</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Critical actions demand double-signature governance review workflows.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Authentication Telemetry</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Anomaly analysis checks on credentials velocity and patterns.</p>
                          </div>
                        </div>
                      )}

                      {/* Section 11: Security Testing Activities */}
                      {section.id === "vulnerability-management" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                          {["Automated Vulnerability Scanning", "Infrastructure Hardening Reviews", "Penetration Testing", "Third-Party Assessments", "Dependency Governance", "Runtime Security Monitoring"].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-zinc-50 border border-zinc-200 rounded-xl">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                              <span className="text-xs font-bold text-neutral-800">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section 12: SDLC Controls */}
                      {section.id === "secure-development-lifecycle" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                          {["Secure Code Reviews", "Infrastructure Security Testing", "Dependency Risk Analysis", "CI/CD Governance Controls", "Secrets Management", "Release Approval Workflows"].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-zinc-50 border border-zinc-200 rounded-xl">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                              <span className="text-xs font-bold text-neutral-800">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section 14: Compliance Programs Table */}
                      {section.id === "compliance-programs" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Framework</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">GDPR</td>
                                <td className="p-4 text-brand-lime font-bold uppercase text-[9px] tracking-wider bg-brand-lime/5 inline-block rounded px-2 py-0.5 mt-2 ml-4">Supported</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">SOC 2</td>
                                <td className="p-4 text-neutral-900 font-bold uppercase text-[9px] tracking-wider bg-zinc-100 inline-block rounded px-2 py-0.5 mt-2 ml-4">Alignment Ready</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">ISO 27001</td>
                                <td className="p-4 text-brand-lime font-bold uppercase text-[9px] tracking-wider bg-brand-lime/5 inline-block rounded px-2 py-0.5 mt-2 ml-4">Governance Aligned</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">PCI DSS</td>
                                <td className="p-4 text-zinc-400 font-bold uppercase text-[9px] tracking-wider bg-zinc-50 inline-block rounded px-2 py-0.5 mt-2 ml-4">Operational Support</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">AML Governance</td>
                                <td className="p-4 text-brand-lime font-bold uppercase text-[9px] tracking-wider bg-brand-lime/5 inline-block rounded px-2 py-0.5 mt-2 ml-4">Supported</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">AI Governance</td>
                                <td className="p-4 text-brand-lime font-bold uppercase text-[9px] tracking-wider bg-brand-lime/5 inline-block rounded px-2 py-0.5 mt-2 ml-4">Supported</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 15 CTA boxes */}
                      {section.id === "privacy-data-governance" && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                          <Link href="/legal/privacy-policy" className="p-4 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-2xl flex items-center justify-between transition-all">
                            <span className="text-xs font-bold text-neutral-900">Privacy Policy</span>
                            <ChevronRight className="w-4 h-4 text-zinc-400" />
                          </Link>
                          <Link href="/legal/dpa" className="p-4 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-2xl flex items-center justify-between transition-all">
                            <span className="text-xs font-bold text-neutral-900">Data Processing (DPA)</span>
                            <ChevronRight className="w-4 h-4 text-zinc-400" />
                          </Link>
                          <Link href="/legal/data-retention" className="p-4 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-2xl flex items-center justify-between transition-all">
                            <span className="text-xs font-bold text-neutral-900">Data Retention Policy</span>
                            <ChevronRight className="w-4 h-4 text-zinc-400" />
                          </Link>
                        </div>
                      )}

                      {/* Section 17 Disaster Recovery Resilience features */}
                      {section.id === "business-continuity-disaster-recovery" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                          {["Regional Failover Infrastructure", "Backup & Recovery Automation", "SLA-Aware Recovery Procedures", "Operational Redundancy", "Infrastructure Continuity Testing", "Governance Recovery Workflows"].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-3 bg-zinc-50 border border-zinc-200 rounded-xl">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-lime" />
                              <span className="text-xs font-bold text-neutral-800">{item}</span>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Security Ops</span>
                            <a href="mailto:security@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">security@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Compliance</span>
                            <a href="mailto:compliance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">compliance@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Privacy Office</span>
                            <a href="mailto:privacy@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">privacy@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Governance</span>
                            <a href="mailto:governance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">governance@deepsense.ai</a>
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
                <h3 className="text-base font-bold text-neutral-900">No Security Commitments Found</h3>
                <p className="text-xs text-zinc-500 font-inter max-w-md mx-auto leading-relaxed">
                  No sections match your search query &ldquo;{searchQuery}&rdquo;. Try queries like &ldquo;SOC 2&rdquo;, &ldquo;AES&rdquo;, or &ldquo;resilience&rdquo;.
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
              Need Security Documentation or <span className="text-zinc-400">Compliance Reviews?</span>
            </h2>
            <p className="text-zinc-400 text-sm font-inter leading-relaxed max-w-lg italic">
              Contact DeepSense Security, Compliance, or Governance teams for procurement reviews, architecture discussions, AI governance documentation, security questionnaires, or enterprise assessments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
            <Link 
              href="mailto:security@deepsense.ai"
              className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-bold text-xs transition-all text-center uppercase tracking-wider"
            >
              Contact Security Team
            </Link>
            <button 
              onClick={() => window.print()}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              <Printer className="w-3.5 h-3.5 text-brand-lime" />
              Download Security PDF
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
