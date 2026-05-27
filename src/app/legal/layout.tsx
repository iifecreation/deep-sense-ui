"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  ShieldCheck, 
  Search, 
  ChevronRight,
  Download,
  AlertCircle,
  ExternalLink
} from "lucide-react";

const legalLinks = [
  { name: "Terms of Service", href: "/legal/terms", date: "v2.4 • May 2026", desc: "Platform usage rules, liability limits, and governance standards." },
  { name: "Privacy Policy", href: "/legal/privacy-policy", date: "v3.1 • May 2026", desc: "Data gathering, privacy controls, compliance, and user rights." },
  { name: "Cookie Policy", href: "/legal/cookies", date: "v1.2 • May 2026", desc: "Tracking usage, third-party analytics cookies, and preferences." },
  { name: "Acceptable Use Policy", href: "/legal/acceptable-use", date: "v2.0 • May 2026", desc: "Forbidden actions, network abuse, and automated scrapers." },
  { name: "Data Processing Agreement (DPA)", href: "/legal/dpa", date: "v4.0 • May 2026", desc: "GDPR, NDPR, and global data controller-processor agreements." },
  { name: "Security & Commitments", href: "/legal/security-compliance", date: "v2.2 • May 2026", desc: "Zero-trust details, SOC 2 alignment, ISO standards." },
  { name: "AI & Responsible Use Policy", href: "/legal/ai-policy", date: "v1.1 • May 2026", desc: "Ethical reasoning, bias mitigation, explainable AI rules." },
  { name: "Service Level Agreement (SLA)", href: "/legal/sla", date: "v3.5 • May 2026", desc: "Uptime guarantees, credits, support response timelines." },
  { name: "Subprocessors List", href: "/legal/subprocessors", date: "v2.9 • May 2026", desc: "Third-party platform service subprocessors and data hostings." },
  { name: "Regulatory & Compliance", href: "/legal/regulatory-compliance", date: "v1.5 • May 2026", desc: "Central Bank alignment, GRC mandates, and certifications." },
  { name: "Data Retention & Deletion", href: "/legal/data-retention", date: "v1.8 • May 2026", desc: "Storage durations, deletion routines, legal litigation holds." },
  { name: "Law Enforcement Requests", href: "/legal/law-enforcement", date: "v2.1 • May 2026", desc: "Process for government data demands, subpoenas, and warrants." },
  { name: "Vulnerability Disclosure", href: "/legal/vulnerability-disclosure", date: "v1.0 • May 2026", desc: "Bug bounty rules, safe harbor guidelines, reporting steps." },
  { name: "Copyright & IP Policy", href: "/legal/intellectual-property", date: "v2.0 • May 2026", desc: "Patents, brand guidelines, DMCA notices, trademark guidelines." },
  { name: "Procurement & Vendor Terms", href: "/legal/vendor-terms", date: "v1.6 • May 2026", desc: "Terms governing suppliers, vendors, billing, and supply chains." }
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  if (
    pathname === "/legal/terms" || 
    pathname === "/legal/privacy-policy" || 
    pathname === "/legal/cookies" || 
    pathname === "/legal/acceptable-use" ||
    pathname === "/legal/dpa" ||
    pathname === "/legal/security-compliance" ||
    pathname === "/legal/ai-policy" ||
    pathname === "/legal/sla" ||
    pathname === "/legal/subprocessors" ||
    pathname === "/legal/regulatory-compliance" ||
    pathname === "/legal/data-retention" ||
    pathname === "/legal/law-enforcement" ||
    pathname === "/legal/vulnerability-disclosure" ||
    pathname === "/legal/intellectual-property" ||
    pathname === "/legal/vendor-terms"
  ) {
    return (
      <div className="min-h-screen bg-zinc-50 text-neutral-900 font-manrope">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
      </div>
    );
  }

  const [searchQuery, setSearchQuery] = useState("");

  const filteredLinks = legalLinks.filter(link => 
    link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    link.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-zinc-50 text-neutral-900 font-manrope">
      <Navbar />

      <main className="pt-36 pb-24">
        {/* Top Decorative Trust Badge Header */}
        <section className="bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-24 mb-12 border-b border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-lime/10 blur-[130px] rounded-full pointer-events-none" />
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-brand-lime text-[10px] font-extrabold uppercase tracking-widest border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5" />
                Enterprise Compliance & Legal Hub
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold font-manrope tracking-tight leading-none italic uppercase">
                Legal & Trust <span className="text-zinc-400">Frameworks.</span>
              </h1>
              <p className="text-zinc-400 text-sm font-inter max-w-[650px]">
                DeepSense maintains institutional governance, robust user security, transparent data processing, regulatory readiness, and global system compliance controls.
              </p>
            </div>

            <div className="flex gap-4 self-start md:self-center">
              <button 
                onClick={() => window.print()}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full font-bold text-xs hover:bg-white/10 transition-all flex items-center gap-2 text-white"
              >
                <Download className="w-3.5 h-3.5 text-brand-lime" />
                Print / Save PDF
              </button>
            </div>
          </div>
        </section>

        {/* Unified Portal Work Grid */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* 1. Left Legal Sidebar Selection Console */}
            <div className="lg:col-span-4 bg-white border border-zinc-200 rounded-[32px] p-6 shadow-sm sticky top-28 space-y-6">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-neutral-900 font-manrope">Compliance Directory</h3>
                <p className="text-[11px] text-zinc-500 font-inter">Explore our 15 core regulatory, privacy, and operating policies.</p>
              </div>

              {/* Policy Search */}
              <div className="relative">
                <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search frameworks & terms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-bold text-neutral-900 placeholder:text-zinc-400 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all"
                />
              </div>

              {/* Sidebar List Links */}
              <div className="space-y-1.5 max-h-[450px] overflow-y-auto pr-1">
                {filteredLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={idx}
                      href={link.href}
                      className={`flex flex-col gap-1 p-3.5 rounded-2xl border transition-all text-left ${
                        isActive 
                          ? "bg-neutral-900 border-neutral-900 text-white shadow-lg" 
                          : "bg-white border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50/50 text-neutral-900"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-extrabold font-manrope">{link.name}</span>
                        <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-brand-lime" : "text-zinc-400"}`} />
                      </div>
                      <div className="flex justify-between items-center text-[9px]">
                        <span className={isActive ? "text-zinc-400" : "text-zinc-500"}>{link.date}</span>
                        {isActive && (
                          <span className="px-1 py-0.5 bg-brand-lime text-neutral-900 rounded font-extrabold uppercase text-[7px]">Active</span>
                        )}
                      </div>
                    </Link>
                  );
                })}

                {filteredLinks.length === 0 && (
                  <div className="text-center py-8 space-y-2">
                    <AlertCircle className="w-6 h-6 text-zinc-300 mx-auto" />
                    <p className="text-[11px] text-zinc-500">No policies match your search.</p>
                  </div>
                )}
              </div>

              {/* Support footer */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px]">
                <span className="text-zinc-400 font-inter">Need custom terms?</span>
                <Link href="/company/contact" className="text-neutral-900 font-bold hover:underline flex items-center gap-1">
                  Contact Sales
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* 2. Right Actual Document Render Console */}
            <div className="lg:col-span-8 bg-white border border-zinc-200 rounded-[32px] p-8 md:p-14 shadow-sm min-h-[600px] prose prose-zinc max-w-none">
              {children}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
