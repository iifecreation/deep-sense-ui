"use client";

import React from "react";
import { 
  History, 
  Shield, 
  Lock, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Search, 
  Database, 
  Scale, 
  Clock, 
  Eye, 
  DatabaseBackup,
  Key,
  Globe,
  Settings,
  Users,
  FileSearch,
  Filter,
  AlertTriangle
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

export default function AuditTrailsPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />
      
      <main>
        {/* 1. Hero Section */}
        <section className="pt-48 pb-24 px-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-[700px] h-[700px] bg-indigo-50 rounded-full blur-[140px] opacity-60 translate-x-1/4 -translate-y-1/4" />
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-extrabold uppercase tracking-widest mb-8 shadow-2xl">
              <History className="w-3.5 h-3.5" />
              <span>Full Operational Transparency</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-tighter max-w-5xl">
              Complete <span className="text-indigo-600 italic">Audit Trails</span> for Every Action.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-inter leading-relaxed max-w-4xl mb-12 italic">
              Track every decision, user action, and system event with full transparency — ensuring audit readiness and compliance at all times.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 font-bold italic">
              <button className="px-10 py-5 bg-neutral-900 text-white rounded-full shadow-2xl hover:bg-neutral-800 transition-all hover:-translate-y-1 active:scale-95 text-lg">
                Request Demo
              </button>
              <button className="px-10 py-5 bg-white border-2 border-neutral-200 text-neutral-900 rounded-full hover:bg-neutral-50 transition-all active:scale-95 text-lg">
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
                  <div className="absolute inset-0 bg-red-600/5 blur-[100px] rounded-full" />
                  <div className="relative z-10 bg-white p-12 lg:p-16 rounded-[56px] border border-zinc-200 shadow-2xl overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8">
                       <Eye className="w-24 h-24 text-zinc-100 group-hover:text-red-100 transition-all" />
                     </div>
                     <h3 className="text-2xl font-bold mb-8 italic text-neutral-900">Lack of Visibility Creates Compliance Risk</h3>
                     <p className="text-zinc-500 text-sm leading-relaxed mb-10 italic">"If you can’t trace a decision, you can’t defend it."</p>
                     <ul className="space-y-6">
                        {[
                          "Critical compliance decisions are not properly documented.",
                          "Audit logs are often incomplete, fragmented, or missing entirely.",
                          "Investigations cannot be fully traced back to their original signals.",
                          "Regulatory reviews become difficult, lengthly, and high-risk."
                        ].map((item, i) => (
                          <li key={i} className="flex gap-4">
                             <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                             </div>
                             <span className="text-zinc-600 font-medium text-sm italic">{item}</span>
                          </li>
                        ))}
                     </ul>
                  </div>
               </div>
               <div className="order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900 leading-[1.1]">The Vulnerability of Opacity.</h2>
                  <p className="text-zinc-500 text-lg mb-12 italic">Missing or untraceable logs are a primary cause of regulatory fines. Deep Sense ensures that every action is preserved with institutional integrity.</p>
                  <div className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm border-l-4 border-l-brand-lime">
                     <AlertTriangle className="text-brand-lime w-10 h-10 shrink-0" />
                     <p className="text-sm font-bold text-neutral-800 leading-relaxed italic pr-6 italic font-manrope">Ensuring auditability is a non-negotiable requirement for financial governance.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. The Solution & Key Capabilities */}
        <section className="py-32 px-8">
          <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
            <h2 className="text-5xl font-bold font-manrope mb-8 tracking-tight text-neutral-900">End-to-End Auditability</h2>
            <p className="text-xl text-zinc-500 max-w-4xl mx-auto mb-20 italic">Deep Sense records every action across the platform, ensuring that all activities are traceable, verifiable, and ready for review.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {[
                { title: "Full Activity Tracking", desc: "Every user interaction across the UI and API.", icon: <History /> },
                { title: "Decision Traceability", desc: "Understand exactly why a score was assigned.", icon: <Scale /> },
                { title: "Investigation Logs", desc: "Complete timeline of analyst cases and notes.", icon: <FileSearch /> },
                { title: "Compliance-Ready", desc: "Formatted datasets ready for regulatory review.", icon: <BadgeCheck /> }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-100 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors uppercase tracking-tight leading-tight italic">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. How It Works */}
        <section className="py-32 bg-neutral-900 px-8 text-white rounded-[64px] mx-4 relative overflow-hidden text-center">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-20 translate-y-1/2" />
           <div className="max-w-[1440px] mx-auto relative z-10">
              <h2 className="text-5xl font-bold font-manrope mb-20 tracking-tight">Capture Every Action Automatically</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                 {[
                   { l: "Action Occurs", s: "User or system event", i: <Zap /> },
                   { l: "Record", s: "Automatic event capture", i: <历史 /> },
                   { l: "Secure", s: "Tamper-resistant storage", i: <Lock /> },
                   { l: "Review", s: "Accessible for oversight", i: <Search /> },
                   { l: "Actionable", s: "Supports reporting", i: <FileText /> }
                 ].map((it, i) => (
                   <div key={i} className="flex flex-col items-center group">
                      <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center mb-6 relative group-hover:bg-brand-lime group-hover:text-neutral-900 transition-all shadow-xl group-hover:scale-105">
                         {React.cloneElement(it.i as React.ReactElement, { className: "w-10 h-10" })}
                         <div className="absolute -top-3 -right-3 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-black border-4 border-zinc-900">
                           {i+1}
                         </div>
                      </div>
                      <h4 className="text-xl font-bold mb-2 uppercase tracking-tighter italic font-manrope">{it.l}</h4>
                      <p className="text-zinc-500 text-[9px] uppercase font-bold tracking-widest leading-relaxed px-4 italic">{it.s}</p>
                      {i < 4 && <ArrowRight className="hidden md:block absolute top-[48px] w-5 h-5 text-white/10" style={{ left: `${(i+1)*20}%`, transform: 'translateX(-50%)' }} />}
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. User Activity & 6. Decision Traceability */}
        <section className="py-32 px-8 overflow-hidden">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Track Every User Action</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic">Gain complete visibility into how your teams interact with the platform, from login activity to configuration changes.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-20 font-bold text-sm text-neutral-900 italic">
                    {[
                      { icon: <Lock />, label: "Session Login Activity" },
                      { icon: <CheckCircle2 />, label: "Alert Handling Outcomes" },
                      { icon: <Briefcase />, label: "Case Updates & Notes" },
                      { icon: <Settings />, label: "Rules & Configuration Changes" },
                      { icon: <Send />, label: "Report Submissions" },
                      { icon: <Users />, label: "User Access Audits" }
                    ].map((it, i) => (
                      <div key={i} className="flex items-center gap-4 group">
                         <div className="text-indigo-600 group-hover:scale-125 transition-transform">{it.icon}</div>
                         <span>{it.label}</span>
                      </div>
                    ))}
                 </div>

                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight">Understand Every Decision</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic">Deep Sense records the logic behind every outcome. Trace exactly why a transaction was flagged, which rules triggered, and which analyst made the final call.</p>
                 <div className="space-y-4">
                    {[
                      "Trace back to specific data signals",
                      "View rule-matching snapshots at point-of-trigger",
                      "Permanent record of analyst rationales",
                      "Audit the full chain of decision-making authority"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center p-5 bg-zinc-50 rounded-2xl border border-zinc-100 group hover:bg-white hover:shadow-xl transition-all">
                         <div className="w-2 h-10 bg-indigo-100 group-hover:bg-brand-lime transition-all rounded-full" />
                         <span className="text-sm font-bold uppercase tracking-tight italic">{item}</span>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="p-12 lg:p-24 bg-neutral-900 rounded-[80px] text-white shadow-3xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[150px] opacity-10 pointer-events-none" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12 border-b border-white/10 pb-10">Live Decision Trace</h3>
                 <div className="space-y-8 relative z-10 font-mono text-[10px]">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                       <div className="text-brand-lime font-black mb-4 tracking-widest">SIGNAL_TRIGGERED: VELOCITY_HIGH</div>
                       <div className="text-zinc-400 leading-relaxed italic pr-8">Logic: User [ID_821] attempted 5 transactions in [120s]. Threshold: 3.</div>
                    </div>
                    <div className="flex gap-6 items-center">
                       <div className="w-12 h-12 bg-indigo-600 border border-indigo-400 rounded-2xl flex items-center justify-center shrink-0 shadow-lg italic font-black uppercase tracking-tighter shadow-indigo-500/20">RULE</div>
                       <ArrowRight className="text-zinc-700" />
                       <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 italic font-black uppercase tracking-tighter">CASE</div>
                       <ArrowRight className="text-zinc-700" />
                       <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center justify-center shrink-0 italic font-black uppercase tracking-tighter">SAR</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 7. Investigation History & 8. System Logs */}
        <section className="py-32 px-8 bg-zinc-50 rounded-[64px] mx-4 border border-zinc-100 mb-24">
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="order-2 lg:order-1 flex flex-col gap-8">
                  <div className="p-10 bg-white border border-zinc-200 rounded-[56px] shadow-sm transform group hover:-translate-y-2 transition-transform">
                     <h4 className="text-2xl font-bold italic mb-6 uppercase tracking-tight font-manrope underline decoration-brand-lime decoration-4 underline-offset-8">Complete Case History</h4>
                     <ul className="space-y-4 text-sm font-bold text-zinc-500 italic">
                        <li className="flex gap-4"><CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" /> Unified case timelines</li>
                        <li className="flex gap-4"><CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" /> Linked alerts and counter-parties</li>
                        <li className="flex gap-4"><CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" /> Narrative investigation notes</li>
                        <li className="flex gap-4"><CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" /> Historical decision outcomes</li>
                     </ul>
                  </div>
                  <div className="p-10 bg-neutral-900 text-white rounded-[56px] shadow-3xl">
                     <h4 className="text-2xl font-bold italic mb-6 uppercase tracking-tight font-manrope text-indigo-400">Track System Changes</h4>
                     <p className="text-xs text-zinc-400 italic mb-8">Maintain a versioned history of every logic update within your environment.</p>
                     <div className="grid grid-cols-2 gap-4 uppercase font-black text-[9px] tracking-widest">
                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">Rule Updates</div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">Model Tuning</div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">Env Configs</div>
                        <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">Admin Events</div>
                     </div>
                  </div>
              </div>
              <div className="order-1 lg:order-2">
                 <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-8 tracking-tight leading-[1.1]">Full Context Audit.</h2>
                 <p className="text-zinc-500 text-lg mb-12 italic">Regulators don't just want the result—they want the proof. Deep Sense provides a permanent, searchable record of the entire compliance lifecycle.</p>
                 <div className="flex items-center gap-6 p-8 bg-white border border-zinc-100 rounded-[32px] shadow-sm">
                    <History className="text-indigo-600 w-12 h-12 shrink-0 animate-spin-slow" />
                    <p className="text-sm font-bold text-neutral-800 italic pr-8 italic">"Transition from periodic audit preparation to continuous audit readiness."</p>
                 </div>
              </div>
           </div>
        </section>

        {/* 9. Reporting & Audit Support & 10. Secure Log Storage & 11. Search */}
        <section className="py-32 px-8">
           <div className="max-w-[1440px] mx-auto text-center mb-20 text-center flex flex-col items-center">
              <h2 className="text-5xl font-bold font-manrope tracking-tight mb-8">Ready for Regulatory Review</h2>
              <p className="text-xl text-zinc-500 max-w-3xl mx-auto italic">Our infrastructure is built for high-stakes oversight and internal accountability.</p>
           </div>
           
           <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: "Find it Fast", desc: "Search logs by user, action, or entity. Filter by exact time or specific risk activity types.", icon: <Search /> },
                { title: "Secure Storage", desc: "Tamper-resistant storage architecture with controlled access and data integrity guards.", icon: <Lock /> },
                { title: "Governance Ready", desc: "Built to enable regulatory inspections and demonstrate process integrity under pressure.", icon: <Scale /> }
              ].map((it, i) => (
                <div key={i} className="p-12 bg-white border border-zinc-100 rounded-[56px] text-left hover:shadow-3xl transition-all group overflow-hidden relative">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-lime/20 transition-colors" />
                   <div className="w-14 h-14 bg-neutral-900 text-brand-lime rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                      {React.cloneElement(it.icon as React.ReactElement, { className: "w-6 h-6" })}
                   </div>
                   <h4 className="text-2xl font-bold mb-4 italic uppercase tracking-tighter">{it.title}</h4>
                   <p className="text-zinc-500 italic text-sm leading-relaxed">{it.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* 13. Comparison Table */}
        <section className="py-32 px-8">
           <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center">
              <h2 className="text-4xl font-bold font-manrope text-neutral-900 mb-10 uppercase italic">Full Transparency by Design</h2>
              <div className="bg-white rounded-[40px] border border-zinc-200 overflow-hidden shadow-2xl w-full text-left">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-neutral-900 text-white font-manrope text-left">
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic">Capability</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center bg-indigo-600">Deep Sense</th>
                          <th className="p-8 font-black uppercase tracking-widest text-[10px] italic border-l border-white/10 text-center">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="font-bold text-sm text-neutral-600 italic">
                       {[
                         "Complete activity logs",
                         "Granular decision traceability",
                         "Unified investigation history",
                         "System configuration tracking",
                         "Point-in-time logic snapshots"
                       ].map((feat, i) => (
                         <tr key={i} className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors">
                            <td className="p-8">{feat}</td>
                            <td className="p-8 text-center border-l border-zinc-50">
                               <CheckCircle2 className="w-6 h-6 text-brand-lime mx-auto" strokeWidth={3} />
                            </td>
                            <td className="p-8 text-center border-l border-zinc-50 italic text-zinc-300 font-medium">
                               Partial / Fragmented
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 15. Positioning Note */}
        <section className="py-32 px-8 flex justify-center">
           <div className="max-w-4xl p-12 bg-indigo-50 border border-indigo-100 rounded-[56px] text-center">
              <h3 className="text-2xl font-bold text-indigo-900 mb-6 italic uppercase underline decoration-indigo-200 decoration-4 underline-offset-8">Supports Governance Frameworks</h3>
              <p className="text-indigo-700 italic leading-relaxed text-sm">Deep Sense provides the essential audit infrastructure required for institutional compliance. Our system is designed to be utilized as a critical pillar within your organization’s broader governance, risk, and control framework.</p>
           </div>
        </section>

        {/* 16. CTA Section */}
        <section className="pt-24 pb-48 px-8 flex flex-col items-center text-center">
           <div className="max-w-[1200px] mx-auto bg-neutral-900 rounded-[64px] p-24 relative overflow-hidden group shadow-3xl text-white">
              <div className="absolute inset-0 bg-brand-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative z-10 flex flex-col items-center">
                 <h2 className="text-5xl md:text-7xl font-bold font-manrope text-white mb-10 tracking-tight leading-[1.1] uppercase italic font-manrope">
                   Ensure Full <br />
                   <span className="text-brand-lime font-black text-6xl italic leading-none font-manrope">Auditability.</span>
                 </h2>
                 <p className="text-zinc-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed italic pr-6 group-hover:text-white transition-colors">
                   Simplify your regulatory audits, improve accountablity, and operate with total confidence. Build an unbreakable chain of trust for every action across your risk operations.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center italic font-bold">
                   <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-black hover:bg-white transition-all hover:scale-105 active:scale-95 text-xl tracking-tighter uppercase">
                     Request Audit Demo
                   </button>
                   <button className="px-14 py-7 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white hover:text-neutral-900 transition-all text-xl tracking-tighter uppercase">
                     Talk to Sales
                   </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

function BadgeCheckIcon({ className }: { className?: string }) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
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
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
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
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
