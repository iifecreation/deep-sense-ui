"use client";

import React from "react";
import Link from "next/link";
import { Globe, Mail, Link as LinkIcon, Send, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function Footer() {
  const socialLinks = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
        </svg>
      ), 
      href: "#",
      name: "LinkedIn"
    },
    { 
      icon: (
        <svg width="14" height="14" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
        </svg>
      ), 
      href: "#",
      name: "X (Twitter)"
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
      ), 
      href: "#",
      name: "GitHub"
    },
  ];

  const columns = [
    {
      title: "Product",
      links: [
        { name: "Fraud Detection", href: "/product/fraud-detection" },
        { name: "AML Monitoring", href: "/product/aml-monitoring" },
        { name: "Document Fraud", href: "/product/document-fraud" },
        { name: "ATO Prevention", href: "/product/behavioral-biometrics" },
        { name: "Behavioral Biometrics", href: "/product/behavioral-biometrics" },
        { name: "NFC Fraud", href: "/product/nfc-contactless-fraud" },
        { name: "CNP Fraud", href: "/product/card-not-present-fraud" },
        { name: "APP Scam Detection", href: "/product/app-scam-detection" },
        { name: "Case Management", href: "/product/case-management" }
      ]
    },
    {
      title: "Platform",
      links: [
        { name: "Risk Scoring", href: "/product/scoring-engine" },
        { name: "Graph Intelligence", href: "/product/graph-intelligence" },
        { name: "Rules Engine", href: "/product/rules-engine" },
        { name: "Model Intelligence", href: "/platform/ai-intelligence" },
        { name: "APIs & Webhooks", href: "/platform/webhooks" },
        { name: "Integrations & SIEM", href: "/platform/integrations" },
        { name: "Audit & Governance", href: "/platform/governance" },
        { name: "Platform Architecture", href: "/platform/architecture" }
      ]
    },
    {
      title: "Enterprise Risk",
      links: [
        { name: "GRC", href: "/product/grc" },
        { name: "DLP", href: "/product/dlp" },
        { name: "Continuous Controls", href: "/product/continuous-controls" },
        { name: "Procurement Risk", href: "/product/procurement-risk" },
        { name: "Third-Party Risk", href: "/product/third-party-risk" },
        { name: "Regulatory Reporting", href: "/product/regulatory-reporting" },
        { name: "Compliance Reports", href: "/platform/governance" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Banking", href: "/solutions/banking" },
        { name: "Fintech", href: "/solutions/fintech" },
        { name: "Payments", href: "/solutions/payment-processors" },
        { name: "E-commerce", href: "/solutions/ecommerce-marketplace" },
        { name: "Crypto & Web3", href: "/solutions/crypto-web3" },
        { name: "Telecom Wallets", href: "/solutions/telecom-mobile-money" },
        { name: "Gaming", href: "/solutions/gaming-betting" },
        { name: "Enterprise", href: "/solutions/enterprise-risk-teams" }
      ]
    },
    {
      title: "Developers",
      links: [
        { name: "API Reference", href: "/developers/api-overview" },
        { name: "Authentication", href: "/developers/authentication" },
        { name: "SDKs & Client Libraries", href: "/developers" },
        { name: "Postman Collections", href: "/developers" },
        { name: "Webhooks", href: "/developers/webhooks" },
        { name: "Developer Sandbox", href: "/developers" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/company/about" },
        { name: "Contact", href: "/company/contact" },
        { name: "Pricing", href: "/pricing" },
        { name: "Security", href: "/platform/security" },
        { name: "Privacy Policy", href: "/platform/privacy" },
        { name: "Trust Center", href: "/company/trust" }
      ]
    },
    {
      title: "Legal & Trust",
      links: [
        { name: "Terms of Service", href: "/legal/terms" },
        { name: "Privacy Policy", href: "/legal/privacy-policy" },
        { name: "Cookie Policy", href: "/legal/cookies" },
        { name: "Acceptable Use Policy", href: "/legal/acceptable-use" },
        { name: "Data Processing Agreement (DPA)", href: "/legal/dpa" },
        { name: "Security & Compliance", href: "/legal/security-compliance" },
        { name: "AI & Responsible Use Policy", href: "/legal/ai-policy" },
        { name: "Service Level Agreement (SLA)", href: "/legal/sla" },
        { name: "Subprocessors", href: "/legal/subprocessors" },
        { name: "Regulatory Compliance", href: "/legal/regulatory-compliance" },
        { name: "Data Retention Policy", href: "/legal/data-retention" },
        { name: "Law Enforcement Requests", href: "/legal/law-enforcement" },
        { name: "Vulnerability Disclosure", href: "/legal/vulnerability-disclosure" },
        { name: "Intellectual Property Policy", href: "/legal/intellectual-property" },
        { name: "Vendor Terms", href: "/legal/vendor-terms" },
        { name: "Trust Center", href: "/company/trust" },
        { name: "Compliance Center", href: "/resources/compliance-center" },
        { name: "Responsible AI Center", href: "/platform/privacy" }
      ]
    }
  ];

  return (
    <footer className="pt-24 pb-12 px-4 md:px-12 lg:px-24 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        
        {/* Top Section: Branding, Tagline & Subscribe side-by-side */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-16 border-b border-gray-100">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <div className="flex flex-col gap-2">
              <Logo variant="black" className="h-10" iconClassName="h-8 w-8" nameClassName="h-6" />
              <span className="text-zinc-500 font-inter text-[11px] font-bold tracking-wider">
                Financial Crime & Risk Intelligence Platform
              </span>
            </div>
            
            <p className="text-zinc-600 text-sm font-inter leading-relaxed">
              Financial crime and enterprise risk intelligence infrastructure for modern organizations. Secure your platform with industrial-grade real-time risk orchestration, compliance monitoring, and automated KYC/AML operations.
            </p>
          </div>

          {/* Email Subscription Widget */}
          <div className="flex flex-col gap-3 min-w-[320px] w-full lg:w-auto">
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 font-manrope">Subscribe to Risk Intelligence</span>
            <div className="relative w-full max-w-[320px]">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="w-full h-12 pl-5 pr-14 bg-zinc-50 rounded-full border border-zinc-200 font-inter focus:outline-none focus:border-brand-lime transition-all text-xs"
              />
              <button className="absolute right-1.5 top-1.5 w-9 h-9 bg-neutral-900 text-white rounded-full flex items-center justify-center hover:bg-neutral-800 transition-all shadow-lg active:scale-95">
                <Send size={15} />
              </button>
            </div>
            <p className="text-zinc-400 text-[10px] font-inter">
              Trusted by risk teams globally.
            </p>
          </div>
        </div>

        {/* Bottom Section: 7 Columns sitemap links grid (placed below the branding row) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h4 className="text-neutral-900 text-[10px] font-extrabold font-manrope uppercase tracking-widest">{col.title}</h4>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link, lIdx) => (
                  <Link 
                    key={lIdx} 
                    href={link.href} 
                    className="text-zinc-500 font-inter text-[12px] hover:text-brand-lime hover:translate-x-0.5 transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Legal & Regulatory Trust Center Directory */}
        <div className="pt-16 border-t border-gray-100 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-neutral-900">
            <ShieldCheck className="w-4 h-4 text-neutral-900" />
            <h4 className="text-[10px] font-extrabold font-manrope uppercase tracking-widest">Enterprise Trust & Legal Center</h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-8">
            {[
              { name: "Terms of Service", href: "/legal/terms" },
              { name: "Privacy Policy", href: "/legal/privacy-policy" },
              { name: "Cookie Policy", href: "/legal/cookies" },
              { name: "Acceptable Use Policy", href: "/legal/acceptable-use" },
              { name: "Data Processing (DPA)", href: "/legal/dpa" },
              { name: "Security & Commitments", href: "/legal/security-compliance" },
              { name: "AI & Responsible Use", href: "/legal/ai-policy" },
              { name: "Service Level (SLA)", href: "/legal/sla" },
              { name: "Subprocessors List", href: "/legal/subprocessors" },
              { name: "Regulatory & Compliance", href: "/legal/regulatory-compliance" },
              { name: "Data Retention & Deletion", href: "/legal/data-retention" },
              { name: "Law Enforcement Requests", href: "/legal/law-enforcement" },
              { name: "Vulnerability Disclosure", href: "/legal/vulnerability-disclosure" },
              { name: "Copyright & IP Policy", href: "/legal/intellectual-property" },
              { name: "Procurement & Vendor Terms", href: "/legal/vendor-terms" }
            ].map((link, idx) => (
              <Link 
                key={idx} 
                href={link.href} 
                className="text-zinc-400 font-inter text-[11px] hover:text-brand-lime transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span className="text-zinc-500 text-[12px] font-inter">© 2026 DeepSense</span>
            <span className="hidden md:block text-zinc-200">|</span>
            <span className="text-zinc-400 text-[12px] font-inter italic">“Financial Crime & Risk Intelligence Platform”</span>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => (
              <Link 
                key={idx} 
                href={social.href} 
                aria-label={social.name}
                className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-zinc-400 hover:text-brand-lime hover:border-brand-lime/30 hover:bg-brand-lime/5 hover:scale-110 transition-all"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
