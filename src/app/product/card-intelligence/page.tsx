"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function CardIntelligencePage() {
  return (
    <CategoryPageTemplate 
      category="Payment Fraud"
      title="BIN & Card Intelligence"
      description="Inspect Bank Identification Numbers (BINs) in real time. Validate card brand, credit/debit characteristics, card issuer country mismatches, and flag high-risk prepaid/commercial cards."
      ctaText="Explore Card Intel"
      features={[
        "Real-Time BIN Verification",
        "Issuer Country Mismatch Auditing",
        "Prepaid & Gift Card Identifiers",
        "Issuer Fraud History Scoring"
      ]}
    />
  );
}
