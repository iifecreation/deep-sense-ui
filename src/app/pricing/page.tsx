"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { CheckCircle2, ChevronRight, Zap, TrendingUp, Building2 } from "lucide-react";

const pricingPlans = [
  {
    name: "Startup",
    description: "Ideal for small fintechs and early-stage platforms.",
    price: "$499",
    period: "/mo",
    icon: <Zap className="w-6 h-6 text-indigo-600" />,
    features: [
      "Up to 10k transactions/mo",
      "Standard Fraud Scoring",
      "Email Support",
      "Basic API Access",
      "10 Rules Engine slots"
    ]
  },
  {
    name: "Growth",
    description: "Perfect for scaling startups with growing transaction volume.",
    price: "$1,499",
    period: "/mo",
    popular: true,
    icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
    features: [
      "Up to 100k transactions/mo",
      "Advanced AI Scoring",
      "Priority 24/7 Support",
      "Full Webhooks Access",
      "Case Management Dashboard",
      "Custom Rules Engine"
    ]
  },
  {
    name: "Enterprise",
    description: "For banks and institutions requiring infinite scale and compliance.",
    price: "Custom",
    period: "",
    icon: <Building2 className="w-6 h-6 text-indigo-600" />,
    features: [
      "Infinite transaction volume",
      "Dedicated account manager",
      "SLA Guarantees",
      "White-glove integration",
      "Custom AI model training",
      "On-premise deployment available"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-40 pb-24">
        <div className="max-w-[1440px] mx-auto px-8">
           {/* Header */}
           <div className="max-w-[700px] mb-20">
              <h1 className="text-5xl lg:text-7xl font-bold font-manrope leading-tight mb-8 tracking-tight">Flexible plans for <span className="text-zinc-400">every stage of growth</span></h1>
              <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-10">Choose the best plan for your platform. No hidden fees, just transparent pricing designed to scale with your business.</p>
           </div>
           
           {/* Pricing Grid */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
             {pricingPlans.map((plan) => (
                <div key={plan.name} className={`p-8 lg:p-12 rounded-[48px] border transition-all duration-500 ${plan.popular ? "bg-white border-indigo-600 shadow-2xl shadow-indigo-600/10 scale-105" : "bg-gray-50/50 border-gray-100 hover:bg-white hover:shadow-xl"}`}>
                   <div className="flex justify-between items-start mb-8">
                      <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
                         {plan.icon}
                      </div>
                      {plan.popular && (
                         <span className="px-4 py-1.5 bg-brand-lime rounded-full text-xs font-bold uppercase tracking-widest text-neutral-900">Most Popular</span>
                      )}
                   </div>
                   
                   <h3 className="text-2xl font-bold font-manrope mb-2 tracking-tight">{plan.name}</h3>
                   <p className="text-sm text-zinc-500 mb-8 leading-relaxed mb-12 h-12">{plan.description}</p>
                   
                   <div className="flex items-baseline gap-1 mb-10">
                      <span className="text-4xl font-bold font-manrope">{plan.price}</span>
                      <span className="text-zinc-500">{plan.period}</span>
                   </div>
                   
                   <button className={`w-full py-4 rounded-full font-bold font-manrope mb-12 transition-all active:scale-95 ${plan.popular ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-white border border-gray-200 text-indigo-600 hover:bg-gray-50"}`}>
                      Get Started <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1" />
                   </button>
                   
                   <div className="flex flex-col gap-6">
                      <span className="text-sm font-bold font-manrope text-neutral-900 border-b border-gray-100 pb-2">What's included:</span>
                      {plan.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-3">
                           <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                           <span className="text-sm text-zinc-600 font-inter">{feat}</span>
                        </div>
                      ))}
                   </div>
                </div>
             ))}
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

import { ArrowRight } from "lucide-react";
