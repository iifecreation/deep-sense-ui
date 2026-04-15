"use client";

import React from "react";
import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function BehavioralBiometricsPage() {
  return (
    <CategoryPageTemplate
      category="Intelligence"
      title="Advanced Behavioral Biometrics"
      description="Protect your users with passive authentication that analyzes unique behavioral patterns like typing speed, touch pressure, and mouse movements to detect account takeover in real-time."
      features={[
        "Passive User Authentication",
        "Keystroke Dynamics Analysis",
        "Mouse & Gesture Tracking",
        "Bot vs. Human Detection",
        "Seamless User Experience",
        "High-Precision Fraud Signals"
      ]}
      ctaText="Detect Digital Identity"
    />
  );
}
