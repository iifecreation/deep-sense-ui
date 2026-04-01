"use client";

import React from "react";
import Navbar from "@/components/landing-page/Navbar";
import Footer from "@/components/landing-page/Footer";
import { 
  Handshake, 
  Zap, 
  Shield, 
  ArrowRight,
  TrendingUp,
  Layers,
  CheckCircle2,
  Cpu,
  Globe,
  Users,
  MessageSquare,
  Sparkles,
  Blocks
} from "lucide-react";

export default function Partners() {
  return (
    <div className="min-h-screen bg-white font-manrope">
      <Navbar />

      <main className="pt-40 pb-24 overflow-hidden">
        {/* 1. 🔥 HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-8 mb-32 relative text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-lime/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="max-w-[1100px] mx-auto relative z-10 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 rounded-full text-brand-lime text-[11px] font-bold uppercase tracking-widest mb-10 shadow-2xl">
               <Handshake className="w-3.5 h-3.5" />
               Global Partnership Program
             </div>
             <h1 className="text-6xl lg:text-9xl font-bold leading-[0.95] mb-10 tracking-tight text-neutral-900 uppercase italic">
               Partner with <br />
               <span className="text-zinc-300 italic">Deep Sense.</span>
             </h1>
             <p className="text-xl text-zinc-500 font-inter leading-relaxed max-w-[800px] mx-auto mb-14">
                We work with technology providers, fintech platforms, and strategic partners to deliver next-generation fraud detection solutions to the world.
             </p>
             <div className="flex flex-wrap gap-8 justify-center">
                <button className="px-10 py-5 bg-neutral-900 text-white rounded-full font-bold text-lg hover:scale-110 transition-all shadow-3xl flex items-center gap-3 italic">
                  Become a Partner
                  <ArrowRight className="w-5 h-5 text-brand-lime" />
                </button>
                <button className="px-10 py-5 bg-white text-neutral-900 border border-gray-100 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-xl italic">
                  Contact Us
                </button>
             </div>
          </div>
        </section>

        {/* 2. 💡 WHY PARTNER WITH US */}
        <section className="py-24 bg-neutral-900 text-white rounded-[100px] mx-4 overflow-hidden relative border border-white/5 shadow-3xl">
           <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-tight underline decoration-brand-lime decoration-8 underline-offset-16 font-manrope">Shared Vision.</h2>
                 <p className="text-xl text-white/40 font-inter italic max-w-[500px]">We believe the future of fraud detection is collaborative. By joining our ecosystem, you gain access to institutional-grade intelligence and an API-first architecture designed for scale.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                      { l: "Advanced Intelligence", d: "Deep Sense provides high-fidelity fraud signals in real-time." },
                      { l: "API-First Architecture", d: "Seamlessly integrate our engine into any technical stack." },
                      { l: "Scalable Infrastructure", d: "Designed to handle modern fintech workloads at global scale." },
                      { l: "Growing Ecosystem", d: "Join a rapidly expanding network of strategic innovators." }
                    ].map((it, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                         <div className="w-1.5 h-1.5 bg-brand-lime rounded-full mt-2" />
                         <div>
                            <h5 className="font-bold text-white text-[10px] uppercase tracking-widest mb-1 italic">{it.l}</h5>
                            <p className="text-[10px] text-white/20 font-inter leading-relaxed italic">{it.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
                 <div className="bg-white/5 p-8 rounded-[40px] border border-white/5">
                    <p className="text-xl font-bold italic text-white leading-relaxed">“Collaboration is the most effective weapon against sophisticated fraud.”</p>
                 </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-12 lg:p-24 rounded-[80px] shadow-3xl group relative overflow-hidden backdrop-blur-xl">
                 <div className="absolute top-0 right-0 p-12">
                    <Globe className="w-40 h-40 text-brand-lime opacity-5 group-hover:scale-110 transition-transform duration-1000" />
                 </div>
                 <h3 className="text-3xl font-bold italic uppercase tracking-tight mb-8 font-manrope">Partnership HQ.</h3>
                 <p className="text-white/40 text-sm font-inter italic mb-10 leading-relaxed text-white">Deep Sense partners benefit from dedicated technical support and co-innovation opportunities.</p>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { l: "SDK Access", i: <Cpu /> },
                      { l: "Joint GTM", i: <TrendingUp /> },
                      { l: "Direct Support", i: <MessageSquare /> },
                      { l: "Beta Features", i: <Sparkles /> }
                    ].map((it, i) => (
                      <div key={i} className="p-6 bg-white/5 rounded-[32px] border border-white/5 hover:border-brand-lime/20 transition-all group/it">
                         <div className="text-brand-lime mb-4 group-hover/it:scale-110 transition-transform">{it.i}</div>
                         <h6 className="text-[10px] font-bold uppercase tracking-widest text-white italic">{it.l}</h6>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* 3. 🤝 PARTNER TYPES */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <div className="text-center mb-32 max-w-[800px] mx-auto italic">
                 <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-8 font-manrope text-neutral-900 underline decoration-zinc-100 decoration-8 underline-offset-16 text-center mx-auto">Opportunities.</h2>
                 <p className="text-xl text-zinc-500 font-inter italic max-w-[600px] mx-auto">We offer three distinct paths for collaboration, tailored to your specific ecosystem role.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { 
                     l: "Technology Partners", 
                     d: "Integrate Deep Sense into your platform to enhance your product offering and protect your users.", 
                     i: <Blocks />,
                     points: ["Native API integrations", "Enhanced product value", "Technical certification"]
                   },
                   { 
                     l: "Fintech & Platforms", 
                     d: "Embed fraud detection into your core systems to protect your entire commerce ecosystem.", 
                     i: <Layers />,
                     points: ["Institutional protection", "Ecosystem safety", "White-label potential"]
                   },
                   { 
                     l: "Consulting Partners", 
                     d: "Help your clients implement next-gen fraud solutions and deliver strategic value at scale.", 
                     i: <Users />,
                     points: ["Strategic implementation", "Managed services", "Co-marketing support"]
                   }
                 ].map((it, i) => (
                   <div key={i} className="p-12 bg-white border border-gray-100 rounded-[72px] shadow-sm hover:shadow-2xl transition-all group">
                      <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center text-brand-lime mb-10 group-hover:scale-110 transition-transform">
                         {React.cloneElement(it.i as React.ReactElement<{ className: string }>, { className: "w-6 h-6" })}
                      </div>
                      <h4 className="text-2xl font-bold italic uppercase tracking-tight mb-6">{it.l}</h4>
                      <p className="text-sm text-zinc-400 font-inter leading-relaxed mb-8 italic">{it.d}</p>
                      <ul className="space-y-4">
                         {it.points.map((p, pi) => (
                           <li key={pi} className="flex gap-3 items-center text-[11px] font-bold uppercase tracking-widest text-neutral-900 italic">
                             <CheckCircle2 className="w-4 h-4 text-brand-lime italic" />
                             {p}
                           </li>
                         ))}
                      </ul>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. ⚙️ HOW PARTNERSHIP WORKS */}
        <section className="py-40 bg-zinc-50 border-y border-gray-100 text-center italic">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10">
              <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-24 font-manrope underline decoration-zinc-200 decoration-8 underline-offset-16 max-w-[800px] mx-auto text-neutral-900">The Path.</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                 {[
                   { l: "Connect", d: "Start the conversation with our partnership team.", n: "01" },
                   { l: "Identify", d: "Explore strategic and technical opportunities.", n: "02" },
                   { l: "Integrate", d: "Collaborate on technical and market alignment.", n: "03" },
                   { l: "Deliver", d: "Launch and deliver joint value to the market.", n: "04" }
                 ].map((it, i) => (
                   <div key={i} className="relative p-12 bg-white border border-gray-100 rounded-[56px] shadow-sm group">
                      <div className="text-[80px] font-black text-neutral-50 absolute -top-4 left-1/2 -translate-x-1/2 select-none group-hover:text-brand-lime/10 transition-colors">{it.n}</div>
                      <div className="relative z-10 pt-12">
                         <h5 className="text-xl font-bold italic uppercase tracking-tight mb-4 text-neutral-900">{it.l}</h5>
                         <p className="text-sm text-zinc-400 font-inter leading-relaxed italic">{it.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 5. 🚀 BENEFITS */}
        <section className="py-40">
           <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center italic">
              <h2 className="text-4xl lg:text-7xl font-bold uppercase italic tracking-tighter mb-24 font-manrope underline decoration-zinc-100 decoration-8 underline-offset-16 max-w-[800px] mx-auto text-neutral-900">Incentives.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { l: "Deep Access", d: "Dedicated endpoints and priority sandbox access.", i: <Zap /> },
                   { l: "Support Focus", d: "Priority technical and GTM support channels.", i: <Shield /> },
                   { l: "Innovation Hub", d: "Influence the Deep Sense product roadmap.", i: <Sparkles /> },
                   { l: "Scale Program", d: "Revenue share and joint growth opportunities.", i: <TrendingUp /> }
                 ].map((it, i) => (
                   <div key={i} className="p-12 border border-gray-100 rounded-[64px] hover:bg-neutral-900 hover:text-white transition-all group">
                      <div className="text-brand-lime mb-8 flex justify-center group-hover:scale-110 transition-transform">{it.i}</div>
                      <h4 className="text-xl font-bold italic uppercase tracking-tight mb-4">{it.l}</h4>
                      <p className="text-sm text-zinc-400 group-hover:text-white/40 font-inter leading-relaxed italic">{it.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* 6. 💬 OUR PARTNERS (LOGOS PLACEHOLDER) */}
        <section className="py-24 border-t border-gray-100 opacity-20 filter grayscale hover:grayscale-0 transition-all duration-1000 select-none">
           <div className="max-w-[1440px] mx-auto px-8 text-center italic">
              <h6 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 mb-16 italic">Empowering Global Innovators</h6>
              <div className="flex flex-wrap justify-center gap-24 items-center opacity-40">
                 {["STRIPE", "CHASE", "ADYEN", "PLAID", "REVOLUT", "KLARNA"].map((logo, i) => (
                   <span key={i} className="text-3xl font-black text-neutral-900 tracking-tighter hover:text-brand-lime transition-colors duration-500 italic">{logo}</span>
                 ))}
              </div>
           </div>
        </section>

        {/* 7. 📩 CTA SECTION */}
        <section className="max-w-[1300px] mx-auto px-4 mb-24 mt-24 text-center italic">
           <div className="bg-neutral-900 rounded-[80px] p-12 md:p-32 relative overflow-hidden group border border-white/10 shadow-3xl">
              <div className="absolute inset-0 bg-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative z-10 space-y-12">
                 <h2 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none italic uppercase text-white font-manrope">Build the <br /><span className="text-white/20">Future.</span></h2>
                 <p className="text-xl md:text-2xl mb-12 max-w-[600px] mx-auto opacity-70 tracking-tight leading-relaxed font-manrope italic text-white">Join the Deep Sense ecosystem and help us redefine global fraud detection.</p>
                 <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <button className="px-14 py-7 bg-brand-lime text-neutral-900 rounded-full font-bold text-xl hover:scale-110 transition-all shadow-2xl font-manrope">
                      Become a Partner
                    </button>
                    <button className="px-14 py-7 bg-white text-neutral-900 border border-transparent rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 font-manrope">
                      Contact Us
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
