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
  Cookie,
  Layers,
  Settings,
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

const cookieSections: Section[] = [
  {
    id: "introduction",
    title: "Section 1 — Introduction",
    paragraphs: [
      "DeepSense uses cookies and similar technologies to secure enterprise accounts, maintain operational integrity, support authentication, monitor infrastructure performance, improve fraud intelligence, optimize platform functionality, support AI-driven operational workflows, and strengthen governance visibility.",
      "This Cookie Policy applies to all DeepSense web applications, APIs and developer platforms, operational dashboards, fraud intelligence systems, reporting infrastructure, governance tooling, authentication services, and enterprise integrations.",
      "DeepSense is committed to absolute transparency, a privacy-first architecture, responsible telemetry collection, enterprise governance, and security-by-default operational design."
    ]
  },
  {
    id: "what-are-cookies",
    title: "Section 2 — What Are Cookies",
    paragraphs: [
      "Cookies are small data files stored on devices when users interact with digital services. DeepSense may also use related technologies including local storage, session identifiers, authentication tokens, web beacons, SDK telemetry, operational event identifiers, and infrastructure diagnostics.",
      "These technologies help DeepSense maintain secure sessions, detect fraud, optimize operational performance, improve reliability, and support enterprise governance."
    ]
  },
  {
    id: "why-deepsense-uses-cookies",
    title: "Section 3 — Why DeepSense Uses Cookies",
    paragraphs: [
      "DeepSense uses cookies and similar tracking technologies across four main operational areas:"
    ],
    subsections: [
      {
        title: "A. Secure Enterprise Infrastructure",
        points: [
          "Authentication Security & session validation.",
          "MFA Enforcement, suspicious login detection, and system-wide fraud prevention."
        ]
      },
      {
        title: "B. Maintain Platform Functionality",
        points: [
          "Dashboard preferences, workflow continuity, and API authentication.",
          "Operational state management and custom enterprise configurations."
        ]
      },
      {
        title: "C. Improve Operational Intelligence",
        points: [
          "Fraud analytics, real-time AI intelligence, and anomaly detection.",
          "Operational telemetry, workflow optimization, and GRC governance visibility."
        ]
      },
      {
        title: "D. Monitor Infrastructure Performance",
        points: [
          "API latency monitoring, service reliability, and regional performance.",
          "Operational uptime, infrastructure health, and distributed workload efficiency."
        ]
      }
    ]
  },
  {
    id: "categories-of-cookies",
    title: "Section 4 — Categories of Cookies",
    paragraphs: [
      "We classify the cookies used across the Platform into the categories defined below. Users can review, manage, or disable non-essential categories at any time."
    ]
  },
  {
    id: "essential-security-cookies",
    title: "Section 5 — Essential Security Cookies",
    paragraphs: [
      "These cookies are required to maintain secure authentication, validate user sessions, support MFA, enforce role-based access controls (RBAC), detect suspicious access patterns, secure APIs, prevent payment fraud, and protect operational infrastructure.",
      "Disabling these cookies may prevent login access, reduce platform security, and severely impact operational reliability.",
      "Key Security Functions: session integrity validation, token lifecycle management, suspicious device fingerprinting, authentication continuity, and secure API routing."
    ]
  },
  {
    id: "authentication-cookies",
    title: "Section 6 — Authentication Cookies",
    paragraphs: [
      "DeepSense uses authentication cookies to maintain user sessions, manage enterprise access, enforce identity governance, validate secure workflows, and coordinate SSO environments.",
      "Supported authentication systems include: OAuth2, SAML, OpenID Connect, enterprise SSO suites, and active MFA workflows."
    ]
  },
  {
    id: "operational-analytics-cookies",
    title: "Section 7 — Operational Analytics Cookies",
    paragraphs: [
      "Operational analytics cookies help DeepSense analyze platform usage, improve workflow performance, optimize fraud investigations, monitor operational bottlenecks, strengthen AI recommendations, and improve user experience.",
      "Analytics data may include: navigation flows, dashboard interactions, operational workflow usage, feature adoption, and infrastructure diagnostics.",
      "All analytics data is governed, access controlled, operationally segmented, and protected under privacy controls."
    ]
  },
  {
    id: "preference-ui-cookies",
    title: "Section 8 — Preference & UI Cookies",
    paragraphs: [
      "Preference cookies help store dashboard layouts, language preferences, regional settings, operational display choices, accessibility preferences, and workflow customizations.",
      "These cookies improve operational continuity, analyst productivity, and enterprise usability."
    ]
  },
  {
    id: "performance-monitoring-cookies",
    title: "Section 9 — Performance & Monitoring Cookies",
    paragraphs: [
      "DeepSense uses performance monitoring technologies to optimize distributed infrastructure, monitor uptime, improve API reliability, analyze latency, support scalability, and maintain operational resilience.",
      "Monitoring technologies collect system response timing, API latency metrics, infrastructure telemetry, workload diagnostics, and operational throughput indicators."
    ]
  },
  {
    id: "ai-fraud-intelligence-tracking",
    title: "Section 10 — AI & Fraud Intelligence Tracking",
    paragraphs: [
      "DeepSense AI systems process operational telemetry to identify fraud patterns, detect anomalies, optimize investigations, improve AI explainability, prioritize operational risk, and strengthen governance visibility.",
      "Telemetry processing is governed using privacy-by-design principles, tenant isolation, encryption, access governance, and operational transparency.",
      "AI tracking technologies are strictly not used for unauthorized profiling, consumer advertising, or external behavioral monetization."
    ]
  },
  {
    id: "third-party-services",
    title: "Section 11 — Third-Party Services",
    paragraphs: [
      "DeepSense may use approved third-party services for cloud infrastructure, observability, AI infrastructure, payment processing, identity management, and support tooling.",
      "Third parties may place limited operational cookies where necessary. All providers undergo rigorous security reviews, contractual governance, privacy assessments, and active operational monitoring."
    ]
  },
  {
    id: "web-beacons-similar-technologies",
    title: "Section 12 — Web Beacons & Similar Technologies",
    paragraphs: [
      "DeepSense may use limited beacon and tracking pixel technologies to monitor email delivery, analyze operational communications, improve infrastructure reliability, and support governance workflows.",
      "These technologies are governance controlled, access restricted, and operationally segmented."
    ]
  },
  {
    id: "cookie-retention",
    title: "Section 13 — Cookie Retention",
    paragraphs: [
      "DeepSense retains cookie and tracking telemetry data only as long as necessary to satisfy security, operational, and auditing requirements."
    ],
    ctaLink: { text: "Learn More About Data Retention", href: "/legal/data-retention" }
  },
  {
    id: "regional-privacy-rights",
    title: "Section 14 — Regional Privacy Rights",
    paragraphs: [
      "Depending on jurisdiction, users may have rights to reject optional cookies, manage consent preferences, request data access, request deletion, or object to analytics processing.",
      "DeepSense supports GDPR-aligned consent controls, regional governance workflows, and custom enterprise privacy configurations."
    ]
  },
  {
    id: "cookie-management-controls",
    title: "Section 15 — Cookie Management Controls",
    paragraphs: [
      "Users may manage cookie preferences through browser settings, platform consent banners, enterprise privacy controls, and regional governance configurations.",
      "Organizations may configure tenant-level restrictions, analytics governance, and operational telemetry settings."
    ]
  },
  {
    id: "browser-configuration",
    title: "Section 16 — Browser Configuration",
    paragraphs: [
      "Most browsers allow users to block cookies, remove cookies, restrict third-party cookies, and configure custom consent preferences. For browser documentation, refer to Chrome, Safari, Firefox, or Edge."
    ]
  },
  {
    id: "do-not-track-signals",
    title: "Section 17 — Do Not Track Signals",
    paragraphs: [
      "DeepSense currently responds to regional privacy requirements and enterprise governance controls rather than universal DNT browser signals.",
      "Operational privacy preferences may still be managed through consent settings, enterprise controls, and governance configurations."
    ]
  },
  {
    id: "enterprise-customer-controls",
    title: "Section 18 — Enterprise Customer Controls",
    paragraphs: [
      "Enterprise administrators may configure telemetry collection policies, analytics restrictions, regional cookie governance, operational monitoring rules, and AI telemetry preferences.",
      "These controls support regulated industries, GRC requirements, and regional compliance obligations."
    ]
  },
  {
    id: "policy-updates",
    title: "Section 19 — Policy Updates",
    paragraphs: [
      "DeepSense may update this policy to reflect infrastructure changes, legal requirements, governance improvements, operational enhancements, and AI platform evolution.",
      "Material changes will be communicated through platform notifications, enterprise communications, or updated consent workflows."
    ]
  },
  {
    id: "contact-information",
    title: "Section 20 — Contact Information",
    paragraphs: [
      "For all formal data privacy inquiries, DPO questions, or regulatory compliance requests, please route communication to the designated department:"
    ]
  }
];

export default function CookiePolicyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    cookieSections.forEach(s => {
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
    cookieSections.forEach(s => {
      updated[s.id] = true;
    });
    setExpandedSections(updated);
  };

  const collapseAll = () => {
    const updated: Record<string, boolean> = {};
    cookieSections.forEach(s => {
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

  const filteredSections = cookieSections.filter(section => {
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
            COOKIE & TRACKING TRANSPARENCY
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
            Cookie <span className="text-zinc-400">Policy.</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg font-inter max-w-[800px] leading-relaxed italic">
            This Cookie Policy explains how DeepSense uses cookies, tracking technologies, authentication mechanisms, analytics systems, operational telemetry tools, and security technologies across the DeepSense platform, APIs, enterprise services, and related operational infrastructure.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">GDPR Ready</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Privacy-by-Design</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Enterprise Transparency</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-brand-lime font-extrabold font-manrope uppercase text-[8px] tracking-wider">Security-First Tracking</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Consent Governance</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Regional Compliance Support</span>
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
              <h3 className="text-base font-bold text-neutral-900">Cookie Framework</h3>
              <p className="text-[11px] text-zinc-500 font-inter">Audit cookie tables, compliance settings, and integrations.</p>
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
                placeholder="Search tracking policies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 focus:outline-none focus:border-neutral-900 transition-all"
              />
            </div>

            {/* Anchored Sidebar Links */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin">
              {cookieSections.map((section, idx) => (
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
              <span className="text-zinc-400 font-inter">Audit question?</span>
              <Link href="/company/contact" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                Security Hub
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

                      {/* Section 3 Categories Display */}
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

                      {/* Section 4: Cookie Categories Table */}
                      {section.id === "categories-of-cookies" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Category</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Purpose</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Required</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Essential Cookies</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Authentication & security</td>
                                <td className="p-4 text-brand-lime font-bold text-[10px]">Yes</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Session Cookies</td>
                                <td className="p-4 text-zinc-500 font-inter italic">User session continuity</td>
                                <td className="p-4 text-brand-lime font-bold text-[10px]">Yes</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Analytics Cookies</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Operational insights</td>
                                <td className="p-4 text-zinc-400 font-bold text-[10px]">Optional</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Preference Cookies</td>
                                <td className="p-4 text-zinc-500 font-inter italic">UI customization</td>
                                <td className="p-4 text-zinc-400 font-bold text-[10px]">Optional</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Performance Cookies</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Infrastructure optimization</td>
                                <td className="p-4 text-zinc-400 font-bold text-[10px]">Optional</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Security Cookies</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Fraud detection & protection</td>
                                <td className="p-4 text-brand-lime font-bold text-[10px]">Yes</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">API Tokens</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Developer authentication</td>
                                <td className="p-4 text-brand-lime font-bold text-[10px]">Yes</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">AI Telemetry</td>
                                <td className="p-4 text-zinc-500 font-inter italic">AI operational intelligence</td>
                                <td className="p-4 text-zinc-500 font-bold text-[10px] font-mono">Controlled</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 11: Third-Party Service Providers */}
                      {section.id === "third-party-services" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Provider</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Purpose</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">AWS</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Cloud infrastructure</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Datadog</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Infrastructure observability</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Stripe</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Billing infrastructure</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Auth0</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Authentication</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">OpenAI</td>
                                <td className="p-4 text-zinc-500 font-inter italic">AI processing infrastructure</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 13: Cookie Retention Table */}
                      {section.id === "cookie-retention" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Technology Type</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Typical Retention</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Session Cookies</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Session duration</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Authentication Tokens</td>
                                <td className="p-4 text-brand-lime font-bold uppercase text-[9px] tracking-wider bg-brand-lime/5 inline-block rounded px-2 py-0.5 mt-2.5 ml-4">Configurable</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Analytics Cookies</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Up to 12 months</td>
                              </tr>
                              <tr className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Infrastructure Monitoring</td>
                                <td className="p-4 text-brand-lime font-bold uppercase text-[9px] tracking-wider bg-brand-lime/5 inline-block rounded px-2 py-0.5 mt-2.5 ml-4">Configurable</td>
                              </tr>
                              <tr className="hover:bg-zinc-50/50 transition-colors">
                                <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px]">Fraud Intelligence Telemetry</td>
                                <td className="p-4 text-zinc-500 font-inter italic">Governed by retention policies</td>
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

                      {/* Section 16: Browser doc links */}
                      {section.id === "browser-configuration" && (
                        <div className="flex flex-wrap gap-3 pt-3">
                          <a href="https://support.google.com/chrome" target="_blank" rel="noopener noreferrer" className="px-3.5 py-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                            Chrome
                            <ExternalLink className="w-3 h-3 text-zinc-400" />
                          </a>
                          <a href="https://support.apple.com/safari" target="_blank" rel="noopener noreferrer" className="px-3.5 py-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                            Safari
                            <ExternalLink className="w-3 h-3 text-zinc-400" />
                          </a>
                          <a href="https://support.mozilla.org" target="_blank" rel="noopener noreferrer" className="px-3.5 py-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                            Firefox
                            <ExternalLink className="w-3 h-3 text-zinc-400" />
                          </a>
                          <a href="https://support.microsoft.com/edge" target="_blank" rel="noopener noreferrer" className="px-3.5 py-2 bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 rounded-xl text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                            Edge
                            <ExternalLink className="w-3 h-3 text-zinc-400" />
                          </a>
                        </div>
                      )}

                      {/* Section 20 designated contact grid */}
                      {section.id === "contact-information" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Privacy Office</span>
                            <a href="mailto:privacy@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">privacy@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Security Ops</span>
                            <a href="mailto:security@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">security@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Compliance Team</span>
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
                <h3 className="text-base font-bold text-neutral-900">No Cookie Policies Found</h3>
                <p className="text-xs text-zinc-500 font-inter max-w-md mx-auto leading-relaxed">
                  No sections match your search query &ldquo;{searchQuery}&rdquo;. Try queries like &ldquo;essential&rdquo;, &ldquo;AWS&rdquo;, or &ldquo;SSO&rdquo;.
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
              Questions About Cookies, <span className="text-zinc-400">Tracking, or Telemetry?</span>
            </h2>
            <p className="text-zinc-400 text-sm font-inter leading-relaxed max-w-lg italic">
              Contact the DeepSense Privacy, Security, or Governance teams for enterprise privacy reviews, operational telemetry governance inquiries, or compliance assessments.
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
