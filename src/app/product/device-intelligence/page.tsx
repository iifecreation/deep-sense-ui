"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Monitor, 
  ArrowRight,
  Cpu,
  Layers,
  Search,
  CheckCircle2,
  Lock,
  HardDrive
} from "lucide-react";

export default function DeviceIntelligence() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Smartphone className="w-3.5 h-3.5" />
               Next-Gen Fingerprinting
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Unmask Every <br />
               <span className="text-zinc-300 italic">Fraudulent Device.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                Deep Sense goes beyond simple cookies. We detect emulators, virtual machines, and sophisticated proxy setups to identify high-risk devices in real-time.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3 italic">
                  View Demo
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl italic">
                  Talk to Sales
                </button>
             </div>
          </div>
        </section>

        {/* 2. BEYOND FINGERPRINTING */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Deep Signal Detection.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">Modern fraudsters use virtual environments and mobile emulators to hide their tracks. Deep Sense identifies these signals instantly.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { l: "Emulator Detection", d: "Identify Android and iOS emulators used for bot attacks.", i: <Smartphone /> },
                      { l: "VM Identification", d: "Detect Virtual Machines and sandboxed environments.", i: <Monitor /> },
                      { l: "Proxy & VPN Score", d: "Real-time identification of anonymizing services.", i: <Zap /> },
                      { l: "Debug Detection", d: "Spot active debuggers used for protocol reverse engineering.", i: <Cpu /> }
                    ].map((it, i) => (
                      <div key={i} className="p-8 bg-white/5 rounded-[40px] border border-white/5 hover:border-brand-lime/20 transition-all group">
                         <div className="text-brand-lime mb-4 group-hover:scale-110 transition-transform">{it.i}</div>
                         <h5 className="font-bold text-white text-xs uppercase tracking-widest mb-1 italic">{it.l}</h5>
                         <p className="text-[10px] text-white/20 font-inter leading-relaxed italic">{it.d}</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <div className="absolute top-0 right-0 p-12">
                    <HardDrive className="w-40 h-40 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8 font-manrope">Device Health.</h3>
                 <div className="space-y-6">
                    {[
                      { l: "Kernel Integrity", s: "Verified", v: 100 },
                      { l: "Biometric Support", s: "TouchID Active", v: 85 },
                      { l: "App Environment", s: "Non-Rooted", v: 95 },
                      { l: "Network Latency", s: "12ms", v: 70 }
                    ].map((it, i) => (
                      <div key={i} className="space-y-2">
                         <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest italic">
                            <span className="text-white/40">{it.l}</span>
                            <span className="text-brand-lime">{it.s}</span>
                         </div>
                         <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-lime transition-all duration-1000" style={{ width: `${it.v}%` }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 3. KEY FEATURES LIST */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { l: "Tamper Proof", d: "Our SDKs use advanced obfuscation and anti-tampering logic.", i: <Shield /> },
                   { l: "Privileged Access", d: "Identify rooted or jailbroken devices in milliseconds.", i: <Lock /> },
                   { l: "Global Network", d: "Cross-reference device IDs across the entire Deep Sense ecosystem.", i: <Layers /> }
                 ].map((it, i) => (
                   <div key={i} className="space-y-8 p-12 bg-zinc-50 rounded-[64px] border border-gray-100 group hover:bg-neutral-900 transition-all">
                      <div className="w-16 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-brand-lime transition-all">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-2xl font-bold italic uppercase tracking-tight text-neutral-900 group-hover:text-white transition-all">{it.l}</h4>
                      <p className="text-zinc-500 font-inter leading-relaxed italic group-hover:text-white/40 transition-all">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. PERFORMANCE METRICS */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100">
           <div className="max-w-[1440px] mx-auto px-8 text-center text-neutral-900">
              <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-24 font-manrope underline decoration-zinc-200 decoration-8 underline-offset-16 max-w-[800px] mx-auto">Precision Intel.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                 {[
                   { v: "10K+", l: "Device Markers Analyzed", i: <Search /> },
                   { v: "<25ms", l: "Device Scoring Latency", i: <Zap /> },
                   { v: "99.9%", l: "Emulator Detection Accuracy", i: <CheckCircle2 /> }
                 ].map((m, i) => (
                   <div key={i} className="p-12 bg-white border border-gray-100 rounded-[56px] shadow-sm hover:shadow-xl transition-all">
                      <div className="text-neutral-900 mb-8 flex justify-center">{m.i}</div>
                      <div className="text-6xl font-black text-neutral-900 italic tracking-tighter mb-4">{m.v}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 italic">{m.l}</div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Know the <br /><span className="text-white/20">Device.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Start unmasking fraudulent devices with institutional-grade intelligence.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope italic">
                      View API Specs
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 font-manrope italic">
                      Talk to Sales
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

// Minimal missing component definitions
export {};
