"use client";

import React, { useState } from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Target, 
  HelpCircle,
  Building2,
  Cpu,
  RefreshCw,
  Send,
  Search,
  Lock
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would handle the form submission logic here
  };

  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[850px] mx-auto relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <MessageSquare className="w-3.5 h-3.5" />
               Get in Touch
             </div>
             <h1 className="text-6xl lg:text-[100px] font-bold leading-[0.9] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Let&apos;s Build Faster <br />
               <span className="text-zinc-300 italic">Fraud Detection.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[650px] mx-auto">
               Have questions, need a demo, or want to explore our API? Our team of fraud engineering experts is here to help you scale securely.
             </p>
          </div>
        </section>

        {/* 📩 CONTACT FORM (CORE SECTION) */}
        <section className="py-24 bg-zinc-50 border-y border-gray-100 relative">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-start relative z-10">
              <div className="space-y-12 h-full flex flex-col justify-center">
                 <h2 className="text-4xl lg:text-7xl font-bold font-manrope uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16">Request a Demo.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic leading-relaxed max-w-[500px]">Interested in seeing Deep Sense in action? Fill out the form and we&apos;ll schedule a personalized walkthrough with our team.</p>
                 
                 <div className="space-y-8">
                    {[
                      { t: "Personalized Walkthrough", d: "See features relevant to your business.", i: <Target /> },
                      { t: "Technical Deep-Dive", d: "Explore our API and rules engine integration.", i: <Cpu /> },
                      { t: "Pricing Discussion", d: "Find a plan that fits your growth stage.", i: <Zap /> }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-4 group">
                         <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-neutral-900 shadow-sm border border-gray-100 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all">
                            {React.cloneElement(feat.i as React.ReactElement<{ className: string }>, { className: "w-5 h-5" })}
                         </div>
                         <div>
                            <h5 className="font-bold text-neutral-900 uppercase text-xs mb-1">{feat.t}</h5>
                            <p className="text-[10px] text-zinc-400 font-inter max-w-[200px]">{feat.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none" />
                 <div className="bg-white rounded-[72px] p-12 lg:p-20 shadow-3xl border border-gray-100 relative">
                    {isSubmitted ? (
                      <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                         <div className="w-24 h-24 bg-brand-lime rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl">
                            <CheckCircle2 className="w-12 h-12 text-neutral-900" />
                         </div>
                         <h3 className="text-4xl font-bold italic uppercase tracking-tight mb-8">Request Received!</h3>
                         <p className="text-lg text-zinc-400 font-inter max-w-[350px] mx-auto italic leading-relaxed">Our team will review your request and reach out within 24–48 hours to schedule your demo.</p>
                         <button 
                          onClick={() => setIsSubmitted(false)}
                          className="mt-12 text-zinc-300 hover:text-neutral-900 font-bold uppercase text-[10px] tracking-widest decoration-1 hover:underline"
                        >
                          Send Another Message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-10 group/form">
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="space-y-4">
                               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Full Name</label>
                               <input 
                                required
                                type="text" 
                                placeholder="Jane Cooper" 
                                className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm"
                               />
                            </div>
                            <div className="space-y-4">
                               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Work Email</label>
                               <input 
                                required
                                type="email" 
                                placeholder="jane@company.com" 
                                className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm"
                               />
                            </div>
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="space-y-4">
                               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Company Name</label>
                               <input 
                                required
                                type="text" 
                                placeholder="Acme Inc." 
                                className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm"
                               />
                            </div>
                            <div className="space-y-4">
                               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Job Title</label>
                               <input 
                                type="text" 
                                placeholder="VP of Fraud Operations" 
                                className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm"
                               />
                            </div>
                         </div>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="space-y-4">
                               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Company Size</label>
                               <select className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm appearance-none cursor-pointer">
                                  <option>Startup</option>
                                  <option>Growth Stage</option>
                                  <option>Enterprise</option>
                               </select>
                            </div>
                            <div className="space-y-4">
                               <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Use Case</label>
                               <select className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm appearance-none cursor-pointer">
                                  <option>Banking</option>
                                  <option>Fintech Platform</option>
                                  <option>Payment Provider</option>
                                  <option>E-commerce</option>
                                  <option>Other</option>
                               </select>
                            </div>
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 px-4">Message (Optional)</label>
                            <textarea 
                             placeholder="How can we help you today?" 
                             rows={4}
                             className="w-full px-8 py-6 bg-gray-50 border border-gray-100 rounded-3xl outline-none focus:ring-2 focus:ring-brand-lime transition-all font-inter text-sm resize-none"
                            ></textarea>
                         </div>
                         <button className="w-full py-8 bg-neutral-900 text-white rounded-full font-bold text-xl hover:bg-brand-lime hover:text-neutral-900 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 group">
                            Request Demo
                            <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                         </button>
                         <p className="text-center text-zinc-300 font-bold uppercase text-[9px] tracking-widest px-8 leading-relaxed italic">By submitting, you agree to our privacy policy and data handling standards.</p>
                      </form>
                    )}
                 </div>
              </div>
           </div>
        </section>

        {/* 📞 OTHER WAYS TO REACH US & 🧠 WHAT HAPPENS NEXT */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold font-manrope uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 text-neutral-900">Reach Us <br />Directly.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic leading-relaxed max-w-[500px]">Beyond demo requests, our team is always available for direct conversations across specialized departments.</p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Sales", d: "For pricing, demos, and partnerships.", e: "sales@deepsense.ai" },
                      { l: "Support", d: "For technical help and issues.", e: "support@deepsense.ai" },
                      { l: "General", d: "For general inquiries.", e: "hello@deepsense.ai" },
                      { l: "Location", d: "Remote / Global Team.", e: "Earth, Global" }
                    ].map((opt, i) => (
                      <div key={i} className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all group">
                         <h5 className="font-bold text-neutral-900 uppercase text-xs mb-2 italic tracking-tight">{opt.l}</h5>
                         <p className="text-[10px] text-zinc-400 font-inter leading-relaxed mb-4">{opt.d}</p>
                         <div className="text-[11px] font-bold text-neutral-900 hover:text-brand-lime transition-all cursor-pointer truncate">{opt.e}</div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="space-y-16">
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">What to Expect</h3>
                 <div className="space-y-10 relative">
                    {[
                      { s: "Request Review", d: "Our team will review your organization&apos;s use case and goals.", i: <Search /> },
                      { s: "Expert Outreach", d: "We&apos;ll reach out within 24–48 hours to schedule a deep-dive.", i: <RefreshCw /> },
                      { s: "Personalized Demo", d: "A guided walkthrough of the platform tailored to your needs.", i: <Target /> },
                      { s: "Solution Roadmap", d: "Discuss pricing, integration timeline, and launch strategy.", i: <ArrowRight /> }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="relative">
                            <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime shadow-xl group-hover:scale-110 transition-transform relative z-10">
                               {React.cloneElement(item.i as React.ReactElement<{ className: string }>, { className: "w-5 h-5" })}
                            </div>
                            {i < 3 && <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-neutral-100" />}
                         </div>
                         <div>
                            <h5 className="font-bold text-neutral-900 uppercase text-[11px] mb-1 tracking-tight">{item.s}</h5>
                            <p className="text-[11px] text-zinc-400 font-inter leading-relaxed max-w-[300px]">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🔐 TRUST SECTION & 📍 LOCATION */}
        <section className="py-40 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-white/10 decoration-8 underline-offset-16 font-manrope">Safe & Secure.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">We respect your privacy. Any information you share with us is treated with the highest enterprise-level data protection standards.</p>
                 <div className="flex flex-wrap gap-8">
                    {[
                      { l: "Secure Form Submission", i: <Lock /> },
                      { l: "Privacy Guaranteed", i: <ShieldCheck /> },
                      { l: "Global Data Standards", i: <Globe /> }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-3 items-center px-6 py-4 bg-white/5 border border-white/5 rounded-2xl">
                         <div className="text-brand-lime">{React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-4 h-4" })}</div>
                         <span className="text-[9px] font-bold uppercase tracking-widest">{it.l}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-12 lg:p-24 rounded-[80px] shadow-3xl text-center group overflow-hidden relative backdrop-blur-xl">
                 <Building2 className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Global Operations</h3>
                 <p className="text-white/40 text-sm italic max-w-[350px] mx-auto mb-10 leading-relaxed">Deep Sense operates as a remote-first, global organization, serving customers across every major financial market and time zone.</p>
                 <div className="flex gap-4 justify-center">
                    <div className="px-8 py-4 bg-brand-lime/10 text-brand-lime rounded-full text-[10px] font-bold uppercase tracking-widest">Active Everywhere</div>
                 </div>
              </div>
           </div>
        </section>

        {/* ❓ FAQ SECTION (LIGHT) */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-8">
                 <h2 className="text-4xl lg:text-5xl font-bold uppercase italic tracking-tighter font-manrope">Quick Questions.</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-manrope">
                 {[
                   { q: "Demo timeline?", a: "We typically respond within 24–48 hours." },
                   { q: "Technical knowledge?", a: "We adapt demos for both product and R&D teams." },
                   { q: "Sandbox access?", a: "Every demo includes a free sandbox setup invitation." },
                   { q: "Custom needs?", a: "We specialize in tailoring logic for complex enterprise orgs." }
                 ].map((faq, i) => (
                   <div key={i} className="p-10 bg-white border border-gray-100 rounded-[48px] shadow-sm hover:shadow-2xl transition-all">
                      <HelpCircle className="w-8 h-8 text-neutral-900 mb-6" />
                      <h5 className="font-bold text-sm uppercase mb-3 italic tracking-tight">{faq.q}</h5>
                      <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">{faq.a}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 📣 FINAL CTA STRIP */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-40">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-lime rounded-[80px] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-right pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-black duration-1000">
                 <h2 className="text-4xl md:text-9xl font-bold tracking-tighter leading-none italic uppercase">Start Detecting <br /><span className="opacity-30">Today.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-inter italic">Choose the future of fraud intelligence and protect your growth.</p>
                 <div className="flex flex-col sm:row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-neutral-900 group-hover:text-white">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white/10 text-white border border-white/10 rounded-full font-bold text-xl hover:bg-white/20 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:border-transparent">
                      Get Started
                    </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}
