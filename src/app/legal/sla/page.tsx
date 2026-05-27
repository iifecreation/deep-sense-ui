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
  HardDrive
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  subsections?: { title: string; points: string[] }[];
  ctaLink?: { text: string; href: string };
}

const slaSections: Section[] = [
  {
    id: "introduction",
    title: "Section 1 — Introduction",
    paragraphs: [
      "This Service Level Agreement (“SLA”) applies to enterprise customers using: DeepSense SaaS services, fraud intelligence infrastructure, AI systems, APIs and webhooks, graph intelligence services, onboarding intelligence, transaction monitoring, governance infrastructure, and reporting environments.",
      "The SLA establishes: service availability targets, operational support expectations, incident management procedures, escalation commitments, resilience expectations, and service credit eligibility."
    ]
  },
  {
    id: "sla-scope",
    title: "Section 2 — SLA Scope",
    paragraphs: [
      "This Service Level Agreement defines the precise operational boundaries of covered systems and explicitly identifies excluded capabilities."
    ],
    subsections: [
      {
        title: "A. Covered Services",
        points: [
          "Web application availability, APIs, and authentication infrastructure.",
          "Fraud intelligence services, AI operational systems, and graph processing services.",
          "Workflow automation, reporting systems, and operational dashboards."
        ]
      },
      {
        title: "B. Excluded Services",
        points: [
          "Beta features, experimental AI capabilities, and customer-managed infrastructure.",
          "Third-party services outside DeepSense control, unsupported integrations, and force majeure events."
        ]
      }
    ]
  },
  {
    id: "service-availability-commitments",
    title: "Section 3 — Service Availability Commitments",
    paragraphs: [
      "DeepSense is designed using: distributed infrastructure, multi-region resilience, failover orchestration, operational monitoring, AI observability, and automated recovery workflows.",
      "Availability Measurement: Availability is calculated monthly excluding scheduled maintenance, force majeure events, customer-caused disruptions, and unsupported integrations."
    ]
  },
  {
    id: "availability-exclusions",
    title: "Section 4 — Availability Exclusions",
    paragraphs: [
      "Availability commitments do not apply to: scheduled maintenance windows, internet connectivity failures outside DeepSense control, customer network failures, third-party provider outages, customer misconfigurations, unsupported API usage, unlawful or abusive platform usage, and force majeure events."
    ],
    bulletPoints: [
      "Natural disasters: Floods, earthquakes, or severe regional weather anomalies.",
      "War & civil unrest: Widespread geopolitical instability or government actions.",
      "Infrastructure disruptions: Internet backbone failures or regional cloud provider outages.",
      "Malicious external actions: Widespread zero-day cyberattacks or global DNS routing disruptions."
    ]
  },
  {
    id: "infrastructure-architecture",
    title: "Section 5 — Infrastructure Architecture",
    paragraphs: [
      "DeepSense infrastructure includes: distributed cloud regions, failover orchestration, workload segmentation, infrastructure monitoring, operational telemetry pipelines, automated recovery systems, and regional redundancy."
    ]
  },
  {
    id: "incident-severity-levels",
    title: "Section 6 — Incident Severity Levels",
    paragraphs: [
      "DeepSense categorizes operational anomalies into four distinct severity classifications to determine appropriate incident response protocols and engineering mobilization:"
    ]
  },
  {
    id: "support-response-times",
    title: "Section 7 — Support Response Times",
    paragraphs: [
      "Support Objectives: DeepSense maintains rigorous initial response targets based on verified incident severity classifications.",
      "Support Channels: DeepSense provides access to an enterprise support portal, dedicated email support, escalation channels, operational advisories, and governance coordination workflows."
    ]
  },
  {
    id: "escalation-procedures",
    title: "Section 8 — Escalation Procedures",
    paragraphs: [
      "DeepSense maintains escalation workflows for: operational outages, security incidents, AI service degradation, infrastructure instability, and governance-impacting disruptions."
    ]
  },
  {
    id: "maintenance-windows",
    title: "Section 9 — Maintenance Windows",
    paragraphs: [
      "DeepSense may conduct scheduled maintenance for: infrastructure upgrades, security patches, AI model improvements, operational enhancements, and regional failover testing.",
      "Maintenance windows are: communicated in advance, operationally monitored, and designed to minimize disruption."
    ]
  },
  {
    id: "service-credits",
    title: "Section 10 — Service Credits",
    paragraphs: [
      "Customers may be eligible for service credits if DeepSense fails to meet SLA commitments.",
      "Credit Limitations: Credits apply only to affected services, cannot exceed monthly subscription fees, require timely customer claims, and are subject to SLA review procedures."
    ]
  },
  {
    id: "disaster-recovery",
    title: "Section 11 — Disaster Recovery",
    paragraphs: [
      "DeepSense maintains disaster recovery capabilities including: regional failover, infrastructure redundancy, backup recovery systems, operational continuity workflows, and incident escalation frameworks."
    ]
  },
  {
    id: "backup-resilience",
    title: "Section 12 — Backup & Resilience",
    paragraphs: [
      "DeepSense maintains: encrypted backups, regional redundancy, operational recovery testing, infrastructure resilience validation, and governance continuity procedures.",
      "Backup systems are: continuously monitored, strictly access controlled, periodically tested, and governance reviewed."
    ]
  },
  {
    id: "customer-responsibilities",
    title: "Section 13 — Customer Responsibilities",
    paragraphs: [
      "Customers are responsible for: managing user access, configuring integrations properly, maintaining endpoint security, reviewing AI outputs, governing analyst activity, securing API credentials, and monitoring internal workflows.",
      "Customers should: implement MFA, maintain governance controls, validate operational configurations, and review anomaly alerts."
    ]
  },
  {
    id: "monitoring-observability",
    title: "Section 14 — Monitoring & Observability",
    paragraphs: [
      "DeepSense continuously monitors: infrastructure health, API performance, fraud intelligence pipelines, AI service reliability, authentication systems, governance workflows, and operational telemetry.",
      "Monitoring capabilities include: distributed observability, anomaly detection, automated alerting, AI telemetry analysis, and regional health monitoring."
    ]
  },
  {
    id: "ai-operational-services",
    title: "Section 15 — AI & Operational Services",
    paragraphs: [
      "DeepSense AI systems support: fraud scoring, anomaly detection, operational summaries, graph intelligence, onboarding trust analysis, and workflow recommendations.",
      "AI systems: operate probabilistically, may experience temporary degradation during model updates, are continuously monitored, and include governance safeguards."
    ]
  },
  {
    id: "api-availability",
    title: "Section 16 — API Availability",
    paragraphs: [
      "DeepSense APIs and webhooks are designed for: high-throughput ingestion, real-time fraud scoring, operational synchronization, distributed orchestration, and event-driven intelligence.",
      "API infrastructure includes: rate limiting, regional routing, retry mechanisms, event replay capabilities, and operational telemetry monitoring."
    ]
  },
  {
    id: "security-incident-handling",
    title: "Section 17 — Security Incident Handling",
    paragraphs: [
      "DeepSense maintains procedures for: unauthorized access, infrastructure compromise, AI governance incidents, suspicious operational activity, service disruptions, and security vulnerabilities.",
      "Incident response workflows may include: containment, investigation, remediation, governance escalation, and customer notification."
    ]
  },
  {
    id: "reporting-communication",
    title: "Section 18 — Reporting & Communication",
    paragraphs: [
      "DeepSense may communicate: operational advisories, maintenance notices, incident updates, governance alerts, and infrastructure status changes.",
      "Communication channels may include: email notifications, support portal updates, operational dashboards, and enterprise communications."
    ]
  },
  {
    id: "sla-limitations",
    title: "Section 19 — SLA Limitations",
    paragraphs: [
      "This SLA does not: guarantee uninterrupted service, eliminate operational risk, guarantee fraud prevention outcomes, replace customer governance obligations, or cover unsupported environments.",
      "DeepSense AI systems: provide operational assistance, are probabilistic in nature, and require human oversight."
    ]
  },
  {
    id: "policy-updates",
    title: "Section 20 — Policy Updates",
    paragraphs: [
      "DeepSense may update this SLA periodically to reflect: infrastructure evolution, operational improvements, regulatory requirements, governance enhancements, or AI operational changes.",
      "Material changes may be communicated through: enterprise communications, procurement updates, or governance advisories."
    ]
  },
  {
    id: "contact-information",
    title: "Section 21 — Contact Information",
    paragraphs: [
      "For all formal inquiries regarding enterprise availability targets, service credit requests, infrastructure resilience validation, or operational escalations, contact our designated offices:"
    ]
  }
];

export default function SLAPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    slaSections.forEach(s => {
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
    slaSections.forEach(s => {
      updated[s.id] = true;
    });
    setExpandedSections(updated);
  };

  const collapseAll = () => {
    const updated: Record<string, boolean> = {};
    slaSections.forEach(s => {
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

  const filteredSections = slaSections.filter(section => {
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
            ENTERPRISE RELIABILITY & OPERATIONAL COMMITMENTS
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
            Service Level <span className="text-zinc-400">Agreement.</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg font-inter max-w-[800px] leading-relaxed italic">
            This Service Level Agreement defines DeepSense operational availability commitments, support response objectives, incident management procedures, escalation frameworks, infrastructure resilience expectations, and service credit policies for enterprise customers.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-brand-lime font-extrabold font-manrope uppercase text-[8px] tracking-wider">99.9% Availability Target</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Multi-Region Infrastructure</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Enterprise Incident Response</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Distributed Failover</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Operational Resilience</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">AI Infrastructure Monitoring</span>
          </div>

          {/* Metadata Horizontal Bar */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">SLA Version</span>
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
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Coverage</span>
              <p className="text-xs font-bold text-white">Enterprise SaaS Services</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider font-mono">Responsible Office</span>
              <p className="text-xs font-bold text-white">Infrastructure & Ops</p>
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
              <h3 className="text-base font-bold text-neutral-900">SLA Framework</h3>
              <p className="text-[11px] text-zinc-500 font-inter">Audit uptime targets, incident severities, and escalation layers.</p>
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
                placeholder="Search SLA terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 focus:outline-none focus:border-neutral-900 transition-all"
              />
            </div>

            {/* Anchored Sidebar Links */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
              {slaSections.map((section, idx) => (
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
              <span className="text-zinc-400 font-inter">Explore Platform?</span>
              <Link href="/platform/architecture" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                Platform Architecture
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

                      {/* Section 2 Subsections (Scope of Covered & Excluded Services) */}
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

                      {/* Section 3: Availability Commitment Table */}
                      {section.id === "service-availability-commitments" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Service Tier</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Availability Target</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Enterprise Platform</td>
                                <td className="p-4 text-brand-lime font-bold font-mono text-[11px] bg-brand-lime/5 inline-block rounded px-2.5 py-1 mt-2 ml-4">99.9%</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">APIs & Webhooks</td>
                                <td className="p-4 text-brand-lime font-bold font-mono text-[11px] bg-brand-lime/5 inline-block rounded px-2.5 py-1 mt-2 ml-4">99.95%</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Authentication Services</td>
                                <td className="p-4 text-brand-lime font-bold font-mono text-[11px] bg-brand-lime/5 inline-block rounded px-2.5 py-1 mt-2 ml-4">99.95%</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">AI Intelligence Services</td>
                                <td className="p-4 text-brand-lime font-bold font-mono text-[11px] bg-brand-lime/5 inline-block rounded px-2.5 py-1 mt-2 ml-4">99.9%</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Reporting Infrastructure</td>
                                <td className="p-4 text-brand-lime font-bold font-mono text-[11px] bg-brand-lime/5 inline-block rounded px-2.5 py-1 mt-2 ml-4">99.9%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 5: Infrastructure Resilience Features Grid */}
                      {section.id === "infrastructure-architecture" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <Server className="w-4 h-4 text-brand-lime mb-2" />
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Multi-Region Deployments</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Active-active cloud availability zones to eliminate single points of failure.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <RefreshCw className="w-4 h-4 text-brand-lime mb-2" />
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Distributed Failover</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Automatic BGP route redirection during unexpected localized cloud outages.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <Activity className="w-4 h-4 text-brand-lime mb-2" />
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Operational Load Balancing</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Dynamic global traffic shaping to maintain sub-millisecond API responses.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <Eye className="w-4 h-4 text-brand-lime mb-2" />
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Infrastructure Observability</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Granular end-to-end tracing and real-time operational health checks.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <Cpu className="w-4 h-4 text-brand-lime mb-2" />
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">AI Infrastructure Monitoring</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Predictive anomaly detection measuring cluster memory and thread pools.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <Zap className="w-4 h-4 text-brand-lime mb-2" />
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Automated Recovery Workflows</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Self-healing container orchestration replacing unhealthy worker nodes.</p>
                          </div>
                        </div>
                      )}

                      {/* Section 6: Incident Severity Levels Table & Examples */}
                      {section.id === "incident-severity-levels" && (
                        <div className="space-y-6 pt-2">
                          <div className="overflow-x-auto border border-zinc-200 rounded-2xl">
                            <table className="w-full text-left border-collapse text-xs">
                              <thead>
                                <tr className="bg-zinc-50 border-b border-zinc-200">
                                  <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Severity</th>
                                  <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Description</th>
                                  <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Example</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                  <td className="p-4 font-extrabold text-red-600 font-mono text-[11px]">Severity 1</td>
                                  <td className="p-4 text-neutral-900 font-bold not-italic">Critical outage</td>
                                  <td className="p-4 text-zinc-500 font-inter italic">Full platform outage or authentication unavailable</td>
                                </tr>
                                <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                  <td className="p-4 font-extrabold text-orange-600 font-mono text-[11px]">Severity 2</td>
                                  <td className="p-4 text-neutral-900 font-bold not-italic">Major degradation</td>
                                  <td className="p-4 text-zinc-500 font-inter italic">Fraud scoring latency spikes or webhook delays</td>
                                </tr>
                                <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                  <td className="p-4 font-extrabold text-amber-600 font-mono text-[11px]">Severity 3</td>
                                  <td className="p-4 text-neutral-900 font-bold not-italic">Moderate impact</td>
                                  <td className="p-4 text-zinc-500 font-inter italic">Partial feature degradation or non-critical reporting lag</td>
                                </tr>
                                <tr className="hover:bg-zinc-50/50 transition-colors">
                                  <td className="p-4 font-extrabold text-blue-600 font-mono text-[11px]">Severity 4</td>
                                  <td className="p-4 text-neutral-900 font-bold not-italic">Minor issue</td>
                                  <td className="p-4 text-zinc-500 font-inter italic">UI inconsistencies or general inquiries</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                            <div className="p-5 bg-red-50/50 border border-red-200 rounded-2xl space-y-3">
                              <h4 className="text-xs font-bold text-red-950 uppercase tracking-tight not-italic flex items-center gap-1.5">
                                <AlertCircle className="w-4 h-4 text-red-600" />
                                Severity 1 Examples
                              </h4>
                              <ul className="space-y-1.5 list-disc pl-5 text-xs text-red-900/80 not-italic">
                                <li>Authentication unavailable across all regions</li>
                                <li>Core platform inaccessible for active investigations</li>
                                <li>Widespread API failures impacting transaction scoring</li>
                                <li>Operational data disruption or database partition loss</li>
                                <li>Critical AI service outage halting real-time decisions</li>
                              </ul>
                            </div>
                            <div className="p-5 bg-orange-50/50 border border-orange-200 rounded-2xl space-y-3">
                              <h4 className="text-xs font-bold text-orange-950 uppercase tracking-tight not-italic flex items-center gap-1.5">
                                <AlertCircle className="w-4 h-4 text-orange-600" />
                                Severity 2 Examples
                              </h4>
                              <ul className="space-y-1.5 list-disc pl-5 text-xs text-orange-900/80 not-italic">
                                <li>Elevated latency exceeding standard SLA bounds</li>
                                <li>Webhook delivery delays impacting asynchronous queues</li>
                                <li>Partial reporting degradation or dashboard slow loading</li>
                                <li>AI response slowdowns affecting batch profiling</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Section 7: Support Response Matrix */}
                      {section.id === "support-response-times" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Severity</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Initial Response Target</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-red-600 font-mono text-[11px]">Severity 1</td>
                                <td className="p-4 text-red-700 font-bold font-mono text-[11px] bg-red-50 inline-block rounded px-2.5 py-1 mt-2 ml-4">15 minutes</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-orange-600 font-mono text-[11px]">Severity 2</td>
                                <td className="p-4 text-orange-700 font-bold font-mono text-[11px] bg-orange-50 inline-block rounded px-2.5 py-1 mt-2 ml-4">1 hour</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-amber-600 font-mono text-[11px]">Severity 3</td>
                                <td className="p-4 text-amber-700 font-bold font-mono text-[11px] bg-amber-50 inline-block rounded px-2.5 py-1 mt-2 ml-4">4 business hours</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-blue-600 font-mono text-[11px]">Severity 4</td>
                                <td className="p-4 text-blue-700 font-bold font-mono text-[11px] bg-blue-50 inline-block rounded px-2.5 py-1 mt-2 ml-4">1 business day</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 8: Escalation Layers */}
                      {section.id === "escalation-procedures" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Level 1</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Support Operations</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Initial incident triage, verification, and customer communication.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Level 2</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Infrastructure Engineering</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Deep technical debugging, cluster failover, and hotfix deployment.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Level 3</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Security & Governance</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">Forensic validation, compliance risk audits, and privacy evaluations.</p>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest font-mono">Level 4</span>
                            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-tight not-italic">Executive Operations</h4>
                            <p className="text-[10px] text-zinc-400 font-inter">C-level mobilization, customer coordination, and incident sign-offs.</p>
                          </div>
                        </div>
                      )}

                      {/* Section 9: Standard Maintenance Window Table */}
                      {section.id === "maintenance-windows" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Region</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Typical Window</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Global</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Saturday / Sunday low-traffic periods (00:00 - 04:00 UTC)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 10: Service Credits Table */}
                      {section.id === "service-credits" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Monthly Availability</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Credit Percentage</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">&lt; 99.9%</td>
                                <td className="p-4 text-neutral-900 font-bold font-mono text-[11px] bg-zinc-100 inline-block rounded px-2.5 py-1 mt-2 ml-4">5%</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">&lt; 99.5%</td>
                                <td className="p-4 text-neutral-900 font-bold font-mono text-[11px] bg-zinc-100 inline-block rounded px-2.5 py-1 mt-2 ml-4">10%</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">&lt; 99.0%</td>
                                <td className="p-4 text-neutral-900 font-bold font-mono text-[11px] bg-zinc-100 inline-block rounded px-2.5 py-1 mt-2 ml-4">15%</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 11: Disaster Recovery Objectives Table */}
                      {section.id === "disaster-recovery" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Objective</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Target</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Recovery Time Objective (RTO)</td>
                                <td className="p-4 text-brand-lime font-bold font-mono text-[11px] bg-brand-lime/5 inline-block rounded px-2.5 py-1 mt-2 ml-4">&lt; 4 hours</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Recovery Point Objective (RPO)</td>
                                <td className="p-4 text-brand-lime font-bold font-mono text-[11px] bg-brand-lime/5 inline-block rounded px-2.5 py-1 mt-2 ml-4">&lt; 15 minutes</td>
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

                      {/* Section 21 designated contact grid */}
                      {section.id === "contact-information" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Support</span>
                            <a href="mailto:support@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">support@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Infra Ops</span>
                            <a href="mailto:ops@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">ops@deepsense.ai</a>
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
                <h3 className="text-base font-bold text-neutral-900">No SLA Sections Found</h3>
                <p className="text-xs text-zinc-500 font-inter max-w-md mx-auto leading-relaxed">
                  No sections match your search query &ldquo;{searchQuery}&rdquo;. Try queries like &ldquo;99.9%&rdquo;, &ldquo;Severity 1&rdquo;, or &ldquo;credits&rdquo;.
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
              Need Enterprise Reliability or <span className="text-zinc-400">Operational Assurance Documentation?</span>
            </h2>
            <p className="text-zinc-400 text-sm font-inter leading-relaxed max-w-lg italic">
              Contact DeepSense Infrastructure, Security, or Governance teams for operational reviews, architecture discussions, procurement documentation, SLA assessments, or resilience planning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 relative z-10 w-full sm:w-auto">
            <Link 
              href="mailto:support@deepsense.ai"
              className="px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-neutral-900 rounded-full font-bold text-xs transition-all text-center uppercase tracking-wider"
            >
              Contact Enterprise Support
            </Link>
            <button 
              onClick={() => window.print()}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              <Printer className="w-3.5 h-3.5 text-brand-lime" />
              Download SLA PDF
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
