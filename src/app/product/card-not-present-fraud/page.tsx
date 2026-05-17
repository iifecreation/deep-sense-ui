"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function CardNotPresentFraudPage() {
  return (
    <CategoryPageTemplate 
      category="Product"
      title="Card-Not-Present Fraud"
      description="Mitigate online card transaction fraud and protect purchase streams."
      ctaText="Secure CNP Streams"
    />
  );
}
