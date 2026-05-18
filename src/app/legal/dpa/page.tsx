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
  Database,
  Globe,
  Briefcase,
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

const dpaSections: Section[] = [
  {
    id: "introduction",
    title: "Section 1 — Introduction",
    paragraphs: [
      "This Data Processing Agreement (\"DPA\") forms part of the primary customer agreement between DeepSense (\"Processor\") and the Customer (\"Controller\" or \"Business\").",
      "This DPA governs DeepSense's processing of personal data, operational telemetry, fraud intelligence data, onboarding records, authentication metadata, AI-generated operational insights, and regulated compliance information.",
      "This DPA applies to all SaaS services, APIs, AI systems, fraud intelligence tooling, graph intelligence systems, operational analytics, reporting infrastructure, and enterprise integrations."
    ]
  },
  {
    id: "definitions",
    title: "Section 2 — Definitions",
    paragraphs: [
      "The following defined terms shall govern all clauses, appendices, and regulatory reports associated with this DPA:"
    ]
  },
  {
    id: "scope-of-processing",
    title: "Section 3 — Scope of Processing",
    paragraphs: [
      "DeepSense processes Customer Data solely to provide contracted services, support real-time fraud detection, maintain operational security, support GRC workflows, generate operational analytics, provide explainable AI-assisted intelligence, and maintain infrastructure integrity.",
      "Processing activities include: ingestion, secure storage, transactional analysis, correlation, AI enrichment, operational workflow orchestration, compliance reporting, and cryptographic deletion."
    ]
  },
  {
    id: "roles-of-the-parties",
    title: "Section 4 — Roles of the Parties",
    paragraphs: [
      "The Customer acts as: the Data Controller, Business, and primary operational data owner. The Customer is responsible for ensuring lawful data collection, providing documented processing instructions, maintaining a valid legal basis for processing, and managing end-user consents where applicable.",
      "DeepSense acts as: the Data Processor, Service Provider, and operational infrastructure provider. DeepSense is responsible for maintaining secure processing environments, implementing GRC governance controls, protecting systems under security protocols, and executing processor obligations."
    ]
  },
  {
    id: "customer-instructions",
    title: "Section 5 — Customer Instructions",
    paragraphs: [
      "DeepSense shall process Customer Data only on documented customer instructions, as required to deliver the contracted services, to fulfill compliance mandates, and to preserve system-wide security and operational integrity.",
      "Enterprise administrators may configure: custom data retention controls, automated GRC workflows, regional processing boundaries, tenant access policies, and explainable AI governance parameters."
    ]
  },
  {
    id: "categories-of-data",
    title: "Section 6 — Categories of Data",
    paragraphs: [
      "Under this agreement, the platform processes the following categories of enterprise data to generate anti-fraud intelligence and audit indicators:"
    ]
  },
  {
    id: "types-of-data-subjects",
    title: "Section 7 — Types of Data Subjects",
    paragraphs: [
      "Data subjects may include customer employees, platform administrators, operational compliance analysts, merchant operators, platform end-users, onboarding applicants, customers of customer organizations, and corporate stakeholders."
    ]
  },
  {
    id: "purpose-limitation",
    title: "Section 8 — Purpose Limitation",
    paragraphs: [
      "DeepSense shall process Customer Data exclusively to deliver: fraud prevention, operational intelligence, AI-assisted investigations, GRC compliance workflows, sanctions screening, infrastructure security, operational analytics, and audit reporting.",
      "DeepSense does not: sell customer personal data, utilize operational telemetry for third-party consumer advertising, perform unauthorized user profiling, or repurpose customer data outside contracted services."
    ]
  },
  {
    id: "confidentiality-obligations",
    title: "Section 9 — Confidentiality Obligations",
    paragraphs: [
      "DeepSense personnel authorized to access Customer Data are contractually bound by strict confidentiality covenants, have undergone comprehensive security training, and are restricted to memory-isolated, audited networks.",
      "Access is authorized and audited utilizing strict Role-Based Access Control (RBAC), least privilege principles, governance approvals, and persistent operational logging."
    ]
  },
  {
    id: "security-measures",
    title: "Section 10 — Security Measures",
    paragraphs: [
      "DeepSense maintains rigorous technical, administrative, and organizational security controls to protect Customer Data from unauthorized disclosure or breach. Primary controls include: encryption at rest, encryption in transit, tenant isolation, zero-trust security architecture, SIEM monitoring, disaster recovery, and continuous GRC audit logging."
    ]
  },
  {
    id: "subprocessors",
    title: "Section 11 — Subprocessors",
    paragraphs: [
      "DeepSense may engage approved third-party subprocessors for: cloud hosting infrastructure, authentication suites, AI compute nodes, system observability, billing operations, and customer support tooling.",
      "All subprocessors are strictly security reviewed, contractually governed under terms equivalent to this DPA, privacy assessed, and operationally monitored."
    ],
    ctaLink: { text: "View Full Subprocessor List", href: "/legal/subprocessors" }
  },
  {
    id: "international-transfers",
    title: "Section 12 — International Transfers",
    paragraphs: [
      "Where Customer Data is transferred internationally, DeepSense implements approved safeguards including the EU-US Data Privacy Framework, Standard Contractual Clauses (SCCs), encryption-in-transit parameters, regional cloud hosting, and strict tenant-level isolation controls."
    ]
  },
  {
    id: "data-residency",
    title: "Section 13 — Data Residency",
    paragraphs: [
      "DeepSense supports multi-region hosting, geographic data residency limits, tenant-specific routing rules, and isolated private cloud deployments to comply with regional governance rules.",
      "Enterprise customers may configure: regional processing boundaries, database storage residency, and GRC regional restrictions."
    ]
  },
  {
    id: "ai-automated-processing",
    title: "Section 14 — AI & Automated Processing",
    paragraphs: [
      "DeepSense AI models process operational telemetry, fraud indicators, behavioral analytics, graph relationships, and transactional logs.",
      "AI systems are governed strictly by explainability principles, human-in-the-loop oversight, audit traceability, governance approvals, and model accountability.",
      "AI-generated outputs represent probabilistic risk scores that assist analyst evaluation and do not independently create legally binding outcomes without human review."
    ]
  },
  {
    id: "data-subject-rights",
    title: "Section 15 — Data Subject Rights",
    paragraphs: [
      "DeepSense provides dedicated tools to support customer obligations relating to: data access requests, deletion (right to be forgotten) requests, correction requests, portability requests, objection rights, and processing restrictions.",
      "Because DeepSense acts as a Data Processor, the Customer remains responsible for validating data subject identities, determining legal obligations under regional laws, and communicating directly with data subjects."
    ]
  },
  {
    id: "incident-notification",
    title: "Section 16 — Incident Notification",
    paragraphs: [
      "DeepSense maintains security incident response procedures for unauthorized access, operational compromise, infrastructure breaches, or governance failures.",
      "In the event of a verified breach impacting Customer Data, DeepSense guarantees to notify the Customer without undue delay, provide detailed incident impact summaries, coordinate active remediation, and support regulatory reporting obligations."
    ]
  },
  {
    id: "audit-rights",
    title: "Section 17 — Audit Rights",
    paragraphs: [
      "DeepSense shall make available to the Customer all information reasonably necessary to demonstrate compliance with this DPA, and allows for audits, including inspections, conducted by the Customer or a qualified independent auditor.",
      "Audits must avoid operational disruption, align with strict security protocols, and follow reasonable written notice requirements.",
      "DeepSense satisfies audit requests primarily by providing third-party compliance audits (SOC 2 Type II), ISO 27001 certifications, and platform security summaries."
    ]
  },
  {
    id: "retention-deletion",
    title: "Section 18 — Retention & Deletion",
    paragraphs: [
      "DeepSense retains Customer Data only for contracted purposes, to fulfill anti-money laundering and regulatory requirements, and to preserve system integrity.",
      "Upon contract termination or written Customer request, DeepSense will export Customer Data, securely purge all records, delete operational telemetry, and revoke associated API access credentials."
    ],
    ctaLink: { text: "Learn More About Retention Policies", href: "/legal/data-retention" }
  },
  {
    id: "regulatory-cooperation",
    title: "Section 19 — Regulatory Cooperation",
    paragraphs: [
      "DeepSense shall cooperate with designated supervisory authorities, data protection regulators, and lawful court orders.",
      "All regulatory inquiries are systematically reviewed, legally validated, documented under audit logs, and managed by our legal office."
    ]
  },
  {
    id: "liability-indemnification",
    title: "Section 20 — Liability & Indemnification",
    paragraphs: [
      "Liability under this DPA shall be governed strictly under the primary Master Services Agreement unless otherwise mandated by regional privacy statutes.",
      "DeepSense shall not be liable for damages resulting from unlawful customer instructions, unauthorized customer data collection, customer compliance failures, or external infrastructure dependencies."
    ]
  },
  {
    id: "term-termination",
    title: "Section 21 — Term & Termination",
    paragraphs: [
      "This DPA remains in effect for as long as DeepSense processes Customer Data on behalf of the customer under the active contract.",
      "Survival Clauses: confidentiality obligations, data deletion commitments, GRC compliance records, and liability limitations survive the termination of this agreement."
    ]
  },
  {
    id: "governing-law",
    title: "Section 22 — Governing Law",
    paragraphs: [
      "This DPA and any disputes arising out of it shall be governed by the governing law and jurisdiction provisions defined within the primary Master Services Agreement, unless otherwise required under regional data protection frameworks (such as EU GDPR)."
    ]
  },
  {
    id: "contact-information",
    title: "Section 23 — Contact Information",
    paragraphs: [
      "For all formal inquiries regarding data processing, GRC compliance, EU SCC agreements, or DPO audits, please contact our legal and privacy desks:"
    ]
  }
];

export default function DataProcessingAgreementPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    dpaSections.forEach(s => {
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
    dpaSections.forEach(s => {
      updated[s.id] = true;
    });
    setExpandedSections(updated);
  };

  const collapseAll = () => {
    const updated: Record<string, boolean> = {};
    dpaSections.forEach(s => {
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

  const filteredSections = dpaSections.filter(section => {
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
            ENTERPRISE DATA PROCESSING & PRIVACY GOVERNANCE
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
            Data Processing <span className="text-zinc-400">Agreement.</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg font-inter max-w-[800px] leading-relaxed italic">
            This Data Processing Agreement (&ldquo;DPA&rdquo;) governs the processing of personal data, operational telemetry, fraud intelligence information, and regulated enterprise data processed by DeepSense on behalf of customers in connection with the DeepSense platform and related services.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">GDPR Ready</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">SCC Support</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Enterprise Privacy Controls</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-brand-lime font-extrabold font-manrope uppercase text-[8px] tracking-wider">AI Governance</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Multi-Region Data Controls</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Security-by-Design</span>
          </div>

          {/* Metadata Horizontal Bar */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Agreement Version</span>
              <p className="text-xs font-bold text-white">v3.0 Enterprise</p>
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
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Governing Frameworks</span>
              <p className="text-xs font-bold text-white">GDPR, SCCs, GRC</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Responsible Office</span>
              <p className="text-xs font-bold text-white">Privacy & Legal</p>
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
              <h3 className="text-base font-bold text-neutral-900">Contractual Clauses</h3>
              <p className="text-[11px] text-zinc-500 font-inter">Explore GDPR processing terms, controller roles, and security commitments.</p>
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
                placeholder="Search processing clauses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 focus:outline-none focus:border-neutral-900 transition-all"
              />
            </div>

            {/* Anchored Sidebar Links */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
              {dpaSections.map((section, idx) => (
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
              <span className="text-zinc-400 font-inter">Need EU-US SCCs?</span>
              <Link href="mailto:privacy@deepsense.ai" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                Request Agreement
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

                      {/* Section 2: Definitions Table */}
                      {section.id === "definitions" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Term</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Definition</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Controller</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Entity determining processing purposes</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Processor</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Entity processing data on behalf of Controller</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Personal Data</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Information relating to identifiable individuals</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Customer Data</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Enterprise and operational data submitted to DeepSense</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">AI Outputs</td>
                                <td className="p-4 text-zinc-500 font-inter italic">AI-generated recommendations and operational summaries</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Subprocessor</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Authorized third-party processing provider</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Processing</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Any operation performed on data</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 6: Categories of Data Table */}
                      {section.id === "categories-of-data" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Category</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Examples</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Identity Data</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Names, usernames, identifiers</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Authentication Data</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Login metadata, MFA activity</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Operational Telemetry</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Fraud signals, device telemetry</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Transaction Data</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Payment activity, onboarding flows</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">AI Intelligence Data</td>
                                <td className="p-4 text-zinc-500 font-inter italic">AI-generated summaries and risk scores</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Governance Data</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Audit logs, approvals, escalations</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Infrastructure Data</td>
                                <td className="p-4 text-zinc-500 font-inter italic">API logs, monitoring telemetry</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 10: Security Controls Grid */}
                      {section.id === "security-measures" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">01</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Access Governance</h4>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">Strict least privilege, RBAC, and verified MFA.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">02</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Infrastructure Monitoring</h4>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">Continuous threat intelligence and SIEM feeds.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">03</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Encryption Standards</h4>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">TLS 1.3 in transit and AES-256 for data volumes.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">04</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">AI Governance Controls</h4>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">Explainable decision nodes and audit tracing.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">05</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Multi-Tenant Isolation</h4>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">Isolated relational schemas and network layers.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">06</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Disaster Recovery</h4>
                            <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">Automated regional backups and hot replication.</p>
                          </div>
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
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Privacy Office</span>
                            <a href="mailto:privacy@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">privacy@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">DPO Officer</span>
                            <a href="mailto:dpo@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">dpo@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Legal Team</span>
                            <a href="mailto:legal@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">legal@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Compliance</span>
                            <a href="mailto:compliance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">compliance@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Security Ops</span>
                            <a href="mailto:security@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">security@deepsense.ai</a>
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
                <h3 className="text-base font-bold text-neutral-900">No DPA Clauses Found</h3>
                <p className="text-xs text-zinc-500 font-inter max-w-md mx-auto leading-relaxed">
                  No sections match your search query &ldquo;{searchQuery}&rdquo;. Try queries like &ldquo;GDPR&rdquo;, &ldquo;subprocessor&rdquo;, or &ldquo;isolation&rdquo;.
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
              Need Enterprise Privacy or <span className="text-zinc-400">Procurement Documentation?</span>
            </h2>
            <p className="text-zinc-400 text-sm font-inter leading-relaxed max-w-lg italic">
              Contact DeepSense Legal, Privacy, or Compliance teams for procurement reviews, privacy assessments, regulatory documentation, AI governance reviews, or enterprise security questionnaires.
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
              Download DPA PDF
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
