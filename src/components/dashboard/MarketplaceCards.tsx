"use client";

import React from "react";
import { Star, ArrowUpRight, ChevronRight } from "lucide-react";

const platforms = [
  {
    name: "G Pay",
    rating: 4.9,
    description: "Secure, convenient digital payments with wide acceptance globally.",
    amount: "234,678",
    color: "bg-red-500",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
  },
  {
    name: "elo",
    rating: 4.8,
    description: "Brazilian digital payment solution for seamless transactions everywhere.",
    amount: "567,342",
    color: "bg-sky-500",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/da/Logo_Elo.png"
  },
  {
    name: "Payoneer",
    rating: 5.0,
    description: "Global payments platform for freelancers and businesses worldwide.",
    amount: "356,123",
    color: "bg-orange-500",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Payoneer_logo.svg/2560px-Payoneer_logo.svg.png"
  }
];

export default function MarketplaceCards() {
  return (
    <section className="flex flex-col gap-8 w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-800 text-2xl font-bold font-manrope">Explore What Makes Up A Marketplace</h3>
        <button className="flex items-center gap-2 text-gray-500 font-bold hover:text-gray-800 transition-colors group">
          See All
          <div className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors">
             <ChevronRight size={14} className="text-gray-600" />
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platforms.map((item) => (
          <div key={item.name} className="bg-white p-8 rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.02)] border border-gray-50 flex flex-col justify-between gap-8 group hover:shadow-xl hover:shadow-indigo-600/5 transition-all duration-500">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-[10px] bg-indigo-600`}>
                      {item.name.charAt(0)}
                   </div>
                   <span className="text-gray-800 text-lg font-bold font-manrope">{item.name}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-50 rounded-full border border-yellow-100">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-yellow-600 text-sm font-bold font-manrope">{item.rating.toFixed(1)}</span>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed font-inter">
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-gray-50">
              <span className="text-gray-800 text-2xl font-bold font-manrope">${item.amount}</span>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-50 border border-gray-100/50 rounded-full text-indigo-600 font-bold transition-all hover:bg-indigo-600 hover:text-white hover:border-indigo-600 group active:scale-95">
                Get
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
