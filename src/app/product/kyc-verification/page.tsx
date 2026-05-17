"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function KYCVerificationPage() {
  return (
    <CategoryPageTemplate 
      category="Product"
      title="KYC Verification"
      description="Automate user onboarding, identity verification, and document checks."
      ctaText="Configure KYC Pipelines"
    />
  );
}
