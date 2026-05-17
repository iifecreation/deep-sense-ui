"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function DocumentFraudDetectionPage() {
  return (
    <CategoryPageTemplate 
      category="Product"
      title="Document Fraud Detection"
      description="Detect fake IDs, tampered documents, synthetic identities, deepfakes, duplicate documents, and risky KYC submissions."
      ctaText="Explore Document Intelligence"
    />
  );
}
