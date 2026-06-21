"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function ConsortiumPage() {
  return (
    <CategoryPageTemplate 
      category="Fraud Decisioning"
      title="Consortium Threat Intel"
      description="Collaborate against coordinated fraud rings securely. Verify hash indicators, shared device profiles, and blocked payment cards across organizations without exposing customer PII."
      ctaText="Explore Consortium Network"
      features={[
        "PII-free Cryptographic Hashing",
        "Cross-tenant Velocity Gauges",
        "Coordinated Ring Identifiers",
        "Shared Watchlist Alerts"
      ]}
    />
  );
}
