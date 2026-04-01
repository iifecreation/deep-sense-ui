"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 px-4 md:px-0">
      <div className="max-w-[1100px] mx-auto bg-neutral-900 rounded-[100px] border border-white/10 px-4 md:px-6 py-2.5 flex justify-between items-center transition-all duration-300 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 2, 1, 2].map((i, idx) => (
              <div 
                key={idx} 
                className="bg-brand-lime" 
                style={{ height: `${(i * 3) + 3}px`, width: '3.5px' }} 
              />
            ))}
          </div>
          <span className="text-white text-lg font-semibold font-manrope tracking-tight">Investo</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {["About", "Services", "Pricing", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white text-[14px] font-medium font-inter hover:text-brand-lime transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="px-6 py-2.5 bg-brand-lime rounded-[100px] text-neutral-900 text-[14px] font-bold font-manrope hover:opacity-90 transition-all active:scale-95">
            Get Start App
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 bg-neutral-900 rounded-3xl border border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-4 transition-all duration-300">
          {["About", "Services", "Pricing", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-white text-base font-semibold font-manrope"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <button className="w-full px-8 py-3.5 bg-yellow-400 rounded-full text-neutral-900 text-[14px] font-bold font-manrope">
            Get Start App
          </button>
        </div>
      )}
    </nav>
  );
}
