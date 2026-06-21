"use client";

import React from "react";
import ErrorStatePanel from "@/components/ui/ErrorStatePanel";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 bg-grid-pattern flex items-center justify-center p-4">
      <div className="w-full">
        <ErrorStatePanel 
          type="404"
          onBack={() => {
            if (typeof window !== "undefined") {
              window.history.back();
            }
          }}
        />
      </div>
    </div>
  );
}
