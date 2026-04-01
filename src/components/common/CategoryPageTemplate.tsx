"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

interface PageProps {
  category: string;
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
  image?: string;
}

export default function CategoryPageTemplate({ 
  category, 
  title, 
  description, 
  features = ["Scalable Architecture", "Real-time Processing", "AI-Powered", "Enterprise Ready"],
  ctaText = "Get Started Now",
  image
}: PageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-40 pb-24">
        {/* Hero Section */}
        <div className="max-w-[1440px] mx-auto px-8 flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="flex-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 rounded-full text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
                <span>{category}</span>
                <ChevronRight className="w-3 h-3" />
                <span>Feature</span>
             </div>
             <h1 className="text-5xl lg:text-7xl font-bold font-manrope leading-[1.1] mb-8 tracking-tight text-neutral-900">
               {title}
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[600px] mb-10">
               {description}
             </p>
             <div className="flex flex-col sm:flex-row gap-4">
               <button className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold font-manrope shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all hover:scale-105 active:scale-95">
                 {ctaText}
               </button>
               <button className="px-8 py-4 bg-white border border-gray-200 rounded-full font-bold font-manrope text-neutral-900 hover:bg-gray-50 transition-all active:scale-95">
                 View Documentation
               </button>
             </div>
          </div>
          
          <div className="flex-1 w-full bg-gray-50 rounded-[40px] aspect-[4/3] relative overflow-hidden border border-gray-100 flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-lime/10 via-transparent to-transparent opacity-50" />
             <div className="w-2/3 h-2/3 bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col p-8 gap-6 transform rotate-2">
                <div className="w-1/2 h-4 bg-gray-100 rounded-full" />
                <div className="w-full h-4 bg-gray-50 rounded-full" />
                <div className="w-3/4 h-24 bg-indigo-50/50 rounded-2xl border border-indigo-100/50" />
                <div className="flex justify-between items-center mt-auto">
                   <div className="w-12 h-12 bg-brand-lime rounded-full" />
                   <div className="w-24 h-4 bg-gray-100 rounded-full" />
                </div>
             </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-[1440px] mx-auto px-8 mb-32 text-center flex flex-col items-center">
           <h2 className="text-3xl font-bold font-manrope mb-4">Why Deep Sense {category}?</h2>
           <p className="text-zinc-500 mb-16 max-w-[600px]">Built for modern financial ecosystems that demand speed, precision, and security without compromise.</p>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full text-left">
              {features.map((feature, i) => (
                <div key={i} className="p-8 bg-gray-50/50 border border-gray-100 rounded-[32px] hover:bg-white transition-all hover:shadow-xl hover:shadow-indigo-600/5 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:bg-brand-lime transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold font-manrope mb-2">{feature}</h3>
                  <p className="text-sm text-zinc-500">Industry-leading performance backed by advanced AI models.</p>
                </div>
              ))}
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
