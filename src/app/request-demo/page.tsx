"use client";

import React, { useState } from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Building2, 
  Mail, 
  User, 
  Phone, 
  Briefcase, 
  Globe, 
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Lock
} from "lucide-react";

export default function RequestDemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    useCase: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // NOTE: We assume next.config.js proxies /api to the backend
      const response = await fetch("/api/v1/public/demo-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: `${formData.firstName} ${formData.lastName}`.trim(),
          work_email: formData.email,
          company_name: formData.company,
          role: formData.jobTitle,
          use_case: formData.useCase,
          source: "demo_page",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />
      
      <main className="pt-40 pb-24 overflow-hidden">
        <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 w-fit rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest shadow-2xl">
                <Zap className="w-3.5 h-3.5" />
                Book a Live Demo
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight text-neutral-900 uppercase italic">
                See Deep Sense <br />
                <span className="text-zinc-400">in Action.</span>
              </h1>
              
              <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[550px]">
                Discover how our unified fraud and compliance engine can protect your platform, automate AML workflows, and stop financial crime in real-time.
              </p>

              <div className="flex flex-col gap-6 mt-4">
                {[
                  { icon: <ShieldCheck className="w-6 h-6 text-brand-lime" />, title: "Stop Fraud Before It Happens", desc: "Real-time decisioning and behavioral intelligence." },
                  { icon: <Lock className="w-6 h-6 text-brand-lime" />, title: "Automate Compliance Workflows", desc: "Unified case management and auto-compiled STRs." },
                  { icon: <CheckCircle2 className="w-6 h-6 text-brand-lime" />, title: "Reduce False Positives", desc: "Graph network insights that separate good users from bad actors." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-neutral-900">{item.title}</h4>
                      <p className="text-sm text-zinc-500 font-inter">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-sm text-zinc-400 font-inter max-w-[400px]">
                  Trusted by risk teams at leading fintechs, banks, and payment processors worldwide.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-brand-lime/10 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative bg-white border border-gray-100 shadow-2xl rounded-[40px] p-8 md:p-12 z-10">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 px-4">
                    <div className="w-20 h-20 bg-brand-lime/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-brand-lime" />
                    </div>
                    <h3 className="text-3xl font-bold uppercase italic tracking-tight text-neutral-900 mb-4">Request Received</h3>
                    <p className="text-zinc-500 font-inter">
                      Thank you for your interest! One of our risk experts will be in touch shortly to schedule your personalized demo.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-sm font-bold text-neutral-900 border-b border-neutral-900 pb-1"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold uppercase italic tracking-tight text-neutral-900 mb-2">Request Access</h3>
                      <p className="text-zinc-500 font-inter text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">First Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                            <input 
                              required 
                              type="text" 
                              value={formData.firstName}
                              onChange={(e) => setFormData(p => ({ ...p, firstName: e.target.value }))}
                              className="w-full bg-zinc-50 border border-zinc-200 text-neutral-900 text-sm rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none py-3.5 pl-11 pr-4 transition-all" 
                              placeholder="John" 
                            />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Last Name</label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                            <input 
                              required 
                              type="text" 
                              value={formData.lastName}
                              onChange={(e) => setFormData(p => ({ ...p, lastName: e.target.value }))}
                              className="w-full bg-zinc-50 border border-zinc-200 text-neutral-900 text-sm rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none py-3.5 pl-11 pr-4 transition-all" 
                              placeholder="Doe" 
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Work Email</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input 
                            required 
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                            className="w-full bg-zinc-50 border border-zinc-200 text-neutral-900 text-sm rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none py-3.5 pl-11 pr-4 transition-all" 
                            placeholder="john@company.com" 
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Company Name</label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input 
                            required 
                            type="text" 
                            value={formData.company}
                            onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))}
                            className="w-full bg-zinc-50 border border-zinc-200 text-neutral-900 text-sm rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none py-3.5 pl-11 pr-4 transition-all" 
                            placeholder="Acme Corp" 
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Job Title</label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <input 
                            type="text" 
                            value={formData.jobTitle}
                            onChange={(e) => setFormData(p => ({ ...p, jobTitle: e.target.value }))}
                            className="w-full bg-zinc-50 border border-zinc-200 text-neutral-900 text-sm rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none py-3.5 pl-11 pr-4 transition-all" 
                            placeholder="Head of Risk, Compliance Manager..." 
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Primary Use Case</label>
                        <div className="relative">
                          <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                          <select 
                            value={formData.useCase}
                            onChange={(e) => setFormData(p => ({ ...p, useCase: e.target.value }))}
                            className="w-full bg-zinc-50 border border-zinc-200 text-neutral-900 text-sm rounded-xl focus:ring-2 focus:ring-brand-lime focus:border-transparent outline-none py-3.5 pl-11 pr-4 transition-all appearance-none cursor-pointer"
                          >
                            <option value="">Select a use case...</option>
                            <option value="fraud">Fraud Detection & Prevention</option>
                            <option value="aml">AML Transaction Monitoring</option>
                            <option value="kyc">KYC & Identity Verification</option>
                            <option value="case-management">Case Management & Workflows</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      {error && (
                        <div className="text-red-500 text-sm bg-red-50 border border-red-200 p-3 rounded-lg">
                          {error}
                        </div>
                      )}

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full mt-4 py-4 bg-neutral-900 text-white rounded-xl font-bold text-lg hover:bg-neutral-800 transition-all group flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Submitting..." : "Get Your Demo"}
                        {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                      </button>
                      
                      <p className="text-[10px] text-zinc-400 text-center mt-2 px-4">
                        By submitting this form, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
