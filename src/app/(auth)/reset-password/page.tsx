import { Suspense } from "react";
import ResetPasswordForm from "./reset-password-form";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col gap-4 w-full max-w-md p-6 animate-pulse">
        <div className="h-8 bg-muted rounded w-1/2 mb-4" />
        <div className="h-4 bg-muted rounded w-full" />
        <div className="h-10 bg-muted rounded-xl w-full" />
      </div>
    }>
      <ResetPasswordForm />
    </Suspense>
  );
}
