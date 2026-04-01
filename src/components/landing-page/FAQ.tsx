"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Can I use the service for business transactions?",
    answer: "Yes, our platform supports both personal and business transactions. Businesses can benefit from our secure and efficient transfer options tailored to their needs.",
  },
  {
    question: "What is the maximum amount I can transfer?",
    answer: "Transfer limits vary based on your account level and verification status. Most users can transfer up to $10,000 per day initially.",
  },
  {
    question: "How do I update my account information?",
    answer: "You can update your profile, email, and contact details directly in the app settings under the 'Profile' section.",
  },
  {
    question: "Are there any benefits for frequent users?",
    answer: "Yes! Frequent users earn reward points on every transaction which can be redeemed for cashback or reduced transfer fees.",
  },
  {
    question: "Can I access my account from multiple devices?",
    answer: "Absolutely. Your account is synced across all devices. We use multi-factor authentication to ensure your data stays secure.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="pricing" className="py-20 px-4 md:px-24 bg-white">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
        {/* Left Side Content */}
        <div className="flex flex-col gap-10 max-w-sm">
          <div className="flex flex-col gap-4">
            <span className="text-zinc-500 font-inter text-[13px] font-bold uppercase tracking-[0.2em]">FAQ’S</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-manrope text-neutral-900 leading-[1.2]">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="flex flex-col gap-2">
            <p className="text-zinc-500 text-base font-inter">Ask any questions</p>
            <a href="mailto:investo@fintech.com" className="text-indigo-600 text-xl md:text-2xl font-semibold font-manrope hover:underline transition-all">
              investo@fintech.com
            </a>
          </div>
        </div>

        {/* Right Side Accordion */}
        <div className="w-full lg:max-w-[700px] flex flex-col border-t border-neutral-900/5">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-neutral-900/5 transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 md:py-8 px-2 flex justify-between items-center text-left group"
              >
                <h4 className={`text-lg md:text-xl font-bold font-manrope transition-colors ${openIndex === idx ? 'text-neutral-900' : 'text-neutral-800 group-hover:text-black'}`}>
                  {faq.question}
                </h4>
                <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                  {openIndex === idx ? (
                    <Minus size={20} className="text-neutral-400" />
                  ) : (
                    <Plus size={20} className="text-neutral-400" />
                  )}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-40 pb-8 px-2' : 'max-h-0'}`}>
                <p className="text-zinc-500 text-sm md:text-base font-inter leading-relaxed max-w-[600px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
