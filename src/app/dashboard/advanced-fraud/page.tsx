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

type IntegratedModule = {
  module: string;
  routes: string[];
};

const INTEGRATED_MODULES: IntegratedModule[] = [
  {
    module: "APP Scams",
    routes: [
      "GET /api/v1/app-scams/signals",
      "POST /api/v1/app-scams/score-payment",
      "GET /api/v1/app-scams/beneficiaries/{identifier}/risk",
      "POST /api/v1/app-scams/interventions",
      "POST /api/v1/app-scams/interventions/{intervention_id}/complete",
    ],
  },
  {
    module: "Account Takeover",
    routes: [
      "POST /api/v1/ato/login-event",
      "POST /api/v1/ato/session-event",
      "POST /api/v1/ato/challenge",
      "GET /api/v1/ato/risk/{account_id}",
      "GET /api/v1/ato/signals",
      "POST /api/v1/ato/sessions/{session_id}/revoke",
    ],
  },
  {
    module: "CNP Fraud",
    routes: [
      "POST /api/v1/cnp/score",
      "POST /api/v1/cnp/checkout-events",
      "GET /api/v1/cnp/signals",
      "GET /api/v1/cnp/payment-instruments/{id}/risk",
      "POST /api/v1/risk-decisions/cnp/transactions/assess",
      "GET /api/v1/risk-decisions/cnp/checkouts/{checkout_id}/journey",
      "GET /api/v1/risk-decisions/cnp/merchant-policies",
    ],
  },
  {
    module: "Interventions",
    routes: [
      "POST /api/v1/interventions/evaluate",
      "POST /api/v1/interventions/execute",
      "GET /api/v1/interventions/policies",
      "POST /api/v1/interventions/policies",
    ],
  },
  {
    module: "Customer Risk",
    routes: [
      "GET /api/v1/customer-risk",
      "GET /api/v1/customer-risk/{customer_id}",
      "GET /api/v1/customer-risk/{customer_id}/timeline",
      "POST /api/v1/customer-risk/{customer_id}/watchlist",
      "PATCH /api/v1/customer-risk/{customer_id}/owner",
      "GET /api/v1/risk-decisions/customer-risk/{profile_id}/contributions",
    ],
  },
  {
    module: "Unified Risk",
    routes: [
      "GET /api/v1/risk/dashboard",
      "GET /api/v1/risk/signals",
      "GET /api/v1/risk/entities/{entity_type}/{entity_id}",
      "GET /api/v1/risk/entities/{entity_type}/{entity_id}/explain",
      "GET /api/v1/risk/entities/{entity_type}/{entity_id}/timeline",
      "POST /api/v1/risk/signals/{signal_id}/resolve",
    ],
  },
  {
    module: "Promo & Bonus Abuse",
    routes: [
      "GET /api/v1/promotions",
      "POST /api/v1/promotions/bonus-award",
      "POST /api/v1/promotions/redeem",
      "GET /api/v1/promotions/abuse-signals",
      "GET /api/v1/promotions/risk/{user_id}",
      "GET /api/v1/promotions/graph/clusters",
    ],
  },
  {
    module: "Procurement Fraud",
    routes: [
      "POST /api/v1/procurement/vendors",
      "GET /api/v1/procurement/vendors/{vendor_id}/risk",
      "POST /api/v1/procurement/invoices",
      "POST /api/v1/procurement/score-invoice",
      "GET /api/v1/procurement/signals",
      "GET /api/v1/procurement/graph/shared-accounts",
    ],
  },
  {
    module: "Document Intelligence",
    routes: [
      "POST /api/v1/document-intelligence/runs",
      "GET /api/v1/document-intelligence/runs/{run_id}",
      "POST /api/v1/document-intelligence/runs/{run_id}/review",
    ],
  },
  {
    module: "Deepfake & Biometrics",
    routes: [
      "POST /api/v1/biometrics/deepfake-check",
      "POST /api/v1/biometrics/deepfake-check/upload",
      "GET /api/v1/biometrics/deepfake-checks",
      "GET /api/v1/biometrics/deepfake-checks/{check_id}",
      "GET /api/v1/biometrics/deepfake-model/status",
    ],
  },
  {
    module: "Dispute Intelligence",
    routes: [
      "POST /api/v1/disputes",
      "GET /api/v1/disputes/{id}",
      "POST /api/v1/disputes/{id}/evidence",
      "POST /api/v1/disputes/{id}/submit-representment",
      "GET /api/v1/disputes/risk-score/{customer_id}",
      "GET /api/v1/disputes/merchant-risk",
    ],
  },
  {
    module: "NFC / Contactless",
    routes: [
      "GET /api/v1/nfc/dashboard",
      "POST /api/v1/nfc/relay/check",
      "GET /api/v1/nfc/relay-signals",
      "POST /api/v1/nfc/transactions",
      "GET /api/v1/nfc/graph/rings",
      "POST /api/v1/nfc/terminals/{terminal_id}/block",
      "GET /api/v1/nfc/top-risk-wallets",
    ],
  },
  {
    module: "Voice Authentication",
    routes: ["POST /api/v1/risk-decisions/voice/assess"],
  },
];

export default function AdvancedFraudPage() {
  const integratedModules: IntegratedModule[] = INTEGRATED_MODULES;

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
                {mod.routes?.map((route: string, rIdx: number) => {
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
