"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function DomainRiskPage() {
  return (
    <CategoryPageTemplate 
      category="Identity & Document Intelligence"
      title="Domain & Website Risk"
      description="Analyze external website domains, email provider settings, disposable addresses, DNS reputation metrics, and URL safety markers before onboarding or processing transfers."
      ctaText="Explore Domain Risk"
      features={[
        "MX & DNS Record Inquiries",
        "Domain Age Validation",
        "Disposable Provider Filtering",
        "URL Threat Level Scoring"
      ]}
    />
  );
}
