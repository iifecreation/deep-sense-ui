"use client";

import React, { useState } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Download,
  Activity,
  History
} from "lucide-react";
import { useDashboardMetrics } from "@/hooks/use-analytics";

// The backend's AnalyticsFilters only accepts date_from/date_to/interval -
// there is no "period" query param, so it has to be translated into a real
// date_from here (an unrecognized "period" param was previously sent and
// silently ignored, meaning every period button queried the same all-time
// range).
function periodToDateFrom(period: string): string | undefined {
  const days: Record<string, number> = { "Today": 1, "7d": 7, "30d": 30, "90d": 90 };
  const n = days[period];
  if (!n) return undefined;
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString();
}

export default function AnalyticsPage() {
  const [period, setPeriod] = useState("7d");
  const { data, isLoading } = useDashboardMetrics({ filters: { date_from: periodToDateFrom(period) } });

  // The backend's metrics array always returns the same 13 keys in a fixed
  // order (total_transactions, high_risk_transactions, flagged_transactions,
  // blocked_transactions, fraud_rate, avg_risk_score, ...) - none of which
  // are "Fraud Rate" or "Avg Response" at index 1/2, so look these up by key
  // rather than assuming a position.
  const metrics = data?.metrics || [];
  const byKey = (key: string) => metrics.find((m) => m.key === key);
  const totalTx = byKey("total_transactions");
  const fraudRate = byKey("fraud_rate");
  const avgRiskScore = byKey("avg_risk_score");

  const statCards = [
    { l: totalTx?.label || "Total Transactions", v: totalTx ? String(totalTx.value) : "—", c: "text-neutral-900", i: <TrendingUp className="w-7 h-7" /> },
    { l: fraudRate?.label || "Fraud Rate", v: fraudRate ? `${(Number(fraudRate.value) * 100).toFixed(1)}%` : "—", c: "text-rose-600", i: <Activity className="w-7 h-7" /> },
    { l: avgRiskScore?.label || "Avg Risk Score", v: avgRiskScore ? `${(Number(avgRiskScore.value) * 100).toFixed(1)}%` : "—", c: "text-neutral-900", i: <Zap className="w-7 h-7" /> },
  ];

  const chartData = data?.transactions_trend?.map(t => t.value) || [];
  const topRule = data?.top_rules_triggered?.[0];

  return (
    <div className="space-y-12">
      {/* 1. HEADER */}
      <div className="flex flex-col lg:row justify-between items-start lg:items-center gap-8 font-manrope">
        <div>
           <h1 className="text-4xl font-black italic tracking-tighter text-neutral-900 uppercase leading-tight mb-2">Analytics.</h1>
           <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest italic font-black">System Performance & Fraud Trends • Period: {period}</p>
        </div>
        <div className="flex gap-4">
           <button disabled className="px-10 py-4 bg-zinc-100 text-neutral-400 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-sm italic font-black opacity-50 cursor-not-allowed">
              Export PDF Report (not yet available) <Download className="w-4 h-4 ml-2 inline" />
           </button>
           <div className="flex bg-white rounded-2xl p-1 border border-neutral-100 shadow-xl font-bold">
              {["Today", "7d", "30d", "90d"].map((t, i) => (
                <button 
                  key={i} 
                  onClick={() => setPeriod(t)}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    t === period ? "bg-zinc-50 text-neutral-900 shadow-sm border border-neutral-100" : "text-neutral-300 hover:text-neutral-900"
                  }`}
                >
                  {t}
                </button>
              ))}
           </div>
        </div>
      </div>

      {/* 2. STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {statCards.map((stat, i) => (
           <div key={i} className="p-10 bg-white rounded-[56px] border border-neutral-100 shadow-xl flex items-center justify-between group overflow-hidden relative transition-all hover:shadow-2xl font-bold italic">
              <div className="space-y-4">
                 <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 italic leading-none">{stat.l}</p>
                 <div className={`text-4xl font-black italic tracking-tighter ${stat.c} leading-none`}>{isLoading ? "..." : stat.v}</div>
              </div>
              <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center text-neutral-200 border border-neutral-100 group-hover:scale-110 group-hover:border-brand-lime/20 transition-transform group-hover:text-neutral-900 shadow-sm">
                 {stat.i}
              </div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-manrope">
         {/* 3. TREND CHART (VISUAL) */}
         <div className="lg:col-span-8 bg-white rounded-[56px] border border-neutral-100 p-12 lg:p-20 space-y-16 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
            <h3 className="text-2xl lg:text-4xl font-black italic uppercase italic tracking-tighter text-neutral-900 opacity-10 leading-none">Fraud Distribution.</h3>

            {chartData.length > 0 ? (
              <div className="relative z-10 h-[350px] w-full flex items-end justify-between gap-6 px-10 border-b border-neutral-100 pb-10">
                 {chartData.map((h: number, i: number) => {
                   const maxHeight = Math.max(...chartData, 1);
                   const pct = (h / maxHeight) * 100;
                   return (
                   <div key={i} className="flex-1 space-y-4 group/bar flex flex-col items-center">
                      <div className="w-full flex gap-2 items-end h-full">
                         <div
                           style={{ height: `${pct}%` }}
                           className="flex-1 bg-zinc-100 rounded-t-xl group-hover:bg-brand-lime transition-all duration-700 shadow-sm"
                         />
                      </div>
                      <span className="text-[8px] font-black text-neutral-200 uppercase tracking-widest italic group-hover:text-neutral-900 transition-all font-black">{h}</span>
                   </div>
                 )})}
              </div>
            ) : (
              <div className="relative z-10 h-[350px] w-full flex items-center justify-center text-neutral-300 text-xs font-bold uppercase tracking-widest italic">
                No transaction trend data for this period.
              </div>
            )}
         </div>

         {/* 4. DONUT BREAKDOWN (VISUAL) */}
         <div className="lg:col-span-4 bg-white rounded-[100px] border border-neutral-100 p-12 lg:p-20 space-y-12 shadow-2xl text-center group font-bold italic">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-neutral-400 italic">Top Triggered Rule</h5>
            <div className="relative aspect-square flex items-center justify-center">
               <div className="absolute inset-0 rounded-full border-[24px] border-zinc-50 rotate-12 shadow-inner" />
               {topRule ? <div className="absolute inset-0 rounded-full border-[24px] border-brand-lime border-r-transparent border-b-transparent animate-spin-slow transition-all shadow-md" /> : null}
               <div className="relative text-center">
                  <div className="text-6xl font-black italic text-neutral-900 italic leading-none">
                     {topRule?.count ?? "—"}
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-neutral-400">
                     {topRule?.name ? topRule.name.slice(0, 15) : "No triggers"}
                  </div>
               </div>
            </div>
            <p className="text-[10px] text-neutral-300 font-inter italic leading-relaxed italic px-4">{data?.top_rules_triggered?.[0] ? "Top triggered rule for this period." : "No rule trigger data for this period."}</p>
         </div>
      </div>
    </div>
  );
}
