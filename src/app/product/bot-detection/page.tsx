"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function BotDetectionPage() {
  return (
    <CategoryPageTemplate 
      category="Identity & Document Intelligence"
      title="Bot Detection"
      description="Stop automated credential stuffing, brute force attacks, and bot checkout scripting instantly. DeepSense audits headless browsers, cursor movement paths, and key pasting in real time."
      ctaText="Explore Bot Defense"
      features={[
        "Headless Browser Verification",
        "Behavioral Trajectory Audits",
        "Keystroke Cadence Analysis",
        "JS Sandbox Environment Checks"
      ]}
    />
  );
}
