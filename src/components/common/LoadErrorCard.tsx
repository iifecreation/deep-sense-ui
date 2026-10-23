"use client";

import { AlertCircle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { describeApiError } from "@/lib/api/describe-error";

interface LoadErrorCardProps {
  error: unknown;
  /** Lowercase noun phrase for what failed to load, e.g. "devices". */
  what: string;
  onRetry?: () => void;
}

/**
 * Inline load-failure state. Distinguishes a service the organization hasn't enabled and a
 * missing permission (neither fixed by retrying) from a genuine load failure.
 */
export function LoadErrorCard({ error, what, onRetry }: LoadErrorCardProps) {
  const described = describeApiError(error, what);
  const tone = described.retryable
    ? { card: "border-red-200 bg-red-50", icon: "text-red-600", title: "text-red-900", detail: "text-red-700" }
    : { card: "border-slate-200 bg-slate-50", icon: "text-slate-500", title: "text-slate-900", detail: "text-slate-600" };

  return (
    <Card className={`rounded-3xl border ${tone.card}`} data-error-kind={described.kind}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3">
          <AlertCircle className={`h-5 w-5 ${tone.icon}`} />
          <div>
            <p className={`font-semibold ${tone.title}`}>{described.title}</p>
            <p className={`text-sm ${tone.detail}`}>{described.detail}</p>
          </div>
        </div>
        {described.retryable && onRetry && (
          <Button onClick={onRetry} className="mt-4" variant="outline">
            <RefreshCcw className="w-4 h-4 mr-2" /> Retry
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
