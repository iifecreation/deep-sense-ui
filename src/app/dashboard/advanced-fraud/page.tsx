"use client";

import React from "react";
import { 
  ShieldCheck,
  TerminalSquare,
  Activity,
  CheckCircle2,
  Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AdvancedFraudPage() {
  const activeModules = [
    { module: "Deepfake Detection", status: "ACTIVE", latency: "230ms", routes: [
      "POST /biometrics/deepfake-check",
      "POST /biometrics/deepfake-check/upload",
      "GET /biometrics/deepfake-checks",
      "GET /biometrics/deepfake-model/status"
    ]},
    { module: "Synthetic Identity Detection", status: "ACTIVE", latency: "45ms", routes: [
      "POST /synthetic-advanced/sessions",
      "POST /synthetic-advanced/events",
      "GET /synthetic-advanced/sessions/:sessionId/risk",
      "GET /synthetic-advanced/signals"
    ]},
    { module: "Friendly Fraud Detection", status: "ACTIVE", latency: "12ms", routes: [
      "POST /friendly-fraud-advanced/sessions",
      "POST /friendly-fraud-advanced/events",
      "GET /friendly-fraud-advanced/sessions/:sessionId/risk",
      "GET /friendly-fraud-advanced/signals"
    ]},
    { module: "CNP Advanced", status: "ACTIVE", latency: "18ms", routes: [
      "POST /cnp-advanced/sessions",
      "POST /cnp-advanced/events",
      "GET /cnp-advanced/sessions/:sessionId/risk",
      "GET /cnp-advanced/signals"
    ]},
    { module: "App Scams", status: "ACTIVE", latency: "32ms", routes: [
      "POST /app-scams/sessions",
      "POST /app-scams/events",
      "GET /app-scams/sessions/:sessionId/risk",
      "GET /app-scams/signals"
    ]},
    { module: "Fraud Domains", status: "ACTIVE", latency: "5ms", routes: [
      "GET /fraud-domains",
      "POST /fraud-domains",
      "POST /fraud-domains/:domainId/remove"
    ]},
    { module: "Consortium", status: "ACTIVE", latency: "150ms", routes: [
      "POST /consortium/opt-in",
      "POST /consortium/share-signal",
      "POST /consortium/query",
      "GET /consortium/matches",
      "GET /consortium/audit",
      "POST /consortium/opt-out"
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
              Fully Online
            </Badge>
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            All enterprise intelligence endpoints are fully provisioned and routed to the secure Python backend. These modules apply specialized heuristic and ML-based analysis to session, transaction, and media telemetry.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {activeModules.map((mod, idx) => (
          <Card key={idx} className="border-border shadow-sm bg-background group hover:border-brand-lime/50 transition-colors">
            <CardHeader className="bg-muted/10 border-b border-border/50 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-black italic uppercase tracking-tighter flex items-center gap-2 group-hover:text-brand-lime transition-colors">
                  <TerminalSquare className="w-5 h-5 text-neutral-400 group-hover:text-brand-lime" />
                  {mod.module}
                </CardTitle>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded">
                  <Activity className="w-3 h-3" />
                  {mod.latency}
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
