"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Deep Sense detect fraud?",
    answer: "We use a hybrid approach combining machine learning models, custom rule engines, and graph intelligence. This allows us to detect known fraud patterns and adaptive threats in milliseconds.",
  },
  {
    question: "Can I integrate via API?",
    answer: "Yes, Deep Sense is API-first. You can send transaction data via our REST API or stream it in real-time using our SDKs and webhooks.",
  },
  {
    question: "Is it really real-time?",
    answer: "Absolutely. Decisions are typically returned in under 100ms, making it suitable for inline blocking of payments and authentication flows.",
  },
  {
    question: "Can I customize fraud rules?",
    answer: "Yes, our no-code rule engine allows your fraud analysts to create, test, and deploy rules instantly without needing any engineering support.",
  },
  {
    question: "Does it support multi-tenant systems?",
    answer: "Yes, our architecture is designed for enterprise scale and supports secure multi-tenancy with isolated data and custom configurations for different business units.",
  },
  {
    question: "What industries is Deep Sense built for?",
    answer: "While we support any high-volume transaction system, we specialize in Banking, Fintech, E-commerce, and Payment Processing platforms.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="pricing" className="py-20 px-4 md:px-24 bg-white">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
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
            <a href="mailto:hello@deepsense.ai" className="text-indigo-600 text-xl md:text-2xl font-semibold font-manrope hover:underline transition-all">
              hello@deepsense.ai
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
