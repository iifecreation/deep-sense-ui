"use client";

import React from "react";
import { 
  ShieldCheck,
  TerminalSquare,
  CircleDashed,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdvancedFraudPage() {
  const integratedModules = [
    { module: "APP Scam Prevention", routes: [
      "POST /app-scams/score-payment",
      "GET /app-scams/signals",
      "GET /app-scams/beneficiaries/:identifier/risk",
      "POST /app-scams/interventions"
    ]},
    { module: "Account Takeover", routes: [
      "POST /ato/login-event",
      "POST /ato/session-event",
      "GET /ato/risk/:accountId",
      "GET /ato/signals"
    ]},
    { module: "Bot Detection", routes: [
      "POST /bot/events",
      "GET /bot/sessions/:sessionId/risk",
      "GET /bot/signals",
      "GET /bot/entities/:entityType/:entityId/risk"
    ]},
    { module: "Deepfake Detection", routes: [
      "POST /biometrics/deepfake-check",
      "POST /biometrics/deepfake-check/upload",
      "GET /biometrics/deepfake-checks",
      "GET /biometrics/deepfake-model/status"
    ]},
    { module: "Synthetic Identity Detection", routes: [
      "POST /identity-risk/check",
      "GET /identity-risk/profiles/:customerId",
      "GET /identity-risk/signals",
      "POST /identity-risk/provider-checks"
    ]},
    { module: "Friendly Fraud Detection", routes: [
      "POST /friendly-fraud/disputes",
      "POST /friendly-fraud/refunds",
      "GET /friendly-fraud/customers/:customerId/risk",
      "GET /friendly-fraud/signals"
    ]},
    { module: "CNP Advanced", routes: [
      "POST /cnp/transactions",
      "POST /cnp/checkout-events",
      "POST /cnp/score",
      "GET /cnp/signals"
    ]},
    { module: "Real-time Interventions", routes: [
      "POST /interventions/evaluate",
      "POST /interventions/execute",
      "GET /interventions/policies",
      "POST /interventions/policies"
    ]},
    { module: "UEBA", routes: [
      "GET /ueba/events",
      "GET /ueba/anomalies",
      "POST /ueba/baselines/compute",
      "GET /ueba/dashboard"
    ]}
  ];

  return (
    <div className="flex flex-col gap-10 pb-20 max-w-5xl mx-auto mt-10">
      <div className="text-center space-y-6">
        <div className="w-24 h-24 bg-brand-lime/10 rounded-full flex items-center justify-center mx-auto border border-brand-lime/20 shadow-[0_0_40px_rgba(209,247,1,0.2)]">
          <ShieldCheck className="w-12 h-12 text-brand-lime" />
        </div>
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter uppercase text-neutral-900 flex items-center justify-center gap-3">
            Advanced Fraud Engines
            <Badge variant="outline" className="bg-brand-lime/10 text-emerald-700 border-brand-lime/20 text-sm font-black uppercase italic tracking-widest px-3 py-1">
              Tenant API mappings
            </Badge>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            These are the tenant routes used by this dashboard. Runtime availability and provider readiness are reported by each API response; this page does not infer health from a route mapping.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {integratedModules.map((mod, idx) => (
          <Card key={idx} className="border-border shadow-sm bg-background group hover:border-brand-lime/50 transition-colors">
            <CardHeader className="bg-muted/10 border-b border-border/50 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-black italic uppercase tracking-tighter flex items-center gap-2 group-hover:text-brand-lime transition-colors">
                  <TerminalSquare className="w-5 h-5 text-neutral-400 group-hover:text-brand-lime" />
                  {mod.module}
                </CardTitle>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-neutral-600 bg-neutral-500/10 px-2 py-1 rounded">
                  <CircleDashed className="w-3 h-3" />
                  API mapped
                </div>
              </div>
              <CardDescription className="font-mono text-xs opacity-70 flex items-center gap-1">
                <Lock className="w-3 h-3" /> Secure Tenant Endpoints
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-border/50 font-mono text-sm">
                {mod.routes.map((route, rIdx) => {
                  const [method, path] = route.split(' ');
                  const methodColor = 
                    method === 'GET' ? 'text-blue-500' :
                    method === 'POST' ? 'text-emerald-500' :
                    method === 'PUT' ? 'text-orange-500' :
                    method === 'DELETE' ? 'text-red-500' : 'text-neutral-500';
                  
                  return (
                    <li key={rIdx} className="p-4 flex flex-col sm:flex-row sm:items-center gap-3 hover:bg-muted/20 transition-colors">
                      <Badge variant="outline" className={`w-16 justify-center font-black ${methodColor} bg-white/5 border-white/10`}>
                        {method}
                      </Badge>
                      <span className="text-muted-foreground break-all">{path}</span>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-8">
        <Button onClick={() => window.history.back()} variant="outline" className="font-bold uppercase tracking-widest text-xs italic px-8 h-12">
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
}
