"use client";

import React from "react";
import {
  Building,
  Loader2,
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { useContentPage } from "@/hooks";
import { bodyParagraphs, plainText } from "@/lib/text/body-paragraphs";

const DEFAULT_SUBTITLE =
  "DeepSense gives banks and fintechs one platform for identity verification, AML screening, fraud detection and ongoing monitoring.";

const DEFAULT_BODY = [
  "We build the controls regulated institutions need to onboard customers safely: versioned verification levels, explainable risk decisions, four-eyes review and a complete audit trail.",
  "Every decision is recorded and reproducible, so compliance teams can show a regulator exactly why an applicant was approved, declined or escalated.",
];

export default function AboutUsPage() {
  // CMS copy is optional; without a published "about-us" page the defaults below are shown.
  const { data: pageData, isLoading } = useContentPage("about-us");
  const cmsBody = bodyParagraphs(pageData?.body);
  const body = cmsBody.length > 0 ? cmsBody : DEFAULT_BODY;

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
              <span>Institutional Mission Control</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
              {plainText(pageData?.title) || "About DeepSense"}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
               {plainText(pageData?.excerpt) || DEFAULT_SUBTITLE}
            </p>
          </div>
        </section>

        {/* Body: CMS content when published, otherwise the defaults. */}
        <div className="max-w-[1440px] mx-auto px-8 py-24 prose prose-lg">
          {body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>

      </main>

      <Footer />
    </div>
  );
}
