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
  Trash2,
  Archive,
  Database,
  History,
  FolderSync
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  subsections?: { title: string; points: string[] }[];
  ctaLink?: { text: string; href: string };
}

const retentionSections: Section[] = [
  {
    id: "introduction",
    title: "Section 1 — Introduction",
    paragraphs: [
      "DeepSense maintains enterprise data lifecycle governance procedures for: fraud intelligence data, onboarding records, transaction monitoring, AI-generated intelligence, operational telemetry, governance workflows, audit evidence, and infrastructure diagnostics.",
      "This policy explains: how long data is retained, why retention periods exist, how deletion occurs, how governance controls apply, and how enterprise customers may configure retention.",
      "DeepSense operates using: privacy-by-design, least retention principles, governance-by-default, secure deletion controls, and audit-ready traceability."
    ]
  },
  {
    id: "retention-philosophy",
    title: "Section 2 — Retention Philosophy",
    paragraphs: [
      "DeepSense retains data only as long as necessary to: provide services, support fraud operations, maintain infrastructure security, comply with legal obligations, support governance workflows, preserve operational integrity, and maintain auditability.",
      "Retention decisions are based on: contractual obligations, operational requirements, regulatory expectations, enterprise governance settings, customer instructions, and infrastructure resilience needs."
    ]
  },
  {
    id: "scope-data-covered",
    title: "Section 3 — Scope of Data Covered",
    paragraphs: [
      "DeepSense categorizes operational data into distinct lifecycle management tiers to ensure appropriate retention boundaries and disposal schedules:"
    ]
  },
  {
    id: "retention-categories",
    title: "Section 4 — Standard Retention Categories",
    paragraphs: [
      "The following table defines the default baseline retention schedules and customer configurability options for core platform data categories:"
    ]
  },
  {
    id: "operational-telemetry-retention",
    title: "Section 5 — Operational Telemetry Retention",
    paragraphs: [
      "DeepSense retains operational telemetry to: support fraud investigations, maintain operational continuity, detect anomalies, improve AI intelligence, support auditability, and preserve governance visibility.",
      "Operational telemetry may include: transaction activity, onboarding telemetry, authentication signals, workflow execution history, operational alerts, and graph intelligence relationships.",
      "Customers may configure: telemetry retention windows, regional governance restrictions, archival policies, and operational export schedules."
    ]
  },
  {
    id: "fraud-investigation-data",
    title: "Section 6 — Fraud Investigation Data",
    paragraphs: [
      "Fraud investigation records may include: case notes, graph intelligence, transaction evidence, analyst workflows, operational escalations, remediation actions, and governance approvals.",
      "Investigation data is typically retained longer to support: audit readiness, regulatory obligations, operational continuity, repeat offender analysis, and governance traceability."
    ]
  },
  {
    id: "ai-governance-logs",
    title: "Section 7 — AI Explainability & Governance Record Retention",
    paragraphs: [
      "DeepSense retains AI-related operational records to support: explainability, operational traceability, governance reviews, auditability, anomaly analysis, and model evaluation.",
      "AI governance records may include: AI-generated summaries, recommendation traces, confidence indicators, workflow automation logs, approval history, and analyst overrides.",
      "Retention supports: governance accountability, enterprise transparency, operational reviews, and incident investigations."
    ]
  },
  {
    id: "authentication-access-logs",
    title: "Section 8 — Authentication, Access & Identity Logs",
    paragraphs: [
      "Authentication records may include: login activity, MFA events, session telemetry, access approvals, privileged activity, and identity federation events.",
      "These records help: secure infrastructure, detect unauthorized access, support governance reviews, maintain operational integrity, and investigate incidents.",
      "Authentication logs are: encrypted, access restricted, governance monitored, and periodically reviewed."
    ]
  },
  {
    id: "api-infrastructure-logs",
    title: "Section 9 — API, Infrastructure & Observability Log Retention",
    paragraphs: [
      "DeepSense retains infrastructure telemetry to: maintain reliability, support incident response, improve scalability, analyze operational performance, support AI observability, and strengthen infrastructure governance.",
      "Infrastructure telemetry may include: API request logs, infrastructure metrics, system diagnostics, webhook activity, distributed tracing, and workload monitoring."
    ]
  },
  {
    id: "reporting-audit-records",
    title: "Section 10 — Reporting, Audit & Governance Evidence",
    paragraphs: [
      "DeepSense retains governance and reporting records for: executive reporting, audit support, compliance obligations, operational traceability, governance reviews, and remediation evidence.",
      "Records may include: audit exports, executive summaries, governance approvals, workflow timelines, incident reports, and compliance evidence."
    ]
  },
  {
    id: "customer-configurable-retention",
    title: "Section 11 — Customer Configurable Retention",
    paragraphs: [
      "Enterprise customers may configure: telemetry retention, investigation archival, AI trace retention, regional governance restrictions, export schedules, and deletion timelines.",
      "Retention flexibility may vary depending on: deployment model, regulatory obligations, operational dependencies, and enterprise agreements."
    ]
  },
  {
    id: "legal-hold-procedures",
    title: "Section 12 — Legal Hold Procedures",
    paragraphs: [
      "DeepSense may preserve data where required for: legal obligations, litigation holds, investigations, regulatory requests, governance reviews, and security incidents.",
      "Data subject to legal hold may be exempt from standard deletion schedules until the hold is lifted.",
      "Legal holds are: governance controlled, access restricted, operationally monitored, and audit logged."
    ]
  },
  {
    id: "secure-deletion-standards",
    title: "Section 13 — Secure Deletion Standards",
    paragraphs: [
      "DeepSense uses secure deletion procedures designed to: prevent unauthorized recovery, protect operational confidentiality, maintain infrastructure integrity, and support privacy obligations.",
      "Deletion workflows include: logical deletion, cryptographic erasure, infrastructure purging, backup lifecycle expiration, and access revocation."
    ]
  },
  {
    id: "data-export-procedures",
    title: "Section 14 — Data Export Procedures",
    paragraphs: [
      "Customers may request: operational exports, fraud investigation exports, audit records, governance evidence, reporting archives, and telemetry exports.",
      "Exports may be subject to: authentication verification, governance review, contractual requirements, and operational limitations.",
      "Supported export formats include: CSV, JSON, PDF, and structured archives."
    ]
  },
  {
    id: "backup-retention",
    title: "Section 15 — Backup Governance & Retention",
    paragraphs: [
      "DeepSense maintains encrypted backups to support: disaster recovery, operational continuity, resilience testing, and infrastructure recovery.",
      "Backup systems are: encrypted, access restricted, governance monitored, and periodically tested.",
      "Backup retention schedules may differ from active operational retention periods."
    ]
  },
  {
    id: "regional-residency-considerations",
    title: "Section 16 — Regional Data Residency & Retention Governance",
    paragraphs: [
      "DeepSense supports: regional retention governance, jurisdiction-aware deletion, regional archival controls, residency restrictions, and private deployment options.",
      "Organizations may configure: region-specific policies, geographic processing boundaries, governance restrictions, and deletion timelines by jurisdiction."
    ]
  },
  {
    id: "subprocessor-retention-controls",
    title: "Section 17 — Vendor & Subprocessor Retention Governance",
    paragraphs: [
      "DeepSense requires subprocessors to maintain: contractual retention controls, secure deletion procedures, privacy safeguards, governance accountability, and operational security standards.",
      "Subprocessor lifecycle management includes: retention assessments, governance reviews, deletion verification, and operational monitoring."
    ],
    ctaLink: { text: "View Authorized Subprocessors", href: "/legal/subprocessors" }
  },
  {
    id: "customer-responsibilities",
    title: "Section 18 — Customer Responsibilities",
    paragraphs: [
      "Customers remain responsible for: defining lawful retention periods, managing internal governance, configuring retention settings, maintaining regulatory compliance, validating deletion requirements, and preserving required records.",
      "DeepSense supports—but does not replace: legal counsel, governance committees, internal compliance obligations, or regulatory review."
    ]
  },
  {
    id: "policy-updates",
    title: "Section 19 — Policy Updates",
    paragraphs: [
      "DeepSense may update this policy periodically to reflect: legal developments, infrastructure evolution, governance enhancements, operational improvements, AI governance changes, or compliance requirements.",
      "Material changes may be communicated through: enterprise notifications, governance advisories, procurement communications, or trust center updates."
    ]
  },
  {
    id: "contact-information",
    title: "Section 20 — Contact Information",
    paragraphs: [
      "For all formal inquiries regarding data retention schedules, deletion verification certificates, legal hold requests, or lifecycle governance exhibits, contact our designated offices:"
    ]
  }
];

export default function DataRetentionPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    retentionSections.forEach(s => {
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
    retentionSections.forEach(s => {
      updated[s.id] = true;
    });
    setExpandedSections(updated);
  };

  const collapseAll = () => {
    const updated: Record<string, boolean> = {};
    retentionSections.forEach(s => {
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

  const filteredSections = retentionSections.filter(section => {
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
            DATA LIFECYCLE & GOVERNANCE CONTROLS
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
            Data Retention & <span className="text-zinc-400">Deletion Policy.</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg font-inter max-w-[800px] leading-relaxed italic">
            This policy outlines how DeepSense retains, archives, governs, exports, and securely deletes operational telemetry, fraud intelligence data, AI-generated insights, audit logs, governance records, onboarding information, and enterprise operational data across the DeepSense platform.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Privacy-by-Design</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-brand-lime font-extrabold font-manrope uppercase text-[8px] tracking-wider">Secure Deletion</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Audit Governance</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Regional Retention Controls</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Enterprise Data Lifecycle</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Compliance Alignment</span>
          </div>

          {/* Metadata Horizontal Bar */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Policy Version</span>
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
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Coverage</span>
              <p className="text-xs font-bold text-white">Global Operational Data</p>
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
              <h3 className="text-base font-bold text-neutral-900">Data Lifecycle Hub</h3>
              <p className="text-[11px] text-zinc-500 font-inter">Audit retention schedules, deletion controls, and legal hold policies.</p>
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
                placeholder="Search retention terms (e.g. 7 years, MFA)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 focus:outline-none focus:border-neutral-900 transition-all"
              />
            </div>

            {/* Anchored Sidebar Links */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin pt-2">
              {retentionSections.map((section, idx) => (
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
              <span className="text-zinc-400 font-inter">View Privacy Commitments?</span>
              <Link href="/legal/privacy-policy" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                Privacy Policy Hub
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

                      {/* Section 3: Scope of Data Covered Table */}
                      {section.id === "scope-data-covered" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Data Category</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Examples</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { cat: "Operational Telemetry", ex: "Fraud events, device fingerprints, system telemetry" },
                                { cat: "Fraud Intelligence", ex: "Risk scores, investigation notes, graph intelligence" },
                                { cat: "Authentication Logs", ex: "Login activity, MFA events, session termination records" },
                                { cat: "AI Intelligence Logs", ex: "AI summaries, explainability records, reasoning traces" },
                                { cat: "Governance Records", ex: "Audit trails, workflow approvals, escalation overrides" },
                                { cat: "API & Infrastructure Logs", ex: "Request telemetry, webhook payloads, system diagnostics" },
                                { cat: "Reporting Records", ex: "Executive reporting data, compliance export archives" },
                                { cat: "Billing & Subscription Data", ex: "Invoices, payment transactions, subscription records" }
                              ].map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                                  <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">{row.cat}</td>
                                  <td className="p-4 text-zinc-500 font-inter italic">{row.ex}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 4: Standard Retention Categories Table */}
                      {section.id === "retention-categories" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Category</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Default Retention</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Customer Configurable</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { cat: "Authentication Logs", ret: "90 days", conf: "Yes" },
                                { cat: "API Logs", ret: "90 days", conf: "Yes" },
                                { cat: "Fraud Investigation Data", ret: "7 years", conf: "Yes" },
                                { cat: "Audit Trails", ret: "7 years", conf: "Limited" },
                                { cat: "AI Explainability Logs", ret: "Configurable", conf: "Yes" },
                                { cat: "Infrastructure Monitoring", ret: "30–180 days", conf: "Partial" },
                                { cat: "Billing Records", ret: "7 years", conf: "No" },
                                { cat: "Operational Telemetry", ret: "Configurable", conf: "Yes" }
                              ].map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                                  <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">{row.cat}</td>
                                  <td className="p-4 text-neutral-800 font-bold not-italic">{row.ret}</td>
                                  <td className="p-4">
                                    <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider font-mono ${
                                      row.conf === "Yes" ? "bg-brand-lime/10 text-brand-lime" : 
                                      row.conf === "Limited" || row.conf === "Partial" ? "bg-amber-500/10 text-amber-600" : 
                                      "bg-zinc-100 text-zinc-500"
                                    }`}>
                                      {row.conf}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 6: Example Retention Timeline Table */}
                      {section.id === "fraud-investigation-data" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Investigation Type</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Typical Retention</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { type: "Standard Fraud Cases", ret: "5–7 years" },
                                { type: "AML-Related Investigations", ret: "Up to regulatory requirements" },
                                { type: "Governance Escalations", ret: "Configurable by tenant administrators" }
                              ].map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                                  <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">{row.type}</td>
                                  <td className="p-4 text-zinc-500 font-inter italic">{row.ret}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 11: Customer Configurable Retention Features Grid */}
                      {section.id === "customer-configurable-retention" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                          {[
                            { title: "Retention Policies by Tenant", desc: "Granular UI controls enabling custom retention windows per organization." },
                            { title: "Regional Retention Governance", desc: "Enforce distinct residency expiration rules based on geographic storage." },
                            { title: "Automated Deletion Workflows", desc: "Scheduled cron jobs executing hard purges at exact retention boundaries." },
                            { title: "Archival Automation", desc: "Automated migration from active hot storage to encrypted cold archives." },
                            { title: "Governance Approval Controls", desc: "Multi-party sign-offs required before altering core retention rules." }
                          ].map((item, idx) => (
                            <div key={idx} className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                              <FolderSync className="w-4 h-4 text-brand-lime mb-1" />
                              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">{item.title}</h4>
                              <p className="text-[10px] text-zinc-500 font-inter leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section 13: Secure Deletion Controls Grid */}
                      {section.id === "secure-deletion-standards" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                          {[
                            { title: "Cryptographic Erasure", desc: "Instantaneous shredding of KMS encryption keys rendering data unreadable." },
                            { title: "Access Revocation", desc: "Immediate severance of all active OAuth sessions and API tokens." },
                            { title: "Infrastructure Purging", desc: "Overwriting physical blocks across distributed SSD storage clusters." },
                            { title: "Backup Expiration Governance", desc: "Automated rolling expiration of snapshot archives after 30-90 days." },
                            { title: "Audit Logging of Deletion", desc: "Immutable cryptographic receipts documenting exact deletion timestamps." }
                          ].map((item, idx) => (
                            <div key={idx} className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                              <Trash2 className="w-4 h-4 text-brand-lime mb-1" />
                              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">{item.title}</h4>
                              <p className="text-[10px] text-zinc-500 font-inter leading-relaxed">{item.desc}</p>
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

                      {/* Section 20 designated contact grid */}
                      {section.id === "contact-information" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Privacy Office</span>
                            <a href="mailto:privacy@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">privacy@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Governance</span>
                            <a href="mailto:governance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">governance@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Compliance</span>
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
                <h3 className="text-base font-bold text-neutral-900">No Retention Records Found</h3>
                <p className="text-xs text-zinc-500 font-inter max-w-md mx-auto leading-relaxed">
                  No sections match your search query &ldquo;{searchQuery}&rdquo;. Try queries like &ldquo;7 years&rdquo;, &ldquo;MFA&rdquo;, or &ldquo;telemetry&rdquo;.
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
              Need Retention Governance <span className="text-zinc-400">or Data Lifecycle Documentation?</span>
            </h2>
            <p className="text-zinc-400 text-sm font-inter leading-relaxed max-w-lg italic">
              Contact DeepSense Privacy, Governance, Security, or Compliance teams for retention assessments, deletion procedures, procurement reviews, operational governance discussions, or enterprise lifecycle management guidance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 relative z-10 w-full sm:w-auto">
            <Link 
              href="mailto:governance@deepsense.ai"
              className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-bold text-xs transition-all text-center uppercase tracking-wider"
            >
              Contact Governance Team
            </Link>
            <button 
              onClick={() => window.print()}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              <Printer className="w-3.5 h-3.5 text-brand-lime" />
              Download Retention Policy PDF
            </button>
            <Link 
              href="/company/trust"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              Explore Trust Center
            </Link>
            <Link 
              href="/legal/privacy-policy"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              View Privacy Commitments
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
