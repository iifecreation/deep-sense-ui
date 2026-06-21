"use client";

import React, { useEffect } from "react";
import ErrorStatePanel from "@/components/ui/ErrorStatePanel";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console or error tracker
    console.error("Root error boundary caught client exception:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-950 bg-grid-pattern flex items-center justify-center p-4">
      <div className="w-full">
        <ErrorStatePanel
          type="500"
          title="Unexpected Application Crash"
          message={error.message || "An unexpected client-side runtime error occurred while rendering the page."}
          onRetry={reset}
        />
      </div>
    </div>
  );
}
