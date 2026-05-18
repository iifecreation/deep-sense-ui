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
  Network,
  Users,
  Terminal,
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

const aupSections: Section[] = [
  {
    id: "introduction",
    title: "Section 1 — Introduction",
    paragraphs: [
      "DeepSense provides enterprise fraud intelligence infrastructure designed for: fraud prevention, operational intelligence, transaction monitoring, governance workflows, onboarding intelligence, AI-powered investigations, risk management, and operational analytics.",
      "This Acceptable Use Policy exists to protect platform integrity, ensure lawful operational usage, maintain infrastructure security, protect customer environments, support regulatory obligations, and prevent abuse of AI and fraud intelligence systems.",
      "All users, organizations, administrators, developers, analysts, and integration partners must comply with this policy."
    ]
  },
  {
    id: "scope-of-policy",
    title: "Section 2 — Scope of Policy",
    paragraphs: [
      "This policy applies to: DeepSense SaaS environments, APIs and developer platforms, AI systems, graph intelligence tooling, onboarding systems, operational dashboards, workflow automation, integrations, reporting infrastructure, and fraud intelligence services.",
      "This policy applies to: enterprise customers, contractors, analysts, developers, integration providers, administrators, and third-party operational users."
    ]
  },
  {
    id: "authorized-platform-usage",
    title: "Section 3 — Authorized Platform Usage",
    paragraphs: [
      "DeepSense may be used for legitimate enterprise purposes, including:"
    ],
    subsections: [
      {
        title: "A. Fraud Prevention & Detection",
        points: [
          "Real-time transaction monitoring, onboarding verification, and account takeover prevention.",
          "Comprehensive AML operations and transaction risk analysis."
        ]
      },
      {
        title: "B. Enterprise Operational Intelligence",
        points: [
          "Operational analytics, governance oversight, and investigation orchestration.",
          "Workflow management and automated executive reporting."
        ]
      },
      {
        title: "C. Security & Compliance Operations",
        points: [
          "Access governance, audit workflows, compliance reporting, and operational monitoring.",
          "Enterprise infrastructure oversight."
        ]
      },
      {
        title: "D. AI-Assisted Investigations",
        points: [
          "Anomaly analysis, graph reasoning, and investigation summaries.",
          "Operational recommendations and dynamic workflow prioritization."
        ]
      }
    ]
  },
  {
    id: "prohibited-activities",
    title: "Section 4 — Prohibited Activities",
    paragraphs: [
      "Users are strictly prohibited from using the platform to execute any of the following unauthorized activities:"
    ],
    subsections: [
      {
        title: "A. Conduct Illegal Activities",
        points: [
          "Financial crimes, identity theft, and unauthorized surveillance.",
          "Money laundering, cybercrime, and sanctions violations."
        ]
      },
      {
        title: "B. Abuse Operational Intelligence",
        points: [
          "Unlawful profiling and unauthorized employee monitoring.",
          "Discriminatory targeting, malicious investigations, and abusive automation."
        ]
      },
      {
        title: "C. Disrupt Infrastructure",
        points: [
          "Denial-of-service (DDoS) attacks and API flooding.",
          "Malicious automation, infrastructure interference, and resource exhaustion."
        ]
      },
      {
        title: "D. Evade Security Controls",
        points: [
          "Bypassing authentication and privilege escalation.",
          "Token abuse, unauthorized access attempts, and MFA circumvention."
        ]
      }
    ]
  },
  {
    id: "fraudulent-malicious-activity",
    title: "Section 5 — Fraudulent & Malicious Activity",
    paragraphs: [
      "DeepSense may not be used to facilitate fraud, coordinate cyberattacks, evade law enforcement, manipulate operational systems, impersonate entities, generate synthetic abuse campaigns, or automate malicious intelligence gathering.",
      "Any use of DeepSense infrastructure to support malicious activity may result in immediate suspension, forensic investigation, legal escalation, regulatory cooperation, and infrastructure isolation."
    ]
  },
  {
    id: "security-violations",
    title: "Section 6 — Security Violations",
    paragraphs: [
      "Users may not reverse engineer infrastructure, exploit vulnerabilities, probe internal systems, intercept platform traffic, compromise integrations, inject malicious code, manipulate telemetry, or tamper with audit logs.",
      "DeepSense maintains comprehensive infrastructure monitoring, anomaly detection, access governance, SIEM integrations, operational threat intelligence, and zero-trust enforcement to detect and neutralize security violations."
    ]
  },
  {
    id: "ai-usage-restrictions",
    title: "Section 7 — AI Usage Restrictions",
    paragraphs: [
      "DeepSense AI systems may not be used for: unlawful profiling, discriminatory decisions, unauthorized surveillance, autonomous harmful actions, deceptive operational practices, abusive automation, social engineering, or harmful misinformation generation.",
      "Organizations remain responsible for reviewing AI outputs, human oversight, governance approvals, regulatory compliance, and operational accountability.",
      "AI Governance Requirements: Users must validate AI-generated recommendations, implement human review where necessary, maintain governance oversight, and ensure lawful operational usage."
    ]
  },
  {
    id: "data-misuse-restrictions",
    title: "Section 8 — Data Misuse Restrictions",
    paragraphs: [
      "Users may not upload unlawfully obtained data, process data without authorization, violate privacy laws, misuse customer information, attempt re-identification, export restricted intelligence, or violate regional data residency restrictions.",
      "Organizations must ensure lawful collection, consent where required, regional compliance, and proper governance controls."
    ]
  },
  {
    id: "api-infrastructure-abuse",
    title: "Section 9 — API & Infrastructure Abuse",
    paragraphs: [
      "Prohibited API Actions: excessive API requests, automated scraping, credential stuffing, unauthorized automation, traffic manipulation, abusive webhook execution, and infrastructure stress testing without approval.",
      "Allowed Automation: Authorized automation may include approved integrations, operational orchestration, fraud intelligence workflows, governance automation, and SIEM synchronization—subject to rate limits, authentication controls, governance review, and operational restrictions."
    ]
  },
  {
    id: "surveillance-privacy-restrictions",
    title: "Section 10 — Surveillance & Privacy Restrictions",
    paragraphs: [
      "DeepSense may not be used for: unlawful surveillance, covert monitoring, unauthorized employee tracking, discriminatory investigations, abusive behavioral monitoring, or privacy-invasive operations.",
      "Operational monitoring must: comply with applicable law, follow organizational governance, support legitimate business purposes, and maintain transparency obligations."
    ]
  },
  {
    id: "compliance-obligations",
    title: "Section 11 — Compliance Obligations",
    paragraphs: [
      "Organizations are responsible for ensuring compliance with privacy laws, AML obligations, sanctions regulations, employment laws, cybersecurity regulations, AI governance obligations, and regional operational requirements.",
      "DeepSense does not replace legal counsel, institutional compliance programs, internal governance oversight, or regulatory review."
    ]
  },
  {
    id: "third-party-integrations",
    title: "Section 12 — Third-Party Integrations",
    paragraphs: [
      "Customers are responsible for: securing integrations, validating external systems, managing API credentials, governing data flows, and reviewing third-party compliance.",
      "DeepSense may restrict integrations that introduce operational risk, violate regulations, threaten infrastructure security, or compromise governance controls."
    ]
  },
  {
    id: "vulnerability-testing-restrictions",
    title: "Section 13 — Vulnerability Testing Restrictions",
    paragraphs: [
      "Unauthorized penetration testing or vulnerability scanning is prohibited.",
      "Security testing may only occur with written authorization, within approved scopes, and under coordinated disclosure procedures."
    ],
    ctaLink: { text: "View Vulnerability Disclosure Policy", href: "/legal/vulnerability-disclosure" }
  },
  {
    id: "content-intellectual-property",
    title: "Section 14 — Content & Intellectual Property",
    paragraphs: [
      "Users may not copy proprietary systems, reproduce AI models, misuse trademarks, redistribute protected content, or resell platform access without authorization.",
      "DeepSense retains ownership of all AI infrastructure, fraud models, operational frameworks, analytics systems, trademarks, and software code."
    ]
  },
  {
    id: "operational-governance",
    title: "Section 15 — Operational Governance",
    paragraphs: [
      "Organizations are expected to maintain governance oversight, review analyst activity, monitor privileged access, enforce role-based controls, implement operational approvals, and maintain audit readiness.",
      "DeepSense supports audit logging, governance workflows, AI explainability, accountability tracking, and operational traceability."
    ]
  },
  {
    id: "monitoring-enforcement",
    title: "Section 16 — Monitoring & Enforcement",
    paragraphs: [
      "DeepSense may monitor platform activity to detect abuse, identify security threats, maintain operational integrity, enforce governance requirements, and support legal obligations.",
      "Monitoring may include API telemetry, authentication analytics, infrastructure diagnostics, operational anomaly detection, and AI governance monitoring.",
      "Violations may result in warnings, temporary suspension, permanent termination, infrastructure isolation, or legal escalation."
    ]
  },
  {
    id: "incident-reporting",
    title: "Section 17 — Incident Reporting",
    paragraphs: [
      "Users should immediately report suspected abuse, security incidents, credential compromise, malicious activity, infrastructure misuse, or AI governance concerns to the designated desk."
    ]
  },
  {
    id: "suspension-termination",
    title: "Section 18 — Suspension & Termination",
    paragraphs: [
      "DeepSense may suspend or terminate access for policy violations, unlawful usage, infrastructure abuse, security risks, regulatory violations, or governance failures.",
      "DeepSense may also isolate environments, revoke API access, disable integrations, or restrict operational capabilities."
    ]
  },
  {
    id: "policy-updates",
    title: "Section 19 — Policy Updates",
    paragraphs: [
      "DeepSense may update this policy periodically to reflect legal requirements, security improvements, operational changes, AI governance evolution, or infrastructure updates.",
      "Material changes may be communicated through platform notifications, enterprise communications, or governance advisories."
    ]
  },
  {
    id: "contact-information",
    title: "Section 20 — Contact Information",
    paragraphs: [
      "For all formal acceptable use inquiries, abuse reports, or security incident tracking, please route communication to the designated department:"
    ]
  }
];

export default function AcceptableUsePolicyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    aupSections.forEach(s => {
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
    aupSections.forEach(s => {
      updated[s.id] = true;
    });
    setExpandedSections(updated);
  };

  const collapseAll = () => {
    const updated: Record<string, boolean> = {};
    aupSections.forEach(s => {
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

  const filteredSections = aupSections.filter(section => {
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
            PLATFORM USAGE & OPERATIONAL GOVERNANCE
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
            Acceptable <span className="text-zinc-400">Use.</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg font-inter max-w-[800px] leading-relaxed italic">
            This Acceptable Use Policy defines the authorized, prohibited, secure, ethical, and compliant use of DeepSense fraud intelligence infrastructure, AI systems, APIs, operational tooling, reporting environments, integrations, and enterprise services.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Enterprise Governance</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">AI Usage Controls</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Security Enforcement</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-brand-lime font-extrabold font-manrope uppercase text-[8px] tracking-wider">Zero-Trust Operations</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Regulatory Alignment</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Responsible AI Usage</span>
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
              <p className="text-xs font-bold text-white">v2.0 Enterprise</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Jurisdiction Coverage</span>
              <p className="text-xs font-bold text-white">Global</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Responsible Office</span>
              <p className="text-xs font-bold text-white">Legal, Security & Governance</p>
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
              <h3 className="text-base font-bold text-neutral-900">Governance Framework</h3>
              <p className="text-[11px] text-zinc-500 font-inter">Explore operational limitations, security terms, and compliance logs.</p>
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
                placeholder="Search acceptable usage terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 focus:outline-none focus:border-neutral-900 transition-all"
              />
            </div>

            {/* Anchored Sidebar Links */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
              {aupSections.map((section, idx) => (
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
              <span className="text-zinc-400 font-inter">Notice an abuse?</span>
              <Link href="mailto:abuse@deepsense.ai" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                Report Abuse
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

                      {/* Section Subsections (Authorized Permitted Uses) */}
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

                      {/* Section 17 Incident Reporting Grid */}
                      {section.id === "incident-reporting" && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Security Ops</span>
                            <a href="mailto:security@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">security@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Abuse Reporting</span>
                            <a href="mailto:abuse@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">abuse@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Governance Office</span>
                            <a href="mailto:governance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">governance@deepsense.ai</a>
                          </div>
                        </div>
                      )}

                      {/* Section 20 designated contact grid */}
                      {section.id === "contact-information" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Legal Team</span>
                            <a href="mailto:legal@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">legal@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Security Operations</span>
                            <a href="mailto:security@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">security@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Governance Office</span>
                            <a href="mailto:governance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">governance@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Compliance Team</span>
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
                <h3 className="text-base font-bold text-neutral-900">No Acceptable Use Policies Found</h3>
                <p className="text-xs text-zinc-500 font-inter max-w-md mx-auto leading-relaxed">
                  No sections match your search query &ldquo;{searchQuery}&rdquo;. Try queries like &ldquo;DDoS&rdquo;, &ldquo;profiling&rdquo;, or &ldquo;audit&rdquo;.
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
              Questions About Platform Usage, <span className="text-zinc-400">Governance, or Security?</span>
            </h2>
            <p className="text-zinc-400 text-sm font-inter leading-relaxed max-w-lg italic">
              Contact DeepSense Legal, Security, or Governance teams for enterprise policy reviews, compliance inquiries, operational governance guidance, or abuse reporting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full sm:w-auto">
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
              Download PDF
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
