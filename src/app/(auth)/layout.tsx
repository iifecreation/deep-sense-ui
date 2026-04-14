import React from "react";
import Link from "next/link";
import { Shield, Zap, Lock, Earth as Globe, CircleCheck as CheckCircle2 } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Left Column: Form */}
      <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-12 lg:flex-none lg:px-20 xl:px-28">
        <div className="mx-auto w-full max-w-sm lg:w-[400px]">
          <Link href="/" className="flex items-center gap-2.5 mb-12 group transition-all duration-300">
            <div className="w-12 h-12 bg-[#D1F701] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(209,247,1,0.2)] group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-black stroke-[2.5px]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-heading tracking-tight text-foreground">Deep Sense</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 leading-none">Security Infrastructure</span>
            </div>
          </Link>
          
          <div className="relative">
            {children}
          </div>
        </div>
      </div>

      {/* Right Column: Content/Features (Hidden on mobile) */}
      <div className="relative hidden w-0 flex-1 lg:block bg-[#050505] overflow-hidden border-l border-white/5">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D1F701]/10 rounded-full blur-[140px] animate-pulse pointer-events-none" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: `24px 24px` 
          }} />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between p-16 xl:p-24 text-white">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#D1F701] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D1F701] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D1F701]"></span>
              </span>
              v2.4 Engine Live
            </div>
            
            <h2 className="text-5xl font-bold font-heading mb-8 leading-[1.15] tracking-tight">
              Protect your ecosystem with <span className="text-[#D1F701]">Industrial-grade</span> intelligence.
            </h2>
            <p className="text-zinc-400 text-lg mb-16 max-w-md leading-relaxed">
              Deep Sense AI monitors every transaction in real-time, providing sub-millisecond fraud prevention for global financial platforms.
            </p>

            <div className="space-y-8">
              <div className="group flex items-start gap-6 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-[#D1F701]/30 group-hover:bg-white/10 transition-all duration-300">
                  <Zap className="w-7 h-7 text-[#D1F701]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1.5 flex items-center gap-2">
                    Hyperscale Analysis
                  </h3>
                  <p className="text-zinc-500 leading-relaxed">
                    Process up to <span className="text-zinc-300 font-medium">1.2M transactions/sec</span> with zero performance degradation.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-6 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-blue-400/30 group-hover:bg-white/10 transition-all duration-300">
                  <Lock className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1.5">Zero-Trust Security</h3>
                  <p className="text-zinc-500 leading-relaxed">
                    Military-grade PII encryption and PCI-DSS Level 1 compliant out of the box.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-6 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-purple-400/30 group-hover:bg-white/10 transition-all duration-300">
                  <Globe className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1.5 font-heading">Adaptive Learning</h3>
                  <p className="text-zinc-500 leading-relaxed">
                    Models evolve automatically across <span className="text-zinc-300 font-medium">120+ global regions</span> to stay ahead of bad actors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                {/* Visual Placeholder for trust badges/logos */}
                <div className="text-sm font-bold tracking-widest uppercase">FinTech Hub</div>
                <div className="text-sm font-bold tracking-widest uppercase">SecurePay</div>
                <div className="text-sm font-bold tracking-widest uppercase">CloudGuard</div>
            </div>
            <div className="flex items-center justify-between text-zinc-500 text-sm border-t border-white/5 pt-8 font-medium">
              <span>© 2026 Deep Sense AI Infrastructure.</span>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
