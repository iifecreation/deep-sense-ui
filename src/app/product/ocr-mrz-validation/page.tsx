"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function OCRMRZValidationPage() {
  return (
    <CategoryPageTemplate 
      category="Product"
      title="OCR & MRZ Validation"
      description="Extract and validate machine-readable zones and document texts instantly."
      ctaText="View OCR Capabilities"
    />
  );
}
