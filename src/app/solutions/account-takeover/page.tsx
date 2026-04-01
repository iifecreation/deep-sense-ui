"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  UserCheck, 
  ShieldAlert, 
  Monitor, 
  Globe, 
  Clock, 
  Zap, 
  CheckCircle2, 
  Activity, 
  Network, 
  Lock, 
  MessageSquareQuote,
  ArrowRight,
  Cpu
} from "lucide-react";

const behavioralSignals = [
  { t: "Login Anomalies", d: "Detect logins from unusual times or geolocations.", i: <Clock /> },
  { t: "Action Bursts", d: "Identify rapid, non-human account activity.", i: <Zap /> },
  { t: "Behavioral Shifts", d: "Detect deviations from established user patterns.", i: <Activity /> },
  { t: "Linked Accounts", d: "Uncover coordinated abuse across user pools.", i: <Network /> }
];

export default function AccountTakeoverPage() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1000px] mx-auto relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <UserCheck className="w-3.5 h-3.5" />
               Continuous Account Protection
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Stop Account <br />
               <span className="text-zinc-300 italic">Takeover (ATO).</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
               Deep Sense detects suspicious logins, abnormal behavior, and compromised accounts in real time — protecting your users and your platform reputation.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl">
                  Request Demo
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl">
                  Get Started
                </button>
             </div>
          </div>
        </section>

        {/* 🚨 THE PROBLEM & 💡 THE SOLUTION */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">The ATO Escalation.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Stolen credentials are widely available. Fraudsters bypass basic authentication easily, and damage escalates quickly once an account is taken over.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Credential Theft", d: "Millions of leaked passwords." },
                      { l: "Auth Bypass", d: "2FA is no longer a silver bullet." },
                      { l: "Rapid Damage", d: "Monetary loss occurs in minutes." },
                      { l: "Detection Delay", d: "Most systems find out days later." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-white text-[10px] uppercase tracking-widest mb-1">{it.l}</h5>
                            <p className="text-[10px] text-white/20 font-inter leading-relaxed">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <ShieldAlert className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8">Real-Time Protection.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed">Deep Sense monitors user behavior, devices, and activity patterns to detect account takeovers as they attempt to happen.</p>
                 <div className="grid grid-cols-1 gap-4">
                    {[
                      { l: "Real-Time Login Monitoring", s: "Every session start is analyzed." },
                      { l: "Behavioral Anomaly Detection", s: "Normal vs Abnormal user paths." },
                      { l: "Device Fingerprinting", s: "Identify unknown or risky devices." }
                    ].map((it, i) => (
                      <div key={i} className="p-6 bg-white/5 rounded-[32px] border border-white/5 flex gap-6 items-center">
                         <div className="w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center text-neutral-900">
                            <Zap className="w-4 h-4" />
                         </div>
                         <div>
                            <h6 className="text-[10px] font-bold uppercase tracking-widest text-white">{it.l}</h6>
                            <p className="text-[10px] text-white/40 font-inter">{it.s}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* ⚙️ HOW IT WORKS (FLOW) */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope underline decoration-zinc-100 decoration-8 underline-offset-16">Suspicious Activity Detection.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">Deep Sense analyzes the full context of every account action to identify compromise before loss occurs.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center text-center">
                 {[
                   { l: "Action", d: "User logs in or acts" },
                   { l: "Context", d: "Ingest behavior/device signals" },
                   { l: "Signals", d: "Generate risk markers" },
                   { l: "Scoring", d: "Calculate risk probabilities" },
                   { l: "Response", d: "Flag / Verify / Block" }
                 ].map((step, i) => (
                   <React.Fragment key={i}>
                    <div className="p-10 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-2xl transition-all group">
                       <div className="w-12 h-12 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-6 mx-auto group-hover:scale-110 transition-transform">
                          <span className="font-bold text-sm italic">0{i+1}</span>
                       </div>
                       <h4 className="text-lg font-bold italic uppercase tracking-tight mb-2">{step.l}</h4>
                       <p className="text-[10px] text-zinc-400 font-inter leading-relaxed uppercase tracking-widest">{step.d}</p>
                    </div>
                    {i < 4 && <div className="hidden lg:flex justify-center"><ArrowRight className="w-6 h-6 text-zinc-100" /></div>}
                   </React.Fragment>
                 ))}
              </div>
           </div>
        </section>

        {/* 🧠 BEHAVIORAL & 📱 DEVICE INTELLIGENCE */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100 mt-24">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-zinc-200 decoration-8 underline-offset-16 font-manrope text-neutral-900">Behavioral Signals.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px] leading-relaxed">Detect deviations from established user patterns across every account interaction point.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {behavioralSignals.map((sig, i) => (
                      <div key={i} className="p-8 bg-white border border-gray-100 shadow-sm rounded-[40px] hover:shadow-xl transition-all">
                         <div className="text-neutral-900 mb-6">{React.cloneElement(sig.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}</div>
                         <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight italic font-manrope">{sig.t}</h5>
                         <p className="text-[10px] text-zinc-400 font-inter leading-relaxed">{sig.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[88px] p-12 lg:p-24 text-white shadow-3xl relative overflow-hidden group border border-white/10">
                 <Monitor className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-600 opacity-5 group-hover:scale-110 transition-transform" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">Device Intelligence.</h3>
                 <div className="space-y-10">
                    {[
                      { l: "New or Unknown Devices", d: "Instantly flag first-time hardware logins." },
                      { l: "Cross-Account Usage", d: "Identify devices shared by multiple users." },
                      { l: "Risky Fingerprints", d: "Block reused hardware with known fraud history." },
                      { l: "Impossible Travel", d: "Detect rapid geolocational shifts." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-8 group/item">
                         <div className="w-1.5 h-12 bg-brand-lime group-hover/item:bg-white transition-all duration-500" />
                         <div>
                            <h5 className="font-bold text-white uppercase text-[11px] mb-1 tracking-tight">{it.l}</h5>
                            <p className="text-[11px] text-white/30 font-inter leading-relaxed max-w-[300px]">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🌍 LOCATION & 🕸️ LINKED ACCOUNTS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center lg:text-left">
              {[
                { 
                  t: "Contextual Access.", 
                  d: "Every login is evaluated against geolocation, IP history, and ISP patterns to identify mismatched signals.", 
                  i: <Globe />,
                  l: ["Mismatched IPs", "Unusual Geos", "ISP Analysis"]
                },
                { 
                  t: "Linked Account Detection.", 
                  d: "Identity coordinated abuse across account clusters using shared device fingerprints and behavioral markers.", 
                  i: <Network />,
                  l: ["Network Analysis", "Device Sharing", "Identity Links"]
                },
                { 
                  t: "Continuous Monitoring.", 
                  d: "We protect accounts beyond the login, monitoring every post-auth action for high-risk behavioral shifts.", 
                  i: <Lock />,
                  l: ["Post-auth scans", "Session tracking", "Action monitoring"]
                }
              ].map((b, i) => (
                <div key={i} className="p-12 bg-white border border-gray-100 rounded-[72px] hover:shadow-2xl transition-all group flex flex-col items-center text-center">
                   <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-10 group-hover:rotate-12 transition-transform">
                      {React.cloneElement(b.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                   </div>
                   <h3 className="text-2xl font-bold italic uppercase tracking-tighter mb-8 italic">{b.t}</h3>
                   <p className="text-sm text-zinc-500 font-inter italic leading-relaxed mb-10">“{b.d}”</p>
                   <div className="mt-auto pt-8 border-t border-gray-50 flex flex-wrap justify-center gap-2 text-[9px] font-bold uppercase tracking-widest text-zinc-300">
                      {b.l.map((tag, j) => (
                        <span key={j}>{tag}</span>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* ⚡ REAL-TIME RESPONSE & 🏭 USE CASES */}
        <section className="py-40 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Act Immediately.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">By reducing response time from minutes to milliseconds, Deep Sense ensures compromise is halted and fraud teams are alerted of cluster abuse.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      "Flag suspicious activity",
                      "Require additional verification",
                      "Block high-risk actions",
                      "Instant fraud team alerts"
                    ].map((act, i) => (
                      <div key={i} className="flex gap-4 items-center">
                         <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                         <span className="text-[10px] font-bold uppercase tracking-widest text-white">{act}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <Cpu className="w-40 h-40 absolute top-0 right-0 p-12 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-12 italic">ATO Scenarios.</h3>
                 <div className="space-y-10">
                    {[
                      { s: "Compromised Credentials", d: "Block logins from leaked database pools." },
                      { s: "Phishing Attacks", d: "Detect abnormal user behavior post-login." },
                      { s: "Credential Stuffing", d: "Identify rapid, coordinated login attempts." },
                      { s: "Session Hijacking", d: "Flag sudden context changes in active sessions." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-6 items-start group/item">
                         <div className="w-1.5 h-12 bg-white/10 group-hover/item:bg-brand-lime transition-all duration-500" />
                         <div>
                            <h5 className="font-bold text-white uppercase text-[11px] mb-1 tracking-tight">{it.s}</h5>
                            <p className="text-[10px] text-white/30 font-inter leading-relaxed">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 🆚 WHY DEEP SENSE FOR ATO */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100 mt-24">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <div className="mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16">Stronger Protection.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">See how Deep Sense behavioral intelligence compares to traditional static authentication systems.</p>
              </div>

              <div className="overflow-x-auto text-left">
                 <table className="w-full border-collapse font-manrope">
                    <thead>
                       <tr className="border-b border-gray-200 uppercase tracking-widest text-[11px] text-zinc-400">
                          <th className="py-10 px-8 font-bold italic">Security Capability</th>
                          <th className="py-10 px-8 font-bold text-neutral-900 italic">Deep Sense</th>
                          <th className="py-10 px-8 font-bold text-zinc-200 italic">Traditional Systems</th>
                       </tr>
                    </thead>
                    <tbody className="italic">
                       {[
                         { c: "Real-Time Detection", d: "Yes (Instant)", s: "Often Delayed" },
                         { c: "Device Behavior Tracking", d: "Yes (Advanced)", s: "Limited" },
                         { c: "Behavioral Intelligence", d: "Yes (Continuous)", s: "Basic / Static" },
                         { c: "Network Coordination", d: "Yes (Automated)", s: "None / Manual" },
                         { c: "Post-Auth Monitoring", d: "Yes", s: "None" }
                       ].map((row, i) => (
                         <tr key={i} className="border-b border-gray-100 group hover:bg-neutral-100 transition-all">
                            <td className="py-10 px-8 text-lg font-bold italic uppercase tracking-tight text-neutral-900">{row.c}</td>
                            <td className="py-10 px-8 text-brand-lime font-black">
                               <div className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-neutral-900" />
                                  {row.d}
                               </div>
                            </td>
                            <td className="py-10 px-8 text-zinc-200 font-bold">{row.s}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>

        {/* 📊 BUSINESS IMPACT & 💬 TRUST */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16 font-manrope text-neutral-900">Protect Users & Trust.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">ATO prevention is about more than money — it&apos;s about preserving the long-term integrity of your platform.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Reduce Account Fraud", d: "Directly lower incident rates." },
                      { l: "Protect Customer Data", d: "Ensure user privacy is absolute." },
                      { l: "Improve User Trust", d: "Build confidence in your security." },
                      { l: "Prevent Financial Loss", d: "Stop transactions before loss." }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                         <h5 className="font-bold text-neutral-900 text-xs mb-1 uppercase tracking-tight italic">{it.l}</h5>
                         <p className="text-[10px] text-zinc-400 font-inter">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden group border border-white/5 shadow-3xl">
                 <MessageSquareQuote className="w-24 h-24 text-brand-lime opacity-10 absolute bottom-0 right-0 p-8" />
                 <h3 className="text-3xl font-bold italic uppercase tracking-tighter mb-12">User Security.</h3>
                 <ul className="space-y-12">
                    {[
                      "We detected account takeovers instantly using behavioral deviations.",
                      "User protection improved significantly across our entire platform.",
                      "The device intelligence Layer is a game-changer for our fintech stack."
                    ].map((quote, i) => (
                      <li key={i} className="flex gap-8 group/quote">
                         <div className="w-1.5 h-12 bg-brand-lime group-hover/quote:h-16 transition-all duration-500" />
                         <p className="text-xl font-manrope italic text-white/60 group-hover/quote:text-white transition-colors">“{quote}”</p>
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 origin-center pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">Protect Your <br /><span className="opacity-30">Users.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic">Stop account takeover before the damage escalates.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-white group-hover:text-neutral-900 font-manrope">
                      Request Demo
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10 font-manrope">
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
