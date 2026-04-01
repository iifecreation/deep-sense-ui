import React from "react";
import { CheckCircle2 } from "lucide-react";

const transactions = [
  { name: "Amazon", type: "Online Shopping", amount: "-$150.00", icon: "📦", color: "bg-orange-100" },
  { name: "Uber", type: "Taxi Services", amount: "-$55.00", icon: "🚕", color: "bg-blue-100" },
  { name: "PayPal", type: "Money Transfer", amount: "-$320.00", icon: "💳", color: "bg-indigo-100" },
];

export default function Features() {
  return (
    <section className="py-20 px-4 md:px-24 bg-white">
      <div className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Side: Mockup List */}
        <div className="flex-1 w-full flex justify-center lg:justify-start">
          <div className="w-[500px] p-6 md:p-8 bg-zinc-100 rounded-[32px] flex flex-col gap-4 shadow-sm">
            {transactions.map((tr, idx) => (
              <div key={idx} className="bg-white p-4 rounded-2xl flex justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-white/50 group hover:shadow-md transition-all cursor-default">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${tr.color} rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform animate-in zoom-in-50 duration-500`}>
                    {tr.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold font-manrope text-neutral-900">{tr.name}</span>
                    <span className="text-zinc-500 text-sm font-inter">{tr.type}</span>
                  </div>
                </div>
                <span className="text-base font-bold font-manrope text-neutral-900 group-hover:text-red-500 transition-colors">
                  {tr.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Content */}
        <div className="flex-1 flex flex-col gap-8 max-w-[543px]">
           <h2 className="text-4xl lg:text-[48px] font-bold font-manrope text-black leading-[1.1]">
             Transforming Transactions, One Click at a Time.
           </h2>
           <div className="flex flex-col gap-6">
             <p className="text-sm md:text-base text-zinc-600 font-inter leading-relaxed">
               Our service is designed to connect the world, offering reliable and accessible financial solutions to everyone, everywhere.
             </p>
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 group px-1">
                   <div className="w-5 h-5 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                      <CheckCircle2 size={12} className="text-neutral-900 group-hover:text-green-600 transition-colors" />
                   </div>
                   <span className="text-zinc-700 text-base md:text-lg font-inter">Track transfers with real-time notifications.</span>
                </div>
                <div className="flex items-center gap-3 group px-1">
                   <div className="w-5 h-5 bg-neutral-100 rounded-full flex items-center justify-center group-hover:bg-green-100 transition-colors">
                      <CheckCircle2 size={12} className="text-neutral-900 group-hover:text-green-600 transition-colors" />
                   </div>
                   <span className="text-zinc-700 text-base md:text-lg font-inter">Instant transactions, real-time updates.</span>
                </div>
             </div>
           </div>
           
           <button className="w-fit px-10 py-4 bg-neutral-900 text-white rounded-full font-medium font-manrope hover:bg-neutral-800 transition-all shadow-lg hover:scale-105 active:scale-95">
             Get Started
           </button>
        </div>
      </div>
    </section>
  );
}
