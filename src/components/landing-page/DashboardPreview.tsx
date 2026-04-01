import React from "react";
import { BarChart2, Bell, Share2, MousePointer2 } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-24 px-6 md:px-24 bg-neutral-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,247,1,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto text-center flex flex-col items-center">
        <div className="flex flex-col gap-6 mb-16 max-w-[800px]">
          <span className="text-brand-lime font-inter text-[13px] font-bold uppercase tracking-[0.2em]">Live UI</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-manrope text-white leading-tight">
            Full Visibility Into <span className="opacity-40">Fraud Activity</span>
          </h2>
          <p className="text-white/60 text-lg font-inter max-w-[600px] mx-auto">
            Our intuitive dashboard gives your team the real-time insights they need to monitor transactions and manage cases.
          </p>
        </div>

        <div className="w-full relative z-10 group">
          <div className="w-full relative bg-[#1A1A1A] rounded-[40px] border border-white/5 p-6 shadow-2xl transition-all duration-1000 group-hover:scale-[1.01] overflow-hidden">
             {/* Header Mockup */}
             <div className="w-full h-12 bg-white/5 rounded-2xl mb-8 flex items-center px-6 gap-6">
                <div className="flex gap-2">
                   {[1, 2, 3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/10" />)}
                </div>
                <div className="w-48 h-2 bg-white/5 rounded-full" />
             </div>

             <div className="grid grid-cols-12 gap-8 h-[600px]">
                {/* Stats Sidebar */}
                <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
                   {[
                     { label: "Alerts", value: "1,248", icon: <Bell className="w-4 h-4" /> },
                     { label: "Blocked", value: "$4.2M", icon: <Share2 className="w-4 h-4" /> },
                     { label: "Cases", value: "142", icon: <MousePointer2 className="w-4 h-4" /> }
                   ].map((stat, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/5 p-6 rounded-3xl flex flex-col gap-2 scale-in duration-500 delay-300">
                        <div className="flex items-center gap-2 opacity-40 text-xs font-bold font-manrope uppercase">
                          {stat.icon} {stat.label}
                        </div>
                        <span className="text-3xl font-bold text-white font-manrope">{stat.value}</span>
                      </div>
                   ))}
                </div>

                {/* Main Graph Area */}
                <div className="col-span-12 lg:col-span-9 bg-white/5 border border-white/5 rounded-[40px] p-10 relative group-hover:bg-white/10 transition-colors duration-1000">
                   <div className="w-full h-full flex items-end justify-between gap-4">
                      {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-brand-lime/20 rounded-full group-hover:bg-brand-lime transition-all duration-700 delay-500" 
                          style={{ height: `${h}%` }}
                        />
                      ))}
                   </div>
                   <div className="absolute inset-x-10 bottom-6 h-px bg-white/10" />
                   <div className="absolute inset-y-10 left-6 w-px bg-white/10" />
                </div>
             </div>
          </div>

          {/* Floating UI element: Risk Badge */}
          <div className="hidden lg:flex absolute -top-12 -left-12 bg-brand-lime p-6 px-10 rounded-[40px] flex-col gap-1 shadow-2xl z-30 animate-bounce cursor-default">
             <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-900 leading-none">Security Status</span>
             <span className="text-3xl font-bold font-manrope text-neutral-900">Protected</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 w-full opacity-60">
           {["Transaction monitoring dashboard", "Risk score breakdowns", "Alerts and case workflows", "Linked entity visualization"].map((text, idx) => (
             <div key={idx} className="flex flex-col gap-3 group">
               <div className="w-full h-1 bg-white/10 rounded-full relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-brand-lime w-0 group-hover:w-full transition-all duration-1000" />
               </div>
               <span className="text-white text-sm font-bold font-manrope tracking-tight leading-none text-left">
                 {text}
               </span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
