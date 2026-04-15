"use client";

import React from "react";
import { 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Target, 
  Cpu, 
  Heart, 
  Rocket, 
  Briefcase, 
  Code, 
  BarChart3, 
  Search, 
  Building,
  Star,
  ShieldCheck,
  Smartphone,
  Layers,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative font-manrope italic">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-brand-lime/10 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4 font-manrope pr-10" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl font-manrope">
              <Rocket className="w-3.5 h-3.5" />
              <span>Shape the Future of Trust</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter max-w-5xl uppercase italic font-manrope">
               Build the <br /><span className="text-zinc-300">Intelligence</span> of Finance.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic pr-12">
               Deep Sense is looking for the world's most ambitious engineers, data scientists, and compliance experts to solve the global financial integrity problem.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic font-manrope">
              <button 
                onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-6 bg-neutral-900 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-lg tracking-tighter uppercase font-manrope"
              >
                 View Open Roles
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Mission */}
        <section className="py-24 bg-zinc-50 px-8 rounded-[64px] mx-4 border border-zinc-100 font-manrope italic pr-12">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center font-manrope">
              <div>
                 <span className="text-[10px] font-black uppercase text-brand-lime tracking-widest mb-4 block italic font-manrope">Why join us?</span>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase pr-10 leading-tight">Solving a $2 Trillion <br />Problem Daily.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed font-manrope pr-12 pr-12">Financial crime is complex, evolving, and global. We are building the real-time intelligence layer to stop it. At Deep Sense, your work directly protects the integrity of the world's financial systems.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-manrope italic">
                    {[
                       "Work on high-throughput, low-latency AI systems.",
                       "Solve real-world security challenges at massive scale.",
                       "Join a global culture of technical ownership.",
                       "Define the next decade of financial compliance."
                    ].map((it, i) => (
                       <div key={i} className="flex gap-4 items-center group font-manrope">
                          <div className="w-1.5 h-10 bg-brand-lime transition-all rounded-full shrink-0" />
                          <span className="text-sm font-bold italic uppercase tracking-tight italic pr-6 group-hover:text-emerald-600 transition-colors">{it}</span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="p-16 bg-neutral-900 text-white rounded-[64px] shadow-3xl relative overflow-hidden group border border-white/5 font-manrope italic pr-12">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-20 pointer-events-none" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-10 border-b border-white/10 pb-10 font-manrope">The Impact</h3>
                 <div className="space-y-8 relative z-10 font-manrope italic pr-12">
                    <p className="text-zinc-500 text-sm italic pr-12 italic font-manrope italic pr-24">"Working at Deep Sense means solving the intersection of high-frequency engineering and deep behavioral science."</p>
                    <div className="grid grid-cols-2 gap-6 italic shadow-black/20">
                       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all">
                          <span className="text-[9px] font-black uppercase text-brand-lime group-hover:text-neutral-900 tracking-widest italic font-manrope">Transactions / Day</span>
                          <span className="block text-2xl font-black italic">100M+</span>
                       </div>
                       <div className="p-6 bg-white/5 border border-white/10 rounded-3xl group-hover:border-brand-lime transition-all">
                          <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest italic font-manrope">Team Growth</span>
                          <span className="block text-2xl font-black italic">3x / Year</span>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 4. Our Values */}
        <section className="py-32 px-8 overflow-hidden font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope italic pr-12">The Values of deep sense.</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic mb-32 pr-10 pr-10 font-manrope italic">We are a builder-first organization that values technical excellence and radical ownership.</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl text-left font-manrope italic pr-10 pr-12 group">
                 {[
                   { t: "Technical Obsession", d: "We care about the deep details—from P99 latency to the accuracy of our ML models.", i: <Cpu /> },
                   { t: "Radical Ownership", d: "Everyone at Deep Sense has the autonomy and responsibility to build and deploy at scale.", i: <Building /> },
                   { t: "Institutional Integrity", d: "We build with the seriousness that the global financial ecosystem deserves.", i: <ShieldCheck /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] shadow-sm hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 group overflow-hidden relative font-manrope italic pr-12 pr-6 group shadow-black/5">
                      <div className="w-14 h-14 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform shadow-lg shadow-black/10">
                        {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6 border-zinc-100" })}
                      </div>
                      <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter leading-tight font-manrope italic">{it.t}</h4>
                      <p className="text-zinc-500 font-inter italic leading-relaxed text-sm mb-10 italic pr-8 italic pr-6 group-hover:text-neutral-900 transition-colors">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Benefits & Perks */}
        <section className="py-32 px-8 bg-neutral-900 text-white mx-4 rounded-[64px] border border-white/5 relative overflow-hidden font-manrope italic pr-12">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10 font-manrope italic pr-12 pr-6">
              <div className="order-2 lg:order-1 font-manrope italic pr-12 pr-6">
                  {[
                    { t: "Equity & Ownership", d: "Every team member is a true shareholder with meaningful equity in the mission.", i: <Layers /> },
                    { t: "Global Flexibility", d: "Work from our hubs or build remotely from where you are most effective.", i: <Globe /> },
                    { t: "Deep Learning Fund", d: "Continuous budget for technical books, courses, and global security conferences.", i: <Sparkles /> },
                    { t: "Health & Wellbeing", d: "Premium medical coverage and wellness support for you and your family.", i: <Heart /> }
                  ].map((it, i) => (
                    <div key={i} className="flex gap-8 group font-manrope italic mb-10 last:mb-0">
                       <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-[28px] flex items-center justify-center shrink-0 group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all font-manrope">
                          {React.cloneElement(it.i as React.ReactElement, { className: "w-6 h-6 border-white/10 font-manrope" })}
                       </div>
                       <div>
                          <h4 className="text-xl font-bold mb-2 uppercase italic tracking-tighter font-manrope italic pr-6">{it.t}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed italic pr-12 italic font-manrope italic pr-12">{it.d}</p>
                       </div>
                    </div>
                  ))}
              </div>
              <div className="order-1 lg:order-2 font-manrope italic pr-12">
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight italic uppercase italic leading-tight font-manrope pr-16 pr-12">Built For <br />The Builders.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic leading-relaxed pr-8 font-manrope italic pr-16 pr-12 pr-12">We provide the technical and cultural support to help you achieve the best work of your career.</p>
                 <div className="p-10 bg-white/5 border border-white/10 rounded-[48px] font-bold text-xs uppercase italic tracking-tighter font-inter pr-12 leading-tight italic pr-10 pr-12 group hover:border-brand-lime transition-all">
                    "Deep Sense is not a place to just have a job—it is a place to define the technological future of financial trust."
                 </div>
              </div>
           </div>
        </section>

        {/* 6. Open Roles */}
        <section id="open-roles" className="py-32 px-8 font-manrope italic pr-10">
           <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope text-neutral-900 mb-20 tracking-tight italic uppercase italic">Current Openings</h2>
              
              <div className="w-full max-w-5xl space-y-6">
                {[
                  { cat: "Engineering", title: "Senior ML Engineer (Fraud Systems)", location: "Remote / Lagos Hub / Dubai", type: "Full-Time", i: <Code /> },
                  { cat: "Engineering", title: "Infrastructure Engineer (Golang/Kubernetes)", location: "Remote / Dubai Hub", type: "Full-Time", i: <Layers /> },
                  { cat: "Data Science", title: "Behavioral Data Scientist", location: "Remote / Lagos Hub", type: "Full-Time", i: <BarChart3 /> },
                  { cat: "Product", title: "Technical Product Manager (API Platform)", location: "Remote / Dubai Hub", type: "Full-Time", i: <Smartphone /> },
                  { cat: "Sales & Advisory", title: "Institutional Risk Lead", location: "Lagos / Global", type: "Full-Time", i: <Globe /> }
                ].map((role, idx) => (
                  <div key={idx} className="p-8 bg-white border border-zinc-100 rounded-[32px] hover:border-brand-lime hover:shadow-2xl transition-all group flex flex-col md:flex-row justify-between items-center text-left font-manrope">
                    <div className="flex gap-6 items-center mb-6 md:mb-0">
                       <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-xl flex items-center justify-center text-zinc-400 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all">
                          {React.cloneElement(role.i as React.ReactElement, { className: "w-6 h-6" })}
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[9px] font-black uppercase text-brand-lime mb-1 tracking-widest">{role.cat}</span>
                          <h4 className="text-xl font-bold italic uppercase tracking-tighter leading-tight">{role.title}</h4>
                       </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-center">
                       <div className="flex flex-col md:items-end italic">
                          <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest italic">{role.location}</span>
                          <span className="text-xs font-bold leading-tight">{role.type}</span>
                       </div>
                       <button className="px-8 py-3 bg-neutral-900 text-white rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-brand-lime hover:text-neutral-900 transition-all">
                          Apply Now
                       </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-20 p-12 bg-zinc-50 border border-zinc-100 rounded-[56px] max-w-2xl group cursor-pointer hover:border-brand-lime transition-all">
                 <h4 className="text-2xl font-black italic uppercase leading-tight mb-4 group-hover:text-emerald-600 transition-colors">Don't see a fit?</h4>
                 <p className="text-zinc-500 text-sm mb-10 italic pr-8 italic font-manrope pr-6">We are always looking for non-conformist talent in engineering, design, and risk. Send us your work and tell us what you want to build.</p>
                 <span className="text-emerald-500 font-black uppercase tracking-widest text-xs underline underline-offset-8">General Application</span>
              </div>
           </div>
        </section>

        {/* 9. Final CTA */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center font-manrope italic">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-brand-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 font-manrope italic" />
              <div className="relative z-10 flex flex-col items-center text-center font-manrope italic pr-12">
                 <span className="text-zinc-500 font-black tracking-widest text-[10px] uppercase mb-8 italic">Ready to make an impact?</span>
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope pr-6 pr-6 italic font-manrope pr-10 leading-tight">
                   Join The <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope italic">Future of Trust.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors pr-12 font-manrope italic pr-10">
                    Explore the frontier of institutional intelligence and build the next decade of secure global finance.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-white text-neutral-900 rounded-full hover:bg-brand-lime transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase font-manrope italic font-manrope">
                     All Open Roles
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase font-manrope italic pr-12 font-manrope">
                     Team Mission
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
