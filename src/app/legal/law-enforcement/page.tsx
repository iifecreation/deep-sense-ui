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
  FileWarning
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  subsections?: { title: string; points: string[] }[];
  ctaLink?: { text: string; href: string };
}

const lawEnforcementSections: Section[] = [
  {
    id: "introduction",
    title: "Section 1 — Introduction",
    paragraphs: [
      "DeepSense may receive lawful requests from: law enforcement agencies, courts, regulators, supervisory authorities, government entities, and legally authorized investigative bodies.",
      "These requests may relate to: operational telemetry, account records, fraud intelligence data, onboarding records, audit trails, infrastructure logs, governance records, and AI operational activity.",
      "DeepSense evaluates all requests using: strict legal review procedures, governance controls, privacy safeguards, jurisdictional analysis, and operational accountability frameworks."
    ]
  },
  {
    id: "guiding-principles",
    title: "Section 2 — Guiding Principles",
    paragraphs: [
      "DeepSense operates under clear legal process and disclosure principles to protect tenant rights while fulfilling statutory obligations:"
    ]
  },
  {
    id: "scope-of-requests",
    title: "Section 3 — Scope of Requests",
    paragraphs: [
      "This policy applies to requests relating to: customer account information, authentication records, operational telemetry, fraud investigation data, onboarding intelligence, governance logs, infrastructure diagnostics, API activity, audit trails, and AI operational records."
    ]
  },
  {
    id: "legal-process-requirements",
    title: "Section 4 — Legal Process Requirements",
    paragraphs: [
      "DeepSense reviews requests for: legal validity, jurisdictional authority, scope appropriateness, specificity, proportionality, and privacy implications.",
      "DeepSense may reject or challenge requests that are: overly broad, legally deficient, inconsistent with applicable law, improperly scoped, or lacking jurisdictional authority.",
      "Depending on jurisdiction, requests may require: formal subpoenas, court orders, warrants, regulatory notices, or lawful authority documentation."
    ]
  },
  {
    id: "government-regulatory-requests",
    title: "Section 5 — Government & Regulatory Requests",
    paragraphs: [
      "DeepSense may receive requests from: financial regulators, data protection authorities, supervisory bodies, cybersecurity agencies, and lawful governmental authorities.",
      "Requests are evaluated using: legal review, privacy assessment, governance oversight, and operational security analysis.",
      "Disclosures are limited to: legally required information, appropriately scoped data, and validated request parameters."
    ]
  },
  {
    id: "emergency-disclosure-requests",
    title: "Section 6 — Emergency Disclosure Requests",
    paragraphs: [
      "DeepSense may evaluate emergency requests involving: imminent threats to life, serious physical harm, active criminal threats, and urgent cybersecurity risks.",
      "Emergency requests undergo: expedited legal review, governance assessment, documentation procedures, and operational approval workflows.",
      "DeepSense may require: supporting evidence, official contact validation, and formal emergency justification."
    ]
  },
  {
    id: "customer-notification-procedures",
    title: "Section 7 — Customer Notification Procedures",
    paragraphs: [
      "Where legally permitted, DeepSense may notify customers regarding: disclosure requests, preservation requests, subpoenas, regulatory inquiries, and operational investigations.",
      "Notifications may be delayed or restricted where: prohibited by law, subject to court orders, required for safety reasons, or legally restricted by authorities."
    ]
  },
  {
    id: "data-minimization-principles",
    title: "Section 8 — Data Minimization Principles",
    paragraphs: [
      "DeepSense seeks to disclose only: specifically requested data, legally required information, and minimally necessary operational records.",
      "DeepSense may: narrow overly broad requests, redact unrelated information, restrict unnecessary disclosures, and apply strict governance controls."
    ]
  },
  {
    id: "international-requests",
    title: "Section 9 — International Requests",
    paragraphs: [
      "Requests involving international jurisdictions may be evaluated for: jurisdictional authority, regional privacy laws, data transfer restrictions, legal conflicts, treaty mechanisms, and regulatory compatibility.",
      "DeepSense may require: mutual legal assistance procedures (MLATs), regionally valid legal process, and localized authority review."
    ]
  },
  {
    id: "transparency-reporting",
    title: "Section 10 — Transparency Reporting",
    paragraphs: [
      "DeepSense may periodically publish aggregated transparency information regarding: volume of requests, categories of requests, jurisdictions involved, disclosure rates, and preservation requests.",
      "Transparency reports may exclude: confidential investigations, restricted disclosures, or legally prohibited reporting."
    ]
  },
  {
    id: "data-preservation-requests",
    title: "Section 11 — Data Preservation Requests",
    paragraphs: [
      "DeepSense may receive requests to preserve data relating to: litigation, investigations, regulatory matters, and law enforcement inquiries.",
      "Preserved data may include: audit logs, operational telemetry, fraud investigations, AI governance records, and authentication logs.",
      "Preservation procedures are: governance controlled, access restricted, audit logged, and time-bound where applicable."
    ]
  },
  {
    id: "ai-operational-intelligence-requests",
    title: "Section 12 — AI & Operational Intelligence Requests",
    paragraphs: [
      "Requests involving AI systems may relate to: AI-generated summaries, explainability logs, operational recommendations, governance records, and workflow automation history.",
      "DeepSense evaluates such requests using: governance oversight, privacy analysis, operational security review, and explainability safeguards.",
      "DeepSense does not provide: proprietary AI model weights, sensitive infrastructure logic, or confidential operational detection methods unless legally required."
    ]
  },
  {
    id: "subprocessor-coordination",
    title: "Section 13 — Subprocessor Coordination",
    paragraphs: [
      "Where necessary, DeepSense may coordinate with subprocessors regarding: lawful preservation requests, operational disclosures, infrastructure records, and regional hosting obligations.",
      "Subprocessor coordination is governed using: contractual safeguards, privacy obligations, governance controls, and operational accountability procedures."
    ],
    ctaLink: { text: "View Authorized Subprocessors", href: "/legal/subprocessors" }
  },
  {
    id: "security-governance-reviews",
    title: "Section 14 — Security & Governance Reviews",
    paragraphs: [
      "Disclosure procedures involve: legal review, privacy assessment, governance approvals, operational security analysis, audit logging, and executive escalation where required.",
      "DeepSense maintains: disclosure documentation, operational traceability, governance audit records, and secure handling procedures."
    ]
  },
  {
    id: "challenging-improper-requests",
    title: "Section 15 — Challenging Improper Requests",
    paragraphs: [
      "DeepSense may challenge requests that are: legally invalid, overbroad, inconsistent with privacy obligations, jurisdictionally improper, or lacking due process.",
      "DeepSense may: seek clarification, narrow scope, request revised legal process, or oppose improper disclosure requirements where legally appropriate."
    ]
  },
  {
    id: "customer-responsibilities",
    title: "Section 16 — Customer Responsibilities",
    paragraphs: [
      "Customers remain responsible for: lawful operational usage, regulatory compliance, governance oversight, responding to requests directed to them, and maintaining internal legal procedures.",
      "DeepSense does not replace: customer legal counsel, regulatory compliance teams, or internal governance processes."
    ]
  },
  {
    id: "frequently-asked-questions",
    title: "Section 17 — Frequently Asked Questions",
    paragraphs: [
      "Review common inquiries regarding subpoena validation, customer notification boundaries, and emergency disclosures:"
    ]
  },
  {
    id: "policy-updates",
    title: "Section 18 — Policy Updates",
    paragraphs: [
      "DeepSense may update this policy periodically to reflect: legal developments, regulatory requirements, governance improvements, operational changes, or infrastructure evolution.",
      "Material changes may be communicated through: enterprise notifications, governance advisories, or trust center updates."
    ]
  },
  {
    id: "contact-information",
    title: "Section 19 — Contact Information",
    paragraphs: [
      "For formal submissions of legal process, preservation letters, warrants, or regulatory inquiry coordination, contact our designated offices:"
    ]
  }
];

export default function LawEnforcementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    lawEnforcementSections.forEach(s => {
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
    lawEnforcementSections.forEach(s => {
      updated[s.id] = true;
    });
    setExpandedSections(updated);
  };

  const collapseAll = () => {
    const updated: Record<string, boolean> = {};
    lawEnforcementSections.forEach(s => {
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

  const filteredSections = lawEnforcementSections.filter(section => {
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
            LEGAL PROCESS & GOVERNMENT REQUEST TRANSPARENCY
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
            Law Enforcement & <span className="text-zinc-400">Government Requests Policy.</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg font-inter max-w-[800px] leading-relaxed italic">
            This policy explains how DeepSense evaluates, governs, documents, and responds to lawful government, regulatory, supervisory, and law enforcement requests relating to customer data, operational telemetry, fraud intelligence systems, and enterprise platform information.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Privacy-by-Design</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-brand-lime font-extrabold font-manrope uppercase text-[8px] tracking-wider">Governance Reviewed</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Enterprise Transparency</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Legal Process Validation</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Regional Compliance Controls</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Audit-Ready Procedures</span>
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
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Jurisdiction Coverage</span>
              <p className="text-xs font-bold text-white">Global</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Responsible Office</span>
              <p className="text-xs font-bold text-white">Legal & Privacy GRC</p>
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
              <h3 className="text-base font-bold text-neutral-900">Legal Process Hub</h3>
              <p className="text-[11px] text-zinc-500 font-inter">Audit subpoena validation, emergency disclosure, and notification rules.</p>
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
                placeholder="Search legal terms (e.g. subpoena, warrant)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 focus:outline-none focus:border-neutral-900 transition-all"
              />
            </div>

            {/* Anchored Sidebar Links */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin pt-2">
              {lawEnforcementSections.map((section, idx) => (
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
              <span className="text-zinc-400 font-inter">View Privacy Policy?</span>
              <Link href="/legal/privacy-policy" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                Privacy Commitments
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

                      {/* Section 2: Governance Principles Grid */}
                      {section.id === "guiding-principles" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                          {[
                            { title: "Lawful Process Required", desc: "DeepSense requires legally valid requests before disclosing customer data where applicable." },
                            { title: "Data Minimization", desc: "Only the minimum necessary information is disclosed in response to any request." },
                            { title: "Governance Review", desc: "Requests are reviewed by specialized legal, privacy, and governance teams." },
                            { title: "Transparency", desc: "DeepSense seeks to maintain customer transparency whenever legally permitted." },
                            { title: "Privacy Protection", desc: "Customer privacy and operational confidentiality remain core priorities." },
                            { title: "Jurisdictional Review", desc: "Requests are assessed for regional legal validity and territorial scope." },
                            { title: "Security Oversight", desc: "Sensitive disclosures undergo governance and security review procedures." },
                            { title: "Accountability", desc: "All disclosures are fully documented and immutably audit logged." }
                          ].map((item, idx) => (
                            <div key={idx} className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                              <Gavel className="w-4 h-4 text-brand-lime mb-1" />
                              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">{item.title}</h4>
                              <p className="text-[11px] text-zinc-500 font-inter leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section 3: Request Categories Table */}
                      {section.id === "scope-of-requests" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Request Type</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Examples</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { type: "Law Enforcement Requests", ex: "Criminal investigations, federal agency inquiries" },
                                { type: "Regulatory Requests", ex: "Supervisory reviews, central bank compliance audits" },
                                { type: "Court Orders", ex: "Subpoenas, search warrants, judicial directives" },
                                { type: "Emergency Requests", ex: "Imminent harm situations, active cyber threats" },
                                { type: "Preservation Requests", ex: "Litigation holds, formal 90-day preservation letters" }
                              ].map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                                  <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">{row.type}</td>
                                  <td className="p-4 text-zinc-500 font-inter italic">{row.ex}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 7: Notification Workflow Grid */}
                      {section.id === "customer-notification-procedures" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                          {[
                            { step: "1. Legal Review", desc: "Verify jurisdictional validity and statutory compliance." },
                            { step: "2. Governance Approval", desc: "Executive sign-off ensuring alignment with privacy mandates." },
                            { step: "3. Customer Communication", desc: "Formal notice dispatched unless gag order applies." },
                            { step: "4. Audit Logging", desc: "Cryptographic receipt stored in immutable WORM archives." }
                          ].map((item, idx) => (
                            <div key={idx} className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                              <Bell className="w-4 h-4 text-brand-lime mb-1" />
                              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">{item.step}</h4>
                              <p className="text-[10px] text-zinc-500 font-inter leading-relaxed">{item.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Section 10: Example Transparency Dashboard Table */}
                      {section.id === "transparency-reporting" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Category</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Example Metric</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { cat: "Regulatory Requests", metric: "Annual totals of central bank & supervisory inquiries" },
                                { cat: "Law Enforcement Requests", metric: "Jurisdiction breakdown by country and issuing agency" },
                                { cat: "Emergency Requests", metric: "Aggregate counts of expedited life-safety disclosures" },
                                { cat: "Preservation Requests", metric: "Yearly statistics of active litigation hold requests" }
                              ].map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                                  <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px] flex items-center gap-2">
                                    <BarChart3 className="w-3.5 h-3.5 text-brand-lime" />
                                    {row.cat}
                                  </td>
                                  <td className="p-4 text-zinc-500 font-inter italic">{row.metric}</td>
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

                      {/* Section 17: Frequently Asked Questions */}
                      {section.id === "frequently-asked-questions" && (
                        <div className="space-y-4 pt-2 not-italic">
                          {[
                            { q: "Does DeepSense notify customers about requests?", a: "Where legally permitted, DeepSense may notify customers regarding requests affecting their data." },
                            { q: "Does DeepSense challenge improper requests?", a: "Yes. DeepSense may challenge requests that are overly broad, legally deficient, or inconsistent with applicable law." },
                            { q: "Does DeepSense publish transparency reports?", a: "DeepSense may publish aggregated transparency reporting metrics periodically." },
                            { q: "Are emergency disclosures allowed?", a: "Yes, in limited circumstances involving imminent harm or legally recognized emergencies." },
                            { q: "Does this policy apply globally?", a: "Yes. Requests are reviewed in consideration of regional laws and jurisdictional requirements." }
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

                      {/* Section 19 designated contact grid */}
                      {section.id === "contact-information" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Legal Team</span>
                            <a href="mailto:legal@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">legal@deepsense.ai</a>
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
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Security Ops</span>
                            <a href="mailto:security@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">security@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Compliance</span>
                            <a href="mailto:compliance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">compliance@deepsense.ai</a>
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
                <h3 className="text-base font-bold text-neutral-900">No Legal Process Records Found</h3>
                <p className="text-xs text-zinc-500 font-inter max-w-md mx-auto leading-relaxed">
                  No sections match your search query &ldquo;{searchQuery}&rdquo;. Try queries like &ldquo;subpoena&rdquo;, &ldquo;warrant&rdquo;, or &ldquo;emergency&rdquo;.
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
              Need Legal Process <span className="text-zinc-400">or Governance Documentation?</span>
            </h2>
            <p className="text-zinc-400 text-sm font-inter leading-relaxed max-w-lg italic">
              Contact DeepSense Legal, Privacy, Governance, or Compliance teams for enterprise legal process reviews, procurement discussions, operational transparency documentation, or regulatory coordination inquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 relative z-10 w-full sm:w-auto">
            <Link 
              href="mailto:legal@deepsense.ai"
              className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-bold text-xs transition-all text-center uppercase tracking-wider"
            >
              Contact Legal Team
            </Link>
            <button 
              onClick={() => window.print()}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              <Printer className="w-3.5 h-3.5 text-brand-lime" />
              Download Policy PDF
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
