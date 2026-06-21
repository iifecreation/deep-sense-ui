"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function EDDPage() {
  return (
    <CategoryPageTemplate 
      category="AML & Compliance"
      title="Enhanced Due Diligence"
      description="Automate high-risk client audits and verify ultimate beneficial owners (UBOs) using registry integrations. Deploy structured compliance runbooks for PEP or high-scoring alerts."
      ctaText="Explore EDD Capabilities"
      features={[
        "Ultimate Beneficial Owner Mapping",
        "Registry & Corporate Auditing",
        "Automated Risk Runbooks",
        "Comprehensive Audit Logging"
      ]}
    />
  );
}
