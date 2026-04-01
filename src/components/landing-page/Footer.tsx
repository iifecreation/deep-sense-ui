import React from "react";
import Link from "next/link";
import { Globe, Mail, Link as LinkIcon, Share2, Send } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: <Globe size={20} />, href: "#" },
    { icon: <Mail size={20} />, href: "#" },
    { icon: <LinkIcon size={20} />, href: "#" },
    { icon: <Share2 size={20} />, href: "#" },
  ];

  const footerLinks = [
    {
      title: "Solutions",
      links: ["About", "Details", "Services", "Contact"],
    },
    {
      title: "Products",
      links: ["Sajibur Rahman", "Sajibur Rahman", "Account", "Credit Card"],
    },
    {
      title: "Company",
      links: ["About", "Privacy Policy", "Support", "Terms of Service"],
    },
  ];

  return (
    <footer className="pt-24 pb-12 px-4 md:px-24 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">
          {/* Logo & Subscribe */}
          <div className="flex flex-col gap-10 max-w-sm">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 2, 1].map((i, idx) => (
                  <div key={idx} className="bg-brand-lime" style={{ height: `${(i * 4) + 4}px`, width: '4px' }} />
                ))}
              </div>
              <span className="text-neutral-900 text-2xl font-bold font-manrope">Investo</span>
            </div>
            
            <p className="text-zinc-600 text-base font-inter">
              Fintech services leverage technology to enhance financial processes, offering innovative solutions for banking, payments, and investment management.
            </p>

            <div className="flex flex-col gap-4">
              <div className="relative max-w-[320px]">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full h-14 pl-6 pr-16 bg-zinc-50 rounded-full border border-zinc-200 font-inter focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all"
                />
                <button className="absolute right-2 top-2 w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center hover:bg-neutral-800 transition-all">
                  <Send size={18} />
                </button>
              </div>
              <p className="text-zinc-400 text-sm font-inter">
                We respect your privacy and don’t spam. <Link href="#" className="text-neutral-900 underline">Read Policy</Link>
              </p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((col, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h4 className="text-neutral-900 text-lg font-bold font-manrope">{col.title}</h4>
                <div className="flex flex-col gap-4">
                  {col.links.map((link, lIdx) => (
                    <Link 
                      key={lIdx} 
                      href="#" 
                      className="text-zinc-600 font-inter hover:text-indigo-600 transition-colors"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 font-inter text-sm">
            Copyright © 2026 Investo App . | All Rights Reserved
          </p>
          
          <div className="flex items-center gap-6">
            {socialLinks.map((social, idx) => (
              <Link 
                key={idx} 
                href={social.href} 
                className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-zinc-400 hover:text-neutral-900 hover:border-neutral-900 hover:scale-110 transition-all"
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
