"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderCircle as Loader2, AlertCircle, CheckCircle2, ArrowLeft, RefreshCw } from "lucide-react";
import { authService } from "@/services/auth.service";
import { ApiError } from "@/lib/api/client";

export default function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Initial state values
  const urlEmail = searchParams.get("email") || "";
  const isFromUnverified = searchParams.get("status") === "unverified";
  
  const [email, setEmail] = useState(urlEmail);
  const [pin, setPin] = useState<string[]>(Array(6).fill(""));
  const [isEditingEmail, setIsEditingEmail] = useState(!urlEmail);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [countdown, setCountdown] = useState(0);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Manage countdown timer
  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown]);

  // Sync email from URL query param if it changes
  useEffect(() => {
    if (urlEmail) {
      setEmail(urlEmail);
      setIsEditingEmail(false);
    }
  }, [urlEmail]);

  // Handle PIN input focus and values
  const handlePinChange = (value: string, index: number) => {
    // Only allow digits
    const cleaned = value.replace(/\D/g, "");
    if (!cleaned) {
      const newPin = [...pin];
      newPin[index] = "";
      setPin(newPin);
      return;
    }

    const newPin = [...pin];
    // If user pasted or typed multiple digits
    if (cleaned.length > 1) {
      const digits = cleaned.split("").slice(0, 6 - index);
      for (let i = 0; i < digits.length; i++) {
        newPin[index + i] = digits[i];
      }
      setPin(newPin);
      // Focus on the next empty or last box
      const nextIndex = Math.min(index + digits.length, 5);
      inputRefs.current[nextIndex]?.focus();
    } else {
      newPin[index] = cleaned;
      setPin(newPin);
      // Move focus to next input
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (!pin[index] && index > 0) {
        const newPin = [...pin];
        newPin[index - 1] = "";
        setPin(newPin);
        inputRefs.current[index - 1]?.focus();
      } else {
        const newPin = [...pin];
        newPin[index] = "";
        setPin(newPin);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pastedData) return;

    const newPin = Array(6).fill("");
    for (let i = 0; i < pastedData.length; i++) {
      newPin[i] = pastedData[i];
    }
    setPin(newPin);
    
    // Focus the last entered digit or the first empty box
    const focusIndex = Math.min(pastedData.length, 5);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const pinString = pin.join("");
    if (!email) {
      setError("Please provide your email address.");
      return;
    }
    if (pinString.length < 6) {
      setError("Please enter the complete 6-digit verification code.");
      return;
    }

    setIsLoading(true);
    try {
      await authService.verifyEmail({ email, token: pinString });
      setSuccess("Your email has been verified successfully!");
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push("/login?verified=true");
      }, 2000);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || "Failed to verify email. The code may be invalid or expired.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    if (countdown > 0) return;
    if (!email) {
      setError("Please enter your email address to request a new verification code.");
      setIsEditingEmail(true);
      return;
    }

    setError(null);
    setSuccess(null);
    setIsResending(true);

    try {
      await authService.resendVerifyEmail({ email });
      setSuccess("A fresh 6-digit verification code has been sent to your email.");
      setCountdown(60);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message || "Failed to resend verification code. Please try again.");
    } finally {
      setIsResending(false);
    }
  };

  if (success && !isLoading && pin.join("").length === 6) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight">Email Verified!</h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
          {success} You will be redirected to the login page momentarily.
        </p>
        <Button asChild className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90">
          <Link href="/login">Go to Login</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-heading mb-3 tracking-tight">Verify Your Email</h1>
        <p className="text-muted-foreground text-[15px] leading-relaxed">
          {isFromUnverified 
            ? "Your account registration was successful, but email verification is required before logging in."
            : "Enter the 6-digit code sent to your email to verify your account."
          }
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-start gap-3 text-left">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {success && !error && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-start gap-3 text-left">
          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <p className="text-sm text-green-800">{success}</p>
        </div>
      )}

      <form onSubmit={handleVerify} className="space-y-6">
        {isEditingEmail ? (
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5">
              Email Address
            </Label>
            <div className="flex gap-2">
              <Input
                id="email"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 px-4 rounded-xl border-border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-[#D1F701]/20 transition-all duration-300 placeholder:text-muted-foreground/40"
              />
              {urlEmail && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setEmail(urlEmail);
                    setIsEditingEmail(false);
                  }}
                  className="rounded-xl px-4 h-11 border-zinc-200"
                >
                  Cancel
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl border border-border bg-muted/20 flex items-center justify-between">
            <div className="overflow-hidden mr-2">
              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Verifying account for</p>
              <p className="text-[15px] font-bold text-zinc-800 dark:text-zinc-200 mt-0.5 truncate">{email}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsEditingEmail(true)}
              className="text-xs font-bold text-primary hover:underline underline-offset-2 shrink-0"
            >
              Change Email
            </button>
          </div>
        )}

        <div className="space-y-3">
          <Label className="text-zinc-600 dark:text-zinc-400 font-semibold ml-0.5 block">
            Verification PIN (6 digits)
          </Label>
          <div className="flex justify-between gap-2 sm:gap-3" onPaste={handlePaste}>
            {pin.map((digit, idx) => (
              <input
                key={idx}
                type="text"
                maxLength={1}
                value={digit}
                ref={(el) => { inputRefs.current[idx] = el; }}
                onChange={(e) => handlePinChange(e.target.value, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="w-12 h-14 text-center text-xl font-bold rounded-xl border border-zinc-200 dark:border-zinc-800 bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            type="submit"
            disabled={isLoading || pin.join("").length < 6}
            className="w-full h-12 bg-primary dark:bg-zinc-100 text-primary-foreground dark:text-zinc-950 hover:bg-primary/90 dark:hover:bg-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/10 dark:shadow-none translate-y-0 active:scale-[0.98]"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              "Verify Account"
            )}
          </Button>

          <Button
            type="button"
            variant="ghost"
            disabled={isResending || countdown > 0}
            onClick={handleResendCode}
            className="w-full h-11 text-zinc-600 hover:text-zinc-900 font-bold rounded-xl transition-colors gap-2"
          >
            {isResending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCw className="h-4 w-4" />
            )}
            {countdown > 0 
              ? `Resend Code in ${countdown}s` 
              : "Resend verification code"
            }
          </Button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to access control
        </Link>
      </div>
    </div>
  );
}
