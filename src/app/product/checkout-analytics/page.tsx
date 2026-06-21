"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function CheckoutAnalyticsPage() {
  return (
    <CategoryPageTemplate 
      category="Payment Fraud"
      title="Checkout Journey Analytics"
      description="Track checkout session behavior, measure field interaction time, detect automated autofill abuse, and spot payment instrument swapping before checking out."
      ctaText="Explore Checkout Analytics"
      features={[
        "Checkout Timing Benchmarks",
        "Field Level Interaction Analysis",
        "Payment Instrument Swapping Checks",
        "Multi-device Session Correlation"
      ]}
    />
  );
}
