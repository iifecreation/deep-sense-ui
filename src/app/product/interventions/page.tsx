"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function InterventionsPage() {
  return (
    <CategoryPageTemplate 
      category="Fraud Decisioning"
      title="Interventions & Step-Up"
      description="Deploy adaptive friction rules to trigger SMS MFA, authenticator codes, 3D Secure verification, or direct biometric selfie liveness challenges when elevated risk is identified."
      ctaText="Explore Interventions"
      features={[
        "Adaptive Step-up Orchestration",
        "Biometric Challenge Triggering",
        "Dynamic Friction Routing",
        "Verification Session Trails"
      ]}
    />
  );
}
