"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight, Zap, Shield, BarChart2, Cpu, Database, Users, Code, BookOpen, Layers } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  badge?: string;
  featured?: boolean;
}

interface NavGroup {
  title: string;
  items: NavItem[];
}

interface NavMenu {
  title: string;
  groups: NavGroup[];
}

const navConfig: NavMenu[] = [
  {
    title: "Product",
    groups: [
      {
        title: "Overview",
        items: [
          { label: "Core Capabilities", href: "/product/overview", icon: <Zap className="w-4 h-4" /> },
          { label: "How It Works", href: "/product/how-it-works", icon: <Database className="w-4 h-4" /> },
        ]
      },
      {
        title: "Detection Engine",
        items: [
          { label: "Real-Time Fraud Detection", href: "/product/fraud-detection", icon: <Shield className="w-4 h-4" /> },
          { label: "Fraud Scoring Engine", href: "/product/scoring-engine", icon: <BarChart2 className="w-4 h-4" /> },
          { label: "Rules Engine", href: "/product/rules-engine", icon: <Cpu className="w-4 h-4" /> },
        ]
      },
      {
        title: "Intelligence",
        items: [
          { label: "Device Intelligence", href: "/product/device-intelligence", icon: <Layers className="w-4 h-4" /> },
          { label: "Graph & Ring Detection", href: "/product/graph-analysis", icon: <Database className="w-4 h-4" /> },
          { label: "Behavioral Biometrics", href: "/product/behavioral", badge: "Soon" },
        ]
      },
      {
        title: "Operations",
        items: [
          { label: "Case Management", href: "/product/case-management", icon: <BookOpen className="w-4 h-4" /> },
          { label: "AI Investigation Assistant", href: "/product/ai-assistant", featured: true },
        ]
      }
    ]
  },
  {
    title: "Solutions",
    groups: [
      {
        title: "By Industry",
        items: [
          { label: "Banking", href: "/solutions/banking" },
          { label: "Fintech", href: "/solutions/fintech" },
          { label: "Payments", href: "/solutions/payments" },
          { label: "E-commerce", href: "/solutions/ecommerce" },
          { label: "Crypto / Web3", href: "/solutions/crypto" },
        ]
      },
      {
        title: "By Use Case",
        items: [
          { label: "Transaction Fraud", href: "/solutions/transaction-fraud" },
          { label: "Account Takeover", href: "/solutions/account-takeover" },
          { label: "Payment Fraud", href: "/solutions/payment-fraud" },
          { label: "Merchant Fraud", href: "/solutions/merchant-fraud" },
          { label: "AML", href: "/solutions/aml" },
        ]
      }
    ]
  },
  {
    title: "Platform",
    groups: [
      {
        title: "Enterprise Core",
        items: [
          { label: "Architecture", href: "/platform/architecture" },
          { label: "Security & Compliance", href: "/platform/security" },
          { label: "Data & Privacy", href: "/platform/privacy" },
          { label: "Performance & Scalability", href: "/platform/scalability" },
        ]
      },
      {
        title: "Connectivity",
        items: [
          { label: "Integrations (APIs)", href: "/platform/integrations" },
          { label: "Webhooks", href: "/platform/webhooks" },
        ]
      }
    ]
  },
  {
    title: "Developers",
    groups: [
      {
        title: "Quickstart",
        items: [
          { label: "API Overview", href: "/developers/api-overview" },
          { label: "Authentication", href: "/developers/auth" },
          { label: "SDKs", href: "/developers/sdks", badge: "Soon" },
        ]
      },
      {
        title: "APIs",
        items: [
          { label: "Transaction", href: "/developers/ingestion" },
          { label: "Scoring API", href: "/developers/scoring" },
          { label: "Postman", href: "/developers/postman" },
        ]
      }
    ]
  },
  {
    title: "Resources",
    groups: [
      {
        title: "Learn",
        items: [
          { label: "Blog", href: "/resources/blog" },
          { label: "Guides", href: "/resources/guides" },
          { label: "Whitepapers", href: "/resources/whitepapers" },
        ]
      },
      {
        title: "Support",
        items: [
          { label: "Docs", href: "/resources/docs" },
          { label: "Cases", href: "/resources/case-studies", badge: "Soon" },
        ]
      }
    ]
  }
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 px-4 md:px-0">
      <div className="max-w-[1300px] mx-auto bg-neutral-900 rounded-[100px] border border-white/10 px-4 md:px-6 py-2.5 flex justify-between items-center transition-all duration-500 backdrop-blur-md relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex gap-0.5">
             {[1, 2, 3, 2, 1].map((i, idx) => (
               <div 
                 key={idx} 
                 className="bg-brand-lime group-hover:scale-y-110 transition-transform duration-300" 
                 style={{ height: `${(i * 3) + 3}px`, width: '3.5px' }} 
               />
             ))}
          </div>
          <span className="text-white text-lg font-bold font-manrope tracking-tight">Deep Sense</span>
        </Link>
        
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navConfig.map((item) => (
            <div 
              key={item.title}
              className="relative py-1"
              onMouseEnter={() => setActiveMenu(item.title)}
            >
              <button 
                className={`px-4 py-1.5 text-[13px] font-medium font-inter transition-all flex items-center gap-1.5 rounded-full hover:bg-white/5 ${activeMenu === item.title ? "text-brand-lime bg-white/10" : "text-white/70 hover:text-white"}`}
              >
                {item.title}
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === item.title ? "rotate-180 text-brand-lime" : "opacity-40"}`} />
              </button>
            </div>
          ))}
          <Link 
            href="/pricing"
            className="px-4 py-1.5 text-[13px] font-medium font-inter text-white/70 hover:text-brand-lime transition-colors"
          >
            Pricing
          </Link>
          <div 
             className="relative py-1"
             onMouseEnter={() => setActiveMenu("Company")}
          >
            <button className={`px-4 py-1.5 text-[13px] font-medium font-inter transition-all flex items-center gap-1.5 rounded-full hover:bg-white/5 ${activeMenu === "Company" ? "text-brand-lime bg-white/10" : "text-white/70 hover:text-white"}`}>
              Company <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMenu === "Company" ? "rotate-180 text-brand-lime" : "opacity-40"}`} />
            </button>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="text-[13px] font-bold font-manrope text-white/70 hover:text-white transition-colors">
            Log in
          </Link>
          <button className="px-6 py-2.5 bg-brand-lime text-neutral-900 rounded-full text-[13px] font-bold font-manrope hover:bg-opacity-90 transition-all active:scale-95 shadow-lg shadow-brand-lime/10">
            Get Start App
          </button>
        </div>

        {/* Mobile toggle */}
        <button 
          className="lg:hidden p-2 text-white/70"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mega Menu Dropdown (Desktop) - Re-positioned to drop from the pill */}
        {activeMenu && (
          <div 
            className="absolute top-full mt-4 left-0 right-0 bg-white rounded-[32px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hidden lg:block overflow-hidden animate-in fade-in zoom-in-95 duration-300"
            onMouseLeave={() => setActiveMenu(null)}
            ref={menuRef}
          >
            <div className="p-10 flex gap-12">
              <div className="w-1/4 pr-8 border-r border-gray-50 flex flex-col justify-center">
                 <h3 className="text-2xl font-bold font-manrope text-neutral-900 mb-3">{activeMenu}</h3>
                 <p className="text-zinc-500 text-xs leading-relaxed mb-6">Explore enterprise infrastructure tools designed for the future of finance.</p>
                 <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 rounded-full text-[12px] font-bold font-manrope text-white hover:bg-neutral-800 transition-colors group w-fit">
                   Contact Sales <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                 </Link>
              </div>

              <div className="flex-1 grid grid-cols-4 gap-x-8 gap-y-10">
                {(activeMenu === "Company" ? [
                  {
                    title: "Company",
                    groups: [
                      {
                        title: "About",
                        items: [
                          { label: "Our Story", href: "/company/about" },
                          { label: "Mission & Values", href: "/company/mission" },
                          { label: "Contact Us", href: "/company/contact" },
                        ]
                      },
                      {
                        title: "Growth",
                        items: [
                           { label: "Careers", href: "/company/careers", badge: "Soon" },
                           { label: "Partners", href: "/company/partners" },
                        ]
                      }
                    ]
                  }
                ] : navConfig.filter(m => m.title === activeMenu)).map(menu => (
                  menu.groups.map(group => (
                    <div key={group.title} className="flex flex-col gap-5">
                      <span className="text-[11px] font-extrabold font-manrope text-zinc-400 uppercase tracking-widest">{group.title}</span>
                      <ul className="flex flex-col gap-3">
                        {group.items.map(item => (
                          <li key={item.label}>
                            <Link 
                              href={item.href} 
                              className="flex items-center gap-2.5 text-zinc-600 hover:text-indigo-600 text-[13px] font-semibold transition-colors group"
                              onClick={() => setActiveMenu(null)}
                            >
                               {item.icon && <span className="text-zinc-300 group-hover:text-indigo-600 transition-colors">{item.icon}</span>}
                               <div className="flex items-center gap-1.5">
                                 {item.label}
                                 {item.badge && (
                                   <span className="px-1.5 py-0.5 bg-brand-lime/10 text-brand-lime text-[9px] font-bold uppercase rounded">
                                     {item.badge}
                                   </span>
                                 )}
                               </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-4 right-4 bg-neutral-900 rounded-3xl border border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300">
           {navConfig.map(menu => (
             <div key={menu.title} className="flex flex-col gap-3">
                <span className="text-sm font-bold text-brand-lime uppercase tracking-widest">{menu.title}</span>
                <div className="grid grid-cols-2 gap-2">
                  {menu.groups.flatMap(g => g.items).map(item => (
                    <Link key={item.label} href={item.href} className="text-white/60 text-sm font-medium py-1.5 hover:text-white">
                      {item.label}
                    </Link>
                  ))}
                </div>
             </div>
           ))}
           <Link href="/pricing" className="text-lg font-bold text-white">Pricing</Link>
           <button className="w-full py-3.5 bg-brand-lime text-neutral-900 rounded-full font-bold text-sm">
             Get Start App
           </button>
        </div>
      )}
    </nav>
  );
}
