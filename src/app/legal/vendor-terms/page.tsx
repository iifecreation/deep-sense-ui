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
  CheckCircle2,
  Server,
  Clock,
  Zap,
  HardDrive,
  FileSpreadsheet,
  Globe,
  Gavel,
  FileSearch,
  Bell,
  BarChart3,
  FileWarning,
  Bug,
  Code,
  Key,
  ShieldAlert,
  Flame,
  Radio,
  FileCode,
  Sparkles,
  Copyright,
  BookmarkCheck,
  Building2,
  UserCheck,
  Briefcase
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  subsections?: { title: string; points: string[] }[];
  ctaLink?: { text: string; href: string };
}

const vendorTermsSections: Section[] = [
  {
    id: "introduction",
    title: "Section 1 — Introduction",
    paragraphs: [
      "DeepSense works with suppliers and operational partners supporting: cloud infrastructure, AI systems, operational tooling, security operations, observability, authentication, compliance workflows, and fraud intelligence infrastructure.",
      "These Vendor Terms are designed to: reduce operational risk, strengthen security governance, protect customer data, maintain compliance standards, support enterprise accountability, and enforce operational integrity.",
      "All suppliers are expected to maintain: enterprise-grade security, operational resilience, lawful business practices, governance accountability, and privacy safeguards."
    ]
  },
  {
    id: "supplier-governance-principles",
    title: "Section 2 — Supplier Governance Principles",
    paragraphs: [
      "DeepSense enforces core supplier governance principles across all third-party and fourth-party operational relationships:"
    ]
  },
  {
    id: "scope-of-vendor-terms",
    title: "Section 3 — Scope of Vendor Terms",
    paragraphs: [
      "These terms apply to: subprocessors, infrastructure providers, AI vendors, contractors, consultants, observability providers, support providers, integration partners, and managed service providers.",
      "Covered services include: hosting, AI infrastructure, authentication, communications, analytics, operational tooling, security services, and reporting systems."
    ]
  },
  {
    id: "security-requirements",
    title: "Section 4 — Security Requirements",
    paragraphs: [
      "Vendors must maintain: encryption at rest, encryption in transit, access governance, vulnerability management, secure authentication, operational monitoring, infrastructure hardening, and incident response procedures."
    ]
  },
  {
    id: "privacy-data-protection",
    title: "Section 5 — Privacy & Data Protection",
    paragraphs: [
      "Suppliers processing DeepSense-related data must: comply with applicable privacy laws, maintain confidentiality safeguards, support deletion obligations, restrict unauthorized disclosures, implement retention governance, and protect operational telemetry.",
      "Vendors may process data only: under authorized instructions, within approved scopes, and using governed infrastructure.",
      "Supported Privacy Principles include: purpose limitation, data minimization, regional governance, operational traceability, and lawful processing."
    ]
  },
  {
    id: "confidentiality-obligations",
    title: "Section 6 — Confidentiality Obligations",
    paragraphs: [
      "Suppliers must protect: customer information, operational telemetry, AI governance records, fraud intelligence, infrastructure architecture, security documentation, and investigation workflows.",
      "Confidential information may not be: disclosed improperly, reused outside scope, shared without authorization, or retained beyond necessity."
    ]
  },
  {
    id: "ai-governance-requirements",
    title: "Section 7 — AI Governance Requirements",
    paragraphs: [
      "Suppliers supporting AI systems must maintain: explainability safeguards, operational accountability, governance traceability, model security controls, infrastructure isolation, and monitoring procedures.",
      "AI suppliers may not: misuse operational data, repurpose fraud intelligence improperly, bypass governance requirements, or perform unauthorized AI training."
    ]
  },
  {
    id: "infrastructure-operational-standards",
    title: "Section 8 — Infrastructure & Operational Standards",
    paragraphs: [
      "Critical vendors should maintain: resilience testing, operational redundancy, backup procedures, disaster recovery plans, infrastructure observability, and uptime monitoring.",
      "Suppliers supporting critical systems should maintain: continuity plans, failover procedures, incident escalation workflows, and operational monitoring."
    ]
  },
  {
    id: "compliance-expectations",
    title: "Section 9 — Compliance Expectations",
    paragraphs: [
      "Suppliers are expected to support: privacy obligations, governance reviews, operational auditability, security assessments, regulatory inquiries, and procurement reviews.",
      "DeepSense may request: security documentation, compliance attestations, governance evidence, audit summaries, and resilience documentation."
    ]
  },
  {
    id: "subcontractor-restrictions",
    title: "Section 10 — Subcontractor Restrictions",
    paragraphs: [
      "Suppliers may not engage subprocessors involving DeepSense-related operations without: prior authorization where required, governance review, security validation, and privacy safeguards.",
      "Suppliers remain responsible for: subcontractor oversight, operational governance, compliance alignment, and infrastructure security."
    ]
  },
  {
    id: "audit-assessment-rights",
    title: "Section 11 — Audit & Assessment Rights",
    paragraphs: [
      "DeepSense may perform: vendor assessments, governance reviews, operational questionnaires, security evaluations, and compliance reassessments.",
      "Assessments may include: architecture reviews, security control validation, privacy governance reviews, and operational resilience analysis."
    ]
  },
  {
    id: "incident-reporting",
    title: "Section 12 — Incident Reporting",
    paragraphs: [
      "Suppliers must promptly report incidents involving: unauthorized access, operational disruptions, infrastructure compromise, AI governance failures, privacy incidents, and security vulnerabilities.",
      "Incident reports should include: incident scope, affected systems, mitigation actions, remediation status, and operational impact.",
      "Escalation Contacts: security@deepsense.ai and governance@deepsense.ai."
    ]
  },
  {
    id: "business-continuity-requirements",
    title: "Section 13 — Business Continuity Requirements",
    paragraphs: [
      "Critical suppliers should maintain: continuity plans, disaster recovery procedures, backup governance, operational failover capabilities, infrastructure redundancy, and resilience testing.",
      "Vendors may be asked to provide: continuity summaries, recovery objectives, resilience documentation, and failover architecture details."
    ]
  },
  {
    id: "intellectual-property",
    title: "Section 14 — Intellectual Property",
    paragraphs: [
      "Suppliers may not: misuse DeepSense proprietary systems, copy fraud intelligence frameworks, reproduce AI infrastructure, expose confidential operational logic, or reuse protected materials improperly.",
      "DeepSense retains ownership of: AI systems, software, operational frameworks, infrastructure architecture, and fraud intelligence methodologies."
    ]
  },
  {
    id: "acceptable-vendor-conduct",
    title: "Section 15 — Acceptable Vendor Conduct",
    paragraphs: [
      "Suppliers are expected to: act ethically, comply with laws, protect customer trust, maintain operational professionalism, preserve confidentiality, and follow governance procedures.",
      "Suppliers may not: misuse privileged access, perform unauthorized surveillance, engage in corrupt practices, bypass governance controls, or compromise operational integrity."
    ]
  },
  {
    id: "termination-rights",
    title: "Section 16 — Termination Rights",
    paragraphs: [
      "DeepSense may suspend or terminate vendor relationships involving: security failures, governance violations, compliance risks, operational instability, unlawful conduct, or repeated policy violations.",
      "Termination may involve: access revocation, infrastructure isolation, contract enforcement, and operational offboarding."
    ]
  },
  {
    id: "regional-international-operations",
    title: "Section 17 — Regional & International Operations",
    paragraphs: [
      "Suppliers supporting international operations must consider: regional privacy laws, residency requirements, jurisdictional restrictions, cross-border processing obligations, and governance expectations.",
      "DeepSense may require: regional hosting limitations, geographic segregation, jurisdiction-aware controls, and localized governance procedures."
    ]
  },
  {
    id: "vendor-risk-monitoring",
    title: "Section 18 — Vendor Risk Monitoring",
    paragraphs: [
      "DeepSense may continuously evaluate suppliers using: operational telemetry, governance reviews, security reassessments, incident analysis, compliance monitoring, and resilience evaluations.",
      "Risk factors include: infrastructure reliability, security posture, operational transparency, governance maturity, and AI accountability standards."
    ]
  },
  {
    id: "frequently-asked-questions",
    title: "Section 19 — Frequently Asked Questions",
    paragraphs: [
      "Review common inquiries regarding vendor security assessments, subcontractor authorization, AI governance rules, and audit rights:"
    ]
  },
  {
    id: "policy-updates",
    title: "Section 20 — Policy Updates",
    paragraphs: [
      "DeepSense may update these terms periodically to reflect: evolving security standards, governance enhancements, regulatory developments, operational changes, or AI governance evolution.",
      "Material changes may be communicated through: procurement communications, vendor advisories, governance notifications, or trust center updates."
    ]
  },
  {
    id: "contact-information",
    title: "Section 21 — Contact Information",
    paragraphs: [
      "For formal procurement submissions, vendor security coordination, or supplier governance reviews, contact our designated offices:"
    ]
  }
];

export default function VendorTermsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    vendorTermsSections.forEach(s => {
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
    vendorTermsSections.forEach(s => {
      updated[s.id] = true;
    });
    setExpandedSections(updated);
  };

  const collapseAll = () => {
    const updated: Record<string, boolean> = {};
    vendorTermsSections.forEach(s => {
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

  const filteredSections = vendorTermsSections.filter(section => {
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
            SUPPLIER GOVERNANCE & PROCUREMENT STANDARDS
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
            Vendor Terms & <span className="text-zinc-400">Supplier Governance.</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg font-inter max-w-[800px] leading-relaxed italic">
            These Vendor Terms establish the operational, security, privacy, governance, compliance, AI accountability, and procurement requirements applicable to suppliers, subprocessors, infrastructure providers, consultants, contractors, and third-party service providers working with or supporting DeepSense operations.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Vendor Risk Governance</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-brand-lime font-extrabold font-manrope uppercase text-[8px] tracking-wider">Security Reviewed</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Procurement Controls</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Privacy-by-Design</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">AI Governance Standards</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Operational Accountability</span>
          </div>

          {/* Metadata Horizontal Bar */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Terms Version</span>
              <p className="text-xs font-bold text-white">v2.0 Enterprise</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Effective Date</span>
              <p className="text-xs font-bold text-white">January 1, 2026</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Last Updated</span>
              <p className="text-xs font-bold text-white">January 1, 2026</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Scope</span>
              <p className="text-xs font-bold text-white">Global Suppliers</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Responsible Office</span>
              <p className="text-xs font-bold text-white">Procurement & GRC</p>
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
              <h3 className="text-base font-bold text-neutral-900">Supplier Governance Hub</h3>
              <p className="text-[11px] text-zinc-500 font-inter">Audit procurement standards, AI vendor rules, and security controls.</p>
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
                placeholder="Search vendor terms (e.g. MFA, AI, audit)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 focus:outline-none focus:border-neutral-900 transition-all"
              />
            </div>

            {/* Anchored Sidebar Links */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin pt-2">
              {vendorTermsSections.map((section, idx) => (
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
              <span className="text-zinc-400 font-inter">View Subprocessors?</span>
              <Link href="/legal/subprocessors" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                Vendor Registry
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

                      {/* Section 2: Core Supplier Governance Principles Grid */}
                      {section.id === "supplier-governance-principles" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                          {[
                            { title: "Security-by-Default", desc: "Vendors must maintain strong operational and infrastructure security controls." },
                            { title: "Privacy Protection", desc: "Suppliers must protect customer and operational data appropriately." },
                            { title: "Operational Accountability", desc: "All vendor activity should be traceable and auditable." },
                            { title: "Compliance Alignment", desc: "Suppliers must support applicable regulatory and contractual obligations." },
                            { title: "AI Governance", desc: "AI-related suppliers must support responsible AI practices and explainability principles." },
                            { title: "Incident Transparency", desc: "Vendors must promptly disclose relevant security or operational incidents." },
                            { title: "Resilience & Reliability", desc: "Critical suppliers must maintain continuity and recovery capabilities." },
                            { title: "Least Privilege Access", desc: "Vendor access must remain scoped and strictly governed." }
                          ].map((item, idx) => (
                            <div key={idx} className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                              <Building2 className="w-4 h-4 text-brand-lime mb-1" />
                              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">{item.title}</h4>
                              <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section 4: Security Control Matrix Table */}
                      {section.id === "security-requirements" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Control Area</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Requirement</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { area: "Encryption", req: "AES-256 / TLS 1.2+ mandatory across all storage & transit boundaries" },
                                { area: "MFA", req: "Required for all privileged administrative and operational access" },
                                { area: "Logging", req: "Comprehensive operational audit trails forwarded to centralized SIEM" },
                                { area: "Vulnerability Management", req: "Continuous automated scanning and timely patch deployment" },
                                { area: "Access Governance", req: "Strict least privilege enforcement and quarterly access reviews" },
                                { area: "Incident Response", req: "Documented procedures and 24/7 escalation contact availability" }
                              ].map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                                  <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px] flex items-center gap-2">
                                    <ShieldAlert className="w-3.5 h-3.5 text-brand-lime" />
                                    {row.area}
                                  </td>
                                  <td className="p-4 text-zinc-500 font-inter italic">{row.req}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 7: AI Governance Requirements Table */}
                      {section.id === "ai-governance-requirements" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Requirement</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Expectation</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { req: "Explainability", exp: "Supported via transparent reasoning logs and confidence scoring" },
                                { req: "Human Oversight", exp: "Required for high-impact automated operational decisions" },
                                { req: "Security Monitoring", exp: "Required continuous validation against prompt injection & poisoning" },
                                { req: "Governance Logging", exp: "Required immutable audit trails of model overrides and training runs" },
                                { req: "Privacy Controls", exp: "Required strict tenant isolation and zero-training on customer data" }
                              ].map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                                  <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px] flex items-center gap-2">
                                    <Cpu className="w-3.5 h-3.5 text-brand-lime" />
                                    {row.req}
                                  </td>
                                  <td className="p-4 text-neutral-800 font-bold not-italic">{row.exp}</td>
                                </tr>
                              ))}
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
                            className="inline-flex items-center gap-2 p-4 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-2xl text-xs font-bold text-neutral-900 transition-all not-italic"
                          >
                            <span>{section.ctaLink.text}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                          </Link>
                        </div>
                      )}

                      {/* Section 19: Frequently Asked Questions */}
                      {section.id === "frequently-asked-questions" && (
                        <div className="space-y-4 pt-2 not-italic">
                          {[
                            { q: "Are vendors security assessed?", a: "Yes. Vendors undergo security, governance, privacy, and operational reviews." },
                            { q: "Can vendors use subcontractors?", a: "Only under governed conditions and applicable approval requirements." },
                            { q: "Are AI suppliers subject to governance standards?", a: "Yes. AI suppliers must support explainability, accountability, and operational oversight." },
                            { q: "Can DeepSense audit suppliers?", a: "DeepSense may perform assessments, reviews, and governance evaluations where appropriate." },
                            { q: "What happens if a supplier experiences a security incident?", a: "Suppliers must promptly notify DeepSense and cooperate in remediation efforts." }
                          ].map((faq, fIdx) => (
                            <div key={fIdx} className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1.5">
                              <h4 className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                                <HelpCircle className="w-4 h-4 text-brand-lime flex-shrink-0" />
                                {faq.q}
                              </h4>
                              <p className="text-xs text-zinc-500 font-inter leading-relaxed pl-5">{faq.a}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section 21 designated contact grid */}
                      {section.id === "contact-information" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Procurement</span>
                            <a href="mailto:procurement@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">procurement@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Vendor Gov</span>
                            <a href="mailto:vendors@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">vendors@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Security Ops</span>
                            <a href="mailto:security@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">security@deepsense.ai</a>
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
                <h3 className="text-base font-bold text-neutral-900">No Vendor Records Found</h3>
                <p className="text-xs text-zinc-500 font-inter max-w-md mx-auto leading-relaxed">
                  No sections match your search query &ldquo;{searchQuery}&rdquo;. Try queries like &ldquo;MFA&rdquo;, &ldquo;AI&rdquo;, or &ldquo;subcontractor&rdquo;.
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
              Need Vendor Governance <span className="text-zinc-400">or Procurement Documentation?</span>
            </h2>
            <p className="text-zinc-400 text-sm font-inter leading-relaxed max-w-lg italic">
              Contact DeepSense Procurement, Security, Governance, or Legal teams for vendor onboarding requirements, procurement reviews, operational governance discussions, or supplier risk assessments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 relative z-10 w-full sm:w-auto">
            <Link 
              href="mailto:procurement@deepsense.ai"
              className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-bold text-xs transition-all text-center uppercase tracking-wider"
            >
              Contact Procurement Team
            </Link>
            <button 
              onClick={() => window.print()}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              <Printer className="w-3.5 h-3.5 text-brand-lime" />
              Download Vendor Terms PDF
            </button>
            <Link 
              href="/company/trust"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              Explore Trust Center
            </Link>
            <Link 
              href="/legal/subprocessors"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              View Subprocessor Governance
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
