"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Zap, 
  Shield, 
  BarChart2, 
  Cpu, 
  Database, 
  Users, 
  Code, 
  BookOpen, 
  Layers, 
  Globe, 
  BadgeCheck, 
  LayoutDashboard, 
  History, 
  Lock, 
  AlertTriangle,
  Terminal,
  FileText,
  Activity,
  Settings,
  HelpCircle,
  Play,
  CreditCard,
  Smartphone,
  Fingerprint,
  UserCheck,
  Eye,
  Briefcase,
  Building2,
  Coins,
  ShoppingBag,
  Wallet,
  FileSpreadsheet,
  Clock,
  TrendingDown,
  Bell,
  FileCheck,
  Network,
  Workflow,
  Scale
} from "lucide-react";
import { Logo } from "@/components/ui/logo";

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
  href?: string;
  groups?: NavGroup[];
}

const navConfig: NavMenu[] = [
  {
    title: "Product",
    groups: [
      {
        title: "Fraud Decisioning",
        items: [
          { label: "Real-Time Fraud Detection", href: "/product/fraud-detection", icon: <Shield className="w-3.5 h-3.5" /> },
          { label: "Risk Scoring Engine", href: "/product/scoring-engine", icon: <BarChart2 className="w-3.5 h-3.5" /> },
          { label: "Rules Engine", href: "/product/rules-engine", icon: <Cpu className="w-3.5 h-3.5" /> },
          { label: "Graph Intelligence", href: "/product/graph-intelligence", icon: <Database className="w-3.5 h-3.5" /> },
          { label: "Case Management", href: "/product/case-management", icon: <AlertTriangle className="w-3.5 h-3.5" /> }
        ]
      },
      {
        title: "Identity & Document Intelligence",
        items: [
          { label: "Document Fraud Detection", href: "/product/document-fraud", icon: <BadgeCheck className="w-3.5 h-3.5" /> },
          { label: "KYC Verification", href: "/product/kyc-verification", icon: <UserCheck className="w-3.5 h-3.5" /> },
          { label: "OCR & MRZ Validation", href: "/product/ocr-mrz-validation", icon: <Terminal className="w-3.5 h-3.5" /> },
          { label: "Face Match & Liveness", href: "/product/face-match-liveness", icon: <UserCheck className="w-3.5 h-3.5" /> },
          { label: "Deepfake Detection", href: "/product/deepfake-detection", icon: <Eye className="w-3.5 h-3.5" /> },
          { label: "Synthetic Identity Detection", href: "/product/synthetic-identity", icon: <UserCheck className="w-3.5 h-3.5" /> },
          { label: "Device Fingerprinting", href: "/product/device-fingerprinting", icon: <Smartphone className="w-3.5 h-3.5" /> },
          { label: "Behavioral Biometrics", href: "/product/behavioral-biometrics", icon: <Fingerprint className="w-3.5 h-3.5" /> }
        ]
      },
      {
        title: "Payment Fraud",
        items: [
          { label: "APP Scam Detection", href: "/product/app-scam-detection", icon: <AlertTriangle className="w-3.5 h-3.5" /> },
          { label: "Card-Not-Present Fraud", href: "/product/card-not-present-fraud", icon: <CreditCard className="w-3.5 h-3.5" /> },
          { label: "NFC / Contactless Fraud", href: "/product/nfc-contactless-fraud", icon: <Smartphone className="w-3.5 h-3.5" /> },
          { label: "Bonus & Promo Abuse", href: "/product/bonus-abuse", icon: <TrendingDown className="w-3.5 h-3.5" /> },
          { label: "Friendly Fraud / Chargebacks", href: "/product/friendly-fraud", icon: <Shield className="w-3.5 h-3.5" /> }
        ]
      },
      {
        title: "AML & Compliance",
        items: [
          { label: "AML Transaction Monitoring", href: "/product/aml-monitoring", icon: <Activity className="w-3.5 h-3.5" /> },
          { label: "Sanctions Screening", href: "/product/sanctions-screening", icon: <Globe className="w-3.5 h-3.5" /> },
          { label: "PEP Screening", href: "/product/pep-screening", icon: <Users className="w-3.5 h-3.5" /> },
          { label: "Adverse Media Screening", href: "/product/adverse-media", icon: <BookOpen className="w-3.5 h-3.5" /> },
          { label: "Customer Risk Profiling", href: "/product/risk-profiling", icon: <UserCheck className="w-3.5 h-3.5" /> },
          { label: "Regulatory Reporting", href: "/product/regulatory-reporting", icon: <FileSpreadsheet className="w-3.5 h-3.5" /> }
        ]
      },
      {
        title: "Enterprise Risk",
        items: [
          { label: "Continuous Controls Monitoring", href: "/product/continuous-controls", icon: <Clock className="w-3.5 h-3.5" /> },
          { label: "GRC Management", href: "/product/grc", icon: <Settings className="w-3.5 h-3.5" /> },
          { label: "DLP Monitoring", href: "/product/dlp", icon: <Eye className="w-3.5 h-3.5" /> },
          { label: "Procurement & Vendor Risk", href: "/product/procurement-risk", icon: <Briefcase className="w-3.5 h-3.5" /> },
          { label: "Third-Party Risk", href: "/product/third-party-risk", icon: <Users className="w-3.5 h-3.5" /> },
          { label: "UEBA", href: "/product/ueba", icon: <Cpu className="w-3.5 h-3.5" /> }
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
          { label: "Banks", href: "/solutions/banking", icon: <Building2 className="w-3.5 h-3.5" /> },
          { label: "Fintechs", href: "/solutions/fintech", icon: <Coins className="w-3.5 h-3.5" /> },
          { label: "Payment Processors", href: "/solutions/payment-processors", icon: <Wallet className="w-3.5 h-3.5" /> },
          { label: "Crypto & Web3", href: "/solutions/crypto-web3", icon: <Globe className="w-3.5 h-3.5" /> },
          { label: "E-commerce", href: "/solutions/ecommerce-marketplace", icon: <ShoppingBag className="w-3.5 h-3.5" /> },
          { label: "Telecom Wallets", href: "/solutions/telecom-mobile-money", icon: <Smartphone className="w-3.5 h-3.5" /> },
          { label: "Gaming & Betting", href: "/solutions/gaming-betting", icon: <Activity className="w-3.5 h-3.5" /> },
          { label: "Insurance", href: "/solutions/insurance", icon: <Shield className="w-3.5 h-3.5" /> },
          { label: "Enterprise Risk Teams", href: "/solutions/enterprise-risk-teams", icon: <Settings className="w-3.5 h-3.5" /> }
        ]
      },
      {
        title: "Specialty Sectors",
        items: [
          { label: "Enterprise SaaS", href: "/solutions/enterprise-saas-platforms", icon: <Layers className="w-3.5 h-3.5" /> },
          { label: "Retail & Consumer", href: "/solutions/retail-consumer-platforms", icon: <ShoppingBag className="w-3.5 h-3.5" /> },
          { label: "Hospitality & Travel", href: "/solutions/hospitality-travel-booking", icon: <Globe className="w-3.5 h-3.5" /> },
          { label: "Education & EdTech", href: "/solutions/education-edtech", icon: <BookOpen className="w-3.5 h-3.5" /> },
          { label: "Logistics & Chain", href: "/solutions/logistics-supply-chain", icon: <Clock className="w-3.5 h-3.5" /> },
          { label: "Industrial & Factory", href: "/solutions/manufacturing-industrial", icon: <Building2 className="w-3.5 h-3.5" /> },
          { label: "Energy & Utilities", href: "/solutions/energy-utilities", icon: <Zap className="w-3.5 h-3.5" /> },
          { label: "Gaming & Entertainment", href: "/solutions/gaming-digital-entertainment", icon: <Activity className="w-3.5 h-3.5" /> },
          { label: "Nonprofits & NGOs", href: "/solutions/nonprofits-ngos", icon: <Users className="w-3.5 h-3.5" /> },
          { label: "Telecommunications", href: "/solutions/telecommunications", icon: <Smartphone className="w-3.5 h-3.5" /> },
          { label: "Public Sector", href: "/solutions/government-public-sector", icon: <Building2 className="w-3.5 h-3.5" /> },
          { label: "Healthcare", href: "/solutions/healthcare", icon: <Activity className="w-3.5 h-3.5" /> }
        ]
      },
      {
        title: "Use Case & Compliance",
        items: [
          { label: "Stop Transaction Fraud", href: "/solutions/transaction-fraud", icon: <Shield className="w-3.5 h-3.5" /> },
          { label: "Prevent Account Takeover", href: "/solutions/account-takeover", icon: <Lock className="w-3.5 h-3.5" /> },
          { label: "Detect APP Scams", href: "/solutions/detect-app-scams", icon: <AlertTriangle className="w-3.5 h-3.5" /> },
          { label: "Detect Document Fraud", href: "/solutions/detect-document-fraud", icon: <BadgeCheck className="w-3.5 h-3.5" /> },
          { label: "Verify Identity", href: "/solutions/verify-customer-identity", icon: <UserCheck className="w-3.5 h-3.5" /> },
          { label: "Stop Synthetic Identity", href: "/solutions/stop-synthetic-identity-fraud", icon: <UserCheck className="w-3.5 h-3.5" /> },
          { label: "Monitor AML Risk", href: "/solutions/aml", icon: <Activity className="w-3.5 h-3.5" /> },
          { label: "Sanctions Screening", href: "/solutions/sanctions-screening", icon: <Globe className="w-3.5 h-3.5" /> },
          { label: "STR Reporting", href: "/solutions/str-reporting", icon: <FileSpreadsheet className="w-3.5 h-3.5" /> },
          { label: "CBN Compliance", href: "/solutions/cbn-compliance", icon: <FileCheck className="w-3.5 h-3.5" /> },
          { label: "PEP Monitoring", href: "/solutions/pep-monitoring", icon: <Users className="w-3.5 h-3.5" /> },
          { label: "Monitor Vendor Risk", href: "/solutions/monitor-vendor-risk", icon: <Briefcase className="w-3.5 h-3.5" /> },
          { label: "Automate Controls", href: "/solutions/automate-compliance-controls", icon: <Settings className="w-3.5 h-3.5" /> }
        ]
      }
    ]
  },
  {
    title: "Platform",
    groups: [
      {
        title: "Core & AI Engine",
        items: [
          { label: "Platform Capabilities", href: "/platform/capabilities", icon: <Layers className="w-3.5 h-3.5" /> },
          { label: "AI Copilot Platform", href: "/platform/ai-copilot", icon: <Cpu className="w-3.5 h-3.5" /> },
          { label: "AI Intelligence Core", href: "/platform/ai-intelligence", icon: <Cpu className="w-3.5 h-3.5" /> },
          { label: "Graph Intelligence", href: "/platform/graph-intelligence", icon: <Network className="w-3.5 h-3.5" /> },
          { label: "Behavioral Analytics", href: "/platform/behavioral-analytics", icon: <Fingerprint className="w-3.5 h-3.5" /> }
        ]
      },
      {
        title: "Infrastructure & Scale",
        items: [
          { label: "Platform Architecture", href: "/platform/architecture", icon: <Layers className="w-3.5 h-3.5" /> },
          { label: "Global Scalability", href: "/platform/scalability", icon: <Globe className="w-3.5 h-3.5" /> },
          { label: "APIs & Webhooks", href: "/platform/webhooks", icon: <Workflow className="w-3.5 h-3.5" /> },
          { label: "Platform Integrations", href: "/platform/integrations", icon: <Network className="w-3.5 h-3.5" /> },
          { label: "Device Intelligence", href: "/platform/device-intelligence", icon: <Smartphone className="w-3.5 h-3.5" /> }
        ]
      },
      {
        title: "Real-Time Operations",
        items: [
          { label: "Transaction Monitoring", href: "/platform/transaction-monitoring", icon: <Activity className="w-3.5 h-3.5" /> },
          { label: "Identity Intelligence", href: "/platform/identity-intelligence", icon: <UserCheck className="w-3.5 h-3.5" /> },
          { label: "Workflow Automation", href: "/platform/workflow-automation", icon: <Workflow className="w-3.5 h-3.5" /> },
          { label: "Case Management", href: "/platform/case-management", icon: <Briefcase className="w-3.5 h-3.5" /> },
          { label: "Admin Console & Org", href: "/platform/admin-console", icon: <Settings className="w-3.5 h-3.5" /> }
        ]
      },
      {
        title: "Governance & Security",
        items: [
          { label: "Security Operations", href: "/platform/security", icon: <Shield className="w-3.5 h-3.5" /> },
          { label: "Privacy & Data Ethics", href: "/platform/privacy", icon: <Lock className="w-3.5 h-3.5" /> },
          { label: "Enterprise Governance", href: "/platform/governance", icon: <Scale className="w-3.5 h-3.5" /> },
          { label: "Governance & Compliance", href: "/platform/governance-compliance", icon: <Scale className="w-3.5 h-3.5" /> },
          { label: "Regulatory Reporting", href: "/platform/reporting", icon: <FileSpreadsheet className="w-3.5 h-3.5" /> }
        ]
      }
    ]
  },
  {
    title: "Developers",
    groups: [
      {
        title: "API Overview",
        items: [
          { label: "Developer Hub Home", href: "/developers", icon: <Terminal className="w-3.5 h-3.5" /> },
          { label: "API Reference", href: "/developers/api-overview", icon: <BookOpen className="w-3.5 h-3.5" /> },
          { label: "Authentication", href: "/developers/authentication", icon: <Lock className="w-3.5 h-3.5" /> },
          { label: "Quickstart Guide", href: "/developers/quickstart", icon: <Zap className="w-3.5 h-3.5" /> },
          { label: "Webhook Events", href: "/developers/webhooks", icon: <Bell className="w-3.5 h-3.5" /> }
        ]
      },
      {
        title: "Developer Tools",
        items: [
          { label: "Go & Node SDKs", href: "/developers", icon: <Code className="w-3.5 h-3.5" /> },
          { label: "Postman Collection", href: "/developers", icon: <Terminal className="w-3.5 h-3.5" /> },
          { label: "Developer Sandbox", href: "/developers", icon: <Play className="w-3.5 h-3.5" /> }
        ]
      }
    ]
  },
  {
    title: "Resources",
    groups: [
      {
        title: "Explore Resources",
        items: [
          { label: "Blog", href: "/resources/blog", icon: <BookOpen className="w-3.5 h-3.5" /> },
          { label: "Guides", href: "/resources/guides", icon: <FileText className="w-3.5 h-3.5" /> },
          { label: "Whitepapers", href: "/resources/whitepapers", icon: <FileText className="w-3.5 h-3.5" /> },
          { label: "Compliance Center", href: "/resources/compliance-center", icon: <BadgeCheck className="w-3.5 h-3.5" /> },
          { label: "CBN Compliance Guide", href: "/resources/cbn-guide", icon: <Shield className="w-3.5 h-3.5" /> }
        ]
      },
      {
        title: "Guides & Reference",
        items: [
          { label: "How It Works", href: "/resources/how-it-works", icon: <Activity className="w-3.5 h-3.5" /> },
          { label: "AML Readiness Checklist", href: "/resources/aml-checklist", icon: <FileCheck className="w-3.5 h-3.5" /> },
          { label: "Regulatory Reporting Guide", href: "/resources/reporting-guide", icon: <FileSpreadsheet className="w-3.5 h-3.5" /> },
          { label: "Documentation", href: "/resources/documentation", icon: <BookOpen className="w-3.5 h-3.5" /> },
          { label: "Contact Support Office", href: "/company/contact", icon: <HelpCircle className="w-3.5 h-3.5" /> }
        ]
      }
    ]
  },
  {
    title: "Pricing",
    href: "/pricing"
  },
  {
    title: "Company",
    groups: [
      {
        title: "About Us",
        items: [
          { label: "Our Story", href: "/company/about", icon: <Users className="w-3.5 h-3.5" /> },
          { label: "Mission & Values", href: "/company/mission", icon: <BadgeCheck className="w-3.5 h-3.5" /> },
          { label: "Contact Us", href: "/company/contact", icon: <HelpCircle className="w-3.5 h-3.5" /> }
        ]
      },
      {
        title: "Growth & Trust",
        items: [
          { label: "Careers", href: "/company/careers", badge: "Soon", icon: <Activity className="w-3.5 h-3.5" /> },
          { label: "Partners", href: "/company/partners", icon: <Layers className="w-3.5 h-3.5" /> },
          { label: "Trust Center", href: "/company/trust", icon: <Shield className="w-3.5 h-3.5" /> }
        ]
      }
    ]
  }
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);
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

  const getGridCols = (menuTitle: string) => {
    switch (menuTitle) {
      case "Product":
        return "grid-cols-5 gap-x-6 w-full";
      case "Solutions":
        return "grid-cols-3 gap-x-12 w-full max-w-[1200px] mx-auto";
      case "Platform":
        return "grid-cols-4 gap-x-8 w-full max-w-[1200px] mx-auto";
      case "Developers":
        return "grid-cols-2 gap-x-16 max-w-[900px] mx-auto";
      case "Resources":
        return "grid-cols-2 gap-x-16 max-w-[900px] mx-auto";
      case "Company":
        return "grid-cols-2 gap-x-16 max-w-[700px] mx-auto";
      default:
        return "grid-cols-4 gap-x-8 w-full";
    }
  };

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 px-4 md:px-0">
      <div className="max-w-[1300px] mx-auto bg-neutral-900 rounded-[100px] border border-white/10 px-4 md:px-6 py-2.5 flex justify-between items-center transition-all duration-500 backdrop-blur-md relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onMouseEnter={() => setActiveMenu(null)}>
          <Logo variant="white" className="h-8" iconClassName="h-7 w-7" nameClassName="h-5" />
        </Link>
        
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navConfig.map((item) => {
            if (item.href) {
              return (
                <Link 
                  key={item.title}
                  href={item.href}
                  className="px-4 py-1.5 text-[13px] font-medium font-inter text-white/70 hover:text-brand-lime transition-colors rounded-full hover:bg-white/5"
                  onMouseEnter={() => setActiveMenu(null)}
                >
                  {item.title}
                </Link>
              );
            }

            return (
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
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <Link href="/login" className="text-[13px] font-bold font-manrope text-white/70 hover:text-white transition-colors" onMouseEnter={() => setActiveMenu(null)}>
            Log in
          </Link>
          <Link href="/request-demo" className="text-[13px] font-bold font-manrope text-white/70 hover:text-white transition-colors" onMouseEnter={() => setActiveMenu(null)}>
            Request Demo
          </Link>
          <Link href="/dashboard" className="px-5 py-2.5 bg-brand-lime text-neutral-900 rounded-full text-[13px] font-bold font-manrope hover:bg-brand-lime/90 transition-all active:scale-95 shadow-lg shadow-brand-lime/10" onMouseEnter={() => setActiveMenu(null)}>
            Start App
          </Link>
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
            <div className="p-10">
              {/* Dynamic Col Grid */}
              <div className={`grid ${getGridCols(activeMenu)}`}>
                {navConfig.find(m => m.title === activeMenu)?.groups?.map(group => (
                  <div key={group.title} className="flex flex-col gap-4">
                    <span className="text-[11px] font-extrabold font-manrope text-zinc-400 uppercase tracking-widest">{group.title}</span>
                    <ul className="flex flex-col gap-2.5">
                      {group.items.map(item => (
                        <li key={item.label}>
                          <Link 
                            href={item.href} 
                            className={`flex items-start gap-2.5 p-1.5 rounded-xl transition-all group ${item.featured ? "bg-brand-lime/10 border border-brand-lime/20 text-neutral-900" : "text-zinc-600 hover:text-neutral-900 hover:bg-brand-lime/5"}`}
                            onClick={() => setActiveMenu(null)}
                          >
                             {item.icon && <span className={`mt-0.5 ${item.featured ? "text-brand-lime" : "text-zinc-400 group-hover:text-brand-lime"} transition-colors`}>{item.icon}</span>}
                             <div className="flex flex-col gap-0.5">
                               <div className="flex items-center gap-1.5">
                                 <span className="text-[12.5px] font-semibold leading-tight">{item.label}</span>
                                 {item.badge && (
                                   <span className="px-1.5 py-0.5 bg-brand-lime/10 text-brand-lime text-[9px] font-bold uppercase rounded">
                                     {item.badge}
                                   </span>
                                 )}
                               </div>
                             </div>
                             {item.featured && <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-4 right-4 bg-neutral-900 rounded-3xl border border-white/10 p-6 flex flex-col gap-4 max-h-[75vh] overflow-y-auto animate-in slide-in-from-top-4 duration-300 z-50">
           {navConfig.map(menu => {
             if (menu.href) {
               return (
                 <Link 
                   key={menu.title} 
                   href={menu.href} 
                   className="text-white text-base font-bold py-2 border-b border-white/5 hover:text-brand-lime transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   {menu.title}
                 </Link>
               );
             }

             const isOpen = activeMobileSection === menu.title;

             return (
               <div key={menu.title} className="flex flex-col border-b border-white/5 pb-2">
                 <button 
                   onClick={() => setActiveMobileSection(isOpen ? null : menu.title)}
                   className="flex justify-between items-center text-white text-base font-bold py-2 hover:text-brand-lime transition-colors w-full text-left"
                 >
                   <span>{menu.title}</span>
                   <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-lime" : "opacity-40"}`} />
                 </button>
                 
                 {isOpen && (
                   <div className="flex flex-col gap-4 pl-3 py-2 animate-in fade-in duration-200">
                     {menu.groups?.map(group => (
                       <div key={group.title} className="flex flex-col gap-2">
                         <span className="text-[10px] font-extrabold text-brand-lime uppercase tracking-wider">{group.title}</span>
                         <div className="flex flex-col gap-1.5">
                           {group.items.map(item => (
                             <Link 
                               key={item.label} 
                               href={item.href} 
                               className="text-white/60 hover:text-white text-xs font-semibold py-1.5 transition-colors flex items-center gap-2"
                               onClick={() => setIsMobileMenuOpen(false)}
                             >
                               {item.icon && <span className="text-white/30">{item.icon}</span>}
                               <span>{item.label}</span>
                               {item.badge && (
                                 <span className="px-1 py-0.5 bg-brand-lime/10 text-brand-lime text-[8px] font-bold uppercase rounded">
                                   {item.badge}
                                 </span>
                               )}
                             </Link>
                           ))}
                         </div>
                       </div>
                     ))}
                   </div>
                 )}
               </div>
             );
           })}

           <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
             <Link 
               href="/login" 
               className="w-full py-3 border border-white/20 text-white rounded-full font-bold text-sm text-center hover:bg-white/5 transition-colors"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               Log in
             </Link>
             <Link 
               href="/request-demo" 
               className="w-full py-3 border border-white/20 text-white rounded-full font-bold text-sm text-center hover:bg-white/5 transition-colors"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               Request Demo
             </Link>
             <Link 
               href="/dashboard" 
               className="w-full py-3.5 bg-brand-lime text-neutral-900 rounded-full font-bold text-sm text-center hover:bg-brand-lime/90 active:scale-95 transition-all"
               onClick={() => setIsMobileMenuOpen(false)}
             >
               Start App
             </Link>
           </div>
        </div>
      )}
    </nav>
  );
}
