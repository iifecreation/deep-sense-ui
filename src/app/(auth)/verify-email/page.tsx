import { Suspense } from "react";
import VerifyEmailContent from "./verify-email-content";

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col gap-4 w-full max-w-md p-6 animate-pulse items-center">
        <div className="w-16 h-16 bg-muted rounded-full mb-4" />
        <div className="h-8 bg-muted rounded w-3/4 mb-4" />
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-4 bg-muted rounded w-5/6" />
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  );
}
