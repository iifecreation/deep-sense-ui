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
  FileText,
  UserCheck,
  FileSearch,
  Building2,
  FileCheck2
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  subsections?: { title: string; points: string[] }[];
  ctaLink?: { text: string; href: string };
}

const complianceSections: Section[] = [
  {
    id: "introduction",
    title: "Section 1 — Introduction",
    paragraphs: [
      "DeepSense provides fraud intelligence, AI-powered operational analytics, onboarding intelligence, transaction monitoring, governance tooling, and enterprise operational infrastructure designed to support regulated industries and compliance-sensitive environments.",
      "DeepSense helps organizations: improve fraud governance, strengthen operational oversight, centralize auditability, improve reporting visibility, support regulatory readiness, operationalize AI governance, and maintain secure operational environments.",
      "This statement outlines: compliance commitments, governance controls, operational safeguards, privacy protections, AI accountability measures, and audit support capabilities."
    ]
  },
  {
    id: "compliance-philosophy",
    title: "Section 2 — Compliance Philosophy",
    paragraphs: [
      "DeepSense operates using principles of: governance-by-design, privacy-by-design, zero-trust security, least privilege access, operational accountability, explainable AI, continuous monitoring, and audit-ready traceability.",
      "Compliance is integrated across: fraud intelligence systems, AI workflows, APIs and integrations, onboarding intelligence, operational analytics, governance workflows, reporting environments, and infrastructure operations."
    ]
  },
  {
    id: "governance-framework",
    title: "Section 3 — Governance Framework",
    paragraphs: [
      "DeepSense maintains rigorous governance controls for: access management, AI oversight, operational approvals, workflow traceability, escalation management, incident governance, infrastructure oversight, and audit logging."
    ]
  },
  {
    id: "privacy-data-protection",
    title: "Section 4 — Privacy & Data Protection",
    paragraphs: [
      "DeepSense supports enterprise privacy obligations through: end-to-end encryption, tenant isolation, regional residency controls, lawful processing safeguards, retention governance, access controls, and operational transparency.",
      "Privacy protections apply across: operational telemetry, onboarding records, transaction monitoring, fraud investigations, AI-generated intelligence, and governance workflows."
    ]
  },
  {
    id: "ai-governance-accountability",
    title: "Section 5 — AI Governance & Accountability",
    paragraphs: [
      "DeepSense AI systems are governed using: explainability mechanisms, human oversight, operational traceability, governance approvals, audit logging, and anomaly monitoring.",
      "AI governance supports: operational accountability, enterprise oversight, fraud intelligence transparency, responsible automation, and explainable recommendations."
    ]
  },
  {
    id: "security-compliance",
    title: "Section 6 — Security Compliance",
    paragraphs: [
      "DeepSense security controls support: secure operational infrastructure, governance accountability, fraud intelligence protection, operational resilience, AI infrastructure security, and enterprise auditability.",
      "Security measures include: encryption at rest, encryption in transit, RBAC, MFA support, infrastructure monitoring, SIEM integrations, zero-trust architecture, and operational telemetry governance."
    ]
  },
  {
    id: "financial-crime-aml-support",
    title: "Section 7 — Financial Crime & AML Support",
    paragraphs: [
      "DeepSense supports operational workflows relating to: AML monitoring, suspicious activity detection, transaction monitoring, onboarding intelligence, fraud investigations, graph intelligence, and governance reporting.",
      "The platform helps organizations: centralize fraud intelligence, accelerate investigations, improve operational traceability, support audit readiness, and strengthen governance oversight."
    ]
  },
  {
    id: "operational-governance",
    title: "Section 8 — Operational Governance",
    paragraphs: [
      "DeepSense maintains governance controls for: analyst activity, workflow approvals, AI-generated recommendations, escalation procedures, operational investigations, and executive oversight.",
      "Operational accountability features include: audit logs, traceability, workflow history, governance approvals, and reporting visibility."
    ]
  },
  {
    id: "auditability-traceability",
    title: "Section 9 — Auditability & Traceability",
    paragraphs: [
      "DeepSense maintains: immutable audit logs, operational telemetry, governance records, AI reasoning trails, workflow execution history, and access activity records.",
      "Audit support capabilities include: evidence exports, operational summaries, governance reporting, infrastructure logs, and access history analysis."
    ]
  },
  {
    id: "regional-compliance-alignment",
    title: "Section 10 — Regional Compliance Alignment",
    paragraphs: [
      "DeepSense supports organizations operating across: North America, European Union, United Kingdom, Asia-Pacific, Middle East & Africa, and Latin America.",
      "The platform supports: regional hosting, data residency controls, governance segmentation, regional access restrictions, and operational jurisdiction controls."
    ]
  },
  {
    id: "data-residency-controls",
    title: "Section 11 — Data Residency Controls",
    paragraphs: [
      "DeepSense supports: region-specific deployments, tenant residency restrictions, private cloud options, hybrid deployment models, and regional failover governance.",
      "Organizations may configure: processing boundaries, regional access policies, jurisdiction-aware workflows, and governance restrictions."
    ]
  },
  {
    id: "vendor-subprocessor-governance",
    title: "Section 12 — Vendor & Subprocessor Governance",
    paragraphs: [
      "DeepSense evaluates subprocessors using: security assessments, compliance reviews, governance analysis, operational resilience evaluations, privacy safeguards, and AI governance reviews."
    ],
    ctaLink: { text: "View Authorized Subprocessors", href: "/legal/subprocessors" }
  },
  {
    id: "incident-response-reporting",
    title: "Section 13 — Incident Response & Reporting",
    paragraphs: [
      "DeepSense maintains incident response procedures for: unauthorized access, infrastructure compromise, AI governance incidents, operational disruptions, suspicious activity, and data exposure risks.",
      "Response workflows include: containment, investigation, governance escalation, remediation, customer notification, and regulatory coordination where applicable."
    ]
  },
  {
    id: "regulatory-cooperation",
    title: "Section 14 — Regulatory Cooperation",
    paragraphs: [
      "DeepSense cooperates with: regulators, supervisory authorities, lawful investigations, legally binding requests, and audit reviews.",
      "All requests are: validated, documented, governance controlled, and legally reviewed."
    ],
    ctaLink: { text: "View Law Enforcement Policy", href: "/legal/law-enforcement" }
  },
  {
    id: "customer-responsibilities",
    title: "Section 15 — Customer Responsibilities",
    paragraphs: [
      "Customers remain responsible for: lawful operational deployment, regulatory obligations, governance oversight, consent management where required, analyst supervision, operational approvals, and internal compliance programs.",
      "DeepSense supports—but does not replace: legal counsel, regulatory review, compliance functions, or governance committees."
    ]
  },
  {
    id: "compliance-documentation",
    title: "Section 16 — Compliance Documentation",
    paragraphs: [
      "Enterprise customers may request: security documentation, governance summaries, procurement support, AI governance materials, operational architecture reviews, vendor assessments, and compliance questionnaires.",
      "DeepSense supports: procurement reviews, audit discussions, governance evaluations, security assessments, and operational architecture consultations."
    ]
  },
  {
    id: "frequently-asked-questions",
    title: "Section 17 — Frequently Asked Questions",
    paragraphs: [
      "Review common inquiries regarding GRC framework mappings, regulatory posture, and audit readiness:"
    ]
  },
  {
    id: "policy-updates",
    title: "Section 18 — Policy Updates",
    paragraphs: [
      "DeepSense may update this statement periodically to reflect: regulatory developments, governance improvements, infrastructure evolution, AI governance enhancements, operational changes, or security updates.",
      "Material changes may be communicated through: enterprise notifications, governance advisories, procurement updates, or trust center announcements."
    ]
  },
  {
    id: "contact-information",
    title: "Section 19 — Contact Information",
    paragraphs: [
      "For all formal inquiries regarding regulatory alignment, compliance documentation packages, audit coordination, or GRC framework evaluations, contact our designated offices:"
    ]
  }
];

export default function RegulatoryCompliancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    complianceSections.forEach(s => {
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
    complianceSections.forEach(s => {
      updated[s.id] = true;
    });
    setExpandedSections(updated);
  };

  const collapseAll = () => {
    const updated: Record<string, boolean> = {};
    complianceSections.forEach(s => {
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

  const filteredSections = complianceSections.filter(section => {
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
            GLOBAL COMPLIANCE & GOVERNANCE ALIGNMENT
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
            Regulatory & Compliance <span className="text-zinc-400">Statement.</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg font-inter max-w-[800px] leading-relaxed italic">
            DeepSense maintains enterprise-grade governance, operational controls, AI accountability frameworks, auditability mechanisms, and security safeguards designed to support regulated operational environments, fraud intelligence programs, and global enterprise compliance obligations.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-brand-lime font-extrabold font-manrope uppercase text-[8px] tracking-wider">GDPR Alignment</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">SOC 2 Governance</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">ISO 27001 Support</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">PCI DSS Operational Support</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">AI Governance Controls</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Enterprise Auditability</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Zero-Trust Security</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Privacy-by-Design</span>
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
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Coverage</span>
              <p className="text-xs font-bold text-white">Global Enterprise Ops</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Compliance Scope</span>
              <p className="text-xs font-bold text-white">Fraud & AI Systems</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Responsible Office</span>
              <p className="text-xs font-bold text-white">Compliance & GRC</p>
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
              <h3 className="text-base font-bold text-neutral-900">Compliance Mappings</h3>
              <p className="text-[11px] text-zinc-500 font-inter">Audit regulatory alignment, AI explainability, and GRC controls.</p>
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
                placeholder="Search GRC terms (e.g. SOC 2, AML)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 focus:outline-none focus:border-neutral-900 transition-all"
              />
            </div>

            {/* Anchored Sidebar Links */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin pt-2">
              {complianceSections.map((section, idx) => (
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
              <span className="text-zinc-400 font-inter">Explore Trust Center?</span>
              <Link href="/company/trust" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                Trust & Security Hub
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

                      {/* Section 3: Governance Capabilities Grid */}
                      {section.id === "governance-framework" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                          {[
                            { title: "Role-Based Governance", desc: "Granular access boundaries limiting data visibility to authorized personnel." },
                            { title: "Operational Traceability", desc: "End-to-end cryptographic logging of every analyst interaction and query." },
                            { title: "AI Governance Workflows", desc: "Mandatory human-in-the-loop checkpoints before automated enforcement." },
                            { title: "Executive Oversight", desc: "C-level compliance dashboards aggregating platform risk metrics." },
                            { title: "Governance Audit Logging", desc: "WORM-compliant storage of immutable system activity trails." },
                            { title: "Escalation Management", desc: "Automated routing of high-risk anomalies to compliance officers." }
                          ].map((item, idx) => (
                            <div key={idx} className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                              <CheckCircle2 className="w-4 h-4 text-brand-lime mb-1" />
                              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">{item.title}</h4>
                              <p className="text-[10px] text-zinc-500 font-inter leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section 4: Supported Privacy Principles Table & CTA Boxes */}
                      {section.id === "privacy-data-protection" && (
                        <div className="space-y-6 pt-2">
                          <div className="overflow-x-auto border border-zinc-200 rounded-2xl">
                            <table className="w-full text-left border-collapse text-xs">
                              <thead>
                                <tr className="bg-zinc-50 border-b border-zinc-200">
                                  <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Privacy Principle</th>
                                  <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Support Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {[
                                  { p: "Data Minimization", status: "Supported" },
                                  { p: "Purpose Limitation", status: "Supported" },
                                  { p: "Encryption (At-Rest & Transit)", status: "Supported" },
                                  { p: "Access Governance", status: "Supported" },
                                  { p: "Auditability", status: "Supported" },
                                  { p: "Residency Controls", status: "Supported" }
                                ].map((row, rIdx) => (
                                  <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                                    <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">{row.p}</td>
                                    <td className="p-4 text-brand-lime font-bold uppercase text-[9px] tracking-wider bg-brand-lime/5 inline-block rounded px-2.5 py-1 mt-2 ml-4">
                                      {row.status}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* CTA Boxes */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <Link 
                              href="/legal/privacy-policy"
                              className="p-5 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-2xl flex items-center justify-between group transition-all not-italic"
                            >
                              <div className="space-y-1">
                                <h4 className="text-xs font-extrabold text-neutral-900 uppercase tracking-tight">Privacy Policy</h4>
                                <p className="text-[11px] text-zinc-500 font-inter">Audit our data collection and user rights framework.</p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-neutral-900 transition-colors" />
                            </Link>
                            <Link 
                              href="/legal/dpa"
                              className="p-5 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-2xl flex items-center justify-between group transition-all not-italic"
                            >
                              <div className="space-y-1">
                                <h4 className="text-xs font-extrabold text-neutral-900 uppercase tracking-tight">Data Processing Agreement</h4>
                                <p className="text-[11px] text-zinc-500 font-inter">Review our GDPR & global data processor exhibits.</p>
                              </div>
                              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-neutral-900 transition-colors" />
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* Section 5: AI Governance Features Grid */}
                      {section.id === "ai-governance-accountability" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                          {[
                            { title: "Human-in-the-Loop Controls", desc: "Mandatory human review queues for high-impact automated decisions." },
                            { title: "AI Audit Trails", desc: "Cryptographic proof of model weights, inputs, and inference outputs." },
                            { title: "Explainability Dashboards", desc: "Visualizing feature importance and graph relationship weights." },
                            { title: "Governance Approval Workflows", desc: "Multi-tiered sign-offs required for deploying new risk models." },
                            { title: "Operational Oversight Controls", desc: "Real-time circuit breakers halting anomalous model behavior." }
                          ].map((item, idx) => (
                            <div key={idx} className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                              <Cpu className="w-4 h-4 text-brand-lime mb-1" />
                              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">{item.title}</h4>
                              <p className="text-[10px] text-zinc-500 font-inter leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section 6: Supported Security Programs Table */}
                      {section.id === "security-compliance" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Security Program / Framework</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { f: "SOC 2 Alignment (Type II)", status: "Supported" },
                                { f: "ISO 27001 Governance", status: "Supported" },
                                { f: "PCI DSS Operational Controls", status: "Supported" },
                                { f: "Zero-Trust Security Architecture", status: "Supported" }
                              ].map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                                  <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">{row.f}</td>
                                  <td className="p-4 text-brand-lime font-bold uppercase text-[9px] tracking-wider bg-brand-lime/5 inline-block rounded px-2.5 py-1 mt-2 ml-4">
                                    {row.status}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 17: Frequently Asked Questions */}
                      {section.id === "frequently-asked-questions" && (
                        <div className="space-y-4 pt-2 not-italic">
                          {[
                            { q: "Does DeepSense support GDPR-related operational requirements?", a: "Yes. DeepSense supports governance controls, residency management, encryption, auditability, and operational safeguards aligned with GDPR principles." },
                            { q: "Can DeepSense support regulated enterprise environments?", a: "Yes. DeepSense is designed for compliance-sensitive environments including financial services, fintech, telecom, enterprise operations, and governance-focused organizations." },
                            { q: "Does DeepSense provide AI governance and explainability?", a: "Yes. DeepSense supports explainable AI, operational traceability, governance approvals, audit logging, and human oversight controls." },
                            { q: "Can organizations configure regional hosting and residency controls?", a: "Yes. DeepSense supports regional infrastructure deployments and configurable residency governance controls." },
                            { q: "Does DeepSense support audit and procurement reviews?", a: "Yes. DeepSense provides governance documentation, security reviews, compliance support, procurement assistance, and operational transparency materials." }
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

                      {/* Section 19 designated contact grid */}
                      {section.id === "contact-information" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Compliance</span>
                            <a href="mailto:compliance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">compliance@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Governance</span>
                            <a href="mailto:governance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">governance@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Privacy Office</span>
                            <a href="mailto:privacy@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">privacy@deepsense.ai</a>
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
                <h3 className="text-base font-bold text-neutral-900">No Compliance Records Found</h3>
                <p className="text-xs text-zinc-500 font-inter max-w-md mx-auto leading-relaxed">
                  No sections match your search query &ldquo;{searchQuery}&rdquo;. Try queries like &ldquo;SOC 2&rdquo;, &ldquo;GDPR&rdquo;, or &ldquo;explainability&rdquo;.
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
              Need Compliance Documentation <span className="text-zinc-400">or Governance Reviews?</span>
            </h2>
            <p className="text-zinc-400 text-sm font-inter leading-relaxed max-w-lg italic">
              Contact DeepSense Compliance, Governance, Security, or Legal teams for procurement reviews, operational governance discussions, AI accountability documentation, or enterprise compliance assessments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 relative z-10 w-full sm:w-auto">
            <Link 
              href="mailto:compliance@deepsense.ai"
              className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-bold text-xs transition-all text-center uppercase tracking-wider"
            >
              Contact Compliance Team
            </Link>
            <button 
              onClick={() => window.print()}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              <Printer className="w-3.5 h-3.5 text-brand-lime" />
              Download Compliance Statement PDF
            </button>
            <Link 
              href="/company/trust"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              Explore Trust Center
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
