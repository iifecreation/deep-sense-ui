"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LoaderCircle as Loader2, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/lib/api/client";

export default function VerifyEmailContent() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setError("Invalid or missing verification token.");
      return;
    }

    const verify = async () => {
      try {
        await authService.verifyEmail({ token });
        setStatus('success');
        // Redirect to login after a delay
        setTimeout(() => {
          router.push('/login?verified=true');
        }, 3000);
      } catch (err) {
        const apiError = err as ApiError;
        setStatus('error');
        setError(apiError.message || 'Failed to verify email. The link might be expired.');
      }
    };

    verify();
  }, [token, router]);

  if (status === 'loading') {
    return (
      <div className="animate-in fade-in duration-700 text-center flex flex-col items-center">
        <Loader2 className="h-12 w-12 text-primary animate-spin mb-6" />
        <h1 className="text-2xl font-bold font-heading mb-3 tracking-tight">Verifying Email</h1>
        <p className="text-muted-foreground">Please wait while we verify your email address...</p>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight">Email Verified!</h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
          Your email has been successfully verified. You will be redirected to the login page momentarily.
        </p>
        <Button asChild className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90">
          <Link href="/login">Go to Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out text-center">
      <div className="mb-8 flex justify-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
          <XCircle className="w-8 h-8 text-red-600" />
        </div>
      </div>
      <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight">Verification Failed</h1>
      
      <div className="mb-8 p-4 rounded-lg bg-red-50 border border-red-200 inline-flex items-start gap-3 text-left w-full">
        <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
        <p className="text-sm text-red-800">{error}</p>
      </div>
      
      <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
        The verification link may have expired or is invalid. Please try logging in to request a new verification email.
      </p>
      
      <Button asChild className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90">
        <Link href="/login">Return to Login</Link>
      </Button>
    </div>
  );
}
