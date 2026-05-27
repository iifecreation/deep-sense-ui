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
  BookmarkCheck
} from "lucide-react";

interface Section {
  id: string;
  title: string;
  paragraphs: string[];
  bulletPoints?: string[];
  subsections?: { title: string; points: string[] }[];
  ctaLink?: { text: string; href: string };
}

const intellectualPropertySections: Section[] = [
  {
    id: "introduction",
    title: "Section 1 — Introduction",
    paragraphs: [
      "DeepSense develops and operates: fraud intelligence systems, AI operational tooling, graph intelligence infrastructure, onboarding intelligence systems, APIs and integrations, analytics frameworks, operational governance tooling, and enterprise reporting systems.",
      "This policy defines: ownership rights, platform licensing, AI output governance, permitted usage, customer content rights, and IP enforcement standards.",
      "This policy applies to: SaaS services, APIs, AI systems, dashboards, operational workflows, documentation, developer tooling, and integrations."
    ]
  },
  {
    id: "ownership-principles",
    title: "Section 2 — Ownership Principles",
    paragraphs: [
      "DeepSense retains ownership of: software code, AI models, operational frameworks, fraud intelligence systems, algorithms, dashboards, visualizations, APIs, trademarks, documentation, and infrastructure architecture.",
      "Customers retain ownership of: customer data, uploaded operational records, onboarding information, transaction telemetry, customer-generated configurations, and investigation records.",
      "No ownership transfers occur unless explicitly stated in a written agreement."
    ]
  },
  {
    id: "deepsense-intellectual-property",
    title: "Section 3 — DeepSense Intellectual Property",
    paragraphs: [
      "DeepSense proprietary assets include: fraud scoring systems, AI reasoning frameworks, graph intelligence models, onboarding trust algorithms, operational orchestration systems, workflow automation logic, infrastructure tooling, reporting frameworks, visual design systems, and platform architecture.",
      "These assets are protected by: copyright law, trademark law, trade secret protections, contractual restrictions, and software licensing rights."
    ]
  },
  {
    id: "customer-data-ownership",
    title: "Section 4 — Customer Data Ownership",
    paragraphs: [
      "Customers retain ownership of: fraud investigation records, operational telemetry, onboarding data, governance workflows, transaction records, uploaded documents, reporting outputs, and organizational configurations.",
      "DeepSense processes customer data solely: to provide services, maintain operational integrity, improve infrastructure reliability, support governance workflows, and comply with legal obligations.",
      "DeepSense does not sell customer operational intelligence."
    ]
  },
  {
    id: "ai-generated-outputs",
    title: "Section 5 — AI-Generated Outputs",
    paragraphs: [
      "DeepSense AI systems may generate: fraud recommendations, anomaly summaries, graph intelligence insights, operational prioritization, governance analytics, workflow recommendations, and executive summaries.",
      "Customers may use AI-generated outputs produced within their authorized environment for internal operational purposes.",
      "DeepSense retains ownership of: underlying AI systems, reasoning infrastructure, fraud intelligence frameworks, model architectures, and operational orchestration engines.",
      "AI Governance Notes: AI outputs may be probabilistic, require human oversight, should not replace legal or compliance review, and remain subject to governance controls."
    ]
  },
  {
    id: "licensing-rights",
    title: "Section 6 — Licensing Rights",
    paragraphs: [
      "DeepSense grants customers a: limited, non-exclusive, non-transferable, revocable license to use the platform during the applicable subscription term.",
      "Customers may: access authorized services, configure operational workflows, use APIs within limits, generate operational reports, and use AI-assisted tooling.",
      "Customers may not: resell unauthorized access, reverse engineer systems, copy proprietary frameworks, distribute platform code, or bypass licensing controls."
    ]
  },
  {
    id: "acceptable-usage",
    title: "Section 7 — Acceptable Usage",
    paragraphs: [
      "Users may not: reproduce proprietary systems, scrape protected interfaces, clone platform workflows, extract model logic, misuse branding, redistribute documentation, or exploit proprietary analytics.",
      "Unauthorized usage may result in: suspension, legal enforcement, access termination, and contractual remedies."
    ]
  },
  {
    id: "trademark-usage",
    title: "Section 8 — Trademark Usage",
    paragraphs: [
      "DeepSense trademarks, logos, trade names, and branding elements may not be used without prior written authorization.",
      "Prohibited uses include: misleading endorsements, impersonation, unauthorized marketing, deceptive branding, and derivative brand confusion.",
      "Approved usage may require: brand guidelines compliance, legal approval, and partnership agreements."
    ]
  },
  {
    id: "api-developer-rights",
    title: "Section 9 — API & Developer Rights",
    paragraphs: [
      "DeepSense may provide: APIs, SDKs, webhooks, developer documentation, and integration tooling.",
      "Developers may use these tools solely: within authorized environments, under applicable agreements, and according to rate limits and governance policies.",
      "Developers may not: abuse APIs, circumvent rate limits, expose credentials, misuse operational telemetry, or replicate proprietary services."
    ]
  },
  {
    id: "open-source-components",
    title: "Section 10 — Open Source Components",
    paragraphs: [
      "Certain DeepSense services may incorporate open-source components governed by their respective licenses.",
      "DeepSense complies with applicable open-source obligations relating to: attribution, licensing notices, and component governance.",
      "Open-source components remain subject to: their original licenses and third-party ownership rights."
    ]
  },
  {
    id: "feedback-suggestions",
    title: "Section 11 — Feedback & Suggestions",
    paragraphs: [
      "Customers and users may voluntarily provide: feedback, enhancement ideas, feature requests, operational suggestions, and AI improvement recommendations.",
      "Unless otherwise agreed: DeepSense may use feedback without restriction, no compensation is required, and feedback does not transfer ownership of DeepSense systems.",
      "Feedback may help improve: AI systems, operational workflows, governance tooling, fraud intelligence models, and infrastructure reliability."
    ]
  },
  {
    id: "copyright-complaints",
    title: "Section 12 — Copyright Complaints",
    paragraphs: [
      "DeepSense respects intellectual property rights and may respond to valid infringement notices.",
      "Complaints should include: identification of protected works, description of alleged infringement, sufficient contact information, legal authority statements, and supporting evidence.",
      "Reporting Contact: copyright@deepsense.ai."
    ]
  },
  {
    id: "enforcement-violations",
    title: "Section 13 — Enforcement & Violations",
    paragraphs: [
      "DeepSense may investigate: unauthorized copying, API abuse, IP infringement, trademark misuse, reverse engineering, operational exploitation, and AI misuse.",
      "Violations may result in: account suspension, access restrictions, legal escalation, contractual enforcement, and operational isolation."
    ]
  },
  {
    id: "third-party-rights",
    title: "Section 14 — Third-Party Rights",
    paragraphs: [
      "Customers remain responsible for ensuring they possess rights to: uploaded content, integrated systems, operational data, third-party software, and external documentation.",
      "DeepSense does not grant rights to third-party assets unless explicitly stated."
    ]
  },
  {
    id: "customer-responsibilities",
    title: "Section 15 — Customer Responsibilities",
    paragraphs: [
      "Customers are responsible for: lawful platform usage, protecting credentials, securing operational environments, governing access permissions, respecting IP restrictions, and complying with applicable laws.",
      "Organizations should: monitor developer access, govern integrations, maintain internal policies, and review AI-generated outputs responsibly."
    ]
  },
  {
    id: "frequently-asked-questions",
    title: "Section 16 — Frequently Asked Questions",
    paragraphs: [
      "Review common inquiries regarding data ownership, AI output licensing, API protections, and feedback handling:"
    ]
  },
  {
    id: "policy-updates",
    title: "Section 17 — Policy Updates",
    paragraphs: [
      "DeepSense may update this policy periodically to reflect: legal developments, AI governance evolution, infrastructure improvements, platform enhancements, or operational changes.",
      "Material changes may be communicated through: enterprise notifications, governance advisories, procurement communications, or trust center updates."
    ]
  },
  {
    id: "contact-information",
    title: "Section 18 — Contact Information",
    paragraphs: [
      "For formal trademark licensing, copyright reporting, API governance inquiries, or platform ownership clarification, contact our designated offices:"
    ]
  }
];

export default function IntellectualPropertyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    intellectualPropertySections.forEach(s => {
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
    intellectualPropertySections.forEach(s => {
      updated[s.id] = true;
    });
    setExpandedSections(updated);
  };

  const collapseAll = () => {
    const updated: Record<string, boolean> = {};
    intellectualPropertySections.forEach(s => {
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

  const filteredSections = intellectualPropertySections.filter(section => {
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
            INTELLECTUAL PROPERTY & PLATFORM OWNERSHIP
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[1.0] text-white">
            Intellectual Property <span className="text-zinc-400">Policy.</span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg font-inter max-w-[800px] leading-relaxed italic">
            This policy explains ownership, licensing, usage rights, AI-generated operational outputs, platform protections, customer content rights, trademark usage, and intellectual property governance relating to the DeepSense platform, AI systems, fraud intelligence infrastructure, APIs, analytics systems, and enterprise services.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-2.5 pt-4">
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Enterprise Licensing</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-brand-lime font-extrabold font-manrope uppercase text-[8px] tracking-wider">AI Governance</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Platform Protection</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Operational Transparency</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Global IP Enforcement</span>
            <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-extrabold font-manrope uppercase text-[8px] tracking-wider">Secure Innovation</span>
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
              <p className="text-xs font-bold text-white">Legal & Governance</p>
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
              <h3 className="text-base font-bold text-neutral-900">IP Governance Hub</h3>
              <p className="text-[11px] text-zinc-500 font-inter">Audit platform licensing, trademark rules, and AI output ownership.</p>
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
                placeholder="Search IP terms (e.g. licensing, trademark)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 focus:outline-none focus:border-neutral-900 transition-all"
              />
            </div>

            {/* Anchored Sidebar Links */}
            <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin pt-2">
              {intellectualPropertySections.map((section, idx) => (
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
              <span className="text-zinc-400 font-inter">View Acceptable Use?</span>
              <Link href="/legal/acceptable-use" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                AUP Policy
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

                      {/* Section 3: Protected Asset Categories Table */}
                      {section.id === "deepsense-intellectual-property" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Asset Type</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Examples</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { type: "AI Systems", ex: "Fraud intelligence models, graph reasoning architectures" },
                                { type: "Software", ex: "APIs, orchestration engines, workflow automation microservices" },
                                { type: "Branding", ex: "Logos, trademarks, trade dress, visual design tokens" },
                                { type: "Analytics", ex: "Graph analysis systems, entity reputation scoring engines" },
                                { type: "Documentation", ex: "Architecture guides, API specifications, runbooks" },
                                { type: "Infrastructure", ex: "Deployment frameworks, terraform templates, secure-by-design clusters" }
                              ].map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                                  <td className="p-4 font-extrabold text-neutral-900 font-mono text-[11px] flex items-center gap-2">
                                    <BookmarkCheck className="w-3.5 h-3.5 text-brand-lime" />
                                    {row.type}
                                  </td>
                                  <td className="p-4 text-zinc-500 font-inter italic">{row.ex}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Section 8: Trademark Examples Table */}
                      {section.id === "trademark-usage" && (
                        <div className="overflow-x-auto border border-zinc-200 rounded-2xl mt-6">
                          <table className="w-full text-left border-collapse text-xs">
                            <thead>
                              <tr className="bg-zinc-50 border-b border-zinc-200">
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight">Protected Mark</th>
                                <th className="p-4 font-bold text-neutral-900 uppercase tracking-tight font-mono">Type</th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                { mark: "DeepSense®", type: "Registered Trademark" },
                                { mark: "DeepSense AI™", type: "Brand Identifier" },
                                { mark: "DeepGraph™", type: "Product Branding" }
                              ].map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-zinc-100 hover:bg-zinc-50/50 transition-colors last:border-b-0">
                                  <td className="p-4 font-extrabold text-neutral-900 font-mono text-xs">{row.mark}</td>
                                  <td className="p-4 text-zinc-500 font-inter italic">{row.type}</td>
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

                      {/* Section 16: Frequently Asked Questions */}
                      {section.id === "frequently-asked-questions" && (
                        <div className="space-y-4 pt-2 not-italic">
                          {[
                            { q: "Who owns customer operational data?", a: "Customers retain ownership of their operational and investigative data." },
                            { q: "Who owns DeepSense AI systems?", a: "DeepSense retains ownership of its AI models, orchestration systems, and fraud intelligence infrastructure." },
                            { q: "Can customers use AI-generated outputs?", a: "Yes, customers may use authorized outputs generated within their environment for operational purposes." },
                            { q: "Can DeepSense use customer feedback?", a: "Yes, unless otherwise agreed, feedback may be used to improve services and infrastructure." },
                            { q: "Are APIs protected intellectual property?", a: "Yes. APIs, SDKs, developer tooling, and operational frameworks remain proprietary unless explicitly licensed otherwise." }
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

                      {/* Section 18 designated contact grid */}
                      {section.id === "contact-information" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Legal Team</span>
                            <a href="mailto:legal@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">legal@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">IP Office</span>
                            <a href="mailto:ip@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">ip@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Trademarks</span>
                            <a href="mailto:trademarks@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">trademarks@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Copyright</span>
                            <a href="mailto:copyright@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">copyright@deepsense.ai</a>
                          </div>
                          <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl space-y-1">
                            <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Governance</span>
                            <a href="mailto:governance@deepsense.ai" className="text-xs font-bold text-neutral-900 block hover:underline">governance@deepsense.ai</a>
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
                <h3 className="text-base font-bold text-neutral-900">No IP Records Found</h3>
                <p className="text-xs text-zinc-500 font-inter max-w-md mx-auto leading-relaxed">
                  No sections match your search query &ldquo;{searchQuery}&rdquo;. Try queries like &ldquo;licensing&rdquo;, &ldquo;trademark&rdquo;, or &ldquo;AI outputs&rdquo;.
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
              Need Licensing, Trademark, <span className="text-zinc-400">or IP Governance Documentation?</span>
            </h2>
            <p className="text-zinc-400 text-sm font-inter leading-relaxed max-w-lg italic">
              Contact DeepSense Legal, Governance, or Intellectual Property teams for licensing reviews, procurement discussions, API governance inquiries, AI ownership clarification, or trademark usage approvals.
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
              Download IP Policy PDF
            </button>
            <Link 
              href="/company/trust"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              Explore Trust Center
            </Link>
            <Link 
              href="/legal/acceptable-use"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold text-xs transition-all text-center flex items-center justify-center gap-2 text-white uppercase tracking-wider"
            >
              View Acceptable Use Policy
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
