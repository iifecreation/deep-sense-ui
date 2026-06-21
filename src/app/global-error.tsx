"use client";

import React, { useEffect } from "react";
import ErrorStatePanel from "@/components/ui/ErrorStatePanel";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Critical root layout failure:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 font-sans antialiased text-white">
        <div className="w-full">
          <ErrorStatePanel
            type="500"
            title="Critical System Failure"
            message="A critical loading error occurred in the application shell. The root layout has failed."
            onRetry={reset}
          />
        </div>
      </body>
    </html>
  );
}
