"use client";

import React from "react";
import { 
  ShieldCheck, 
  ArrowRight, 
  Key, 
  RefreshCw, 
  Terminal, 
  Layers, 
  Users, 
  Activity, 
  FileText, 
  Server, 
  CheckCircle2, 
  AlertTriangle,
  Database,
  Zap,
  Fingerprint
} from "lucide-react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";

const authenticationComparison = [
  { item: "API Key Auth", deepSense: "Yes", typical: "Yes" },
  { item: "Key Rotation", deepSense: "Yes", typical: "Limited" },
  { item: "Webhook Signing", deepSense: "Yes", typical: "Not always" },
  { item: "RBAC Controls", deepSense: "Yes", typical: "Varies" },
  { item: "Audit Logs", deepSense: "Yes", typical: "Limited" }
];

export default function AuthenticationPage() {
  return (
    <div className="min-h-screen bg-white font-manrope text-neutral-900">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[950px] relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <ShieldCheck className="w-3.5 h-3.5" />
               Enterprise-Grade Authentication
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Secure. Simple. <br />
               <span className="text-zinc-300">Scalable.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed mb-14 max-w-[650px]">
               Deep Sense uses production-grade authentication methods to protect your data and ensure safe API access across all environments — from sandbox to scale.
             </p>
             <div className="flex flex-col sm:row gap-6">
               <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-lg group">
                 Get API Key
                 <ArrowRight className="w-5 h-5 ml-2.5 inline group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="px-10 py-5 bg-white border border-gray-200 rounded-full font-bold text-neutral-900 hover:bg-gray-50 transition-all active:scale-95 text-lg">
                 View API Docs
               </button>
             </div>
          </div>
        </section>

        {/* 🔐 AUTHENTICATION OVERVIEW */}
        <section className="py-24 bg-zinc-50 border-y border-gray-100 relative">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                 {[
                   { t: "API Key-Based", d: "Access endpoints using secure, unique keys tied specifically to your organization's tenant.", i: <Key /> },
                   { t: "Tenant-Scoped", d: "Strict data isolation. Every request is verified against a secure organization scope.", i: <Layers /> },
                   { t: "Request Validation", d: "Every byte of incoming data is checked for integrity and authenticity before processing.", i: <Fingerprint /> }
                 ].map((feat, i) => (
                   <div key={i} className="p-12 bg-white rounded-[48px] border border-gray-100 shadow-sm group hover:shadow-2xl transition-all">
                      <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-8 group-hover:scale-110 transition-transform">
                         {React.cloneElement(feat.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-2xl font-bold font-manrope mb-4 uppercase italic tracking-tight">{feat.t}</h4>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed">{feat.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🔑 API KEYS & ⚙️ HOW TO AUTHENTICATE */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold italic tracking-tighter uppercase leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16">Use API Keys <br />for Secure Access.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic leading-relaxed max-w-[500px]">Each account is assigned secure keys that are revocable, rotatable, and environment-specific.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Unique Per Org", d: "Never shared between tenants." },
                      { l: "Revocable", d: "Instant invalidation if compromised." },
                      { l: "Scoped Control", d: "Key permissions tied to roles." },
                      { l: "Environment-Specific", d: "Separate keys for Sandbox / Prod." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4">
                         <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1" />
                         <div>
                            <h5 className="font-bold text-neutral-900 text-sm uppercase mb-1">{it.l}</h5>
                            <p className="text-xs text-zinc-400 font-inter">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none" />
                 <div className="bg-neutral-900 rounded-[64px] p-12 lg:p-20 text-white relative overflow-hidden shadow-3xl">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
                    <div className="relative z-10 space-y-12 h-full flex flex-col justify-center">
                       <h3 className="text-3xl font-bold italic uppercase tracking-tight text-center">Implementation Example</h3>
                       <div className="space-y-6">
                          <div className="bg-black/50 border border-white/10 p-8 rounded-3xl font-mono text-xs text-white/60">
                             <div className="text-brand-lime mb-4 opacity-50 uppercase text-[10px] tracking-widest font-bold">Standard Header</div>
                             <div className="flex justify-between">
                                <span>Authorization: Bearer</span>
                                <span className="text-white">YOUR_API_KEY</span>
                             </div>
                             <div className="flex justify-between mt-2">
                                <span>Content-Type:</span>
                                <span className="text-white">application/json</span>
                             </div>
                          </div>
                          <p className="text-white/20 text-xs text-center italic font-inter px-8 leading-relaxed">Simply include your secure Bearer token in every HTTPS response for instant authentication.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* 🔒 SECURITY BEST PRACTICES */}
        <section className="py-40 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,247,1,0.03)_0%,transparent_50%)]" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32 max-w-[800px] mx-auto">
                 <h2 className="text-5xl lg:text-8xl font-bold tracking-tighter uppercase italic mb-8">Secure Integration.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[600px] mx-auto leading-relaxed">Always follow production-grade security patterns to protect your keys and your customers.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                 {[
                   { t: "Never expose in Frontend", d: "Keys must only reside on secure backend servers.", i: <AlertTriangle /> },
                   { t: "Store in Env vars", d: "Avoid hardcoding. Use secure secret management.", i: <Database /> },
                   { t: "Rotate Keys Regularly", d: "Automate rotation to minimize risk exposure.", i: <RefreshCw /> },
                   { t: "Restrict by Env", d: "Ensure sandbox keys cannot touch production data.", i: <Server /> },
                   { t: "Monitor Usage", d: "Track API patterns for anomalous behavior.", i: <Activity /> }
                 ].map((bp, i) => (
                   <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 transition-all group flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-lime mb-8 group-hover:scale-110 transition-transform">
                         {React.cloneElement(bp.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-sm font-bold uppercase italic tracking-tight mb-4">{bp.t}</h4>
                      <p className="text-[10px] text-white/20 font-inter leading-relaxed">{bp.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🧪 ENVIRONMENTS & 🔄 API KEY MANAGEMENT */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="bg-zinc-50 p-12 lg:p-24 rounded-[80px] border border-gray-100 relative group overflow-hidden">
                 <Activity className="w-40 h-40 absolute top-0 right-0 p-12 text-zinc-200 opacity-20 transform translate-x-1/2 -translate-y-1/2 group-hover:rotate-45 transition-transform duration-1000" />
                 <div className="relative z-10 space-y-12">
                    <h3 className="text-4xl font-bold italic uppercase tracking-tight mb-8">Separate Sandbox & Production</h3>
                    <p className="text-zinc-400 text-lg italic pr-12 font-inter leading-relaxed">Deep Sense provides multiple environments to ensure development never interrupts production workloads.</p>
                    <div className="space-y-6">
                       <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex items-center gap-8 group/env">
                          <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-neutral-400 group-hover/env:bg-neutral-900 group-hover/env:text-brand-lime transition-colors">
                             <Terminal className="w-6 h-6" />
                          </div>
                          <div>
                             <h5 className="font-bold text-neutral-900 uppercase text-xs mb-1">Sandbox</h5>
                             <p className="text-[10px] text-zinc-400 font-inter">Testing, development, and fraud simulation.</p>
                          </div>
                       </div>
                       <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex items-center gap-8 group/env">
                          <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-neutral-400 group-hover/env:bg-neutral-900 group-hover/env:text-emerald-400 transition-colors">
                             <Zap className="w-6 h-6" />
                          </div>
                          <div>
                             <h5 className="font-bold text-neutral-900 uppercase text-xs mb-1">Production</h5>
                             <p className="text-[10px] text-zinc-400 font-inter">Live transactions and mission-critical fraud detection.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold tracking-tight uppercase italic leading-tight underline decoration-neutral-100 decoration-8 underline-offset-16">Complete Control.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Manage your API keys through our developer dashboard with full visibility and control.</p>
                 <div className="space-y-8">
                    {[
                      { t: "Create New Keys", d: "Instantly generate keys for new microservices or workflows.", i: <RefreshCw /> },
                      { t: "Revoke compromised Keys", d: "Stop access immediately if a key is accidentally exposed.", i: <AlertTriangle /> },
                      { t: "Track key Usage", d: "Detailed telemetry on which keys are driving API traffic.", i: <Activity /> }
                    ].map((f, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all duration-300">
                            {React.cloneElement(f.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                         </div>
                         <div>
                            <h5 className="font-bold text-neutral-900 uppercase text-sm mb-2">{f.t}</h5>
                            <p className="text-xs text-zinc-400 font-inter leading-relaxed max-w-[300px]">{f.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 📡 WEBHOOK SECURITY & 🧠 RBAC */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <div className="mb-32">
                 <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase italic mb-8">Webhook Security.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[700px] mx-auto">Deep Sense signs all webhook events to ensure they originate from our servers and haven&apos;t been tampered with.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                 {[
                   { t: "Signed Payloads", d: "Verify requests using the X-Signature header in every webhook.", i: <FileText /> },
                   { t: "Replay Protection", d: "Timestamped verification prevents malicious request reuse.", i: <Activity /> },
                   { t: "Verified Origin", d: "Confirm that every byte of data came specifically from Deep Sense.", i: <ShieldCheck /> }
                 ].map((it, i) => (
                   <div key={i} className="p-10 bg-white rounded-[48px] border border-zinc-200 group hover:shadow-2xl transition-all">
                      <div className="w-16 h-16 bg-neutral-900 rounded-[32px] flex items-center justify-center text-brand-lime mb-8 group-hover:rotate-12 transition-transform">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-2xl font-bold uppercase tracking-tight mb-4">{it.t}</h4>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🧠 ROLE-BASED ACCESS CONTROL (RBAC) */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter uppercase italic leading-tight underline decoration-zinc-100 decoration-8 underline-offset-16">Control Access <br />Across Your Team.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[500px]">Enforce strict permissions for operational workflows using deep Role-Based Access Control.</p>
                 <div className="space-y-8">
                    {[
                      { r: "Admin", d: "Full control over organization settings and API management." },
                      { r: "Analyst", d: "Access to fraud cases, alerts, and investigations logic." },
                      { r: "Viewer", d: "Read-only access to dashboards and performance reports." }
                    ].map((role, i) => (
                      <div key={i} className="p-8 bg-gray-50 border border-gray-100 rounded-3xl hover:bg-white transition-all group flex items-center gap-10 shadow-sm hover:shadow-xl">
                         <div className="w-1.5 h-12 bg-neutral-200 group-hover:bg-brand-lime transition-colors rounded-full" />
                         <div>
                            <h5 className="font-bold text-neutral-900 uppercase text-xs mb-1">{role.r}</h5>
                            <p className="text-[11px] text-zinc-400 font-inter">{role.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-neutral-900 rounded-[80px] p-12 lg:p-24 text-white relative overflow-hidden shadow-3xl text-center group">
                 <Users className="w-32 h-32 absolute top-0 left-0 p-8 text-white opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 <h3 className="text-3xl font-bold italic tracking-tight uppercase mb-8">Granular Permissions</h3>
                 <p className="text-white/40 text-sm max-w-[300px] mx-auto italic leading-relaxed mb-12">Deep Sense ensures that every action is traceable to a specific user and role, maintaining compliance standards.</p>
                 <div className="inline-flex gap-4 p-4 bg-white/5 rounded-full border border-white/5">
                    <div className="w-3 h-3 bg-brand-lime rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-lime">RBAC v4 Active</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 🚫 RATE LIMITING & 🔍 AUDIT */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                 {[
                   { t: "Abuse Protection", d: "Built-in API rate limiting and request validation thresholds.", i: <AlertTriangle /> },
                   { t: "Total Traceability", d: "Detailed audit logs for every API usage and management action.", i: <FileText /> },
                   { t: "Data Isolation", d: "Encryption at rest and in transit (HTTPS) for all tenant data.", i: <Database /> }
                 ].map((it, i) => (
                   <div key={i} className="text-center group p-10 bg-white rounded-[56px] border border-zinc-200 shadow-sm hover:shadow-2xl transition-all">
                      <div className="w-20 h-20 mx-auto bg-neutral-900 rounded-[32px] flex items-center justify-center text-brand-lime mb-8 group-hover:scale-110 transition-transform">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-8 h-8" })}
                      </div>
                      <h4 className="text-2xl font-bold italic tracking-tight uppercase mb-4 text-neutral-900">{it.t}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed font-inter px-4">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 🆚 COMPARISON TABLE */}
        <section className="py-40">
           <div className="max-w-[1000px] mx-auto px-8 text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-bold uppercase italic tracking-tighter font-manrope">Enterprise-Grade by Design.</h2>
           </div>
           
           <div className="max-w-[900px] mx-auto px-8 font-bold italic uppercase tracking-widest text-[10px]">
               <div className="bg-neutral-900 text-white rounded-[50px] border border-white/10 overflow-hidden shadow-3xl">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="border-b border-white/10">
                           <th className="p-10 opacity-30 tracking-widest">Capability</th>
                           <th className="p-10 text-brand-lime border-l border-white/10">Deep Sense</th>
                           <th className="p-10 opacity-30 hidden md:table-cell tracking-widest">Typical APIs</th>
                        </tr>
                     </thead>
                     <tbody className="text-white/80">
                        {authenticationComparison.map((row, j) => (
                          <tr key={j} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                             <td className="p-10">{row.item}</td>
                             <td className="p-10 border-l border-white/5 text-white">{row.deepSense}</td>
                             <td className="p-10 opacity-10 hidden md:table-cell">{row.typical}</td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
           </div>
        </section>

        {/* 📈 BUSINESS IMPACT */}
        <section className="py-40 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-brand-lime/10 blur-[130px] rounded-full translate-y-1/2 pointer-events-none opacity-20" />
           <div className="max-w-[1200px] mx-auto px-8 relative z-10 space-y-24">
              <h2 className="text-4xl lg:text-9xl font-bold font-manrope uppercase italic opacity-10 leading-none">Security first.</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 italic">
                 <div className="space-y-6">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;The webhook signing and key rotation features gave our security team total peace of mind during integration.&quot;</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">— CISO, Fintech Infrastructure Partner</span>
                 </div>
                 <div className="space-y-6">
                    <p className="text-2xl font-bold text-neutral-900 leading-relaxed">&quot;Deep Sense manages authentication with enterprise rigor while keeping it incredibly simple for our developers to implement.&quot;</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">— VP Engineering, Global Payment Gateway</span>
                 </div>
              </div>
           </div>
        </section>

        {/* 📣 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24">
           <div className="bg-brand-lime rounded-[80px] p-12 md:p-32 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-900 rounded-[80px] scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left pointer-events-none" />
              <div className="relative z-10 space-y-12 transition-colors group-hover:text-white duration-1000">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase">Start Securely <br />Integrating Today.</h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed">Protect your platform with authentication built for the real world.</p>
                 <div className="flex flex-col sm:row gap-8 justify-center">
                    <button className="px-14 py-7 bg-neutral-900 text-white rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl group-hover:bg-white group-hover:text-neutral-900">
                      Get API Key
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group-hover:bg-neutral-800 group-hover:text-white group-hover:border-white/10">
                      View API Docs
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
