"use client";

import React from "react";
import { 
  BadgeCheck, 
  Shield, 
  Search, 
  UserCheck, 
  AlertTriangle, 
  ArrowRight, 
  Zap, 
  Database, 
  Layers, 
  UserPlus, 
  FileSearch,
  BookOpen,
  Network,
  Lock,
  RefreshCw,
  Scale,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function KYCOnboardingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 translate-x-1/3 -translate-y-1/3" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime/10 border border-brand-lime/20 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>KYC & Digital Onboarding</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-manrope leading-[1.05] mb-8 tracking-tighter text-neutral-900 max-w-5xl">
              Onboard Customers with <span className="text-indigo-600 italic font-medium">Confidence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-3xl mb-12">
              Deep Sense helps financial institutions verify identity, assess onboarding risk, and detect suspicious applicants before they become customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold font-manrope shadow-2xl hover:bg-neutral-800 transition-all hover:-translate-y-1 active:scale-95 text-lg">
                Request Demo
              </button>
              <button className="px-10 py-5 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full font-bold font-manrope hover:bg-neutral-50 transition-all active:scale-95 text-lg">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>

        {/* 2. The Problem */}
        <section className="py-24 bg-zinc-50 px-8">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div className="order-2 lg:order-1 relative">
                  <div className="absolute inset-0 bg-red-500/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-12 rounded-[56px] border border-zinc-200 shadow-2xl overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8">
                       <AlertTriangle className="w-24 h-24 text-red-50/50" />
                     </div>
                     <h3 className="text-2xl font-bold mb-8 italic text-neutral-900">Risk Starts at Onboarding</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10">"A risky customer should be identified before the first transaction."</p>
                     <ul className="space-y-6">
                        {[
                          "Fraudsters exploit weak onboarding flows to bypass controls.",
                          "Fake identities and synthetic profiles slip through basic KYC.",
                          "Manual review bottlenecks slow down customer acquisition growth.",
                          "Poor onboarding controls drastically increase AML and fraud risk."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4">
                             <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                             </div>
                             <span className="text-zinc-600 font-medium text-sm">{item}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="order-1 lg:order-2 text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">The Vulnerability of Acquisition</h2>
                  <p className="text-zinc-500 text-lg mb-12 max-w-xl mx-auto lg:mx-0">Acquisition is the most critical point in the customer lifecycle. If identity and risk aren't verified here, every subsequent monitoring effort becomes reactive.</p>
                  <div className="inline-flex items-center gap-6 p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm border-l-4 border-l-brand-lime text-left">
                     <UserPlus className="w-10 h-10 text-brand-lime shrink-0" />
                     <p className="text-sm font-bold text-neutral-800 italic">Fraudulent onboarding costs institutions billions in operational remediation and regulatory fines.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution & Key Capabilities */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto text-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900">KYC-Aware Risk Intelligence</h2>
            <p className="text-xl text-zinc-500 max-w-4xl mx-auto mb-20">Deep Sense strengthens onboarding by combining identity checks, risk profiling, sanctions screening, and fraud intelligence in one seamless workflow.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
              {[
                { title: "Risk Assessment", desc: "Evaluate onboarding risk signals in real-time.", icon: <Scale /> },
                { title: "Identity Verification", desc: "Support for automated ID validation and biometrics.", icon: <UserCheck /> },
                { title: "Watchlist Screening", desc: "Automated Sanctions and PEP checks on application.", icon: <Globe /> },
                { title: "Classification", desc: "Assign initial enterprise risk scores immediately.", icon: <Layers /> },
                { title: "Escalation", desc: "Route high-risk apps to manual review queues.", icon: <AlertTriangle /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors uppercase tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-20 translate-y-1/2" />
           <div className="max-w-[1440px] mx-auto text-center relative z-10">
              <h2 className="text-5xl font-bold font-manrope mb-20 tracking-tight">From Application to Decision</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative text-center">
                 {[
                   { label: "Submission", sub: "Onboarding details captured", icon: <Database /> },
                   { label: "Evaluation", sub: "Identity & data analyzed", icon: <Search /> },
                   { label: "Screening", sub: "Sanctions & PEP check run", icon: <Shield /> },
                   { label: "Profiling", sub: "Onboarding risk profile created", icon: <Layers /> },
                   { label: "Decision", sub: "Approve, Review, or Escalate", icon: <Zap /> }
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center mb-8 relative group-hover:bg-brand-lime group-hover:text-black transition-all shadow-xl group-hover:scale-105">
                         {React.cloneElement(item.icon as React.ReactElement, { className: "w-10 h-10" })}
                         <div className="absolute -top-3 -right-3 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-black border-4 border-zinc-900">
                           {i+1}
                         </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{item.label}</h4>
                      <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest leading-relaxed px-4">{item.sub}</p>
                      {i < 4 && <ArrowRight className="hidden md:block absolute top-[48px] w-6 h-6 text-white/10" style={{ left: `${(i+1)*20}%`, transform: 'translateX(-50%)' }} />}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. Identity Support & 6. Risk Assessment */}
        <section className="py-32 px-8 overflow-hidden">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Strengthen Customer Identification</h2>
                 <p className="text-zinc-500 text-lg mb-12">Deep Sense supports onboarding workflows that require identification, digital onboarding support, and due diligence inputs as mandated by the CBN and global AML standards.</p>
                 
                 <div className="space-y-6">
                    {[
                      { title: "Customer Identification", sub: "Standardized capturing of essential identity variables." },
                      { title: "Identity Verification Support", sub: "Integration with IDV providers for document validation." },
                      { title: "Due Diligence Inputs", sub: "Gathering supporting evidence for high-risk profiles." },
                      { title: "Risk-Based Review Triggers", sub: "Automated thresholds for manual compliance sign-off." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <div className="w-2 h-12 bg-indigo-50 rounded-full group-hover:bg-brand-lime transition-colors" />
                         <div>
                            <h4 className="font-bold text-neutral-900">{item.title}</h4>
                            <p className="text-sm text-zinc-500 italic">{item.sub}</p>
                         </div>
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mt-20 mb-8 tracking-tight">Assess Risk Before Activation</h2>
                 <p className="text-zinc-500 text-sm mb-12">Every applicant is evaluated against a multi-dimensional risk matrix before they are ever activated in your core systems.</p>
                 <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Identity Signals", icon: <UserCheck /> },
                      { label: "Profile Data", icon: <Database /> },
                      { label: "Screening Results", icon: <Shield /> },
                      { label: "Device Signals", icon: <Zap /> }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col items-center text-center gap-4 hover:bg-white hover:shadow-xl transition-all">
                         <div className="text-indigo-600">{item.icon}</div>
                         <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="aspect-square bg-white rounded-[64px] shadow-2xl p-16 relative overflow-hidden border border-zinc-100">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-50 via-transparent to-transparent opacity-50" />
                 <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-16">
                       <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">KYC Status Analysis</span>
                       <BadgeCheck className="text-indigo-600" />
                    </div>
                    <div className="space-y-6 mb-16">
                       <div className="h-6 w-full bg-indigo-50 rounded-full animate-pulse" />
                       <div className="h-6 w-2/3 bg-indigo-50 rounded-full animate-pulse delay-75" />
                       <div className="h-24 w-full bg-indigo-50/50 rounded-3xl border border-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-400 uppercase italic tracking-widest">Processing Entity Match...</div>
                    </div>
                    <div className="mt-auto pt-8 border-t border-zinc-100 flex items-center gap-6">
                       <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-500">
                          <AlertTriangle className="w-8 h-8" />
                       </div>
                       <div>
                          <div className="text-sm font-black italic">ALERT: HIGH RISK IDENTIFIED</div>
                          <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">PEP Match Found during Onboarding</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. Automated Screening & 9. Risk Profiles */}
        <section className="py-32 px-8 bg-zinc-50 overflow-hidden relative">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-10 tracking-tight leading-[1.1]">Run Critical Screening Automatically</h2>
                 <p className="text-zinc-500 text-lg leading-relaxed mb-12">Deep Sense can trigger mandatory screening rituals the moment application data is received, ensuring no high-risk entity is onboarded.</p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { title: "Sanctions Screening", icon: <Globe /> },
                      { title: "Terrorism Watchlists", icon: <Shield /> },
                      { title: "Internal Watchlists", icon: <History /> },
                      { title: "PEP Screening", icon: <Users /> }
                    ].map((item, i) => (
                      <div key={i} className="p-8 bg-white border border-zinc-100 rounded-[32px] group hover:bg-neutral-900 transition-all shadow-sm">
                         <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-brand-lime group-hover:text-neutral-900 transition-colors">
                            {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6" })}
                         </div>
                         <h4 className="font-bold group-hover:text-white transition-colors">{item.title}</h4>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="flex flex-col gap-8">
                  <div className="p-12 bg-neutral-900 rounded-[56px] text-white shadow-xl relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8">
                        <Layers className="w-24 h-24 text-white/5 group-hover:text-brand-lime/10 transition-colors" />
                     </div>
                     <h3 className="text-3xl font-bold mb-8 italic">Start Every Relationship with a Risk Profile</h3>
                     <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">Deep Sense assigns an initial risk level at onboarding and carries it into ongoing transaction monitoring and AML workflows, ensuring a unified customer view.</p>
                     <div className="mt-12 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full border-2 border-brand-lime flex items-center justify-center text-brand-lime font-black text-xs italic">KYC</div>
                        <ArrowRight className="w-6 h-6 text-zinc-700" />
                        <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white/20 font-black text-xs italic">AML</div>
                        <ArrowRight className="w-6 h-6 text-zinc-700" />
                        <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white/20 font-black text-xs italic">SAR</div>
                     </div>
                  </div>
                  <div className="p-12 bg-indigo-50 rounded-[56px] border border-indigo-100">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-6">Escalation & Review</h3>
                    <div className="space-y-4">
                       {[
                         "Alert Generation for Matches",
                         "Manual Review Queuing",
                         "Compliance Tier Escalation",
                         "Investigation-Ready Cases"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm font-bold text-indigo-900 bg-white p-4 rounded-2xl border border-indigo-100/50 shadow-sm">
                           <CheckCircle2 className="text-brand-lime w-4 h-4 shrink-0" />
                           {item}
                         </div>
                       ))}
                    </div>
                  </div>
              </div>
           </div>
        </section>

        {/* 10. Integration & 11. Auditability */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Fit Into Your Existing Stack</h2>
                 <p className="text-zinc-500 text-lg mb-12">Deep Sense integrates seamlessly with your customer onboarding platforms, IDV providers, and internal compliance systems.</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: <Code color="indigo" />, label: "Onboarding Platforms" },
                      { icon: <UserCheck color="indigo" />, label: "IDV Providers" },
                      { icon: <Database color="indigo" />, label: "Banking Applications" },
                      { icon: <Shield color="indigo" />, label: "Compliance Systems" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-zinc-200 font-bold text-sm shadow-sm group">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                           {item.icon}
                        </div>
                        {item.label}
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-12 bg-zinc-50 rounded-[56px] border border-zinc-200">
                 <h2 className="text-3xl font-bold mb-10 italic">Traceable Onboarding Decisions</h2>
                 <div className="space-y-10">
                    {[
                      { title: "Record Results", desc: "Preserve every screening outcome and ID match permanently.", icon: <BookOpen /> },
                      { title: "Track Actions", desc: "Complete history of reviewer decisions and overrides.", icon: <FileSearch /> },
                      { title: "Maintain Logs", desc: "Audit logs ready for internal compliance and regulatory review.", icon: <Lock /> }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6">
                         <div className="w-12 h-12 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group hover:bg-neutral-900 transition-colors">
                            {React.cloneElement(item.icon as React.ReactElement, { className: "w-6 h-6 text-indigo-600" })}
                         </div>
                         <div>
                            <h4 className="font-bold text-neutral-900 mb-1 leading-tight">{item.title}</h4>
                            <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 12. Comparison Table */}
        <section className="py-32 px-8 bg-zinc-50 mx-4 rounded-[64px] border border-zinc-200">
           <div className="max-w-[1000px] mx-auto">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 text-center mb-20">Go Beyond Basic KYC Checks</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Basic KYC Tools</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600">
                       {[
                         "Risk-based onboarding",
                         "Integrated Sanctions/PEP checks",
                         "Fraud + AML signals combined",
                         "Tiered escalation workflows",
                         "Automated risk profile creation"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium font-manrope">
                               Limited / Separate
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 13. Impact & 14. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1]">
                   Modernize Your <br />
                   <span className="text-brand-lime italic font-black text-6xl italic">Customer Onboarding.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
                   Detect risky customers earlier, reduce onboarding fraud, and support full AML compliance from day one with the Deep Sense risk engine.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                   <button className="px-12 py-6 bg-brand-lime text-neutral-900 rounded-full font-black font-manrope hover:bg-white transition-all hover:scale-105 active:scale-95 text-lg shadow-2xl shadow-brand-lime/10">
                     Request Demo
                   </button>
                   <button className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full font-bold font-manrope hover:bg-white hover:text-neutral-900 transition-all text-lg">
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

function GlobeIcon({ className, color }: { className?: string, color?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color === "indigo" ? "#4f46e5" : "currentColor"}
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function CodeIcon({ className, color }: { className?: string, color?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color === "indigo" ? "#4f46e5" : "currentColor"}
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function HistoryIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}
