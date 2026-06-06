"use client";

import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Target, 
  Building, 
  Lock, 
  RefreshCw,
  Loader2,
  ServerOff
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { useContentPage } from "@/hooks";

export default function AboutUsPage() {
  const { data: pageData, isLoading, isError } = useContentPage("about-us");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white font-manrope text-neutral-900 flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-48 pb-24">
          <Loader2 className="w-12 h-12 animate-spin text-brand-lime" />
        </main>
        <Footer />
      </div>
    );
  }

  if (isError || !pageData) {
    return (
      <div className="min-h-screen bg-white font-manrope text-neutral-900 flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center pt-48 pb-24 px-8 text-center">
          <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20 shadow-[0_0_40px_rgba(239,68,68,0.2)] mb-6">
            <ServerOff className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase text-neutral-900 mb-4">
            Content Not Configured (501)
          </h1>
          <p className="text-zinc-500 max-w-lg">
            The About Us page content could not be loaded from the server. The dynamic content endpoint is not yet implemented.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative font-manrope italic">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-brand-lime/5 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl font-manrope">
              <Building className="w-3.5 h-3.5" />
              <span>{pageData.eyebrow || 'Institutional Mission Control'}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope" dangerouslySetInnerHTML={{ __html: pageData.title }} />
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
               {pageData.subtitle}
            </p>
          </div>
        </section>

        {/* 2. Mission Statement */}
        {pageData.mission && (
          <section className="py-24 bg-neutral-900 text-white px-8 rounded-[64px] mx-4 border border-white/5 font-manrope italic relative overflow-hidden group">
             <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-20 pointer-events-none" />
             <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <div>
                   <span className="text-[10px] font-black uppercase text-brand-lime tracking-widest mb-4 block italic">Our Mission</span>
                   <h2 className="text-4xl md:text-6xl font-bold font-manrope mb-8 tracking-tight italic uppercase pr-10 leading-[1.1]">{pageData.mission.title}</h2>
                </div>
                <div className="flex flex-col gap-8 font-manrope italic pr-12">
                   <p className="text-zinc-400 text-lg italic leading-relaxed font-manrope">{pageData.mission.description}</p>
                   {pageData.mission.quote && (
                     <div className="p-10 bg-white/5 border border-white/10 rounded-[48px] font-bold text-xs uppercase italic tracking-tighter font-inter leading-tight group hover:border-brand-lime transition-all">
                        "{pageData.mission.quote}"
                     </div>
                   )}
                </div>
             </div>
          </section>
        )}

        {/* Dynamic content rendering... */}
        <div className="max-w-[1440px] mx-auto px-8 py-24 prose prose-lg" dangerouslySetInnerHTML={{ __html: pageData.content }} />

      </main>

      <Footer />
    </div>
  );
}
