"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  ShieldCheck, 
  Users, 
  FileText, 
  Zap, 
  Layers, 
  Scale, 
  Activity, 
  Lock, 
  Mail, 
  Building, 
  Briefcase,
  Quote,
  History
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function CbnGuidePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-emerald-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-emerald-500 text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
                <span className="text-lg">🇳🇬</span>
                <span>Exclusive Compliance Asset</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter uppercase italic font-manrope">
                CBN AML <br /><span className="text-emerald-600">Compliance</span> <br />Readiness Guide.
              </h1>
              <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed mb-12 italic pr-12">
                A practical blueprint to help financial institutions understand and satisfy Central Bank of Nigeria AML requirements.
              </p>
              <button 
                onClick={() => document.getElementById('download-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg font-black italic tracking-tighter uppercase"
              >
                Download Guide
              </button>
            </div>
            <div className="relative group perspective-1000">
               <div className="absolute inset-0 bg-emerald-600/10 blur-[100px] rounded-full group-hover:bg-emerald-600/20 transition-all duration-1000" />
               <div className="relative bg-white p-2 rounded-[56px] shadow-3xl border border-zinc-100 transform group-hover:scale-[1.02] transition-transform">
                  <div className="aspect-[3/4] bg-neutral-900 rounded-[48px] overflow-hidden relative flex flex-col items-center justify-center p-12 text-center text-white">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 p-8 pt-16">
                        <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase italic">Institutional Whitepaper</span>
                     </div>
                     <BookOpen className="w-32 h-32 text-emerald-500 mb-8 opacity-20" strokeWidth={1} />
                     <h2 className="text-4xl font-black italic uppercase italic mb-4 leading-tight">CBN AML Readiness Guide</h2>
                     <p className="text-zinc-500 text-xs italic uppercase tracking-widest font-black absolute bottom-12">DEEP SENSE Intelligence Unit</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 2. What You'll Learn & 3. Why This Matters */}
        <section className="py-32 bg-zinc-50 mx-4 rounded-[64px] border border-zinc-100 font-manrope">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 px-8">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase">Inside the Guide.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed">This guide covers the entire institutional compliance landscape as required by the Nigerian regulator.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Key AML requirements from CBN",
                      "Transaction monitoring expectations",
                      "Customer risk profiling logic",
                      "Sanctions and PEP screening",
                      "Case management requirements",
                      "Audit and governance protocols"
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-center group">
                         <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                         <span className="text-sm font-bold italic uppercase tracking-tight">{it}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="flex flex-col justify-center">
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase group">Why Readiness is Critical.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed font-manrope">The Central Bank of Nigeria is rapidly evolving its AML/CFT oversight. Institutions found relying on manual or fragmented systems face immediate regulatory exposure.</p>
                 <div className="p-8 bg-neutral-900 rounded-[40px] text-white shadow-3xl transform hover:translate-x-4 transition-transform border border-white/5 relative">
                    <Zap className="w-12 h-12 text-emerald-500 absolute -top-5 -right-5 filter drop-shadow-2xl" />
                    <p className="text-sm font-bold italic leading-relaxed italic pr-6 italic uppercase tracking-tight">Institutions must adopt automated, event-driven solutions to satisfy modern regulatory expectations.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Who This Is For & 5. Guide Breakdown */}
        <section className="py-32 px-8 font-manrope italic">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-12 tracking-tight italic uppercase italic">Who Should Read This?</h2>
              <div className="flex flex-wrap justify-center gap-4 mb-32">
                 {[
                   "Compliance Officers",
                   "Risk Managers",
                   "Fintech Founders",
                   "Banking Operations Teams",
                   "AML Analysts"
                 ].map((it, i) => (
                   <span key={i} className="px-8 py-3 bg-white border border-zinc-200 rounded-full text-xs font-black uppercase tracking-widest text-zinc-600 shadow-sm hover:border-emerald-500 transition-colors">
                      {it}
                   </span>
                 ))}
              </div>

              <h2 className="text-5xl font-bold font-manrope mb-20 tracking-tight italic uppercase italic underline decoration-emerald-200 decoration-8 underline-offset-16 font-manrope italic pr-12">Guide Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left w-full">
                 {[
                   { t: "Requirements", d: "Understanding Nigerian regulatory expectations.", i: <Building /> },
                   { t: "Capabilities", d: "Monitoring, profiling, and screening logic.", i: <Zap /> },
                   { t: "Workflows", d: "Alerts, cases, and institutional investigation.", i: <Layers /> },
                   { t: "Reporting", d: "STR, CTR, and regulatory filing support.", i: <FileText /> },
                   { t: "Governance", d: "Audit trails and institutional oversight.", i: <History /> }
                 ].map((sec, i) => (
                   <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all group overflow-hidden">
                      <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                         {React.cloneElement(sec.i as React.ReactElement, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-emerald-500 font-extrabold uppercase text-[10px] tracking-widest mb-4">Section {i+1}</h4>
                      <h5 className="text-lg font-bold uppercase italic tracking-tighter mb-4 leading-tight">{sec.t}</h5>
                      <p className="text-zinc-500 text-xs italic leading-relaxed">{sec.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. Download Form */}
        <section id="download-form" className="py-32 px-8 bg-neutral-900 border border-white/5 mx-4 rounded-[64px] relative overflow-hidden text-center shadow-3xl text-white font-manrope italic font-manrope">
           <div className="absolute inset-0 bg-emerald-600/5 blur-[150px] opacity-40 translate-y-1/2 pointer-events-none" />
           <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center">
              {formSubmitted ? (
                 <div className="py-24 animate-in zoom-in-95 duration-500">
                    <CheckCircle2 className="w-24 h-24 text-emerald-500 mx-auto mb-10" />
                    <h2 className="text-5xl font-black uppercase italic italic mb-8">Guide Sent Successfully</h2>
                    <p className="text-zinc-500 text-lg mb-12 italic">Check your inbox for the CBN AML Compliance Readiness Guide.</p>
                    <button onClick={() => setFormSubmitted(false)} className="text-emerald-500 font-black uppercase tracking-widest text-xs underline underline-offset-8">Download again</button>
                 </div>
              ) : (
                 <>
                    <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-8 tracking-tight italic uppercase italic">Get the Guide.</h2>
                    <p className="text-zinc-400 text-xl italic mb-16 px-12 italic">Enter your details to receive the high-fidelity PDF guide direct to your inbox.</p>
                    <form className="w-full space-y-6 text-left" onSubmit={handleSubmit}>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 italic">Full Name</label>
                             <input type="text" required placeholder="John Doe" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-full focus:ring-2 focus:ring-emerald-500 transition-all font-bold italic font-manrope" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 italic">Work Email</label>
                             <input type="email" required placeholder="john@company.com" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-full focus:ring-2 focus:ring-emerald-500 transition-all font-bold italic font-manrope" />
                          </div>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 italic">Company Name</label>
                             <input type="text" required placeholder="Institutional Bank Plc" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-full focus:ring-2 focus:ring-emerald-500 transition-all font-bold italic font-manrope" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 italic">Role</label>
                             <input type="text" required placeholder="Head of Compliance" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-full focus:ring-2 focus:ring-emerald-500 transition-all font-bold italic font-manrope" />
                          </div>
                       </div>
                       <div className="pt-8 flex flex-col items-center">
                          <button type="submit" className="px-16 py-8 bg-emerald-600 text-white rounded-full font-black text-xl hover:scale-105 active:scale-95 transition-all w-full md:w-fit uppercase tracking-tighter italic">
                             Download Now
                          </button>
                          <p className="mt-8 text-zinc-500 text-[10px] italic">By downloading, you agree to receive institutional AML best practice updates from Deep Sense.</p>
                       </div>
                    </form>
                 </>
              )}
           </div>
        </section>

        {/* 7. Trust Elements & 8. Social Proof */}
        <section className="py-32 px-8 font-manrope italic">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold mb-20 italic uppercase">Trusted for Compliance Readiness</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl text-left border-b border-zinc-100 pb-32 mb-32">
                 {[
                   { t: "Built for Regulated Environments", d: "Engineered to institutional standards." },
                   { t: "Aligned with Best Practices", d: "Supports global and regional AML controls." },
                   { t: "Institutional Design", d: "Crafted for complex financial organization structures." }
                 ].map((it, i) => (
                    <div key={i} className="flex gap-6 items-center">
                       <ShieldCheck className="w-10 h-10 text-emerald-600 shrink-0" strokeWidth={1} />
                       <div>
                          <span className="block font-bold text-xs uppercase italic tracking-tight mb-1">{it.t}</span>
                          <span className="text-[10px] text-zinc-400 font-inter italic">{it.d}</span>
                       </div>
                    </div>
                 ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl text-left italic font-manrope">
                 {[
                    { q: "Helped us understand AML requirements clearly and practically.", a: "Head of AML, Payment Gateway" },
                    { q: "A great starting point for institutional compliance planning.", a: "Chief Compliance Officer, Microfinance Bank" }
                 ].map((quote, i) => (
                    <div key={i} className="p-12 bg-zinc-50 border border-zinc-100 rounded-[56px] relative group overflow-hidden">
                       <Quote className="w-24 h-24 absolute top-0 right-0 p-8 text-emerald-100 group-hover:scale-110 transition-transform opacity-40 font-manrope" />
                       <p className="text-xl font-bold italic mb-8 relative z-10 font-manrope">"{quote.q}"</p>
                       <span className="text-xs font-black uppercase text-zinc-400 italic font-manrope">{quote.a}</span>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 9. How Deep Sense Helps & 10. Final CTA */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center text-center">
                 <span className="text-emerald-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Turn Insights into Action</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6">
                   Ready to Implement <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">AML the Right Way?</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                    Automate AML monitoring, streamline investigations, and reduce your institutional risk with the Deep Sense operating platform.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-emerald-600 transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope">
                     Request Bank Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope">
                     Talk to Sales
                   </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
