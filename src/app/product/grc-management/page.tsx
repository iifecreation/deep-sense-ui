"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function GRCManagementPage() {
  return (
    <CategoryPageTemplate 
      category="Product"
      title="GRC Management"
      description="Govern, manage, and report risk and regulatory statuses at scale."
      ctaText="Govern GRC Assets"
    />
  );
}
