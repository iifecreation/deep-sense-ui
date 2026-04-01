"use client";

import React from "react";
import Link from "next/link";
import { Globe, Mail, Link as LinkIcon, Share2, Send, Camera, X } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
      ), 
      href: "#",
      name: "GitHub"
    },
  ];

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Overview", href: "/product/overview" },
        { name: "Fraud Detection", href: "/product/fraud-detection" },
        { name: "Risk Scoring", href: "/product/scoring-engine" },
        { name: "Rules Engine", href: "/product/rules-engine" },
        { name: "Case Management", href: "/product/case-management" },
        { name: "Device Intelligence", href: "/product/device-intelligence" },
        { name: "Graph Detection", href: "/product/graph-detection" }
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "Banking", href: "/solutions/banking" },
        { name: "Fintech", href: "/solutions/fintech" },
        { name: "Payments", href: "/solutions/payments" },
        { name: "E-commerce", href: "/solutions/ecommerce" },
        { name: "Account Takeover", href: "/solutions/account-takeover" },
        { name: "Transaction Fraud", href: "/solutions/transaction-fraud" }
      ],
    },
    {
      title: "Developers & Resources",
      links: [
        { name: "API Docs", href: "/resources/docs" },
        { name: "Authentication", href: "/developers/auth" },
        { name: "Webhooks", href: "/platform/webhooks" },
        { name: "SDKs", href: "/developers/sdks", badge: "Soon" },
        { name: "Status Page", href: "/status" },
        { name: "Blog", href: "/resources/blog" },
        { name: "Documentation", href: "/resources/docs" },
        { name: "Guides", href: "/resources/guides" },
        { name: "Case Studies", href: "/resources/case-studies" },
        { name: "Whitepapers", href: "/resources/whitepapers" }
      ],
    },
    {
      title: "Company & Legal",
      links: [
        { name: "About", href: "/company/about" },
        { name: "Contact", href: "/company/contact" },
        { name: "Careers", href: "/company/careers" },
        { name: "Partners", href: "/company/partners" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Security", href: "/security" },
        { name: "Compliance", href: "/compliance" },
        { name: "Data Processing (DPA)", href: "/dpa" }
      ],
    },
  ];

  return (
    <footer className="pt-24 pb-12 px-4 md:px-12 lg:px-24 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col xl:flex-row justify-between gap-16 lg:gap-32">
          {/* Logo & Subscribe */}
          <div className="flex flex-col gap-10 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 2, 1].map((i, idx) => (
                  <div key={idx} className="bg-brand-lime" style={{ height: `${(i * 4) + 4}px`, width: '4px' }} />
                ))}
              </div>
              <span className="text-neutral-900 text-2xl font-bold font-manrope tracking-tight">Deep Sense</span>
            </div>
            
            <p className="text-zinc-600 text-base font-inter leading-relaxed">
              Industrial-grade fraud prevention infrastructure for the future of global finance. Secure your platform with Deep Sense AI.
            </p>

            <div className="flex flex-col gap-4">
              <div className="relative max-w-[320px]">
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="w-full h-14 pl-6 pr-16 bg-zinc-50 rounded-full border border-zinc-200 font-inter focus:outline-none focus:border-indigo-600 transition-all text-sm"
                />
                <button className="absolute right-2 top-2 w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center hover:bg-neutral-800 transition-all shadow-lg active:scale-95">
                  <Send size={18} />
                </button>
              </div>
              <p className="text-zinc-400 text-xs font-inter">
                Trusted by 5,000+ financial institutions globally.
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {footerLinks.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h4 className="text-neutral-900 text-[11px] font-extrabold font-manrope uppercase tracking-widest">{col.title}</h4>
                <div className="flex flex-col gap-3.5">
                  {col.links.map((link, lIdx) => (
                    <Link 
                      key={lIdx} 
                      href={link.href} 
                      className="text-zinc-500 font-inter text-[13px] hover:text-indigo-600 hover:translate-x-1 transition-all flex items-center gap-1.5"
                    >
                      {link.name}
                      {link.badge && (
                        <span className="px-1 py-0.5 bg-zinc-100 text-[8px] font-bold text-zinc-400 rounded uppercase">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span className="text-zinc-500 text-[13px] font-inter">© 2026 Deep Sense</span>
            <span className="hidden md:block text-zinc-200">|</span>
            <span className="text-zinc-400 text-[13px] font-inter italic">“Built for real-time fraud intelligence”</span>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => (
              <Link 
                key={idx} 
                href={social.href} 
                aria-label={social.name}
                className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-zinc-400 hover:text-indigo-600 hover:border-indigo-100 hover:bg-indigo-50/50 hover:scale-110 transition-all"
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
