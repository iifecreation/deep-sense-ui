import React from "react";
import { ShieldCheck, Lock, Users, FileText } from "lucide-react";

export default function SecurityTrust() {
  const securityFeatures = [
    {
      title: "Secure multi-tenant architecture",
      description: "Data isolation and multi-layer security for enterprise scale.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Data encryption at rest & transit",
      description: "Industry-standard AES-256 and TLS encryption for all data.",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "Role-based access control (RBAC)",
      description: "Granular control over team permissions and sensitive workflows.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Audit logging & compliance",
      description: "Comprehensive audit trails for all decisions and rule changes.",
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-24 bg-neutral-900 border-y border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          <div className="flex-1 flex flex-col gap-10 max-w-[540px]">
             <div className="flex flex-col gap-6">
                <span className="text-brand-lime font-inter text-[13px] font-bold uppercase tracking-[0.2em]">Security</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-white leading-tight">
                  Enterprise-Ready <span className="text-white/40">Security</span>
                </h2>
                <p className="text-base md:text-lg text-white/60 font-inter leading-relaxed">
                  Deep Sense is built to exceed the rigorous security requirements of the world's leading financial institutions.
                </p>
             </div>
             
             <div className="flex flex-col gap-8">
                {securityFeatures.map((sec, idx) => (
                  <div key={idx} className="group flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="text-brand-lime group-hover:scale-110 transition-transform">
                      {sec.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-lg font-bold font-manrope text-white">{sec.title}</h4>
                      <p className="text-sm text-white/50 font-inter leading-relaxed max-w-[400px]">
                        {sec.description}
                      </p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className="flex-1 w-full bg-white/5 rounded-[48px] p-12 min-h-[500px] flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,247,1,0.1)_0%,transparent_70%)] pointer-events-none" />
             <div className="relative z-10 w-full flex flex-col items-center">
                <div className="w-48 h-48 bg-white/5 border border-white/10 rounded-full flex items-center justify-center animate-pulse group-hover:scale-110 group-hover:bg-brand-lime/10 transition-all duration-1000">
                   <div className="w-24 h-24 bg-brand-lime rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(209,247,1,0.3)]">
                      <ShieldCheck className="w-12 h-12 text-neutral-900" />
                   </div>
                </div>
                <div className="mt-12 text-center flex flex-col gap-4">
                   <span className="text-3xl font-bold font-manrope text-white">Full SOC2 Type II</span>
                   <span className="text-brand-lime text-base font-bold font-manrope uppercase tracking-widest">Compliance Ready</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
